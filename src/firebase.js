// const firebaseConfig = {
//   apiKey: "AIzaSyBTzoEQu1zhX8Q6r-TQfrahk1VfGMEzfkI",
//   authDomain: "whatsapp-tutorial-23661.firebaseapp.com",
//   projectId: "whatsapp-tutorial-23661",
//   storageBucket: "whatsapp-tutorial-23661.appspot.com",
//   messagingSenderId: "972582281978",
//   appId: "1:972582281978:web:bc4f2f37b6cb0141ed5f43",
//   measurementId: "G-VPBQR4R7T3"
// };

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBTzoEQu1zhX8Q6r-TQfrahk1VfGMEzfkI",
  authDomain: "whatsapp-tutorial-23661.firebaseapp.com",
  projectId: "whatsapp-tutorial-23661",
  storageBucket: "whatsapp-tutorial-23661.appspot.com",
  messagingSenderId: "972582281978",
  appId: "1:972582281978:web:bc4f2f37b6cb0141ed5f43",
  measurementId: "G-VPBQR4R7T3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export  { auth, provider }
export default db