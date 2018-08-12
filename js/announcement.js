// pull announcement data from Firebase ----------
firebase.database().ref('posts/').once('value').then(function(snapshot) {
    snapshot.forEach(function(userSnapshot) {
        var posts = userSnapshot.val();

        var createArticle = document.createElement("article");
        createArticle.className = "uk-article uk-background-default uk-box-shadow-medium uk-padding";

        var createAuthor = document.createElement("p");
            createAuthor.className = "uk-article-meta";
            createAuthor.innerHTML = "by ";
        var authorText = document.createTextNode(posts.author);
            createAuthor.appendChild(authorText);

        var createHeading = document.createElement("h1");
            createHeading.className = "uk-article-title";
            createHeading.style = "margin-top: 0px;";
        var headingText = document.createTextNode(posts.title);
            createHeading.appendChild(headingText);

        var createPostDate = document.createElement("p");
            createPostDate.className = "uk-article-meta";
        var postDateText = document.createTextNode(posts.created);
        createPostDate.appendChild(postDateText);

        var createPara = document.createElement("p");
            createPara.className = "uk-text-justify";
            createPara.style = "white-space: pre-wrap; text-align: justify";
        var paraText = document.createTextNode(posts.content);
            createPara.appendChild(paraText);

        createArticle.appendChild(createAuthor);
        createArticle.appendChild(createPostDate);
        createArticle.appendChild(createHeading);
        createArticle.appendChild(createPara);

        var articleContainer = document.getElementById("announcement-body");
        articleContainer.insertBefore(createArticle, articleContainer.childNodes[0]);
    });
});
