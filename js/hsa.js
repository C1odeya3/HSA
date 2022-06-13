// import { hasSubscribers } from "diagnostics_channel";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
// using this path - '/firebase/app.js' kept giving me a 404  error so I used the source above instead and it worked
import { getFirestore, collection, addDoc, } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
// import { format } from "path";
// '../../firebase/firestore.js';


const fConfig = {
  "apiKey": "AIzaSyBuAMGTmlFrOEcuVlhC8iIDAhekeb43znw",
  "authDomain": "hardsoftair.firebaseapp.com",
  "projectId": "hardsoftair",
  "storageBucket": "hardsoftair.appspot.com",
  "messagingSenderId": "426283059686",
  "appId": "1:426283059686:web:9daa7cc397ac747fa92e27",
  "measurementId": "G-Q8QR22W7ZB"
};
    // Initialize Firebase
    initializeApp(fConfig);
    
    // obtain services
    const db = getFirestore();

    // collection reference
    const collectionRef = collection(db, 'Payment_details');
    


  // Checkout
  var checkoutForm = document.querySelector('#checkOut-form');
  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // posts/saves the user data into firestore database
    addDoc(collectionRef, {
      Fullname: checkoutForm.Fullname.value,
      Street_Address: checkoutForm.Street_Address.value,
      City: checkoutForm.City.value,
      Province: checkoutForm.Province.value,
      Postal_Code: checkoutForm.Postal_Code.value
    })
     // clears the form on pressing checkout
     .then(() => {
      checkoutForm.reset();
    })
  });

  // // user info
  // var userName = checkoutForm['Fullname'].value;
  // var userAddress = checkoutForm['Street_Address'].value;

  // // Used the console to check whether the form was working(debug)
  // console.log(userName, userAddress)




