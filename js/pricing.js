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
