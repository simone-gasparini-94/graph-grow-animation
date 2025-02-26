const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function getRandomPosition() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
    };
}

function drawCircle(x, y) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.strokeStyle = "white";
    ctx.lineWidth = 0.1;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function animation() {
    const circles = [];
    const numberOfCircles = 50;

    for (let i = 0; i < numberOfCircles; i++) {
        circles.push(getRandomPosition());
    }

    drawCircle(circles[0].x, circles[0].y);

    for (let i = 1; i < circles.length; i++) {

        let delayTime = 100 + Math.random() * 1000;
        
        await delay(delayTime);

        drawCircle(circles[i].x, circles[i].y);

        await delay(delayTime);

        drawLine(circles[i].x, circles[i].y, circles[i - 1].x, circles[i - 1].y);
    }
}

animation();
    