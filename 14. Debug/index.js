function tambah(a, b) {
   console.log('Menghitung penambahan...');
   const hasil = a + b;
   console.log(`Hasil penambahan ${a} + ${b} adalah ${hasil}`);
   return hasil;
}

function kali(a, b) {
   console.log('Menghitung perkalian...');
   const hasil = a * b;
   console.log(`Hasil perkalian ${a} * ${b} adalah ${hasil}`);
   return hasil;
}

function main() {
   console.log('Program dimulai.');

   const angka1 = 5;
   const angka2 = 3;

   const hasilPenambahan = tambah(angka1, angka2);
   const hasilPerkalian = kali(angka1, angka2);

   console.log('Hasil Penambahan:', hasilPenambahan);
   console.log('Hasil Perkalian:', hasilPerkalian);

   if (hasilPenambahan > hasilPerkalian) {
       console.warn('Peringatan: Hasil penambahan lebih besar dari hasil perkalian.');
   } else if (hasilPenambahan < hasilPerkalian) {
       console.error('Error: Hasil penambahan lebih kecil dari hasil perkalian.');
   } else {
       console.log('Kedua hasil sama.');
   }

   console.log('Program selesai.');
}

main();
