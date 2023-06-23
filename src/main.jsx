import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App'

import './style.scss'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRYSOkdCDOioE9j99dXVk4sfQOxBjgyYU",
  authDomain: "gta-sanandreas-0.firebaseapp.com",
  projectId: "gta-sanandreas-0",
  storageBucket: "gta-sanandreas-0.appspot.com",
  messagingSenderId: "1041058904072",
  appId: "1:1041058904072:web:fc500b07003b08541c79bd",
  measurementId: "G-NY5P4PKJTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const router = createBrowserRouter([
  { 
    path: "/",
    element: <App />,
    errorElement: <>Error 404.</>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);