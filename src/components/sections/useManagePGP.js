import { useState, useEffect } from "react";
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firestore = firebase.firestore();

export const useManagePGP = (recipientId = null) => {
    const [keyring, setKeyring] = useState([]);
    const [loading, setLoading] = useState(true);
    const auth = firebase.auth();

    const deleteNotification = (id) => {
        // Delete from "notifications" collection
        firestore.collection("keyring").doc(id).delete();

        // Delete from subcollection in "users" collection
        if (auth.currentUser.uid) {
            firestore
                .collection("users")
                .doc(auth.currentUser.uid)
                .collection("keyring")
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
                .collection("keyring")
                .orderBy("createdAt", "desc")
                .onSnapshot((snapshot) => {
                    const newKeyring = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setKeyring(newKeyring);
                    setLoading(false);
                });
            return unsubscribe;
        } else if (auth.currentUser) {
            const unsubscribe = firestore
                .collection("users")
                .doc(auth.currentUser.uid)
                .collection("keyring")
                .orderBy("createdAt", "desc")
                .onSnapshot((snapshot) => {
                    const newKeyring = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    setKeyring(newKeyring);
                    setLoading(false);
                });
            return unsubscribe;
        }
    }, [auth.currentUser, recipientId]);

    return { keyring, deleteNotification, loading };
};
