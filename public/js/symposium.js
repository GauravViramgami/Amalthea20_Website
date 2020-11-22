$('.img-col input').attr('src', '/images/logo.svg');
var myNav = document.getElementById('header');
window.onscroll = function() {
  "use strict";

  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (width < 777) {
    var nav = document.getElementById("hor-nav");
    if (nav.style.height < 70) {
      if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        $('.img-col input').attr('src', '/images/logo_white.svg');
        myNav.classList.add("scroll");
        myNav.classList.remove("no-scroll");
      } else {
        $('.img-col input').attr('src', '/images/logo.svg');
        myNav.classList.add("no-scroll");
        myNav.classList.remove("scroll");
      }
    } else {
      if (document.body.scrollTop >= 60 || document.documentElement.scrollTop >= 60) {
        $('.img-col input').attr('src', '/images/logo_white.svg');
        myNav.classList.add("scroll");
        myNav.classList.remove("no-scroll");
      } else {
        $('.img-col input').attr('src', '/images/logo.svg');
        myNav.classList.add("no-scroll");
        myNav.classList.remove("scroll");
      }
    }
  } else {
    if (document.body.scrollTop >= 700 || document.documentElement.scrollTop >= 700) {
      $('.img-col input').attr('src', '/images/logo_white.svg');
      myNav.classList.add("scroll");
      myNav.classList.remove("no-scroll");
    } else {
      $('.img-col input').attr('src', '/images/logo.svg');
      myNav.classList.add("no-scroll");
      myNav.classList.remove("scroll");
    }
  }
};
