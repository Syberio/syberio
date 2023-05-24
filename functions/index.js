// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// IMPORTANT: TO USE THIS FEATURE FIREBASE SHOULD BE UPGRADED TO "BLAZE" ACCOUNT
// ELSE IT CANNOT BE USED BY THE FREE PLAN
// firebase deploy --only functions command to deploy functions to cloud.

const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();


exports.setAdminRole = functions.https.onCall(async (data, context) => {
  // get the email of the user to grant admin role
  const email = data.email;

  // only allow this operation if the requestor is an admin
  if (context.auth.token.isAdmin !== true) {
    // eslint-disable-next-line max-len
    throw new functions.https.HttpsError("permission-denied", "Only admins can execute this operation");
  }

  const user = await admin.auth().getUserByEmail(email);
  // set custom claim
  if (user) {
    await admin.auth().setCustomUserClaims(user.uid, {isAdmin: true});
    return {message: `Success! ${email} has been made an admin.`};
  } else {
    throw new functions.https.HttpsError("not-found", "No such user found");
  }
});

exports.deleteUser = functions.firestore
    .document("users/{userId}")
    .onDelete((snap, context) => {
      const {userId} = context.params;
      return admin.auth().deleteUser(userId);
    });
