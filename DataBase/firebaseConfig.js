import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAaEOrmyknKPrGu9pBnjrqTFzV0aYwizog",
    authDomain: "solidispositivos.firebaseapp.com",
    projectId: "solidispositivos",
    storageBucket: "solidispositivos.firebasestorage.app",
    messagingSenderId: "544972284362",
    appId: "1:544972284362:web:7faea47c7e81848784af33"
};

// Inicia Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };