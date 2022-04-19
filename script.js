

let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

function itterate(z) {
    let answer = z
    for (let i = 0; i < 100; i++) {
        {
            answer = math.add(math.multiply(answer, answer), z)
            console.log(answer)
            if(isNaN(answer.re) || isNaN(answer.im)) {
                return true
            }
        }
    }
    return false
}

for (let i = -2; i < 2; i++) {
    console.log(i)
    
}

console.log(itterate(math.complex(`1 + i`)))