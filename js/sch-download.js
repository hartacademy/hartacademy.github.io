var schDownBtn = document.getElementById("download-schedule-btn");
var schContent = document.querySelector("#schedule-content");

schDownBtn.onclick = function() {
    html2canvas(schContent).then(canvas => {
        saveAs(canvas.toDataURL(), 'h-art-schedule.png');
    });
}
