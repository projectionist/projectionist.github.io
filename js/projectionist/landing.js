$(document).ready(function () {
  //projectionist.landing.init();
});

projectionist.landing = {
  init: function (video_element_id) {

    var uaParser = new UAParser();

    if (uaParser.getOS().name === "iOS" || (screen.width < 450)) {
      this.initIOS();
      return;
    }

    projectionist.landing.video();
  },
  initIOS: function () {
    $('#landing_video').remove();
    $('.overlay').show();
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

    video.on("loadeddata", function () {
      projectionist.landing.switchOn();
    });

    video.on('error', function () {
      $('#landing_video').remove();
    });
  },
  switchOn: function () {
    $('.overlay').addClass('on');
  }
}
