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
}


