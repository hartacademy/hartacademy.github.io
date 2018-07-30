var defaultLangEn = true;

var classEn = document.querySelectorAll("ul.english, div.english, p.english");
var classKh = document.querySelectorAll("ul.khmer, div.khmer, p.khmer");
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