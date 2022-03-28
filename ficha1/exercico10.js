function fatorial(number){
    var multiplicador = 1
    for (let i = 1; i < number + 1; i++) {
        multiplicador *=i;
    }
    return multiplicador;
}

var result = fatorial(5)
console.log(result)