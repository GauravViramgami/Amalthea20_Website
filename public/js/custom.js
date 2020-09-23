//JavaScript for playing main-loop after main-start
var player = document.getElementById('myVideo');
var mp4Vid = document.getElementById('mp4Source');
player.addEventListener('ended', myHandler, false);
function myHandler(e) {
    if(!e){
        e = window.event;
    }
    $(mp4Vid).attr('src', 'main-loop.mp4');
    player.load();
    player.play();
}

// int clickCount = 0;
//
// function openNav() {
//   clickCount++;
//   /*if (clickCount%2 == 0) {*/
//     var nav = document.getElementById("hor-nav");
//     nav.style.width = "120%";
//     nav.style.height = "80%";
//   // } else {
//   //   document.getElementById("hor-nav").style.width = "120%";
//   //   document.getElementById("hor-nav").style.height = "80%";
//   // }
// }
