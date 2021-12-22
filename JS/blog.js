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
                    <div style="background:rgba(255, 230, 4, 0.49); height:300px; width:800px; display:flex; border:2px solid #000033" >    
                        <div style="display:flex;" class="image&title">
                            <img src="${blogValue.link}"> 
                            <div class="article-content">
                                <h2 style="margin-left:100px">${blogValue.title}</h2>
                                <p  style="margin-left:10px; color:#000033;font-weight:bold">By ${blogValue.name}</p>
                               <p style="margin-left:10px;">${blogValue.article}</p>
                               <button type="submit" onclick="DeleteBlog(${blogValue.id})" style="height:35px; font-size:15px;margin-left:10px;">Delete</button>
                                <button><a href="/HTML-pages/contact.html">Comment</a></button>
                            </div>                         
                        </div>    
                    </div><br>
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



