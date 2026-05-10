import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "JOUW_API_KEY",
  authDomain: "JOUW_PROJECT.firebaseapp.com",
  projectId: "JOUW_PROJECT_ID",
  storageBucket: "JOUW_PROJECT.appspot.com",
  messagingSenderId: "JOUW_SENDER_ID",
  appId: "JOUW_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.sendMessage = async function () {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const output = document.getElementById("output");

  if (!name || !message) {
    output.textContent = "Vul eerst je naam en bericht in.";
    return;
  }

  await addDoc(collection(db, "messages"), {
    name,
    message,
    createdAt: serverTimestamp()
  });

  output.textContent = "Bericht opgeslagen!";
  document.getElementById("name").value = "";
  document.getElementById("message").value = "";
};