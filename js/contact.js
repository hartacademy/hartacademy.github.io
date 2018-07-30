var defaultLangEn = true;
var classEn = document.querySelectorAll("h2.english, h3.english, legend.english, ul.english, div.english");
var classKh = document.querySelectorAll("h2.khmer, h3.khmer, legend.khmer, ul.khmer, div.khmer");
var formName = document.getElementById("input-name");
var formEmail = document.getElementById("input-email");
var textMessage = document.getElementById("textarea-message");
var sendBtn = document.getElementById("send-btn");

function langChange() {
    var currentLang = defaultLangEn;
    if (currentLang == true) {
        
        for (var i = 0; i < classEn.length; ++i) {
            classEn[i].classList.add("uk-hidden");
        };
        for (var i = 0; i < classKh.length; ++i) {
            classKh[i].classList.remove("uk-hidden");
        };
        
        formName.placeholder = "ឈ្មោះ";
        formName.classList.add("khmer");
        formEmail.placeholder = "អ៊ីម៉ែល";
        formEmail.classList.add("khmer");
        textMessage.placeholder = "សារជាអក្សរ";
        textMessage.classList.add("khmer");
        sendBtn.innerHTML = "ផ្ញើរ";
        sendBtn.classList.add("khmer");
        
        return defaultLangEn = false;
    } else {
        
        for (var i = 0; i < classEn.length; ++i) {
            classEn[i].classList.remove("uk-hidden");
        };
        for (var i = 0; i < classKh.length; ++i) {
            classKh[i].classList.add("uk-hidden");
        };
        
        formName.placeholder = "Name";
        formName.classList.remove("khmer");
        formEmail.placeholder = "Email";
        formEmail.classList.remove("khmer");
        textMessage.placeholder = "Message";
        textMessage.classList.remove("khmer");
        sendBtn.innerHTML = "SEND";
        sendBtn.classList.remove("khmer");
        
        return defaultLangEn = true;
    }
}