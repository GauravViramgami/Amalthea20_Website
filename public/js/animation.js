let canvas = document.getElementById("firstPageBgLayer1");
let ctx = canvas.getContext("2d");

let WIDTH = 1535;
let HEIGHT = 750;

class Animation {
  constructor(WIDTH, HEIGHT) {
    this.width = WIDTH;
    this.height = HEIGHT;
    
  }


}

class Bubble {
  constructor(x, y, r, dirx, diry) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.dirx = dirx;
    this.diry = diry;
  }

  move() {
    this.x = this.x + this.dirx;
    this.y = this.y + this.diry;
  }

  show(ctx) {
    ctx.fillStyle = "#b4f2e1"
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
  }
}

let lastTime = 0;

function animationLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  animation.update(deltaTime);
  animation.draw(ctx);

  requestAnimationFrame(animationLoop);
}

requestAnimationFrame(animationLoop);
