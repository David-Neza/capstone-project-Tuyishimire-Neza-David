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

        var articlePortion = blogValue.article;
        articlePortion = blogValue.article.split(' ').slice(0, 20).join(' ');

        console.log(typeof articlePortion)
        console.log(articlePortion)
        document.getElementById("cardSection").innerHTML += `
        <div id="list" style="margin:auto;width:70%;text-align:center;padding-top:20px;" >
            <div id="list-item">
                    <div style="background:rgba(255, 230, 4, 0.49); height:200px; width:800px; display:flex; border:2px solid #000033;" >    
                        <div style="display:flex;" class="image&title">
                            <img src="${blogValue.link}"> 
                            <div class="article-content">
                                <h2 style="margin-left:100px">${blogValue.title}</h2>
                                <p  style="margin-left:10px; color:#000033;font-weight:bold">By ${blogValue.name}</p>
                                <p style="margin-left:150px">${articlePortion}</p>
                              <button type="submit" onclick="readSingleArticle(${blogValue.id})" style="height:20px; font-size:15px;margin-left:10px;"><a style="color:white">Read</button> 
                              <!--- <button type="submit" onclick="DeleteBlog(${blogValue.id})" style="height:35px; font-size:15px;margin-left:10px;">Delete</button>  --!>
                                <!--  <button><a href="/HTML-pages/contact.html">Comment</a></button>  -->
                            </div>                         
                        </div>    
                    </div>
            </div>
        </div>
        `;
        // b.insertAdjacentElement('beforeend', blg);
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

function readSingleArticle(id) {
    document.getElementById("cardSection").style.display = "none";
    document.getElementById("heading").style.display = "none";
    firebase.database().ref('Articles/' + id).on("value", function (snapshot) {
        document.getElementById("article").innerHTML += `
        <ul id=list>
            <li id="list-item">
                <div class="col">
                    <div class="col1">
                        <img src="${snapshot.val().link}" class="img" alt="blog">
                    </div>
                    <div class="col1">
                        <div class="blog-text">
                            <p style="display:none">${snapshot.val().id}</p>
                            <h2>${snapshot.val().title}</h2>
                            <p class="marg">${snapshot.val().name}</p>
                            <p class="marg" id="subj" style="display:block;">${snapshot.val().article}</p>
                            <button type="submit" onclick="DeleteBlog(${snapshot.val().id})" style="background-color:red;">Delete</button>
                            <button type="submit" onclick="closeBlog()">More articles >></button>
                        </div>
                        <div> 
                            <textarea id="comment">
                                leave a comment
                            </textarea>
                            <button onclick="sendComment(document.getElementById(comment))">send<button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        `
    })
    function sendComment(comment) {
        alert("i am in comment")
    }
}

