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

function readArticle() {
    var blo = firebase.database().ref("Articles/");
    blo.on("child_added", function (data) {
        var blogValue = data.val();
        document.getElementById("cardSection").innerHTML += `
        <ul id=list>
            <li id="list-item">
                <div class="col">
                    <div class="col1">
                        <img src="${blogValue.link}" class="img" alt="blog">
                    </div>
                    <div class="col1">
                        <div class="blog-text">
                            <p style="display:block">${blogValue.id}</p>
                            <h2>${blogValue.title}</h2>
                            <p class="marg">${blogValue.name}</p>
                            <p class="marg" id="subj" style="display:none;">${blogValue.article}</p>
                            <button type="submit" onclick="DeleteBlog(${blogValue.id})" style="background-color:red;">Delete</button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        `
    })
}
function DeleteBlog(id) {
    var blog = firebase.database().ref("Articles/" + id);
    console.log(blog);
    blog.remove();
    document.getElementById("cardSection").innerHTML = "";
    readArticle();
    alert('Article deleted');
}



