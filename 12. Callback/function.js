function fetchData(callback) {
   setTimeout(function() {
       console.log("Data fetched successfully.");
       callback("Data hasil fetching");
   }, 2000);
}

function processData(data) {
   console.log("Data berhasil diproses: " + data);
}

fetchData(processData);
