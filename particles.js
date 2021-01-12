const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.width = window.innerHeight;

let particlesArray;

// get mouse positon 
let mouse = {
    x: null,
    y: null,
    radius: (canvas.height/80) * (canvas.width/80)
}

window.addEventListener('mousemove', 
        function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    }
);

// create Particle class constructor 
class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX;
        this.directionY;
        this.size;
        this.color;
    }
    // draw method for each particle 
    draw() {
        ctx.beginPath();
        ctx.arc( this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = '#fd86d1';
        ctx.fill();
    }

    // check particle position, check mouse position, move the particle, draw the particle
    update() {
        // check if particle is still within canvas
        if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }

        // Circle Collision Mozilla
        // check collision detection - mouse position / particle position
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx*dx + dy*dy);
        if (distance < mouse.radius + this.size){
            if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                this.x += 10;
            }
            if (mouse.x > this.x && this.x > this.size * 10) {
                this.x -= 10;
            }
            if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                this.y += 10;
            }
            if (mouse.y > this.y && this.y > this.size * 10) {
                this.y -=  10
            }
            // move the particle
            this.x += this.directionX;
            this.y += this.directionY;
            // draw particle
            this.draw()
        }
    }

}


