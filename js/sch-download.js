var schDownBtn = document.getElementById("download-schedule-btn");
var schContent = document.getElementById("schedule-content");

schDownBtn.onclick = function() {
    domtoimage.toBlob(document.getElementById("schedule-content"))
    .then(function(blob) {
        window.saveAs(blob, 'H-Art-schedule.jpg');
    });
}