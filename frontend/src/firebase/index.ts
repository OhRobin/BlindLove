// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "jellybelly-8ceef.firebaseapp.com",
  projectId: "jellybelly-8ceef",
  storageBucket: "jellybelly-8ceef.appspot.com",
  messagingSenderId: "742199351043",
  appId: process.env.REACT_APP_FIREBASE_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

// Functions
export const uploadImg = async (image: File, walletAddress: `0x${string}`) => {
  if (!image) return;

  const imgRef = ref(storage, `${walletAddress}/${image.name}`);
  const snapshot = await uploadBytes(imgRef, image);
  const url = await getDownloadURL(snapshot.ref);

  return url;
};
