// firebase.js
import { initializeApp } from 'firebase';

const app = initializeApp({
  apiKey: "AIzaSyCSQcr-IMCDk-FKlyAh2btgqelJe8GFNVs",
  authDomain: "menu-editor-41e92.firebaseapp.com",
  databaseURL: "https://menu-editor-41e92.firebaseio.com",
  projectId: "menu-editor-41e92",
  storageBucket: "",
  messagingSenderId: "80547857772",
  appId: "1:80547857772:web:33d3374a7d871975"
});

export const db = app.firestore();
export const Auth = app.auth();
export const menuCollection = db.collection('menu');
export const userCollection = db.collection('users')
export const menusCollection = db.collection('menus')
