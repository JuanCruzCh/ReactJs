// main.tsx or main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAECdOFCt-mehKb2dGDfPi6gW_ataUTgLY",
  authDomain: "legoland-4eb7f.firebaseapp.com",
  projectId: "legoland-4eb7f",
  storageBucket: "legoland-4eb7f.appspot.com",
  messagingSenderId: "1006050712679",
  appId: "1:1006050712679:web:19ea3363f67c6593a808c2"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
   <App/>
)
