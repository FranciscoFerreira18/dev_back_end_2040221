function month(month_number){
    var month=["Janeiro","Feveveiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
    if (month_number >= 13) {
        console.log("Número inválido")
    } else {
        console.log(month[month_number-1])
    }
}
month(13)