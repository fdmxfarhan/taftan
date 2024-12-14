var admin = require("firebase-admin");

var serviceAccount = require("./taftan-19de2-firebase-adminsdk-xnhmv-1e12816443.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const sendNotification = async () => {
  // The device token you want to send the notification to
  const deviceToken = "ca7kxuyUQ0KxAYs8mxYser:APA91bG_zmUxcjDqhpRig7_0xF-wamr607GqYuAxu9i_75KnAwu8OBlDPxWa413lvqoojmNMTvIob2Juwoi2n8bzPAbJKfcY24bRzaS252rpea-ItJP2ns8"; // Replace with your device's token
  
  // The message payload
  const message = {
    token: deviceToken,
    notification: {
      title: "Hello!",
      body: "This is a test notification from Firebase Admin SDK."
    },
    data: {
      customKey1: "value1",
      customKey2: "value2"
    }
  };

  try {
    // Send the notification using the Admin SDK
    const response = await admin.messaging().send(message);
    console.log("Notification sent successfully:", response);
  } catch (error) {
    console.error("Error sending notification:", error);
  }
};

sendNotification();
