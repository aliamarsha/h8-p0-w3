//Mengakses Nilai Dalam Array

function balikString(str){
    var arr = str
    var newArr = " "
    for (var i= arr.length-1; i >= 0; i--){
        newArr += arr[i];
    }
    return newArr;
}

str = "Hello World!"
console.log(balikString(str));
