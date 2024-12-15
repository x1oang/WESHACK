document.addEventListener("DOMContentLoaded", function () {
    const starsContainer = document.getElementById("stars");

    const numStars = 300;

    const starColors = ['#	#000000', '#7d12ff', '##ab20fd', '#200589', '##fbf8fd', '#9400D3', '#1E90FF'];

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.className = "star";

        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";

        const size = Math.random() * 6 + 2;
        star.style.width = size + "px";
        star.style.height = size + "px";

        const color = starColors[Math.floor(Math.random() * starColors.length)];
        star.style.backgroundColor = color;

        star.style.borderRadius = "50%";

        star.style.animationDuration = Math.random() * 3 + 2 + "s";

        starsContainer.appendChild(star);
    }
});

