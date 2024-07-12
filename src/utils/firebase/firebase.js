// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmBIxrvut_UoQmR05URgFzd1qlTUS0xqc",
  authDomain: "notification-69ae5.firebaseapp.com",
  projectId: "notification-69ae5",
  storageBucket: "notification-69ae5.appspot.com",
  messagingSenderId: "208627491785",
  appId: "1:208627491785:web:6ac588cacf68ea35fd7e18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

// import { initializeApp } from "firebase/app";
// import { getMessaging } from "firebase/messaging/sw";

// // Initialize the Firebase app in the service worker by passing in
// // your app's Firebase config object.
// // https://firebase.google.com/docs/web/setup#config-object
// const firebaseApp = initializeApp({
//     apiKey: "AIzaSyAmBIxrvut_UoQmR05URgFzd1qlTUS0xqc",
//     authDomain: "notification-69ae5.firebaseapp.com",
//     projectId: "notification-69ae5",
//     storageBucket: "notification-69ae5.appspot.com",
//     messagingSenderId: "208627491785",
//     appId: "1:208627491785:web:6ac588cacf68ea35fd7e18"
// });

// // Retrieve an instance of Firebase Messaging so that it can handle background
// // messages.
// const messaging = getMessaging(firebaseApp);