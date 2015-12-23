$(document).ready(function () {
  projectionist.landing.init();
});

projectionist.landing = {
  init: function (video_element_id) {

    var uaParser = new UAParser();

    if (uaParser.getOS().name === "iOS" || (screen.width < 450)) {
      projectionist.landing.initIOS();
      return;
    }

    projectionist.landing.video();
  },
  initIOS: function () {
    projectionist.landing.abandonVideo();
  },
  video: function () {
    $('#landing_video').show();

    var video = videojs('landing_video', {
      "controls": false,
      "loadingSpinner": false,
      "autoplay": true,
      "loop": true,
      "preload": "auto"
    });

    video.on('canplay', projectionist.landing.loadingFinished);
    video.on('error', projectionist.landing.abandonVideo);
  },
  abandonVideo: function () {
    $('#landing_video').remove();
    projectionist.landing.loadingFinished();
  },
  loadingFinished: function () {
    $('.loading').hide();
  }
}
