function fetchData() {
   return new Promise(function(resolve, reject) {
       setTimeout(function() {
           console.log("Data fetched successfully.");
           resolve("Data hasil fetching");
       }, 2000);
   });
}

function processData(data) {
   console.log("Data berhasil diproses: " + data);
}

fetchData()
   .then(processData)
   .catch(function(error) {
       console.error("Terjadi kesalahan: " + error);
   });
