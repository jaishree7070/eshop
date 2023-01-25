import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
export const firebaseConfig={
  apiKey: "AIzaSyBsXpcBD_2rx5oRb8e2yIkxBEgOIDmTdN4",
  authDomain: "eshop-c180f.firebaseapp.com",
  projectId: "eshop-c180f",
  storageBucket: "eshop-c180f.appspot.com",
  messagingSenderId: "319690152520",
  appId: "1:319690152520:web:fefff685dede39dca4967d"
};
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
export default app;
