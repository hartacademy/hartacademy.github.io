// Storage
const storageService = firebase.storage();
const storageRef = storageService.ref();

document.getElementById('upload-box').addEventListener('change', handleFileUploadChange);
document.getElementById('upload-btn').addEventListener('click', handleFileUploadSubmit);
