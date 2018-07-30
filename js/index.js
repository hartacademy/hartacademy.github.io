var defaultLangEn = true;
var navEn = document.getElementById("nav-desktop-en");
var navKh = document.getElementById("nav-desktop-kh");
var navTabEn = document.getElementById("nav-tab-en");
var navTabKh = document.getElementById("nav-tab-kh");
var aboutEn = document.getElementById("about-en");
var aboutKh = document.getElementById("about-kh");
var scheduleEn = document.getElementById("schedule-en");
var scheduleKh = document.getElementById("schedule-kh");
var orkasEn = document.getElementById("orkas-en");
var orkasKh = document.getElementById("orkas-kh");
var contactEn = document.getElementById("contact-en");
var contactKh = document.getElementById("contact-kh");
var artistEn = document.getElementById("artist-en");
var artistKh = document.getElementById("artist-kh");


function langChange() {
    var currentLang = defaultLangEn;
    if (currentLang == true) {
        navEn.classList.add("uk-hidden");
        navKh.classList.remove("uk-hidden");
        navTabEn.classList.add("uk-hidden");
        navTabKh.classList.remove("uk-hidden");
        aboutEn.classList.add("uk-hidden");
        aboutKh.classList.remove("uk-hidden");
        scheduleEn.classList.add("uk-hidden");
        scheduleKh.classList.remove("uk-hidden");
        orkasEn.classList.add("uk-hidden");
        orkasKh.classList.remove("uk-hidden");
        contactEn.classList.add("uk-hidden");
        contactKh.classList.remove("uk-hidden");
        artistEn.classList.add("uk-hidden");
        artistKh.classList.remove("uk-hidden");
        
        return defaultLangEn = false;
    } else {
        navEn.classList.remove("uk-hidden");
        navKh.classList.add("uk-hidden");
        navTabEn.classList.remove("uk-hidden");
        navTabKh.classList.add("uk-hidden");
        aboutEn.classList.remove("uk-hidden");
        aboutKh.classList.add("uk-hidden");
        scheduleEn.classList.remove("uk-hidden");
        scheduleKh.classList.add("uk-hidden");
        orkasEn.classList.remove("uk-hidden");
        orkasKh.classList.add("uk-hidden");
        contactEn.classList.remove("uk-hidden");
        contactKh.classList.add("uk-hidden");
        artistEn.classList.remove("uk-hidden");
        artistKh.classList.add("uk-hidden");
        
        return defaultLangEn = true;
    }
}