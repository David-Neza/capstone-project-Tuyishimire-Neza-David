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


function nameValidation(name) {
    if (/^[a-zA-Z]+ [a-zA-Z]+$/.test(name) && (name != 0)) {
        return true;
    } else {
        if (!(/^[a-zA-Z]+ [a-zA-Z]+$/.test(name))) {

            //Show name is not valid
            document.querySelector('.name_error').style.display = 'block';
            //Hide error after 5 seconds
            setTimeout(() => {
                document.querySelector('.name_error').style.display = 'none';
            }, 5000);
        } else {
            console.log("field is empty");
            //Show name is required error
            document.querySelector('.namempty_error').style.display = 'block';
            //Hide error after 5 seconds
            setTimeout(() => {
                document.querySelector('.namempty_error').style.display = 'none';
            }, 5000);
        }
    }
    return false;
}
function validation() {
    nameValidation(name);
}


//-----------insert data function

function InsertData() {
    if (validation()) {
        set(ref(db, "Users/" + Rollbox.value), {
            Name: name,
            Phone: phone,
            Email: email,
            Password: password,


        })
        //Show alert
        document.querySelector('.alert').style.display = 'block';
        //Hide alert after 5 seconds
        setTimeout(() => {
            document.querySelector('.alert').style.display = 'none';
        }, 10000);
    }
    else {
        alert('verify all fields');
    }
}




//Selecting data --viewing

function SelectData() {
    const dbref = ref(db);

    get(child(dbref, "TheStudents/" + Rollbox.value)).then((snapshot) => {
        if (snapshot.exists()) {
            Namebox.value = snapshot.val().NameOfStd;
            Secbox.value = snapshot.val().Section;
            Genbox.value = snapshot.val().Gender;
        }
        else {
            alert("No data found");
        }
    })
        .catch((error) => {
            alert("unsuccessful, error" + error);
        });
}

//Update

function updateData() {
    update(ref(db, "TheStudents/" + Rollbox.value), {
        NameOfStd: Namebox.value,
        Section: Secbox.value,
        Gender: Genbox.value,
    })
        .then(() => {
            alert('data updated successfully!');
        })
        .catch((error) => {
            alert("unsuccessful",
                +error);
        });
}

//Delete 

function deleteData() {
    remove(ref(db, "TheStudents/" + Rollbox.value))
        .then(() => {
            alert('data deleted successfully!');
        })
        .catch((error) => {
            alert("unsuccessful",
                +error);
        });
}


instBtn.addEventListener('click', function () {

    console.log(auth)
    console.log(document.getElementById("name").value)
    console.log(document.getElementById("email").value)
    createUserWithEmailAndPassword(auth, document.getElementById("email").value, document.getElementById("message").value).then((userCredential) => {
        const user = userCredential.user
        set(ref(db, "Messages/" + user.uid), {
            Name: document.getElementById("name").value,
            Email: document.getElementById("email").value,
            Message: document.getElementById("message").value
        })
    }).catch((error) => {
        console.log(error.message)
    })
});
       //selbtn.addEventListener('click', SelectData);
       //updbtn.addEventListener('click', updateData);
      // delbtn.addEventListener('click', deleteData);