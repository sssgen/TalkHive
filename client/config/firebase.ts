import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCs8rQFDG0KvzdWx4wrmIHynt0DsQz2d64",
    authDomain: "talkhive-e4c91.firebaseapp.com",
    projectId: "talkhive-e4c91",
    storageBucket: "talkhive-e4c91.firebasestorage.app",
    messagingSenderId: "168335549968",
    appId: "1:168335549968:web:42eb73c730358298e54c95",
    measurementId: "G-30PQLBYMT8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
