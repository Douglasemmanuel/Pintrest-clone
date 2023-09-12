// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1QmzJx75wP21rWtDMI4Ex5Qqw0x6gnfA",
  authDomain: "pintrest-cloneapp.firebaseapp.com",
  projectId: "pintrest-cloneapp",
  storageBucket: "pintrest-cloneapp.appspot.com",
  messagingSenderId: "793399243307",
  appId: "1:793399243307:web:8fe1cf171eeb6210e1306e",
  measurementId: "G-WGWDZXTZFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app