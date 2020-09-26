//Navbar
var i = 0;
document.getElementById("img-btn").onclick = function() {
  i++;
  if (i % 2 != 0) {
    var nav = document.getElementById("hor-nav");
    nav.style.width = "100%";
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 900) {
      nav.style.height = "80%";
    }
  } else {
    var nav = document.getElementById("hor-nav");
    nav.style.width = "80px";
    nav.style.height = "60px";
  }
}
