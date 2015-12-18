$(document).ready(function () {
  projectionist.projection();
});

projectionist.projection = function () {
  var video = videojs("projection_video", {
    "controls": false,
    "loadingSpinner": false,
    "autoplay": false,
    "loop": true,
    "preload": "auto"
  });

  video.ready(function () {
    video.play();
  });

  video.on("playing", function () {
    resize();
    console.warn("playing");
  });
}
