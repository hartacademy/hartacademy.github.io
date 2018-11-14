var schDownBtn = document.getElementById("download-schedule-btn");
var schContent = document.getElementById("schedule-content");

schDownBtn.onclick = function() {
    domtoimage.toPng(schContent)
    .then(function(dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        window.saveAs(dataUrl, 'H-Art-schedule.png');
    });
}
