// Palindrome Angka

function angkaPalindrome(num) {
    var arr = Array.from(String(num), Number); 
    var length = arr.length; 
    if (length === 1 && num < 9){
        return num + 1; 
    }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
