function dataHandling(parameter) {
    var bio = '';
    for (var i = 0; i < parameter.length; i++) {
      for (var j = 0; j < parameter[i].length; j++) {
        switch(j) {
          case 0: bio = bio + 'Nomor ID: ' + parameter[i][j]; break;
          case 1: bio = bio + '\nNama Lengkap: ' + parameter[i][j]; break;
          case 2: bio = bio + '\nTTL: ' + parameter[i].slice(2, 3) + ' ' + parameter[i].slice(3, 4); break;
          case 3: bio = bio + '\nHobi: ' + parameter[i].slice(4, 5) + '\n\n'; break;
        }
      }
    }
    
    return bio;
  }
  
  
  //contoh input
  var input = [
                  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
              ]
              
  console.log(dataHandling(input));