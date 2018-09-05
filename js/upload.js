// Storage

var storageRef = firebase.storage().ref('cover/artist-cover');
var fileUpload = document.getElementById("artist-cover-input");

fileUpload.addEventListener('change', function(evt) {
    let firstFile = evt.target.files[0]
    let uploadTask = storageRef.put(firstFile)
});
