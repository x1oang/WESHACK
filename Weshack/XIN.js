const canvas = document.getElementById('blackhole-animation');
const ctx = canvas.getContext('2d');
const infoBox = document.getElementById('info-box');
const particles = [];

const BLACK_HOLE_RADIUS = 50;
const PARTICLE_COUNT = 300;
const CENTER_X = canvas.width / 2;
const CENTER_Y = canvas.height / 2;

for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
        angle: Math.random() * Math.PI * 2,
        radius: Math.random() * (canvas.width / 2 - BLACK_HOLE_RADIUS) + BLACK_HOLE_RADIUS,
        speed: Math.random() * 0.01 + 0.01,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        size: Math.random() * 2 + 1,
    });
}

function drawBlackHole() {
    ctx.beginPath();
    ctx.arc(CENTER_X, CENTER_Y, BLACK_HOLE_RADIUS, 0, Math.PI * 2);
    ctx.fillStyle = 'black';
    ctx.shadowColor = '#000';
    ctx.shadowBlur = 20;
    ctx.fill();
    ctx.closePath();
}

function updateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBlackHole();

    particles.forEach((particle) => {
        particle.angle += particle.speed;
        particle.radius -= 0.2;

        if (particle.radius < BLACK_HOLE_RADIUS) {
            particle.radius = Math.random() * (canvas.width / 2 - BLACK_HOLE_RADIUS) + BLACK_HOLE_RADIUS;
            particle.angle = Math.random() * Math.PI * 2;
        }

        const x = CENTER_X + particle.radius * Math.cos(particle.angle);
        const y = CENTER_Y + particle.radius * Math.sin(particle.angle);

        ctx.beginPath();
        ctx.arc(x, y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.closePath();
    });

    requestAnimationFrame(updateParticles);
}

updateParticles();

function toggleInfoBox() {
    if (infoBox.style.right === '0px') {
        infoBox.style.right = '-400px';
    } else {
        infoBox.style.right = '0px';
    }
}

document.getElementById('blackhole-animation').addEventListener('click', toggleInfoBox);
