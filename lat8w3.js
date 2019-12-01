//Pasangan Angka Terbesar

function pasanganTerbesar(num) {
    var terbesar = 0; 
    var string = num.toString(); 

    for (var i=0; i < string.length; i++){
      var pasangan = parseInt(string.slice(i, i+2)); 
      if (pasangan > terbesar){
        terbesar = pasangan; 
      }
    }
    return terbesar; 
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
