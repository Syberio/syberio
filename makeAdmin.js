// *IMPORTANT* To make a user in Syberio an admin user, replace the email value with the user you want to make admin.
// Use with care on your local machine.

const admin = require('firebase-admin');

// *IMPORTANT* You have to get this private key file from Firebase Console.
const serviceAccount = require('../syberio-98e70-firebase-adminsdk-16o7l-45f11c9080.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const email = "zlv04674@omeie.com";  // replace with the email of the user you want to make an admin

async function makeAdmin() {
    try {
        const user = await admin.auth().getUserByEmail(email);
        await admin.auth().setCustomUserClaims(user.uid, { isAdmin: true });
        await admin.auth().updateUser(user.uid, { tokensValidAfterTime: new Date().getTime() });
        console.log(user.customClaims);  // Log the custom claims to see what they are
        console.log(`User ${email} is now an admin.`);
    } catch (error) {
        console.error("Error making user admin:", error);
    }
}

makeAdmin();