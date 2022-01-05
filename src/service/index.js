import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAItQdK3428TrQ7yMit5948VdKRU0Htd10",
  authDomain: "ecommerce-28185-b12e6.firebaseapp.com",
  projectId: "ecommerce-28185-b12e6",
  storageBucket: "ecommerce-28185-b12e6.appspot.com",
  messagingSenderId: "101834709735",
  appId: "1:101834709735:web:af7159ce14f93402a3a042"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db