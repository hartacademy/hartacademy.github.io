var defaultLangEn = true;

var classEn = document.querySelectorAll("ul.english, div.english, p.english");
var classKh = document.querySelectorAll("ul.khmer, div.khmer, p.khmer");
var cardAbout = document.getElementById("card-about");
var cardSchedule = document.getElementById("card-schedule");
var cardOrkas = document.getElementById("card-orkas");
var cardContact = document.getElementById("card-contact");
var cardArtist = document.getElementById("card-artist");

function langChange() {
    var currentLang = defaultLangEn;
    if (currentLang == true) {
        
        for (var i = 0; i < classEn.length; ++i) {
            classEn[i].classList.add("uk-hidden");
        };
        for (var i = 0; i < classKh.length; ++i) {
            classKh[i].classList.remove("uk-hidden");
        };
        
        cardAbout.href="about.html#langkh";
        cardSchedule.href="schedule.html#langkh";
        cardOrkas.href="orkas.html#langkh";
        cardContact.href="contact.html#langkh";
        cardArtist.href="artist.html#langkh";
        
        return defaultLangEn = false;
    } else {
        
        for (var i = 0; i < classEn.length; ++i) {
            classEn[i].classList.remove("uk-hidden");
        };
        for (var i = 0; i < classKh.length; ++i) {
            classKh[i].classList.add("uk-hidden");
        };
        
        cardAbout.href="about.html";
        cardSchedule.href="schedule.html";
        cardOrkas.href="orkas.html";
        cardContact.href="contact.html";
        cardArtist.href="artist.html";
        
        return defaultLangEn = true;
    };
}