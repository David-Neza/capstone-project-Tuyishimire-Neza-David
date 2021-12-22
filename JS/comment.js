// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAS3lu2Qc6Iu9yZpstvpTR2C0Ksso-lD0c",
    authDomain: "fir-js-2636f.firebaseapp.com",
    databaseURL: "https://fir-js-2636f-default-rtdb.firebaseio.com",
    projectId: "fir-js-2636f",
    storageBucket: "fir-js-2636f.appspot.com",
    messagingSenderId: "395682592303",
    appId: "1:395682592303:web:1bcf7d6ff7f689566cb8da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, ref, get, set, child, update, remove }
    from "https://www.gstatic.com/firebasejs/9.6.0/firebase-database.js";

const db = getDatabase();

//--------------- Get values from users



var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("message").value;
const auth = getAuth()


console.log(phone);
var instBtn = document.getElementById("insbtn");

var selBtn = document.getElementById("selbtn");

var updBtn = document.getElementById("updbtn");

var delBtn = document.getElementById("delbtn");



instBtn.addEventListener('click', function () {

    console.log(auth)
    console.log(document.getElementById("name").value)
    console.log(document.getElementById("email").value)
    createUserWithEmailAndPassword(auth, document.getElementById("email").value, document.getElementById("message").value).then((userCredential) => {
        const user = userCredential.user
        set(ref(db, "Comments/" + user.uid), {
            Name: document.getElementById("name").value,
            Email: document.getElementById("email").value,
            Message: document.getElementById("message").value
        })
        document.getElementById('message-success').innerHTML = `Thank you for your comment ${name}`
        alert('hello there')
        document.getElementById('ft').style.marginTop = '10px';
        //alert(`Thank you ${name} for your feedback`)
    }).catch((error) => {
        console.log(error.message)
    })
});
       //selbtn.addEventListener('click', SelectData);
       //updbtn.addEventListener('click', updateData);
      // delbtn.addEventListener('click', deleteData);