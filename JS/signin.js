import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";
import { getDatabase, ref, get, set, child, update, remove } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-database.js";

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


const db = getDatabase();

var password = document.getElementById("password").value;
var email = document.getElementById("email").value;

const auth = getAuth()
var instBtn = document.getElementById("signBtn")
instBtn.addEventListener('click', function () {
    console.log('--------->' + email)
    signInWithEmailAndPassword(auth, document.getElementById("email").value, document.getElementById("password").value).then((userCredential) => {
        const user = userCredential.user
        location.href = "/HTML-pages/dashboard.html";
    }).catch((error) => {
        console.log(error.message)
    })
});
