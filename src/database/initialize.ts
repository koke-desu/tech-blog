import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4RE0Mu2g6r8Nbm4jZVx7y0aEyBNYTew8",
  authDomain: "tech-blog-51c3a.firebaseapp.com",
  projectId: "tech-blog-51c3a",
  storageBucket: "tech-blog-51c3a.appspot.com",
  messagingSenderId: "247021902749",
  appId: "1:247021902749:web:e6bf3a873c47ca0932ad74",
  measurementId: "G-4V7L44EP77",
};

const initFirebase = () => {
  if (typeof window !== undefined) {
    initializeApp(firebaseConfig);
  }
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { initFirebase, db };
