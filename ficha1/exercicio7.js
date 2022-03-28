function calculater(number1,number2,operator){
    if (operator=="+") {
        return number1+number2
    }
    else if (operator=="-") {
        return number1-number2
    }
    else if (operator=="*") {
        return number1*number2

    }
    else if(operator=="/"){
        return number1/number2
    }
    else if (operator=="^") {
        return Math.pow(number1,number2)
    }
}
var soma = calculater(2,2,"+")
var subtracao = calculater(2,2,"-")
var multiplicacao = calculater(2,2,"*")
var divisao = calculater(2,2,"/")
var expoente = calculater(2,2,'^')
console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)
console.log(expoente)
