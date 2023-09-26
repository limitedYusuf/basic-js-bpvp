sessionStorage.setItem('nama', 'Jane Smith');
sessionStorage.setItem('email', 'jane@example.com');

const nama = sessionStorage.getItem('nama');
const email = sessionStorage.getItem('email');

console.log('Nama:', nama);
console.log('Email:', email);

sessionStorage.removeItem('nama');
sessionStorage.removeItem('email');
