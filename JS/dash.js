const firebaseConfig = {
    apiKey: "AIzaSyAS3lu2Qc6Iu9yZpstvpTR2C0Ksso-lD0c",
    authDomain: "fir-js-2636f.firebaseapp.com",
    databaseURL: "https://fir-js-2636f-default-rtdb.firebaseio.com",
    projectId: "fir-js-2636f",
    storageBucket: "fir-js-2636f.appspot.com",
    messagingSenderId: "395682592303",
    appId: "1:395682592303:web:1bcf7d6ff7f689566cb8da"
};
firebase.initializeApp(firebaseConfig);

var d = new Date();
var t = d.getTime();
var counter = t;

var author_name,
    title,
    article;

var file;
var id = 1;

var ImgUrl;
var files = [];
var reader = new FileReader();

function readForm() {
    author_name = document.getElementById("author_name").value;
    title = document.getElementById("title").value;
    article = document.getElementById("article").value;
    file = document.getElementById('files').files[0];
    console.log(author_name);
}

document.getElementById("insert").onclick = function () {

    readForm();
    console.log(counter);
    counter += 1;
    console.log(counter);

    let storageRef = firebase.storage().ref('Articles');
    let file = document.getElementById('files').files[0];
    console.log(file);

    let thisRef = storageRef.child(file.name);

    thisRef.put(file).then(res => {
        console.log('upload success');
        console.log(thisRef);
        alert("upload success");
    }).catch(e => {
        console.log('Error' + e);
    })
    storageRef.child(file.name).getDownloadURL().then(url => {
        console.log(url)
        firebase.database().ref('Articles/' + counter).set({
            id: counter,
            link: url,
            name: author_name,
            title: title,
            article: article

        });
    })
}