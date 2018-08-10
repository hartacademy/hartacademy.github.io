// pull schedule data from Firebase ----------
firebase.database().ref('schedule/monday/').once('value').then(function(snapshot) {
    snapshot.forEach(function(userSnapshot) {
        var id = userSnapshot.val();

        var createLi = document.createElement("li");
        var createP = document.createElement("p");
        var pText = document.createTextNode(id.detail);
            createP.appendChild(pText);
            createLi.appendChild(createP);
            createP.className = (id.shift);
        document.getElementById("monday").appendChild(createLi);
    });
});
firebase.database().ref('schedule/tuesday/').once('value').then(function(snapshot) {
    snapshot.forEach(function(userSnapshot) {
        var id = userSnapshot.val();

        var createLi = document.createElement("li");
        var createP = document.createElement("p");
        var pText = document.createTextNode(id.detail);
            createP.appendChild(pText);
            createLi.appendChild(createP);
            createP.className = (id.shift);
        document.getElementById("tuesday").appendChild(createLi);
    });
});
firebase.database().ref('schedule/wednesday/').once('value').then(function(snapshot) {
    snapshot.forEach(function(userSnapshot) {
        var id = userSnapshot.val();

        var createLi = document.createElement("li");
        var createP = document.createElement("p");
        var pText = document.createTextNode(id.detail);
            createP.appendChild(pText);
            createLi.appendChild(createP);
            createP.className = (id.shift);
        document.getElementById("wednesday").appendChild(createLi);
    });
});
firebase.database().ref('schedule/thursday/').once('value').then(function(snapshot) {
    snapshot.forEach(function(userSnapshot) {
        var id = userSnapshot.val();

        var createLi = document.createElement("li");
        var createP = document.createElement("p");
        var pText = document.createTextNode(id.detail);
            createP.appendChild(pText);
            createLi.appendChild(createP);
            createP.className = (id.shift);
        document.getElementById("thursday").appendChild(createLi);
    });
});
firebase.database().ref('schedule/friday/').once('value').then(function(snapshot) {
    snapshot.forEach(function(userSnapshot) {
        var id = userSnapshot.val();

        var createLi = document.createElement("li");
        var createP = document.createElement("p");
        var pText = document.createTextNode(id.detail);
            createP.appendChild(pText);
            createLi.appendChild(createP);
            createP.className = (id.shift);
        document.getElementById("friday").appendChild(createLi);
    });
});
firebase.database().ref('schedule/saturday/').once('value').then(function(snapshot) {
    snapshot.forEach(function(userSnapshot) {
        var id = userSnapshot.val();

        var createLi = document.createElement("li");
        var createP = document.createElement("p");
        var pText = document.createTextNode(id.detail);
            createP.appendChild(pText);
            createLi.appendChild(createP);
            createP.className = (id.shift);
        document.getElementById("saturday").appendChild(createLi);
    });
});
firebase.database().ref('schedule/sunday/').once('value').then(function(snapshot) {
    snapshot.forEach(function(userSnapshot) {
        var id = userSnapshot.val();

        var createLi = document.createElement("li");
        var createP = document.createElement("p");
        var pText = document.createTextNode(id.detail);
            createP.appendChild(pText);
            createLi.appendChild(createP);
            createP.className = (id.shift);
        document.getElementById("sunday").appendChild(createLi);
    });
});