function indice_massa(kg,altura){
    var imc = kg/(altura)**2
    if(imc < 18.5){
        return("Abaixo do peso")
    }
    else if(imc > 18.5 && imc< 25){
        return("no peso normal")
    }
    else if(imc > 25 && imc < 30){
        return("acima do peso")
    }
    else if(imc>30){
        return("obeso")
    }
}

// var array=indice_massa(80, 1.50)
// console.log (array)

function invert(frase){
    var frase_dividida = frase.split(" ")
    var resultado = ""
    for (let j = 0; j < frase_dividida.length; j++) {
        var word = frase_dividida[j]
        for (let i = word.lengt -1; i >= 0; i--) {
        resultado+=word[i]
        }
    }   
    return resultado
    
}

// var str = invert("Hoje e Domingo")
// console.log(str)

function vogal(frase){
     var numero_vogais = 0
     for (let i = 0; i < frase.length; i++) {
         if (frase[i] == "a" || frase[i] == "e" || frase[i]=="i" || frase[i]=="o" || frase[i]=="u"){
             numero_vogais++
         }
         
     }
     return numero_vogais
}

// var frase = vogal("ola mundo")
// console.log(frase)

function letter(frase, letra){
    var numero_letra = 0;
    var LowerStr = frase.toLowerCase()
    for (let i = 0; i < LowerStr.length; i++) {
        if (LowerStr[i] == letra){
            numero_letra++;
        }
        
    }
    return numero_letra
}

//  var letras = letter("ola mundO","o")
//  console.log(letras)

function work_time(Harrive,Marrive,Sarrive,Hleave,Mleave,Sleave){
    var harrive = Harrive * 3600
    var marrive = Marrive * 60
    var hleave = Hleave * 3600
    var mleave = Mleave * 60

    var totalarrive = harrive + marrive + Sarrive
    var totalleave = hleave + mleave + Sleave

    var time_work = totalleave - totalarrive
    console.log(time_work)

    var work_timeH = Math.floor((time_work / 60 / 60))
    var restohora = Math.floor((time_work % 3600))
    var work_timeM = Math.floor((restohora / 60)) 
    var seconds = Math.floor((restohora % 60))

    console.log("Horas: "+ work_timeH)
    console.log("Minutos: "+ work_timeM)
    console.log("Segundos: "+seconds)
    
}

// var horas = work_time(8,0,0,9,1,1)
// console.log(horas)

function square(l,a){
    var str=""
    for (let i = 0; i < l; i++) {
        str+="*"

    }
    for (let x = 0; x < a; x++) {
        console.log(str)
        
    }
}

// square(20,10)

function trianglo(a){
    var str=""
    for (let i = 0; i < a; i++) {
        str+="*"
        console.log(str)
        
    }
}

// trianglo(10)

function box(width, heigth){
    for (let i = 0; i < heigth; i++) {
        var line = ""
        for (let x = 0; x < width; x++) {
            if(i==0 || i == heigth -1){
                line +="*"
            }
            else{
                if(x == 0 || x== width -1){
                    line +="*"
                }
                else{
                    line+=" "
                }
            }
        }
        console.log(line)
        
        
    }
}

// box(10,10)

var students = []
for (let i = 0; i < 10; i++) {
    var student = {
        number: Math.ceil(Math.random() * 1000),
        grade: Math.ceil(Math.random() * 20)
    }
    students.push(student)
    
}

function main(students,option){
    switch (option) {
        case 1:
            listStudents(students)
            break
        case 2:
            bestGrade(students)
            break
        case 3:
            wrostGrade(students)
            break
        case 4:
            averageGrade(students)
            break
        case 5:
            negativeGrade(students)
            break
        case 6:
            positiveGrade(students)
            break
        default:
            break    
    }
}

function listStudents(students){
    for (let i = 0; i < students.length; i++) {
        var student= students[i]
         console.log("Number: " + student.number + ", Grade: " + student.grade)
    }
}

function bestGrade(students){
    var max = students[0].grade
    var bestStudent = students[0]
    for (let i = 1; i < students.length; i++) {
        if(students[i].grade > max){
            max = students[i].grade
            bestStudent= students[i]
        }
    }
    console.log("Number: " + bestStudent.number + ", Grade: " + bestStudent.grade)
}

function wrostGrade(students){
    var min = students[0].grade
    var wrostStudent = students[0]
    for (let i = 1; i < students.length; i++) {
        if(students[i].grade < min){
            min = students[i].grade
            wrostStudent= students[i]
        }
    }
    console.log("Number: " + wrostStudent.number + ", Grade: " + wrostStudent.grade)
}
function negativeGrade(students){
    var negative = 0
    for (let i = 0; i < students.length; i++) {
        if (students[i].grade < 9.5) {
            negative++
        }
        
    }
    console.log("Número de negativas: "+negative)
}

function positiveGrade(students){
    var positive = 0
    for (let i = 0; i < students.length; i++) {
        if (students[i].grade >= 9.5) {
            positive++
        }
        
    }
    console.log("Número de positivas: "+positive)
}

function average(students) {
    var soma = 0;
    for (let i = 0; i < students.length; i++) {
      soma += students[i].grade;
    }
    var media = soma / students.length;
    return media;
  }
  function averageGrade(students) {
    var avg = average(students);
    var student = students[0];
    var aux = Math.abs(avg - students[0].grade);
    for (var i = 1; i < students.length; i++) {
      var diff = Math.abs(avg - students[i].grade);
      if (diff < aux) {
        aux = diff;
        student = students[i];
      }
    }
    console.log(average(students));
    console.log(student);
  }

main(students,4)
