// Announcement

// Ref firebase
var announcementRef = firebase.database().ref('posts/announcement');
// Submit Btn pressed
document.getElementById('announcementForm').addEventListener('submit', submitAnnouncement);
// Submit announcement
function submitAnnouncement(e){
  e.preventDefault();

  // Get values
  var author = getInputVal('annAuthor');
  var content = getInputVal('annDetail');
  var title = getInputVal('annTitle');
  var created = new Date().toLocaleString();

  // Save announcement
  saveAnnouncement(author, content, title, created);
/*
  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },5000);
*/
  // Clear form
  document.getElementById('announcementForm').reset();
}
// Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}
// Save announcement data to firebase
function saveAnnouncement(author, content, title, created){
  announcementRef.set({
    author: author,
    content: content,
    title: title,
    created: created
  });
};

// User detail

// Sign in
document.getElementById('sign-in').addEventListener('click', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
    }
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        document.getElementById('sign-in').disabled = false;
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
        } else {
            alert(errorMessage);
        }
    });
    document.getElementById('sign-in').disabled = true;
})
// Sign out
document.getElementById('sign-out').addEventListener('click', function() {
    firebase.auth().signOut();
    document.getElementById('sign-in').disabled = false;
});
// State
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById('signInForm').classList.add("uk-hidden");
        document.getElementById('toolsForm').classList.remove("uk-hidden");
        document.getElementsByTagName("hr")[0].classList.remove("uk-hidden");
    } else {
        document.getElementById('signInForm').classList.remove("uk-hidden");
        document.getElementById('toolsForm').classList.add("uk-hidden");
        document.getElementsByTagName("hr")[0].classList.add("uk-hidden");
    }
});
// Animation


// Pricing

// Ref firebase
var membershipRefSixClasses = firebase.database().ref('membership/6classes');
var membershipRefTwelveClasses = firebase.database().ref('membership/12classes');
var membershipRefUnlimitedClasses = firebase.database().ref('membership/unlimitedclasses');
var membershipRefOneDay = firebase.database().ref('membership/1day');
var membershipRefOneClass = firebase.database().ref('membership/1class');
var membershipRefPrivate = firebase.database().ref('membership/1privateclass');
var membershipRefOneWeek = firebase.database().ref('membership/1week');
// Submit Btn pressed
document.getElementById('pricingForm').addEventListener('submit', submitPricing);
// Submit pricing
function submitPricing(e){
  e.preventDefault();

  // Get values
  var sixClasses = getInputVal('price-6-classes');
  var twelveClasses = getInputVal('price-12-classes');
  var nClasses = getInputVal('price-unlimited');
  var oneDay = getInputVal('price-1-day');
  var oneClass = getInputVal('price-1-class');
  var onePrivate = getInputVal('price-1-private');
  var oneWeek = getInputVal('price-1-week');

  // Save pricing
  savePricing(sixClasses, twelveClasses, nClasses, oneDay, oneClass, onePrivate, oneWeek);
    
  // Show alert
    document.getElementById('pricingAlert').style.border = 'none';
    document.getElementById('pricingAlert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.getElementById('pricingAlert').style.display = 'none';
  },5000);

  // Clear form
  document.getElementById('pricingForm').reset();
}
// Save pricing data to firebase
function savePricing(sixClasses, twelveClasses, nClasses, oneDay, oneClass, onePrivate, oneWeek){
  membershipRefSixClasses.set({
    price: sixClasses
  });
  membershipRefTwelveClasses.set({
    price: twelveClasses
  });
  membershipRefUnlimitedClasses.set({
    price: nClasses
  });
  membershipRefOneDay.set({
    price: oneDay
  });
  membershipRefOneClass.set({
    price: oneClass
  });
  membershipRefPrivate.set({
    price: onePrivate
  });
  membershipRefOneWeek.set({
    price: oneWeek
  });
};

// Schedule

// Pull data from firebase and paste into placeholder
firebase.database().ref('schedule/monday/').once('value').then(function(snapshot) {
    snapshot.forEach(function(userSnapshot) {
        var id = userSnapshot.val();
        
        var createMainDiv = document.createElement("div");
        createMainDiv.className = "uk-margin uk-flex uk-flex-middle";
        var createInput = document.createElement("input");
        createInput.className = "uk-input uk-margin-small-right monday";
        createInput.type = "text";
        createInput.placeholder = (id.detail);
        var createSelectDiv = document.createElement("div");
        createSelectDiv.className = "uk-form-controls";
        var createSelect = document.createElement("select");
        createSelect.className = "uk-select shiftMon";
        var createOptionMorning = document.createElement("option");
        createOptionMorning.value = "morning";
        var morning = document.createTextNode("Morning");
        var createOptionNoon = document.createElement("option");
        createOptionNoon.value = "noon";
        var noon = document.createTextNode("Noon");
        var createOptionEvening = document.createElement("option");
        createOptionEvening.value = "evening";
        var evening = document.createTextNode("Evening");

        createOptionMorning.appendChild(morning);
        createOptionNoon.appendChild(noon);
        createOptionEvening.appendChild(evening);
        createSelect.appendChild(createOptionMorning);
        createSelect.appendChild(createOptionNoon);
        createSelect.appendChild(createOptionEvening);
        createSelectDiv.appendChild(createSelect);
        createMainDiv.appendChild(createInput);
        createMainDiv.appendChild(createSelectDiv);

        document.getElementById("monday").appendChild(createMainDiv);
    });
});
firebase.database().ref('schedule/tuesday/').once('value').then(function(snapshot) {
    snapshot.forEach(function(userSnapshot) {
        var id = userSnapshot.val();
        
        var createMainDiv = document.createElement("div");
        createMainDiv.className = "uk-margin uk-flex uk-flex-middle";
        var createInput = document.createElement("input");
        createInput.className = "uk-input uk-margin-small-right tuesday";
        createInput.type = "text";
        createInput.placeholder = (id.detail);
        var createSelectDiv = document.createElement("div");
        createSelectDiv.className = "uk-form-controls";
        var createSelect = document.createElement("select");
        createSelect.className = "uk-select shiftTue";
        var createOptionMorning = document.createElement("option");
        createOptionMorning.value = "morning";
        var morning = document.createTextNode("Morning");
        var createOptionNoon = document.createElement("option");
        createOptionNoon.value = "noon";
        var noon = document.createTextNode("Noon");
        var createOptionEvening = document.createElement("option");
        createOptionEvening.value = "evening";
        var evening = document.createTextNode("Evening");

        createOptionMorning.appendChild(morning);
        createOptionNoon.appendChild(noon);
        createOptionEvening.appendChild(evening);
        createSelect.appendChild(createOptionMorning);
        createSelect.appendChild(createOptionNoon);
        createSelect.appendChild(createOptionEvening);
        createSelectDiv.appendChild(createSelect);
        createMainDiv.appendChild(createInput);
        createMainDiv.appendChild(createSelectDiv);

        document.getElementById("tuesday").appendChild(createMainDiv);
    });
});
firebase.database().ref('schedule/wednesday/').once('value').then(function(snapshot) {
    snapshot.forEach(function(userSnapshot) {
        var id = userSnapshot.val();
        
        var createMainDiv = document.createElement("div");
        createMainDiv.className = "uk-margin uk-flex uk-flex-middle";
        var createInput = document.createElement("input");
        createInput.className = "uk-input uk-margin-small-right wednesday";
        createInput.type = "text";
        createInput.placeholder = (id.detail);
        var createSelectDiv = document.createElement("div");
        createSelectDiv.className = "uk-form-controls";
        var createSelect = document.createElement("select");
        createSelect.className = "uk-select shiftWed";
        var createOptionMorning = document.createElement("option");
        createOptionMorning.value = "morning";
        var morning = document.createTextNode("Morning");
        var createOptionNoon = document.createElement("option");
        createOptionNoon.value = "noon";
        var noon = document.createTextNode("Noon");
        var createOptionEvening = document.createElement("option");
        createOptionEvening.value = "evening";
        var evening = document.createTextNode("Evening");

        createOptionMorning.appendChild(morning);
        createOptionNoon.appendChild(noon);
        createOptionEvening.appendChild(evening);
        createSelect.appendChild(createOptionMorning);
        createSelect.appendChild(createOptionNoon);
        createSelect.appendChild(createOptionEvening);
        createSelectDiv.appendChild(createSelect);
        createMainDiv.appendChild(createInput);
        createMainDiv.appendChild(createSelectDiv);

        document.getElementById("wednesday").appendChild(createMainDiv);
    });
});
firebase.database().ref('schedule/thursday/').once('value').then(function(snapshot) {
    snapshot.forEach(function(userSnapshot) {
        var id = userSnapshot.val();
        
        var createMainDiv = document.createElement("div");
        createMainDiv.className = "uk-margin uk-flex uk-flex-middle";
        var createInput = document.createElement("input");
        createInput.className = "uk-input uk-margin-small-right thursday";
        createInput.type = "text";
        createInput.placeholder = (id.detail);
        var createSelectDiv = document.createElement("div");
        createSelectDiv.className = "uk-form-controls";
        var createSelect = document.createElement("select");
        createSelect.className = "uk-select shiftThu";
        var createOptionMorning = document.createElement("option");
        createOptionMorning.value = "morning";
        var morning = document.createTextNode("Morning");
        var createOptionNoon = document.createElement("option");
        createOptionNoon.value = "noon";
        var noon = document.createTextNode("Noon");
        var createOptionEvening = document.createElement("option");
        createOptionEvening.value = "evening";
        var evening = document.createTextNode("Evening");

        createOptionMorning.appendChild(morning);
        createOptionNoon.appendChild(noon);
        createOptionEvening.appendChild(evening);
        createSelect.appendChild(createOptionMorning);
        createSelect.appendChild(createOptionNoon);
        createSelect.appendChild(createOptionEvening);
        createSelectDiv.appendChild(createSelect);
        createMainDiv.appendChild(createInput);
        createMainDiv.appendChild(createSelectDiv);

        document.getElementById("thursday").appendChild(createMainDiv);
    });
});
firebase.database().ref('schedule/friday/').once('value').then(function(snapshot) {
    snapshot.forEach(function(userSnapshot) {
        var id = userSnapshot.val();
        
        var createMainDiv = document.createElement("div");
        createMainDiv.className = "uk-margin uk-flex uk-flex-middle";
        var createInput = document.createElement("input");
        createInput.className = "uk-input uk-margin-small-right friday";
        createInput.type = "text";
        createInput.placeholder = (id.detail);
        var createSelectDiv = document.createElement("div");
        createSelectDiv.className = "uk-form-controls";
        var createSelect = document.createElement("select");
        createSelect.className = "uk-select shiftFri";
        var createOptionMorning = document.createElement("option");
        createOptionMorning.value = "morning";
        var morning = document.createTextNode("Morning");
        var createOptionNoon = document.createElement("option");
        createOptionNoon.value = "noon";
        var noon = document.createTextNode("Noon");
        var createOptionEvening = document.createElement("option");
        createOptionEvening.value = "evening";
        var evening = document.createTextNode("Evening");

        createOptionMorning.appendChild(morning);
        createOptionNoon.appendChild(noon);
        createOptionEvening.appendChild(evening);
        createSelect.appendChild(createOptionMorning);
        createSelect.appendChild(createOptionNoon);
        createSelect.appendChild(createOptionEvening);
        createSelectDiv.appendChild(createSelect);
        createMainDiv.appendChild(createInput);
        createMainDiv.appendChild(createSelectDiv);

        document.getElementById("friday").appendChild(createMainDiv);
    });
});
firebase.database().ref('schedule/saturday/').once('value').then(function(snapshot) {
    snapshot.forEach(function(userSnapshot) {
        var id = userSnapshot.val();
        
        var createMainDiv = document.createElement("div");
        createMainDiv.className = "uk-margin uk-flex uk-flex-middle";
        var createInput = document.createElement("input");
        createInput.className = "uk-input uk-margin-small-right saturday";
        createInput.type = "text";
        createInput.placeholder = (id.detail);
        var createSelectDiv = document.createElement("div");
        createSelectDiv.className = "uk-form-controls";
        var createSelect = document.createElement("select");
        createSelect.className = "uk-select shiftSat";
        var createOptionMorning = document.createElement("option");
        createOptionMorning.value = "morning";
        var morning = document.createTextNode("Morning");
        var createOptionNoon = document.createElement("option");
        createOptionNoon.value = "noon";
        var noon = document.createTextNode("Noon");
        var createOptionEvening = document.createElement("option");
        createOptionEvening.value = "evening";
        var evening = document.createTextNode("Evening");

        createOptionMorning.appendChild(morning);
        createOptionNoon.appendChild(noon);
        createOptionEvening.appendChild(evening);
        createSelect.appendChild(createOptionMorning);
        createSelect.appendChild(createOptionNoon);
        createSelect.appendChild(createOptionEvening);
        createSelectDiv.appendChild(createSelect);
        createMainDiv.appendChild(createInput);
        createMainDiv.appendChild(createSelectDiv);

        document.getElementById("saturday").appendChild(createMainDiv);
    });
});
firebase.database().ref('schedule/sunday/').once('value').then(function(snapshot) {
    snapshot.forEach(function(userSnapshot) {
        var id = userSnapshot.val();
        
        var createMainDiv = document.createElement("div");
        createMainDiv.className = "uk-margin uk-flex uk-flex-middle";
        var createInput = document.createElement("input");
        createInput.className = "uk-input uk-margin-small-right sunday";
        createInput.type = "text";
        createInput.placeholder = (id.detail);
        var createSelectDiv = document.createElement("div");
        createSelectDiv.className = "uk-form-controls";
        var createSelect = document.createElement("select");
        createSelect.className = "uk-select shiftSun";
        var createOptionMorning = document.createElement("option");
        createOptionMorning.value = "morning";
        var morning = document.createTextNode("Morning");
        var createOptionNoon = document.createElement("option");
        createOptionNoon.value = "noon";
        var noon = document.createTextNode("Noon");
        var createOptionEvening = document.createElement("option");
        createOptionEvening.value = "evening";
        var evening = document.createTextNode("Evening");

        createOptionMorning.appendChild(morning);
        createOptionNoon.appendChild(noon);
        createOptionEvening.appendChild(evening);
        createSelect.appendChild(createOptionMorning);
        createSelect.appendChild(createOptionNoon);
        createSelect.appendChild(createOptionEvening);
        createSelectDiv.appendChild(createSelect);
        createMainDiv.appendChild(createInput);
        createMainDiv.appendChild(createSelectDiv);

        document.getElementById("sunday").appendChild(createMainDiv);
    });
});

// Push new schedule into firebase
// Ref firebase
var scheduleRefMon = firebase.database().ref('schedule/monday');
var scheduleRefTue = firebase.database().ref('schedule/tuesday');
var scheduleRefWed = firebase.database().ref('schedule/wednesday');
var scheduleRefThu = firebase.database().ref('schedule/thursday');
var scheduleRefFri = firebase.database().ref('schedule/friday');
var scheduleRefSat = firebase.database().ref('schedule/saturday');
var scheduleRefSun = firebase.database().ref('schedule/sunday');

var inputsMon = document.getElementsByClassName("monday");
var shiftMon = document.getElementsByClassName("shiftMon");
var inputsTue = document.getElementsByClassName("tuesday");
var shiftTue = document.getElementsByClassName("shiftTue");
var inputsWed = document.getElementsByClassName("wednesday");
var shiftWed = document.getElementsByClassName("shiftWed");
var inputsThu = document.getElementsByClassName("thursday");
var shiftThu = document.getElementsByClassName("shiftThu");
var inputsFri = document.getElementsByClassName("friday");
var shiftFri = document.getElementsByClassName("shiftFri");
var inputsSat = document.getElementsByClassName("saturday");
var shiftSat = document.getElementsByClassName("shiftSat");
var inputsSun = document.getElementsByClassName("sunday");
var shiftSun = document.getElementsByClassName("shiftSun");

function monSave() {
    scheduleRefMon.remove();
    for (var i = 0; i < inputsMon.length; i++) {
        
        var detail = inputsMon[i].value;
        var shift = shiftMon[i].value;
        
        saveSchedule(detail, shift);
        
        function saveSchedule(detail, shift){
            var newScheduleRefMon = scheduleRefMon.push();
            newScheduleRefMon.set({
            detail: detail,
            shift: shift
          });
        };
    }
}
function tueSave() {
    scheduleRefTue.remove();
    for (var i = 0; i < inputsTue.length; i++) {
        
        var detail = inputsTue[i].value;
        var shift = shiftTue[i].value;
        
        saveSchedule(detail, shift);
        
        function saveSchedule(detail, shift){
            var newScheduleRefTue = scheduleRefTue.push();
            newScheduleRefTue.set({
            detail: detail,
            shift: shift
          });
        };
    }
}
function wedSave() {
    scheduleRefWed.remove();
    for (var i = 0; i < inputsWed.length; i++) {
        
        var detail = inputsWed[i].value;
        var shift = shiftWed[i].value;
        
        saveSchedule(detail, shift);
        
        function saveSchedule(detail, shift){
            var newScheduleRefWed = scheduleRefWed.push();
            newScheduleRefWed.set({
            detail: detail,
            shift: shift
          });
        };
    }
}
function thuSave() {
    scheduleRefThu.remove();
    for (var i = 0; i < inputsThu.length; i++) {
        
        var detail = inputsThu[i].value;
        var shift = shiftThu[i].value;
        
        saveSchedule(detail, shift);
        
        function saveSchedule(detail, shift){
            var newScheduleRefThu = scheduleRefThu.push();
            newScheduleRefThu.set({
            detail: detail,
            shift: shift
          });
        };
    }
}
function friSave() {
    scheduleRefFri.remove();
    for (var i = 0; i < inputsFri.length; i++) {
        
        var detail = inputsFri[i].value;
        var shift = shiftFri[i].value;
        
        saveSchedule(detail, shift);
        
        function saveSchedule(detail, shift){
            var newScheduleRefFri = scheduleRefFri.push();
            newScheduleRefFri.set({
            detail: detail,
            shift: shift
          });
        };
    }
}
function satSave() {
    scheduleRefSat.remove();
    for (var i = 0; i < inputsSat.length; i++) {
        
        var detail = inputsSat[i].value;
        var shift = shiftSat[i].value;
        
        saveSchedule(detail, shift);
        
        function saveSchedule(detail, shift){
            var newScheduleRefSat = scheduleRefSat.push();
            newScheduleRefSat.set({
            detail: detail,
            shift: shift
          });
        };
    }
}
function sunSave() {
    scheduleRefSun.remove();
    for (var i = 0; i < inputsSun.length; i++) {
        
        var detail = inputsSun[i].value;
        var shift = shiftSun[i].value;
        
        saveSchedule(detail, shift);
        
        function saveSchedule(detail, shift){
            var newScheduleRefSun = scheduleRefSun.push();
            newScheduleRefSun.set({
            detail: detail,
            shift: shift
          });
        };
    }
}

// Add new row
function monAddRow() {
    var lastRow = document.getElementById("monday").lastChild;
    var clone = lastRow.cloneNode(true);
    document.getElementById("monday").appendChild(clone);
}
function tueAddRow() {
    var lastRow = document.getElementById("tuesday").lastChild;
    var clone = lastRow.cloneNode(true);
    document.getElementById("tuesday").appendChild(clone);
}
function wedAddRow() {
    var lastRow = document.getElementById("wednesday").lastChild;
    var clone = lastRow.cloneNode(true);
    document.getElementById("wednesday").appendChild(clone);
}
function thuAddRow() {
    var lastRow = document.getElementById("thursday").lastChild;
    var clone = lastRow.cloneNode(true);
    document.getElementById("thursday").appendChild(clone);
}
function friAddRow() {
    var lastRow = document.getElementById("friday").lastChild;
    var clone = lastRow.cloneNode(true);
    document.getElementById("friday").appendChild(clone);
}
function satAddRow() {
    var lastRow = document.getElementById("saturday").lastChild;
    var clone = lastRow.cloneNode(true);
    document.getElementById("saturday").appendChild(clone);
}
function sunAddRow() {
    var lastRow = document.getElementById("sunday").lastChild;
    var clone = lastRow.cloneNode(true);
    document.getElementById("sunday").appendChild(clone);
}

// Remove row
function monRemoveRow() {
    var select = document.getElementById('monday');
    select.removeChild(select.lastChild);
}
function tueRemoveRow() {
    var select = document.getElementById('tuesday');
    select.removeChild(select.lastChild);
}
function wedRemoveRow() {
    var select = document.getElementById('wednesday');
    select.removeChild(select.lastChild);
}
function thuRemoveRow() {
    var select = document.getElementById('thursday');
    select.removeChild(select.lastChild);
}
function friRemoveRow() {
    var select = document.getElementById('friday');
    select.removeChild(select.lastChild);
}
function satRemoveRow() {
    var select = document.getElementById('saturday');
    select.removeChild(select.lastChild);
}
function sunRemoveRow() {
    var select = document.getElementById('sunday');
    select.removeChild(select.lastChild);
}

// Change Password
function changePassword() {
    var user = firebase.auth().currentUser;
    var newPasswordOne = document.getElementById("new-password-one").value;
    var newPasswordTwo = document.getElementById("new-password-two").value;
    
    if (newPasswordOne.length < 8) {
        // Show alert
        document.getElementById('password-change-too-short-text').classList.remove("uk-hidden");
        // Hide alert after 3 seconds
        setTimeout(function(){
            document.getElementById('password-change-too-short-text').classList.add("uk-hidden");
        },5000);
        return;
    }
    if (newPasswordTwo != newPasswordOne) {
        // Show alert
        document.getElementById('password-change-incorrect-text').classList.remove("uk-hidden");
        // Hide alert after 3 seconds
        setTimeout(function(){
            document.getElementById('password-change-incorrect-text').classList.add("uk-hidden");
        },5000);
        return;
    }
    
    user.updatePassword(newPasswordOne).then(function() {
        // Disable save button
        document.getElementById('change-password-btn').disabled = true;
        // Show alert
        document.getElementById('password-change-success-text').classList.remove("uk-hidden");
        // Hide alert after 3 seconds
        setTimeout(function(){
            document.getElementById('password-change-success-text').classList.add("uk-hidden");
            document.getElementById('change-password-btn').disabled = false;
            },5000);
        // Clear form
        document.getElementById("change-password-form").reset();
        
    }).catch(function(error) {
        // Show alert
        document.getElementById('password-change-error').classList.remove("uk-hidden");
        // Hide alert after 3 seconds
        setTimeout(function(){
            document.getElementById('password-change-error').classList.add("uk-hidden");
        },5000);
    });
}

// Page design

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

function alertUploadDone() {
    alert("Done. Please refresh page to see changes");
}

var storageRefIntro = firebase.storage().ref('cover/intro-cover');
var fileUploadIntro = document.getElementById("intro-cover-input");
var storageRefAbout = firebase.storage().ref('cover/about-cover');
var fileUploadAbout = document.getElementById("about-cover-input");
var storageRefSchedule = firebase.storage().ref('cover/schedule-cover');
var fileUploadSchedule = document.getElementById("schedule-cover-input");
var storageRefOrkas = firebase.storage().ref('cover/orkas-cover');
var fileUploadOrkas = document.getElementById("orkas-cover-input");
var storageRefContact = firebase.storage().ref('cover/contact-cover');
var fileUploadContact = document.getElementById("contact-cover-input");
var storageRefArtist = firebase.storage().ref('cover/artist-cover');
var fileUploadArtist = document.getElementById("artist-cover-input");

fileUploadIntro.addEventListener('change', function(upl) {
    let firstFile = upl.target.files[0]
    let uploadTask = storageRefIntro.put(firstFile)
    setTimeout(function(){
        alertUploadDone();
    },5000);
});

fileUploadAbout.addEventListener('change', function(upl) {
    let firstFile = upl.target.files[0]
    let uploadTask = storageRefAbout.put(firstFile)
    setTimeout(function(){
        alertUploadDone();
    },5000);
});
fileUploadSchedule.addEventListener('change', function(upl) {
    let firstFile = upl.target.files[0]
    let uploadTask = storageRefSchedule.put(firstFile)
    setTimeout(function(){
        alertUploadDone();
    },5000);
});
fileUploadOrkas.addEventListener('change', function(upl) {
    let firstFile = upl.target.files[0]
    let uploadTask = storageRefOrkas.put(firstFile)
    setTimeout(function(){
        alertUploadDone();
    },5000);
});
fileUploadContact.addEventListener('change', function(upl) {
    let firstFile = upl.target.files[0]
    let uploadTask = storageRefContact.put(firstFile)
    setTimeout(function(){
        alertUploadDone();
    },5000);
});
fileUploadArtist.addEventListener('change', function(upl) {
    let firstFile = upl.target.files[0]
    let uploadTask = storageRefArtist.put(firstFile)
    setTimeout(function(){
        alertUploadDone();
    },5000);
});
