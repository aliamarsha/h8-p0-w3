//Menggunakan Built-in Function pada Array BELUM SELESAI

function dataHandling2(arr){
    arr.splice(1, 1, 'Roman Alamsyah Elsharawy') 
    arr.splice(1, 2, 'Provinsi Bandar Lampung')
    console.log(arr);
    var date = arr.split( " ");
    console.log(date[3]);

    switch (newDate){
        case 01: { console.log(date[0] + "January" + date[2]); break;}
        case 02: { console.log(date[0] + "February" + date[2]); break;}
        case 03: { console.log(date[0] + "March" + date[2]); break;}
        case 04: { console.log(date[0] + "April" + date[2]); break;}
        case 05: { console.log(date[0] + "May" + date[2]); break;}
        case 06: { console.log(date[0] + "June" + date[2]); break;}
        case 07: { console.log(date[0] + "July" + date[2]); break;}
        case 08: { console.log(date[0] + "August" + date[2]); break;} 
        case 09: { console.log(date[0] + "September" + date[2]); break;}
        case 10: { console.log(date[0] + "October" + date[2]); break;}
        case 11: { console.log(date[0] + "November" + date[2]); break;}
        case 12: { console.log(date[0] + "December" + date[2]); break;} 
        default: 
            text = "Please enter date";
}
console.log(newDate)
}


var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
