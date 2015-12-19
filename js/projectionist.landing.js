$(document).ready(function () {
  projectionist.landing.init();
});

projectionist.landing = {
  init: function (video_element_id) {

    var video = videojs('landing_video', {
      "controls": false,
      "loadingSpinner": false,
      "autoplay": false,
      "loop": true,
      "preload": "auto"
    });

    video.ready(function () {
      video.play();
      projectionist.landing.switchOn();
    });

    video.on("playing", function () {
      console.warn("playing");
    });

    this.trackWindowSize(video);
  },
  trackWindowSize: function (video) {

    var resize = function () {
      var videoElement = $(video.el()).find('video')[0];
      if (!(videoElement instanceof HTMLVideoElement)) return;

      videoElement.width = Math.max(window.outerWidth, 800);
    }

    // avoid issues with resize event timing
    var delayedDoubleResize = function () {
      resize();
      setTimeout(resize, 650);
    }

    resize();
    $(window).resize(delayedDoubleResize);
  },
  switchOn: function () {
    $('.projected-text').addClass('on');
  }
}
