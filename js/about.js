var defaultLangEn = true;
var navEn = document.getElementById("nav-desktop-en");
var navKh = document.getElementById("nav-desktop-kh");
var navTabEn = document.getElementById("nav-tab-en");
var navTabKh = document.getElementById("nav-tab-kh");
var pageTitleEn = document.getElementById("page-title-en");
var pageTitleKh = document.getElementById("page-title-kh");
var accordionEn = document.getElementById("accordion-en");
var accordionKh = document.getElementById("accordion-kh");


function langChange() {
    var currentLang = defaultLangEn;
    if (currentLang == true) {
        navEn.classList.add("uk-hidden");
        navKh.classList.remove("uk-hidden");
        navTabEn.classList.add("uk-hidden");
        navTabKh.classList.remove("uk-hidden");
        pageTitleEn.classList.add("uk-hidden");
        pageTitleKh.classList.remove("uk-hidden");
        accordionEn.classList.add("uk-hidden");
        accordionKh.classList.remove("uk-hidden");
        return defaultLangEn = false;
    } else {
        navEn.classList.remove("uk-hidden");
        navKh.classList.add("uk-hidden");
        navTabEn.classList.remove("uk-hidden");
        navTabKh.classList.add("uk-hidden");
        pageTitleEn.classList.remove("uk-hidden");
        pageTitleKh.classList.add("uk-hidden");
        accordionEn.classList.remove("uk-hidden");
        accordionKh.classList.add("uk-hidden");
        return defaultLangEn = true;
    }
}