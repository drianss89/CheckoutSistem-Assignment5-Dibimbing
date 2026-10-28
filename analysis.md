# Problem Decomposition — Sistem Checkout Produk Sederhana

## 1. Input
- `harga`: harga satu produk, harus berupa angka finite dan lebih besar dari 0.
- `jumlah`: jumlah produk, harus berupa bilangan bulat positif.
- `isMember`: status member berupa boolean (`true` untuk member, `false` untuk non-member).

## 2. Proses
1. Periksa apakah `harga` merupakan angka finite dan lebih besar dari 0.
2. Periksa apakah `jumlah` merupakan bilangan bulat dan lebih besar dari 0.
3. Periksa apakah `isMember` bertipe boolean.
4. Jika salah satu input tidak valid, hentikan proses dan kembalikan pesan error.
5. Hitung subtotal: `harga × jumlah`.
6. Jika member, hitung diskon sebesar 10% subtotal; jika bukan member, diskon bernilai 0.
7. Hitung total setelah diskon: `subtotal − diskon`.
8. Jika total setelah diskon minimal Rp250.000, ongkos kirim Rp0. Jika kurang, ongkos kirim Rp15.000.
9. Hitung total pembayaran: `total setelah diskon + ongkos kirim`.
10. Kembalikan rincian perhitungan.

## 3. Output
Jika input valid, program mengembalikan objek yang memuat:
- `subtotal`
- `diskon`
- `totalSetelahDiskon`
- `ongkosKirim`
- `totalPembayaran`
- `isMember`

Jika input tidak valid, program mengembalikan objek berisi `error` dengan pesan yang sesuai. Program tidak melakukan perhitungan lebih lanjut setelah validasi gagal.

## 4. Pattern Recognition
Pola keputusan yang ditemukan:
- **Validasi berurutan:** semua input diperiksa sebelum perhitungan.
- **Percabangan member:** status member menentukan apakah diskon 10% diterapkan.
- **Percabangan ongkos kirim:** total setelah diskon dibandingkan dengan ambang Rp250.000.
- **Pola perhitungan berantai:** subtotal → diskon → total setelah diskon → ongkos kirim → total pembayaran.

## 5. Abstraction
Program hanya menggunakan informasi yang diperlukan untuk menghitung pembayaran: harga, jumlah, dan status member. Detail yang tidak berhubungan dengan aturan checkout—misalnya nama produk, alamat, metode pembayaran, stok, dan akun pengguna—tidak dimodelkan. Hasil perhitungan dikembalikan sebagai data, tanpa antarmuka pengguna atau penyimpanan database.

## 6. Asumsi Implementasi
- `harga` boleh berupa angka desimal positif.
- `jumlah` harus bilangan bulat positif; nilai seperti `2.5`, `0`, string `"2"`, atau `NaN` ditolak.
- `isMember` wajib boolean agar status member tidak ambigu.
- Perhitungan menggunakan angka JavaScript. Untuk aplikasi transaksi nyata, uang sebaiknya direpresentasikan dalam satuan terkecil (misalnya rupiah bulat) atau ditangani dengan strategi desimal yang sesuai.
