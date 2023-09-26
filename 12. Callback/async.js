function fetchData() {
   return new Promise(function(resolve, reject) {
       setTimeout(function() {
           console.log("Data fetched successfully.");
           resolve("Data hasil fetching");
       }, 2000);
   });
}

async function processAsyncData() {
   try {
       const data = await fetchData();
       console.log("Data berhasil diproses: " + data);
   } catch (error) {
       console.error("Terjadi kesalahan: " + error);
   }
}

processAsyncData();
