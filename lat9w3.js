// Cari Mean

function cariMean(arr) {
    var arrSum = 0; 
    for (var i= 0; i < arr.length; i++){
        arrSum += arr[i]; 
    }
    return Math.ceil(arrSum/ arr.length);
  }
  
  // TEST CASES
  console.log(cariMean([1, 2, 3, 4, 5])); // 3
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2
  console.log(cariMean([7, 7, 7, 7, 7])); // 7
  console.log(cariMean([20, 3, 4, 10])); // 10
