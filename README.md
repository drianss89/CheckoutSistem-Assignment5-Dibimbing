# Sistem Checkout Produk Sederhana

**Nama:** Adrian Surya Atmaja

## Deskripsi Case Study
Program menerima harga produk, jumlah produk, dan status member. Program memvalidasi input, menghitung subtotal, menerapkan diskon member 10% jika berlaku, menentukan ongkos kirim berdasarkan total setelah diskon, lalu menghitung total pembayaran.

## Teknologi
- JavaScript dasar (Node.js)

## Cara Menjalankan
1. Pastikan Node.js sudah terpasang.
2. Buka terminal di folder proyek.
3. Jalankan program dengan perintah:

   ```bash
   node checkout.js
   ```

4. Untuk menjalankan pengujian otomatis:

   ```bash
   node checkout.js --test
   ```

## Aturan Bisnis
1. `harga` harus berupa angka finite dan lebih besar dari 0.
2. `jumlah` harus berupa bilangan bulat lebih besar dari 0.
3. `isMember` harus berupa nilai boolean (`true` atau `false`).
4. Subtotal = harga × jumlah.
5. Member mendapat diskon 10% dari subtotal; non-member mendapat diskon 0.
6. Ongkos kirim gratis jika total setelah diskon minimal Rp250.000. Jika kurang, ongkos kirim Rp15.000.
7. Total pembayaran = total setelah diskon + ongkos kirim.

## Ringkasan Penggunaan AI
AI digunakan sebagai alat bantu untuk menyusun struktur dokumentasi, memeriksa konsistensi antara analisis, flowchart, pseudocode, implementasi, dan skenario pengujian. Hasil akhir tetap perlu ditinjau dan dipahami oleh penulis sebelum dikumpulkan.

## Struktur Berkas
- `README.md` — deskripsi dan cara menjalankan.
- `analysis.md` — problem decomposition, pattern, dan abstraction.
- `flowchart.drawio` — diagram yang dapat diedit melalui diagrams.net.
- `flowchart.png` — hasil export/pratinjau flowchart.
- `pseudocode.md` — urutan algoritma.
- `checkout.js` — implementasi fungsi dan pengujian otomatis.
- `testing.md` — skenario uji dan hasil yang diharapkan/aktual.
