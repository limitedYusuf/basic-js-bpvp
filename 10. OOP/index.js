// konstruktor
function Karyawan(nama, jabatan) {
   this.nama = nama;
   this.jabatan = jabatan;
}

// metode
Karyawan.prototype.sapa = function() {
   console.log("Halo, saya " + this.nama + " dan saya adalah seorang " + this.jabatan + ".");
};

// objek
var karyawan1 = new Karyawan("Reza", "Suami");
var karyawan2 = new Karyawan("Sapiq", "Istri");

// metode
karyawan1.sapa();
karyawan2.sapa();

// Pewarisan
function Manajer(nama, jabatan, departemen) {
   Karyawan.call(this, nama, jabatan);
   this.departemen = departemen;
}

Manajer.prototype = Object.create(Karyawan.prototype);
Manajer.prototype.constructor = Manajer;

Manajer.prototype.tunjangan = function() {
   console.log("Manajer " + this.nama + " menerima tunjangan khusus.");
};

var manajer1 = new Manajer("Alice Johnson", "Manajer Proyek", "IT");
manajer1.sapa();
manajer1.tunjangan();

// Encapsulation dan Abstraksi
function RekeningBank(pemilik) {
   var saldo = 0;

   this.getPemilik = function() {
       return pemilik;
   };

   this.getSaldo = function() {
       return saldo;
   };

   this.setSaldo = function(jumlah) {
       if (jumlah >= 0) {
           saldo = jumlah;
       } else {
           console.log("Saldo tidak dapat menjadi negatif.");
       }
   };
}

var rekening = new RekeningBank("Reza");
console.log("Pemilik Rekening: " + rekening.getPemilik());
console.log("Saldo Awal: " + rekening.getSaldo());
rekening.setSaldo(1000);
console.log("Saldo Setelah Deposit: " + rekening.getSaldo());
rekening.setSaldo(-500);
console.log("Saldo Setelah Percobaan Saldo Negatif: " + rekening.getSaldo());
