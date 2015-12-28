$(document).ready(function () {
  projectionist.landing.init();
});

projectionist.landing = {
  init: function (video_element_id) {

    projectionist.landing.waitForBackgroundImage();

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
    $('.loading').addClass('hide');
  },
  waitForBackgroundImage: function () {
    var content = $('.overlay');
    content.hide();

    var timeoutId = setTimeout(function () {
       content.show();
    }, 3000);

    $('<img>').load(function(){
        // make sure to bind the load event BEFORE setting the "src"
        content.show();
        clearTimeout(timeoutId);
    }).attr('src',function(){
        var imgUrl = $('body').css('background-image');
        imgUrl = imgUrl.substring(4, imgUrl.length-1).trim();
        imgUrl = imgUrl.replace(/"/g, '');
        return imgUrl;
    }).each(function() {
        // fail-safe for cached images which sometimes don't trigger "load" events
        if(this.complete) $(this).load();
    });
  }
}
