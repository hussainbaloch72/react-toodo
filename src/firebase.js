import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCihEtKWwPdwVIBx1-th-qvCuc6ypm5540",
    authDomain: "th-project-e84b7.firebaseapp.com",
    projectId: "th-project-e84b7",
    storageBucket: "th-project-e84b7.appspot.com",
    messagingSenderId: "857040357677",
    appId: "1:857040357677:web:7197209ea64b3c211eaba4"
  };

 // Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };