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
    });

    video.on("playing", function () {
      console.warn("playing");
      projectionist.landing.illuminate();
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
  illuminate: function () {
    $('h1').addClass('on');
  }
}
