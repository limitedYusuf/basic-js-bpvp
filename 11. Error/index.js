try {
   var hasil = 10 / 0;
   console.log("Hasil: " + hasil);
} catch (error) {
   console.error("Terjadi kesalahan: " + error.message);
} finally {
   console.log("Selesai.");
}
