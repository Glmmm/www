const mult = function (num1, num2) {
    let aux = 0
    for (let i = 0; i < num2; i++) {
        aux += num1
    }
    console.log(aux)
}

mult(2, 4)
mult(500, 2)
mult(5, 5)
mult(0,0)
mult(0, 7)