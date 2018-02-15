$(document).ready(function() {
    var userid = 247085381,
      access_token = "247085381.1677ed0.0e315a9871ce42dfab591367b7023996",
      count = 5;

    var feed = new Instafeed({

      mock: true,
      get: 'user',
      userId: userid,
      sortBy: 'random',
      accessToken: access_token,

      success: function(response) {
        var slides = response.data.map(function(obj) {
          var rObj = {};
          rObj["src"] = obj.images.standard_resolution.url;
          return rObj;
        });

        $('.main-content').vegas({
            delay: 7000,
            timer: false,
            shuffle: true,
            firstTransition: 'fade',
            firstTransitionDuration: 5000,
            transitionDuration: 2000,
            transition: 'blur2',
            align: 'middle',
            overlay: 'css/overlays/07.png',
            slides: slides
        });
      }

    });
    feed.run();
  });
