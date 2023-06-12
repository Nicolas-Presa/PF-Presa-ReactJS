import { initializeApp } from "firebase/app";
import {Firestore, getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APY_KEY ,
    authDomain: "tienda-bebidas.firebaseapp.com",
    projectId: "tienda-bebidas",
    storageBucket: "tienda-bebidas.appspot.com",
    messagingSenderId: "885070704545",
    appId: "1:885070704545:web:2bf90787e3103dad5765e0"
};



const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);