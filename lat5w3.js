// Palindrome

function palindrome(kata) {
    for (var i=0; i < kata.length; i++){
        if (kata[i] === kata[kata.length -1]){
            return true;
        }
        return false; 
    }
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false
