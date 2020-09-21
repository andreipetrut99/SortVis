var barWidth = 10;
var spaceBetween = 10;
var canvaX;
var bars = [];
var c = document.getElementById("front-wrapper");
var slider = document.getElementById("myRange");
var sliderOutput = document.getElementById("sliderOutput");
sliderOutput.innerHTML = slider.value;

var ctx = c.getContext("2d");
ctx.translate(0.5, 0.5);

function createBars(n) { // n = number of bars
    bars = [];
    canvaX = 0;
    
    for (var i = 0; i < n; i++) {
        bars.push({
            x: canvaX + spaceBetween + barWidth,
            y: 120,
            width: barWidth,
            height: Math.round(Math.random() * 100)
        });
        canvaX += spaceBetween + barWidth;
        bars[i].y = 120 - bars[i].height;
    }
}

function drawBars(n) {
    createBars(n);
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
    ctx.imageSmoothingEnabled = true;
    ctx.lineWidth = 1;
    for (var i = 0; i < n; i++) {
        var bar = bars[i];
        ctx.rect(bar.x, bar.y, bar.width, bar.height);
        ctx.fillText(bar.height, bar.x, bar.y - 2);
    }
    
    //ctx.strokeStyle = "black";
    //bar = bars[bars.length - 1];
    //ctx.strokeRect(bar.x, bar.y, bar.width, bar.height);
    ctx.stroke();
}

slider.oninput = function() {
    drawBars(this.value);
    sliderOutput.innerHTML = this.value;
}