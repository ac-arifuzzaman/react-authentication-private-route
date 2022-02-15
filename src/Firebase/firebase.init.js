import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = (e) => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;
