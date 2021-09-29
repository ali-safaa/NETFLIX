import firebase from "firebase"; 
const firebaseConfig = {
  apiKey: "AIzaSyC_ak3uVA9xDnrPwHUfzkOubXGDeJbuaUM",
  authDomain: "instagram-clone-5fdcb.firebaseapp.com",
  projectId: "instagram-clone-5fdcb",
  storageBucket: "instagram-clone-5fdcb.appspot.com",
  messagingSenderId: "311589264548",
  appId: "1:311589264548:web:163204aa5d04815f079a31",
  measurementId: "G-Z8X5Z4P6ZV"
};

 const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const storage = firebase.storage();
 const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();
 const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
 
 export { db, storage, timeStamp, provider, auth };