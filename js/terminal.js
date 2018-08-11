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
        console.log(createMainDiv);
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
