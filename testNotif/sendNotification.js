var admin = require("firebase-admin");

var serviceAccount = require("../../taftan-19de2-firebase-adminsdk-xnhmv-1e12816443.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const sendNotification = async () => {
  // The device token you want to send the notification to
  const deviceToken = "fTy0M0ZhSrWwNs-zzMu9-7:APA91bGTX6gWz2dWHRi2p3ov-5UhIR_W2vOjbT-LIh4pSsAczfYO-aYk-DnHH6XT5f0EEqStGa6d2b6mifV9erbEdKe9hwbqPoS0Sv-Kxw01qlKR2EcbWxw";
  // const deviceToken = "edNIpEa0TpGJyIgtcuh7PN:APA91bGiTJ-8OBxRWBmPHXDS2pzPGMuAjEMLRM0ZVcovqbFOTwrRk4Ga9aTVi0cvATm3AkGGAs8rByBcOm1lgfajywLwhEW8HmCSdAcjhp4rNVP6CPhO9RM";
  
  // The message payload
  const message = {
    token: deviceToken,
    notification: {
      title: "درخواست جدید",
      body: "درخواست خرابی جدید - بانک ملت شعبه قرب"
    },
    data: {
      requestId: "1234",
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
