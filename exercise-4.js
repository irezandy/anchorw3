var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

function dataHandling2() {
input.splice(1, 1, 'Roman Alamsyah Elsharawy');
input.splice(2, 1, 'Provinsi Bandar Lampung');
input.splice(4, 1, 'Pria', 'SMA International Metro');
console.log(input);

 var bulan = 05;
 switch(bulan) {
   case 1:  {
       console.log('Januari'); 
       break;
    }
   case 2:  {
       console.log('Februari'); 
       break;
    }
   case 3:  {
       console.log('Maret'); 
       break;}

   case 4:  {
       console.log('April'); 
       break;
    }
   case 5:  {
       console.log('Mei'); 
       break;
    }
   case 6:  {
       console.log('Juni'); 
       break;
    }
   case 7:  {
       console.log('Juli'); 
       break;
    }
   case 8:  {
       console.log('Agustus'); 
       break;
    }
   case 9:  {
       console.log('September'); 
       break;
    }
   case 10: {
       console.log('Oktober'); 
       break;
    }
   case 11: {
       console.log('November'); 
       break;
    }
   case 12: {
       console.log('Desember'); 
       break;
    }
   default: {
       console.log('salah'); 
    }
 }

var format = input[3];
var tanggal = format.split('/');
tanggal.sort(function(value1, value2) { return value2 - value1 });
console.log(tanggal);

var joinVar = format.split('/');
var join = joinVar.join('-');
console.log(join);

var nama = input[1];
var i = nama.slice(0,15);
console.log(i);
}

