const min_max = function (num, min, max, inclusivo) {
    if (inclusivo === true) {
        return num >= min && num <= max
    }
    return num > min && num < max
}

console.log(min_max(10, 50, 100))
console.log(min_max(16, 100, 160))
console.log(min_max(3, 3, 150))
console.log(min_max(3, 3, 150, true))
console.log(min_max(100, 50, 100, true)) 
