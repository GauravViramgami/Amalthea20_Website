$('.img-col input').attr('src', '/images/logo.svg');

var slideIndex = [1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1);

//var slideIndexo = 0;
//carousel();

function plusSlides(n) {
    showSlides(slideIndex[0] += n);
    var element = document.getElementsByClassName(slideId[0]);
    if(n > 0){
        for (i = 0; i < element.length; i++) {
            element[i].classList.remove("animate-left");
            element[i].classList.add("animate-right");
        }
    }
    if(n < 0){
        for (i = 0; i < element.length; i++) {
            element[i].classList.remove("animate-right");
            element[i].classList.add("animate-left");
        }
    }
}

//For the dots.
function currentSlide(n) {
    showSlides(slideIndex[0] = n);
}

//Function to show only the nth slide and rest are hidden.
function showSlides(n) {
    var i;
    var x1 = document.getElementsByClassName(slideId[0]);
    var x2 = document.getElementsByClassName(slideId[1]);
    var dots = document.getElementsByClassName("dot");

    if (n > x1.length) {
        slideIndex[0] = 1;
    }
    if (n < 1) {
        slideIndex[0] = x1.length;
    }
    for (i = 0; i < x1.length; i++) {
        x1[i].style.display = "None";
        x2[i].style.display = "None";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //slideIndexo++;
    x1[slideIndex[0]-1].style.display = "block";
    x2[slideIndex[0]-1].style.display = "block";
    dots[slideIndex[0]-1].className += " active";
}

/*
function carousel() {
    var i;
    var x1 = document.getElementsByClassName(slideId[0]);
    var x2 = document.getElementsByClassName(slideId[1]);
    for (i = 0; i < x1.length; i++) {
        x1[i].style.display = "None";
        x2[i].style.display = "None";
    }
    slideIndexo++;
    if (slideIndexo > x1.length) {
        slideIndexo = 1;
    }
    x1[slideIndexo-1].style.display = "block";
    x2[slideIndexo-1].style.display = "block";
    setTimeout(carousel, 5000); // Change image every 2 seconds
}
*/

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
    if (document.body.scrollTop >= 800 || document.documentElement.scrollTop >= 800) {
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
