const count = function(str) {
    let count = str.split(" ").length
    if (count <= 1) {
        return `falta coisa`
    }
    return count
}

console.log(count("hello world"))
console.log(count(""))
console.log(count("hello world"))

