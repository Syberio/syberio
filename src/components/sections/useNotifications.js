import { useState, useEffect } from "react";
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firestore = firebase.firestore();

export const useNotifications = (recipientId = null) => {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const auth = firebase.auth();

    const deleteNotification = (id) => {
        // Delete from "notifications" collection
        firestore.collection("notifications").doc(id).delete();

        // Delete from subcollection in "users" collection
        if (auth.currentUser.uid) {
            firestore
                .collection("users")
                .doc(auth.currentUser.uid)
                .collection("notifications")
                .doc(id)
                .delete();
        }
    };

    useEffect(() => {
        setLoading(true);
        if (auth.currentUser && recipientId) {
            const unsubscribe = firestore
                .collection("users")
                .doc(recipientId)
                .collection("notifications")
                .orderBy("createdAt", "desc")
                .onSnapshot((snapshot) => {
                    const newNotifications = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setNotifications(newNotifications);
                    setLoading(false);
                });
            return unsubscribe;
        } else if (auth.currentUser) {
            const unsubscribe = firestore
                .collection("users")
                .doc(auth.currentUser.uid)
                .collection("notifications")
                .orderBy("createdAt", "desc")
                .onSnapshot((snapshot) => {
                    const newNotifications = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setNotifications(newNotifications);
                    setLoading(false);
                });
            return unsubscribe;
        }
    }, [auth.currentUser, recipientId]);

    return { notifications, deleteNotification, loading };
};
