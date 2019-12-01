// Palindrome Angka

function angkaPalindrome(num) {
    var arr = Array.from(String(num), Number); 
    var length = arr.length; 
    if (length === 1 && num < 9){
        return num + 1; 
    }
     for (var i = 0; i < length / 2; i++) {
        if (arr[length - 1 - i] > arr[i]) {
            arr[length - 1 - i] = arr[i];
            arr[length - 2 - i] += 1;
            } else if (arr[length - 1 - i] < arr[i]) {
                       arr[length - 1 - i] = arr[i];
             }
        }
        return parseInt(arr.join(""));
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
