import "./styles.css";

let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
context.lineWidth = 2;

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 0; j++) {
    let width = 30;
    let height = 30;
    let gap = 10;
    let x = 100 + (width + gap) * i;
    let y = 100 + (height + gap) * j;

    context.beginPath();
    context.rect(x, y, width, height);
    context.stroke();

    if (Math.random() > 0.5) {
      context.beginPath();
      context.rect(x + 4, y + 4, width - 8, height - 8);
      context.stroke();
    }
  }
}
// Rectangle
// context.fillStyle = "darkgreen";
// context.fillRect(10, 10, 290, 290);

// Border rectangle
// context.lineWidth = 5;
// context.beginPath();
// context.rect(20, 20, 270, 270);
// context.stroke();

// Arc
// context.beginPath();
// context.fillStyle = "red";
// context.arc(155, 155, 130, Math.PI*0.03, Math.PI*1.5);
// context.fill()
