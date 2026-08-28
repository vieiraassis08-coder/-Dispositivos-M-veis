import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD-46Htw-GDGjMRbIY3NZFeZliUGMwRzkY',
  authDomain: 'flexbox-4aeba.firebaseapp.com',
  projectId: 'flexbox-4aeba',
  storageBucket: 'flexbox-4aeba.firebasestorage.app',
  messagingSenderId: '430069397632',
  appId: '1:430069397632:web:ab3b7cb4aca76ba81ace65',
  measurementId: 'G-YCH5DPGPB0',
};

const firebaseReady = Object.values(firebaseConfig).every(
  (value) => value && !value.includes('YOUR_')
);

let app = null;
let db = null;

if (firebaseReady) {
  app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
  db = getFirestore(app);
}

export { db, firebaseReady, collection, addDoc, getDocs };
