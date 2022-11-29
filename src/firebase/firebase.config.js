// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries

// // // Your web app's Firebase configuration
// // const firebaseConfig = {
// //   apiKey: process.env.REACT_APP_apiKey,
// //   authDomain: process.env.REACT_APP_authDomain,
// //   projectId: process.env.REACT_APP_projectId,
// //   storageBucket: process.env.REACT_APP_storageBucket,
// //   messagingSenderId: process.env.REACT_APP_messagingSenderId,
// //   appId: process.env.REACT_APP_appId,
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCr1wbtrfS7vHVNVvc6wub4ACAuDuPwX3A",
//   authDomain: "sellcell-f5de6.firebaseapp.com",
//   projectId: "sellcell-f5de6",
//   storageBucket: "sellcell-f5de6.appspot.com",
//   messagingSenderId: "746626512804",
//   appId: "1:746626512804:web:bfcda1cc0166b0ada3f331"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId ,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;