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
        createSelect.className = "uk-select";
        createSelect.id = "form-stacked-select";
        var createOptionMorning = document.createElement("option");
        var morning = document.createTextNode("Morning");
        var createOptionNoon = document.createElement("option");
        var noon = document.createTextNode("Noon");
        var createOptionEvening = document.createElement("option");
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
        createInput.className = "uk-input uk-margin-small-right monday";
        createInput.type = "text";
        createInput.placeholder = (id.detail);
        var createSelectDiv = document.createElement("div");
        createSelectDiv.className = "uk-form-controls";
        var createSelect = document.createElement("select");
        createSelect.className = "uk-select";
        createSelect.id = "form-stacked-select";
        var createOptionMorning = document.createElement("option");
        var morning = document.createTextNode("Morning");
        var createOptionNoon = document.createElement("option");
        var noon = document.createTextNode("Noon");
        var createOptionEvening = document.createElement("option");
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
        createInput.className = "uk-input uk-margin-small-right monday";
        createInput.type = "text";
        createInput.placeholder = (id.detail);
        var createSelectDiv = document.createElement("div");
        createSelectDiv.className = "uk-form-controls";
        var createSelect = document.createElement("select");
        createSelect.className = "uk-select";
        createSelect.id = "form-stacked-select";
        var createOptionMorning = document.createElement("option");
        var morning = document.createTextNode("Morning");
        var createOptionNoon = document.createElement("option");
        var noon = document.createTextNode("Noon");
        var createOptionEvening = document.createElement("option");
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
        createInput.className = "uk-input uk-margin-small-right monday";
        createInput.type = "text";
        createInput.placeholder = (id.detail);
        var createSelectDiv = document.createElement("div");
        createSelectDiv.className = "uk-form-controls";
        var createSelect = document.createElement("select");
        createSelect.className = "uk-select";
        createSelect.id = "form-stacked-select";
        var createOptionMorning = document.createElement("option");
        var morning = document.createTextNode("Morning");
        var createOptionNoon = document.createElement("option");
        var noon = document.createTextNode("Noon");
        var createOptionEvening = document.createElement("option");
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
        createInput.className = "uk-input uk-margin-small-right monday";
        createInput.type = "text";
        createInput.placeholder = (id.detail);
        var createSelectDiv = document.createElement("div");
        createSelectDiv.className = "uk-form-controls";
        var createSelect = document.createElement("select");
        createSelect.className = "uk-select";
        createSelect.id = "form-stacked-select";
        var createOptionMorning = document.createElement("option");
        var morning = document.createTextNode("Morning");
        var createOptionNoon = document.createElement("option");
        var noon = document.createTextNode("Noon");
        var createOptionEvening = document.createElement("option");
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
        createInput.className = "uk-input uk-margin-small-right monday";
        createInput.type = "text";
        createInput.placeholder = (id.detail);
        var createSelectDiv = document.createElement("div");
        createSelectDiv.className = "uk-form-controls";
        var createSelect = document.createElement("select");
        createSelect.className = "uk-select";
        createSelect.id = "form-stacked-select";
        var createOptionMorning = document.createElement("option");
        var morning = document.createTextNode("Morning");
        var createOptionNoon = document.createElement("option");
        var noon = document.createTextNode("Noon");
        var createOptionEvening = document.createElement("option");
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
        createInput.className = "uk-input uk-margin-small-right monday";
        createInput.type = "text";
        createInput.placeholder = (id.detail);
        var createSelectDiv = document.createElement("div");
        createSelectDiv.className = "uk-form-controls";
        var createSelect = document.createElement("select");
        createSelect.className = "uk-select";
        createSelect.id = "form-stacked-select";
        var createOptionMorning = document.createElement("option");
        var morning = document.createTextNode("Morning");
        var createOptionNoon = document.createElement("option");
        var noon = document.createTextNode("Noon");
        var createOptionEvening = document.createElement("option");
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

// Log newly entered text
var inputs = document.getElementsByClassName("monday");
function monSave() {
    for(var i = 0; i < inputs.length; i++) {
        console.log(inputs[i].value);
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
