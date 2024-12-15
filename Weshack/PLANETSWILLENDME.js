document.addEventListener("DOMContentLoaded", function () {
    const starsContainer = document.getElementById("stars");

    const numStars = 300;

    const starColors = ['#	#000000', '#7d12ff', '##ab20fd', '#200589', '##fbf8fd', '#9400D3', '#1E90FF'];

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.className = "star";

        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";

        const size = Math.random() * 8 + 4;
        star.style.width = size + "px";
        star.style.height = size + "px";

        const color = starColors[Math.floor(Math.random() * starColors.length)];
        star.style.backgroundColor = color;

        star.style.borderRadius = "50%";

        star.style.animationDuration = Math.random() * 3 + 2 + "s";

        starsContainer.appendChild(star);
    }
});

function drawPlanet(canvasId, drawCallback) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    drawCallback(ctx);
}

drawPlanet('saturn', (ctx) => {
    ctx.fillStyle = '#ffcc99';
    ctx.beginPath();
    ctx.arc(100, 100, 80, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ff9900';
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(100, 100, 110, 50, 0, 0, Math.PI * 2);
    ctx.stroke();
});

drawPlanet('mars', (ctx) => {
    ctx.fillStyle = '#cc3300';
    ctx.beginPath();
    ctx.arc(100, 100, 80, 0, Math.PI * 2);
    ctx.fill();
});

drawPlanet('earth', (ctx) => {
    ctx.fillStyle = '#0066cc';
    ctx.beginPath();
    ctx.arc(100, 100, 80, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#009933';
    ctx.beginPath();
    ctx.arc(100, 80, 70, 0, Math.PI);
    ctx.fill();
});

const infoBox = document.getElementById('info-box');
const planetName = document.getElementById('planet-name');
const planetInfo = document.getElementById('planet-info');

const planetData = {
    saturn: {
        name: "Saturn",
        info: "Structure. Like Jupiter, Saturn is made mostly of hydrogen and helium. At Saturn's center is a dense core of metals like iron and nickel surrounded by rocky material and other compounds solidified by intense pressure and heat."
    },
    mars: {
        name: "Mars",
        info: "Mars is the fourth planet from the Sun. The surface of Mars is orange-red because it is covered in iron(III) oxide dust, giving it the nickname the Red Planet. Mars is among the brightest objects in Earth's sky, and its high-contrast albedo features have made it a common subject for telescope viewing."
    },
    earth: {
        name: "Earth",
        info: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. This is enabled by Earth being an ocean world, the only one in the Solar System sustaining liquid surface water. Almost all of Earth's water is contained in its global ocean, covering 70.8% of Earth's crust."
    }
};

function showInfo(planet) {
    planetName.textContent = planetData[planet].name;
    planetInfo.textContent = planetData[planet].info;
    infoBox.classList.add('active');
    infoBox.style.bottom = '20px';
}

document.addEventListener('click', (e) => {
    if (!infoBox.contains(e.target) && !e.target.closest('.planet')) {
        infoBox.classList.remove('active');
    }
});

window.addEventListener("load", () => {
    const cutscene = document.getElementById("cutscene");
    setTimeout(() => {
        cutscene.style.display = "none";
    }, 3000);
});
