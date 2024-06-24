import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCgJUETubnANNQCzobYLzN3attvtO6yF9c",
    authDomain: "my-279a2.firebaseapp.com",
    projectId: "my-279a2",
    storageBucket: "my-279a2.appspot.com",
    messagingSenderId: "507388337873",
    appId: "1:507388337873:web:6042fee8f774a89ccb6ff0",
    measurementId: "G-XYZHECHXT1"
  };

 const app=initializeApp(firebaseConfig)

const db=getFirestore(app)
  const auth=getAuth(app)

  export {db,auth};