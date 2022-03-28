function min(array){
    var minV = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i]< minV){
            minV = array[i]

        }
        
    }
    return minV
}

var array = []

function max(array2){
    var maxV = array2[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxV){
            maxV = array2[i]

        }
        
    }
    return maxV
}

var array2 = []

function media(array3){
    var soma = 0;
    for (let i = 0; i < array3.length; i++) {
        soma+=array3[i]
    }
    return soma / array3.length
}

var array3 = media([1,2,7,8])
console.log(array3)