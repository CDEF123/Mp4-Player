const video = document.getElementById("video");

function loadFile(event) {
    const file = event.target.files[0];
    if (file) {
        const fileURL = URL.createObjectURL(file);
        video.src = fileURL;
        video.play();
    }
}

function playPause() {
    if (video.paused || video.ended) {
        video.play();
    } else {
        video.pause();
    }
}

function skip(seconds) {
    video.currentTime += seconds;
}

function stopVideo() {
    video.pause();
    video.currentTime = 0;
}
