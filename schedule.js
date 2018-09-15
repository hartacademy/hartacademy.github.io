var defaultLangEn = true;
var classEn = document.querySelectorAll("h2.english, ul.english");
var classKh = document.querySelectorAll("h2.khmer, ul.khmer");

function langChange() {
    var currentLang = defaultLangEn;
    if (currentLang == true) {
        
        for (var i = 0; i < classEn.length; ++i) {
            classEn[i].classList.add("uk-hidden");
        };
        for (var i = 0; i < classKh.length; ++i) {
            classKh[i].classList.remove("uk-hidden");
        };
        
        return defaultLangEn = false;
    } else {
        
        for (var i = 0; i < classEn.length; ++i) {
            classEn[i].classList.remove("uk-hidden");
        };
        for (var i = 0; i < classKh.length; ++i) {
            classKh[i].classList.add("uk-hidden");
        };
        
        return defaultLangEn = true;
    }
}

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

var refBasic = firebase.database().ref('schedule/description/basic');
var refRegular= firebase.database().ref('schedule/description/regular');
var refFundamental = firebase.database().ref('schedule/description/fundamental');
var refMonthly = firebase.database().ref('schedule/description/monthly');
var refWorknplay = firebase.database().ref('schedule/description/worknplay');
var refKidsjj = firebase.database().ref('schedule/description/kidsjj');
var refKidstkd = firebase.database().ref('schedule/description/kidstkd');
var refWomen = firebase.database().ref('schedule/description/women');
var refWrestling = firebase.database().ref('schedule/description/wrestling');

refBasic.once('value').then(function(snapshot) {
    var text = snapshot.val();
    document.getElementById('desBasic').innerHTML = text.text;
});
refRegular.once('value').then(function(snapshot) {
    var text = snapshot.val();
    document.getElementById('desRegular').innerHTML = text.text;
});
refFundamental.once('value').then(function(snapshot) {
    var text = snapshot.val();
    document.getElementById('desFundamental').innerHTML = text.text;
});
refMonthly.once('value').then(function(snapshot) {
    var text = snapshot.val();
    document.getElementById('desMonthly').innerHTML = text.text;
});
refWorknplay.once('value').then(function(snapshot) {
    var text = snapshot.val();
    document.getElementById('desWorknplay').innerHTML = text.text;
});
refKidsjj.once('value').then(function(snapshot) {
    var text = snapshot.val();
    document.getElementById('desKidsjj').innerHTML = text.text;
});
refKidstkd.once('value').then(function(snapshot) {
    var text = snapshot.val();
    document.getElementById('desKidstkd').innerHTML = text.text;
});
refWomen.once('value').then(function(snapshot) {
    var text = snapshot.val();
    document.getElementById('desWomen').innerHTML = text.text;
});
refWrestling.once('value').then(function(snapshot) {
    var text = snapshot.val();
    document.getElementById('desWrestling').innerHTML = text.text;
});
