var person = {
   nama: "John",
   umur: 30,
   alamat: "123 Jalan ABC"
};

var buku = {
   judul: "Belajar JavaScript",
   penulis: "John Doe",
   tahunTerbit: 2022,
   ringkasan: function() {
       return this.judul + " oleh " + this.penulis;
   }
};

console.log(person.nama);
console.log(buku.ringkasan());