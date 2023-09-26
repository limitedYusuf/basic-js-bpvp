var mobil = {
   merek: "Toyota",
   tahun: 2023,
   informasi: function() {
       return "Mobil " + this.merek + " tahun " + this.tahun;
   }
};

var daftarBuah = ["apel", "mangga", "pisang"];
daftarBuah.push("jeruk");
daftarBuah.pop();
daftarBuah.sort();
var buahPertama = daftarBuah[0];

var kalimat = "Selamat datang di BPVP";
var panjangKalimat = kalimat.length;
var ubahKapital = kalimat.toUpperCase();
var potongKalimat = kalimat.slice(0, 7);

console.log(mobil.informasi());
console.log(daftarBuah);
console.log(buahPertama);
console.log(ubahKapital);
console.log(potongKalimat);
