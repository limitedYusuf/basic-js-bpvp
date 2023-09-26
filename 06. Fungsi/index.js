function hitungLuasSegitiga(alas, tinggi) {
   var luas = (alas * tinggi) / 2;
   return luas;
}

var alasSegitiga = 5;
var tinggiSegitiga = 8;
var luasSegitiga = hitungLuasSegitiga(alasSegitiga, tinggiSegitiga);

console.log("Luas segitiga dengan alas " + alasSegitiga + " dan tinggi " + tinggiSegitiga + " adalah " + luasSegitiga);
