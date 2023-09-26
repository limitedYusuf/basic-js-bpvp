// tidak optimal
function hitungTotal(harga, jumlah) {
   let total = 0;
   for (let i = 0; i < jumlah; i++) {
       total += harga;
   }
   return total;
}

// optimal
function hitungTotal(harga, jumlah) {
   return harga * jumlah;
}