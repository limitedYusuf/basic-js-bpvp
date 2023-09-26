const { tambah, kali } = require('./myMath.js');

test('Tambah dua angka', () => {
    expect(tambah(2, 3)).toBe(5);
});

test('Kali dua angka', () => {
    expect(kali(2, 3)).toBe(6);
});