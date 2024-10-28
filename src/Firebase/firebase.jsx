import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBsH6pLHGkYAkDvcEKgbNbuBSUddSaXTzc",
    authDomain: "medical-form-c44b6.firebaseapp.com",
    projectId: "medical-form-c44b6",
    storageBucket: "medical-form-c44b6.appspot.com",
    messagingSenderId: "222273287218",
    appId: "1:222273287218:web:187f488349a44bd234782b"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
