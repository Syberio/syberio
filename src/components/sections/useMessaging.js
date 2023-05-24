import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import * as openpgp from 'openpgp';
import CryptoJS from 'crypto-js';

const firestore = firebase.firestore();

export const getRecipientPublicKey = async (email) => {
    const usersRef = firestore.collection('users');
    const snapshot = await usersRef.where('email', '==', email).get();

    if (snapshot.empty) {
        console.log('No matching users.');
        return null;
    }

    const userDoc = snapshot.docs[0];
    const keyringRef = firestore.collection('users').doc(userDoc.id).collection('keyring');
    const keyringSnapshot = await keyringRef.where('isPrimary', '==', true).get();

    if (keyringSnapshot.empty) {
        console.log('No primary keyring found for user.');
        return null;
    }

    const keyringDoc = keyringSnapshot.docs[0];
    return keyringDoc.data().publicKey;
}


export const encryptMessage = async (senderPublicKeyArmored, recipientPublicKeyArmored, plaintext) => {
    const senderPublicKey = await openpgp.readKey({ armoredKey: senderPublicKeyArmored });
    const recipientPublicKey = await openpgp.readKey({ armoredKey: recipientPublicKeyArmored });

    const encrypted = await openpgp.encrypt({
        message: await openpgp.createMessage({ text: plaintext }),
        encryptionKeys: [senderPublicKey, recipientPublicKey],

    });

    return encrypted;
}
export const sendMessage = async (senderEmail, recipientEmail, senderPublicKey, encryptedPrivateKey, messageText) => {
    const recipientPublicKey = await getRecipientPublicKey(recipientEmail);
    if (recipientPublicKey) {
        const encryptedMessage = await encryptMessage(senderPublicKey, recipientPublicKey, messageText);
        const messagesRef = firestore.collection('messages');
        const message = {
            sender: senderEmail,
            recipient: recipientEmail,
            message: encryptedMessage,
            timestamp: new Date(),
            senderEncryptedPrivateKey: encryptedPrivateKey,
            read: false,
        };
        return messagesRef.add(message);
    } else {
        throw new Error('Recipient does not have any key pairs.');
    }
}


export const decryptPrivateKey = (encryptedPrivateKey, secret) => {
    if (!secret) {
        return '';
    }
    try {
        const bytes = CryptoJS.AES.decrypt(encryptedPrivateKey, secret);
        return bytes.toString(CryptoJS.enc.Utf8);

    }
    catch (error) {
        return '';
    }
}

export const decryptMessage = async (privateKey, passphrase, encryptedMessage) => {
    if (!passphrase) {
        return '';
    }
    try {
        const priv = await openpgp.decryptKey({
            privateKey: await openpgp.readPrivateKey({ armoredKey: privateKey }),
            passphrase
        });
        const message = await openpgp.readMessage({
            armoredMessage: encryptedMessage
        });
        const decryptedMsg = await openpgp.decrypt({
            message,
            decryptionKeys: priv,
        });
        return decryptedMsg.data;
    } catch (error) {
        console.error('Error decrypting message:', error);
        return 'Error decrypting message. The message may have been encrypted with a different key.';
    }
}

export const getNameSurnameBgColor = async (email) => {
    const usersRef = firestore.collection('users');
    const snapshot = await usersRef.where('email', '==', email).get();

    if (snapshot.empty) {
        console.log('No matching users.');
        return null;
    }

    const userDoc = snapshot.docs[0];
    const userData = userDoc.data();
    const { name, surname, bgColor } = userData;

    return { name, surname, bgColor };
}
