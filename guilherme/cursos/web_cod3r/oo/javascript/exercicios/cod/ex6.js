const inverso = function (param) {
    switch (param) {
        case param === true || param === false:
            return !param;
            break;
        case param < 0:
            return `-${param}`;
            break;
        case param == 0:
            return 
        case param < 0:
            return param * (-1);
            break;
        default:
            return `apenas booleanos e numeros, este valor é do tipo ${typeof (param)}`;
    }
    // if (param === true || param === false) {
    //     return !param
    // } if (param >= 0) {
    //     if (param == 0) {
    //         return param
    //     }
    //     return param * (-1)
    // } if (param < 0) {
    //     return param * (-1)
    // } else {
    //     return `apenas booleanos ou números, seu valor foi do tipo ${typeof (param)}`
    // }
}

console.log(inverso(true))
console.log(inverso(false))
console.log(inverso(1))
console.log(inverso(0))
console.log(inverso(-1))
console.log(inverso(-4))
console.log(inverso('alo'))
console.log(inverso('0'))
console.log(inverso('3'))
console.log(inverso())