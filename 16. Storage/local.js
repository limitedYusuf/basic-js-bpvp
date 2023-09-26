localStorage.setItem('nama', 'John Doe');
localStorage.setItem('email', 'john@example.com');

const nama = localStorage.getItem('nama');
const email = localStorage.getItem('email');

console.log('Nama:', nama);
console.log('Email:', email);

localStorage.removeItem('nama');
localStorage.removeItem('email');
