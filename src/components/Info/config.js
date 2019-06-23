import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCXpOg61Z399fxGeez-AjxpKRKZ-8shks",
    authDomain: "fir-chatapp-990f0.firebaseapp.com",
    databaseURL: "https://fir-chatapp-990f0.firebaseio.com",
    projectId: "fir-chatapp-990f0",
    storageBucket: "",
    messagingSenderId: "549873609856",
    appId: "1:549873609856:web:b9bbb35329ff635a"
  };
  // Initialize Firebase
  const FirebaseConfig = firebase.initializeApp(firebaseConfig);

  export default FirebaseConfig;