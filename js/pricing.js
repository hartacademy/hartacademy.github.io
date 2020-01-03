var defaultLangEn = true;
var classEn = document.querySelectorAll("h2.english, ul.english, div.english, p.english");
var classKh = document.querySelectorAll("h2.khmer, ul.khmer, div.khmer, p.khmer");

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

// Pull data from firebase

firebase.database().ref('membership/detail/').once('value').then(function(snapshot) {
    snapshot.forEach(function(userSnapshot) {
        var id = userSnapshot.val();
        
        var divOne = document.createElement("div");
        var divTwo = document.createElement("div");
            divTwo.className = "uk-card uk-card-default uk-card-body enlarge-on-hover-medium";
        
        var titleEng = document.createElement("div");
            titleEng.className = "memb-header-wrapper english";
        var pricing = document.createElement("h3");
        var pricingText = document.createTextNode(id.amount);
            pricing.appendChild(pricingText);
        var typeEng = document.createElement("span");
        var typeEngText = document.createTextNode(id.pereng);
            typeEng.appendChild(typeEngText);
        
            titleEng.appendChild(pricing);
            titleEng.appendChild(typeEng);
        
        var desEng = document.createElement("p");
            desEng.className = "english";
        var desEngText = document.createTextNode(id.deseng);
            desEng.appendChild(desEngText);
        
            divTwo.appendChild(titleEng);
            divTwo.appendChild(desEng);
        
            divOne.appendChild(divTwo);
        
        document.getElementById("membership-plan").appendChild(divOne);
        
        // Appending blocks

        /* var createBlock = document.createElement("div");
        var createTitle = document.createElement("h4");
        var titleText = document.createTextNode(id.title);
        var createDes = document.createElement("p");
        var desText = document.createTextNode(id.text);
            createTitle.appendChild(titleText);
            createTitle.className = "heading-title";
            createDes.appendChild(desText);
            createBlock.appendChild(createTitle);
            createBlock.appendChild(createDes);
        document.getElementById("classDes").appendChild(createBlock);
        */
    });
});

/* Legacy

// pull pricing data from Firebase ----------
var priceSixClasses = document.getElementById('price-6-classes');
var priceSixClassesKh = document.getElementById('price-6-classes-kh');
var membershipRefSixClasses = firebase.database().ref('membership/6classes/price');
membershipRefSixClasses.on('value', function(snap) {
    if(snap.val()) {
        priceSixClasses.innerHTML = '$'+ snap.val();
        priceSixClassesKh.innerHTML = '$'+ snap.val();
    }
});
var priceTwelveClasses = document.getElementById('price-12-classes');
var priceTwelveClassesKh = document.getElementById('price-12-classes-kh');
var membershipRefTwelveClasses = firebase.database().ref('membership/12classes/price');
membershipRefTwelveClasses.on('value', function(snap) {
    if(snap.val()) {
        priceTwelveClasses.innerHTML = '$'+ snap.val();
        priceTwelveClassesKh.innerHTML = '$'+ snap.val();
    }
});
var priceUnClasses = document.getElementById('price-un-classes');
var priceUnClassesKh = document.getElementById('price-un-classes-kh');
var membershipRefUnClasses = firebase.database().ref('membership/unlimitedclasses/price');
membershipRefUnClasses.on('value', function(snap) {
    if(snap.val()) {
        priceUnClasses.innerHTML = '$'+ snap.val();
        priceUnClassesKh.innerHTML = '$'+ snap.val();
    }
});
var priceOneDay = document.getElementById('price-1-day');
var priceOneDayKh = document.getElementById('price-1-day-kh');
var membershipRefOneDay = firebase.database().ref('membership/1day/price');
membershipRefOneDay.on('value', function(snap) {
    if(snap.val()) {
        priceOneDay.innerHTML = '$'+ snap.val();
        priceOneDayKh.innerHTML = '$'+ snap.val();
    }
});
var priceOneClass = document.getElementById('price-1-class');
var priceOneClassKh = document.getElementById('price-1-class-kh');
var membershipRefOneClass = firebase.database().ref('membership/1class/price');
membershipRefOneClass.on('value', function(snap) {
    if(snap.val()) {
        priceOneClass.innerHTML = '$'+ snap.val();
        priceOneClassKh.innerHTML = '$'+ snap.val();
    }
});
var priceOnePrivate = document.getElementById('price-1-private');
var priceOnePrivateKh = document.getElementById('price-1-private-kh');
var membershipRefOnePrivate = firebase.database().ref('membership/1privateclass/price');
membershipRefOnePrivate.on('value', function(snap) {
    if(snap.val()) {
        priceOnePrivate.innerHTML = '$'+ snap.val();
        priceOnePrivateKh.innerHTML = '$'+ snap.val();
    }
});
var priceWomen = document.getElementById('price-women');
var priceWomenKh = document.getElementById('price-women-kh');
var membershipRefWomen = firebase.database().ref('membership/womenclass/price');
membershipRefWomen.on('value', function(snap) {
    if(snap.val()) {
        priceWomen.innerHTML = '$'+ snap.val();
        priceWomenKh.innerHTML = '$'+ snap.val();
    }
});
var priceOneWeek = document.getElementById('price-1-week');
var priceOneWeekKh = document.getElementById('price-1-week-kh');
var membershipRefOneWeek= firebase.database().ref('membership/1week/price');
membershipRefOneWeek.on('value', function(snap) {
    if(snap.val()) {
        priceOneWeek.innerHTML = '$'+ snap.val();
        priceOneWeekKh.innerHTML = '$'+ snap.val();
    }
});

*/
