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






const auth = getAuth()


console.log(phone);
var instBtn = document.getElementById("insbtn");

var selBtn = document.getElementById("selbtn");

var updBtn = document.getElementById("updbtn");

var delBtn = document.getElementById("delbtn");

instBtn.addEventListener('click', function () {

    const name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;

    const user = {
        name: name,
        email: email,
        phone: phone,
        password: password
    }

    function validate(user) {
        var check = 0;
        var isFieldVar = null;
        console.log(document.getElementById('name').value)
        console.log(name)
        const errors = {
            name: '',
            email: '',
            phone: '',
            password: ''
        }
        if (!(/^[A-Za-z]+$/).test(user.name)) {
            console.log((/^[A-Za-z]+$/).test(user.name))
            check++;
            errors.name = 'Enter a valid name';
        }
        if (user.name.length == 0) {
            check++;
            console.log(user.name.length)
            errors.name = 'Name cannot be empty'
        }
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email))) {
            check++;
            errors.email = 'Enter a valid email'
        }
        if (user.email.length == 0) {
            check++;
            errors.email = 'Email cannot empty';
        }
        if (!(/^\d{10}$/).test(user.phone)) {
            console.log(phone)
            check++;
            errors.phone = 'Enter a valid phone number'
        }
        if (user.phone.length != 10) {
            errors.phone = 'Phone must be 10 digits'
        }
        if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).test(user.password)) {
            check++;
            errors.password = "password must be \n a minimum of 1 lower case letter [a-z] and \n a minimum of 1 upper case letter [A-Z] and\n a minimum of 1 numeric character [0-9] and\n a minimum of 1 special character: ~`!@#$%^&*()-_+={}[]|\;:<>,./?"
        }
        if (user.phone.length == 0) {
            errors.phone = 'Phone cannot be empty'
        }
        if (check == 0) {
            isFieldVar = true;
        }
        else {
            isFieldVar = false;
        }
        return { isFieldVar, errors }
    }


    var checkValidity = validate(user);
    if (checkValidity.isFieldVar) {
        console.log(auth)
        console.log(document.getElementById("name").value)
        console.log(document.getElementById("email").value)
        createUserWithEmailAndPassword(auth, document.getElementById("email").value, document.getElementById("password").value).then((userCredential) => {
            const user = userCredential.user
            set(ref(db, "Users/" + user.uid), {
                Name: document.getElementById("name").value,
                Phone: document.getElementById("phone").value,
                Email: document.getElementById("email").value,
                Password: document.getElementById("password").value
            })
            document.getElementById('signup-success').innerHTML = `Thank you ${name} for creating an account`
            document.getElementById('ft').style.marginTop = '10px';
        }).catch((error) => {
            console.log(error.message)
        })
    } else {
        var getErrors = checkValidity.errors;
        if (getErrors.name != '') {
            var nameError = document.getElementById('name-errors')
            nameError.innerHTML = getErrors.name
            nameError.style.color = 'white'
        }
        if (getErrors.phone != '') {
            console.log('this is aphone error')
            var phoneError = document.getElementById('phone-errors')
            phoneError.innerHTML = getErrors.phone;
            phoneError.style.color = 'white';
        }
        if (getErrors.email != '') {
            console.log('this is aphone error')
            var emailError = document.getElementById('email-errors')
            emailError.innerHTML = getErrors.email;
            emailError.style.color = 'white';
        }
        if (getErrors.password != '') {
            console.log('this is a password')
            function display() {
                var passwordError = document.getElementById('password-errors')
                passwordError.innerHTML = getErrors.password;
                passwordError.style.color = 'white';
            }
            setTimeout(display, 5000);
        }
    }


});
       //selbtn.addEventListener('click', SelectData);
       //updbtn.addEventListener('click', updateData);
      // delbtn.addEventListener('click', deleteData);