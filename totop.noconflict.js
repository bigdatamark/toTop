nc.fn.UItoTop = (function(o) {
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

  nc("body").append(
    '<a href="#" id="' + settings.containerID + '">' + settings.text + "</a>"
  );

  nc(containerIDhash)
    .on("click.UItoTop", function(event) {
      var scrollToPos = 0;
      if (!nc(containerIDhash).hasClass("special")) {
        scrollToPos = nc(window).scrollTop() + nc(window).height();
      }
      nc("html, body").animate(
        { scrollTop: scrollToPos },
        settings.scrollSpeed,
        settings.easingType
      );
      event.preventDefault();
    })
  
    .prepend('<span id="' + settings.containerHoverID + '"></span>')
  
    .hover(function() {
      nc(containerHoverIDHash).stop().animate(
        {
          opacity: 1
        },
        settings.inDelay,
        "linear"
      );
    });

  nc(window).scroll(function() {
    var scrollPos = nc(window).scrollTop();
    if (scrollPos <= settings.max) {
      nc(containerIDhash).toggleClass("special", false);
      nc(containerIDhash).fadeIn(settings.inDelay);
    } else if (scrollPos > settings.min) {
      nc(containerIDhash).toggleClass("special", true);
      nc(containerIDhash).fadeIn(settings.inDelay);
    } else nc(containerIDhash).fadeOut(settings.Outdelay);
  });
  
})(jQuery);
