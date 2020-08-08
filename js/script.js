// Scroll to the top of the page - https://codepen.io/deveb22/pen/QxPmGz
jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("#scroll-to-top").fadeIn("slow");
    } else {
      $("#scroll-to-top").fadeOut("slow");
    }
  });
  $("#scroll-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500, "swing");
    return false;
  });
});

// Smooth scroll to active article - https://stackoverflow.com/questions/35992900/bootstrap-accordion-scroll-to-top-of-active-open-accordion-on-click
$("#accordion").on("shown.bs.collapse", function () {
  var padding = 73;
  var panel = $(this).find(".in");

  $("html, body").animate(
    {
      scrollTop: panel.offset().top - padding,
    },
    1000,
    "swing"
  );
});

//Switch between welcome and about sections - https://codepen.io/steveberrill/pen/owKeVE
$("#about").hide();
$("#about-link").on("click", function () {
  $("#welcome, #about").slideToggle(600);
});

//Style "About" nav link after each click
var aboutLink = document.getElementById("about-link");
aboutLink.addEventListener("click", function () {
  var clicked = document.getElementsByClassName("clicked");
  if (this.className !== "clicked") {
    this.className += "clicked";
  } else {
    clicked[0].className = clicked[0].className.replace("clicked", "");
  }
});

//Smooth scroll to articles from "Questions &  Anecdotes" dropdown menu - https://css-tricks.com/snippets/jquery/smooth-scrolling/
$("a.scroll").click(function (event) {
  var target = $("[name=" + this.hash.slice(1) + "]");

  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: target.offset().top,
    },
    1000,
    "swing",
    function () {
      // Callback after animation
      // Must change focus!
      var $target = $(target);
      $target.focus();
      if ($target.is(":focus")) {
        // Checking if the target was focused
        return false;
      } else {
        $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
        $target.focus(); // Set focus again
      }
    }
  );
});

// Opens accordion automatically if an accordion target is accessed from another page
// https://gist.github.com/raddevon/8958486
function openAnchorAccordion() {
  if (window.location.hash) {
    var jQuerytarget = jQuery(".questions").find(window.location.hash);
    //console.log( jQuerytarget );
    if (jQuerytarget.hasClass("panel-collapse")) {
      var jQuerytargetAccordion = jQuerytarget.find(".panel-collapse");
      console.log(jQuerytargetAccordion);
      jQuerytarget.collapse("show");
      window.location.href = window.location.href.replace(/#.*$/, "#");
    }
  }
}

openAnchorAccordion();

jQuery(".questions").on("click", "a", openAnchorAccordion);
