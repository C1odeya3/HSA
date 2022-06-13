import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
// import { getAuth } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

const fConfig={
  // i changed the value from signup to hardsoftair basically to the hardsoftair project
  "apiKey": "AIzaSyDQzm7nfPH-jriwKNelS1vh4pbow7-TE80",
  "authDomain": "hardsoftair.firebaseapp.com",
  "projectId": "hardsoftair",
  "storageBucket": "hardsoftair.appspot.com",
  "messagingSenderId": "426283059686",
  "appId": "1:426283059686:web:9daa7cc397ac747fa92e27",
  "measurementId": "G-Q8QR22W7ZB"
};

initializeApp(fConfig);
// i spaced out the db variable because the getFirestore() wasnt registering
const db = getFirestore();
// const auth = getAuth();

const collectRef = collection(db,'Sign_Ups')

var signUpForm = document.querySelector('#signForm');
// line 22 below was missing a closing ')' so I added it
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();

  addDoc(collectRef, {
    // you must use the name attribute in your input fields to be able to declare them, if you see on your sigup form i added the name
    // attribute for all the input values and used them below.
    Name: signUpForm.Name.value,
    Surname: signUpForm.Surname.value,
    Email: signUpForm.Email.value,
    Password: signUpForm.Password.value
  })
  .then(()=>{
    signUpForm.reset();
  })
});
// the page might give you cross origin errors so rather download "Web Server" from chrome so that you can run it with localhost
  




