$(document).ready(function () {
  $(window).on("load", function () {
    $(".preloader").addClass("complete");
  });

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll >= 50) {
      $(".sticky").addClass("stickyadd");
    } else {
      $(".sticky").removeClass("stickyadd");
    }
  });
  //////////////////////////////////mode sombre ///////////////////////
  $(document).ready(function () {
    $("#themeToggle").click(function () {
      $("#colorPicker").toggle();
    });

    // Apply selected color to body background
    $(".color-option").click(function () {
      var color = $(this).data("color");
      $("body").css("background-color", color);
    });
  });

  //////////////////////////////// progress bars

  var waypoint = new Waypoint({
    element: document.getElementById("experience"),
    handler: function () {
      var p = document.querySelectorAll(".progress-bar");
      p[0].setAttribute("style", "width:90%;transition:1s all;");
      p[1].setAttribute("style", "width:85%;transition:1.5s all;");
      p[2].setAttribute("style", "width:80%;transition:1.7s all;");
      p[3].setAttribute("style", "width:80%;transition:2s all;");
      p[4].setAttribute("style", "width:85%;transition:2.3s all;");
      p[5].setAttribute("style", "width:80%;transition:2.5s all;");
    },
    // un décalage à gauche ou à droite des colonnes
    offset: "90%",
  });

  var $child = $(".way-fade-up").children();
  $child.each(function () {
    var self = $(this);
    $(this).waypoint(
      function () {
        self.addClass("animated fadeInUp");
      },
      { offset: "90%" }
    );
  });

  var $child = $(".way-fade-left").children();
  $child.each(function () {
    var self = $(this);
    $(this).waypoint(
      function () {
        self.addClass("animated fadeInLeft");
      },
      { offset: "90%" }
    );
  });

  var $child = $(".way-fade-right").children();
  $child.each(function () {
    var self = $(this);
    $(this).waypoint(
      function () {
        self.addClass("animated fadeInRight");
      },
      { offset: "90%" }
    );
  });

  $(".owl-carousel").owlCarousel({
    loop: true,

    nav: false,

    autoplay: true,
    autoplayTimeout: 4000,
    items: 1,
    animateIn: "fadeInRight",
  });

  var filterizd = $(".filter-container").filterizr({
    animationDuration: 0.5,
  });

  var typed = new Typed(".element", {
    strings: ["Ahmed Boudjemaa", "a Developer", "a Designer", "a Businessman"],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000,
  });

  $("a").smoothScroll({
    speed: 2000,
  });
});
