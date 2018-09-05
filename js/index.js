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

var introCard = document.getElementById('intro-card').children[0];
var aboutCard = document.getElementById('card-about').children[0];
var scheduleCard = document.getElementById('card-schedule').children[0];
var orkasCard = document.getElementById('card-orkas').children[0];
var contactCard = document.getElementById('card-contact').children[0];
var artistCard = document.getElementById('card-artist').children[0];

introCard.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/hart-academy.appspot.com/o/cover%2Fintro-cover?alt=media&token=32e4bfed-74c8-4b9a-9e97-f65270f23f04')";
aboutCard.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/hart-academy.appspot.com/o/cover%2Fabout-cover?alt=media&token=3472d145-b6ab-4ac8-8243-1c7751de72c1')";
scheduleCard.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/hart-academy.appspot.com/o/cover%2Fschedule-cover?alt=media&token=f1ff4d76-872f-46e0-b2b3-21f9dd44b6ea')";
orkasCard.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/hart-academy.appspot.com/o/cover%2Forkas-cover?alt=media&token=e5e941ba-2f36-4432-afca-34032d266535')";
contactCard.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/hart-academy.appspot.com/o/cover%2Fcontact-cover?alt=media&token=15c871a7-27ee-4d98-affe-c49dc990ade8')";
artistCard.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/hart-academy.appspot.com/o/cover%2Fartist-cover?alt=media&token=0ae2ab07-6173-4986-b98d-ec43dd91dbb5')";
