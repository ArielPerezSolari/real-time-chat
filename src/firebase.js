import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD1IWH696Nuav5vziwsgPtl4WmtUCZR4-c",
    authDomain: "whatsapp-clone-62bbc.firebaseapp.com",
    projectId: "whatsapp-clone-62bbc",
    storageBucket: "whatsapp-clone-62bbc.appspot.com",
    messagingSenderId: "888872102233",
    appId: "1:888872102233:web:4fb10e6fd613f662ce0448"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()


export default db
export { auth, provider};
