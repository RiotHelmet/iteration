let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
ctx.translate(centerX, centerY);

function iterate(z) {
  let answer = z;
  for (let i = 0; i < 20; i++) {
    {
      answer = math.add(math.pow(answer, 2), z);
      if (isNaN(answer.re) === true || isNaN(answer.im) === true) {
        return { bool: true, iteration: i };
      }
    }
  }
  return { bool: false, itteration: 0 };
}

for (let i = -250; i <= 150; i++) {
  for (let j = -200; j <= 200; j++) {
    console.log(i / 50);
    let iterateX = i / 100;
    let iterateY = j / 100;
    if (iterate(math.complex(`${iterateX}+${iterateY}i`)).bool === true) {
      iteration = iterate(math.complex(`${iterateX}+${iterateY}i`)).iteration;
      ctx.fillStyle = `rgb(${iteration * 30},39,0)`;
      ctx.fillRect(i, j, 1, 1);
    }
  }
}
