

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";



const firebaseConfig = {

  apiKey: "AIzaSyCl9vL-1Mv5IJpvZ6_Z9zwtC-uyA5Xy0Es",

  authDomain: "projects-e9348.firebaseapp.com",

  projectId: "projects-e9348",

  storageBucket: "projects-e9348.appspot.com",

  messagingSenderId: "419134129639",

  appId: "1:419134129639:web:15767a16a3d61dbc756942",

  measurementId: "G-9E56WKJMXY"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app) 