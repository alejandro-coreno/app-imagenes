// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7cturuZMPIx0U5e_fOwPAoEORTm-fSbM",
  authDomain: "app-archivos-a40db.firebaseapp.com",
  projectId: "app-archivos-a40db",
  storageBucket: "app-archivos-a40db.appspot.com",
  messagingSenderId: "174923649898",
  appId: "1:174923649898:web:aba58f5b954cbcd2788b13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage();
