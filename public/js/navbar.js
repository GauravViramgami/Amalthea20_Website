//Navbar
var i = 0;
document.getElementById("img-btn").onclick = function() {
  i++;
  if (i % 2 != 0) {
    var nav = document.getElementById("hor-nav");
    nav.style.width = "100%";
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 768) {
      nav.style.height = "80%";
    } else if (width >= 768 && width < 992) {
      nav.style.height = "300px";
    } else if (width < 1302) {
      nav.style.height = "150px";
    } else if (width >= 1302 && width < 1340) {
      nav.style.height = "80px";
    } else {
      nav.style.height = "60px";
    }
  } else {
    var nav = document.getElementById("hor-nav");
    nav.style.width = "80px";
    nav.style.height = "60px";
  }
}
