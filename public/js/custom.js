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