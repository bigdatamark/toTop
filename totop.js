/*
|--------------------------------------------------------------------------
| UItoTop jQuery Plugin 2.0 by Mark D. Adams
| http://www.bigdatamark.com/
|--------------------------------------------------------------------------
*/
$(function($) {
  var settings = {
    text: "To Top",
    min: 200,
    max: 100,
    inDelay: 600,
    outDelay: 400,
    containerID: "toTop",
    containerHoverID: "toTopHover",
    scrollSpeed: 1200,
    easingType: "linear"
  };
  var containerIDhash = "#" + settings.containerID;
  var containerHoverIDHash = "#" + settings.containerHoverID;

  $("body").append(
    '<a href="#" id="' + settings.containerID + '">' + settings.text + "</a>"
  );
  
  $(containerIDhash)
    .on("click.UItoTop", function(event) {
      var scrollToPos = 0;
      if (!$(containerIDhash).hasClass("special")) {
        scrollToPos = $(window).scrollTop() + $(window).height();
      }
      $("html, body").animate(
        { scrollTop: scrollToPos },
        settings.scrollSpeed,
        settings.easingType
      );
      event.preventDefault();
    })
  
    .prepend('<span id="' + settings.containerHoverID + '"></span>')
  
    .hover(function() {
      $(containerHoverIDHash).stop().animate(
        {
          opacity: 1
        },
        settings.inDelay,
        "linear"
      );
    });

  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop();
    if (scrollPos <= settings.max) {
      $(containerIDhash).toggleClass("special", false);
      $(containerIDhash).fadeIn(settings.inDelay);
    } else if (scrollPos > settings.min) {
      $(containerIDhash).toggleClass("special", true);
      $(containerIDhash).fadeIn(settings.inDelay);
    } else $(containerIDhash).fadeOut(settings.Outdelay);
  });
})(jQuery);
