function final_grade(grade_p, grade_t){
    var balance= grade_p*0.7 + grade_t*0.3;
    console.log("A sua nota foi:" + balance)
    if (balance<9.5)
    {
        console.log("REPROVADO")
    }
    else{
        console.log("APROVADO")
    }
}

final_grade(8,1)
