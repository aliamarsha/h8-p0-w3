//Menggunakan Built-in Function pada Array BELUM SELESAI

function dataHandling2(arr){
    arr.splice(1, 0, 'Roman Alamsyah Elsharawy') 
    arr.splice(2, 2, 'Provinsi Bandar Lampung')
    arr.splice(4, 1, 'Pria', 'SMA Internasional Metro' )
    console.log(arr);
    var date = arr[3].split("/");
    console.log(date);
    var dateFormat = date[0] + "-" + date[1] + "-" + date[2]; 
    console.log(dateFormat);
    var month = " ";
    var newDate = date[0] + month + date[2];

    switch (month){
        case "01": "January";  break; 
        case "02": "February"; break; 
        case "03": "March"; break;
        case "04": "April"; break;
        case "05": "May"; break;
        case "06": "June"; break;
        case "07": "July"; break;
        case "08": "August"; break;
        case "09": "September"; break;
        case "10": "October"; break;
        case "11": "November"; break;
        case "12": "December"; break;
        default: 
          text = "Please enter date";
    }
   return month
}


var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input); 
