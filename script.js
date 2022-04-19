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
        return true;
      }
    }
  }
  return false;
}

for (let i = -300; i <= 300; i++) {
  for (let j = -300; j <= 300; j++) {
    console.log(i / 50);
    let iterateX = i / 100;
    let iterateY = j / 100;
    if (iterate(math.complex(`${iterateX}+${iterateY}i`)) === false) {
      ctx.fillRect(i, j, 1, 1);
    }
  }
}
