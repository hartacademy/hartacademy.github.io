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

var inputs = document.getElementsByClassName("monday");
function abc() {
    for(var i = 0; i < inputs.length; i++) {
        console.log(inputs[i].value);
    }
}

function addRow() {
    var select = document.getElementsByClassName("monday");
    var clone = select.cloneNode(true);
    document.getElementById('monday').appendChild(clone);
}

function removeRow() {
    var select = document.getElementById('monday');
    select.removeChild(select.lastChild);
}