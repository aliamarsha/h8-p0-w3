// Target Terdekat

function targetTerdekat(arr) {
    var o = arr.indexOf("o"); 
    var index = arr.indexOf("x");
    if (index === -1){
        return 0; 
    }
    var closest = arr.length; 
    while (index != -1){
        var space = Math.abs( o - index); 
        if (space < closest){
            closest = space; 
        }
        index = arr.indexOf('x', index + 1); 
    }
    return closest;
    }
    
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
