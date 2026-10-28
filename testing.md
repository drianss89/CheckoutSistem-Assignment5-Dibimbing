# Testing — Sistem Checkout Produk Sederhana

Pengujian dijalankan menggunakan Node.js dengan perintah `node checkout.js --test`.

| ID | Skenario | Input (harga, jumlah, isMember) | Hasil yang diharapkan | Hasil aktual |
|---|---|---|---|---|
| T1 | Member mendapat diskon | `(100000, 2, true)` | Subtotal Rp200.000; diskon Rp20.000; setelah diskon Rp180.000; ongkir Rp15.000; total Rp195.000 | Lulus |
| T2 | Non-member tidak mendapat diskon | `(100000, 2, false)` | Subtotal Rp200.000; diskon Rp0; setelah diskon Rp200.000; ongkir Rp15.000; total Rp215.000 | Lulus |
| T3 | Total setelah diskon di bawah ambang | `(100000, 2, true)` | Rp180.000 setelah diskon; ongkir Rp15.000; total Rp195.000 | Lulus |
| T4 | Tepat Rp250.000 setelah diskon | `(250000, 1, false)` | Setelah diskon Rp250.000; ongkir gratis; total Rp250.000 | Lulus |
| T5 | Di atas Rp250.000 setelah diskon | `(130000, 2, false)` | Setelah diskon Rp260.000; ongkir gratis; total Rp260.000 | Lulus |
| T6 | Jumlah 0 | `(50000, 0, false)` | Error: jumlah harus berupa bilangan bulat positif | Lulus |
| T7 | Jumlah pecahan | `(50000, 1.5, false)` | Error: jumlah harus berupa bilangan bulat positif | Lulus |
| T8 | Harga tidak valid (0) | `(0, 2, false)` | Error: harga harus berupa angka positif | Lulus |
| T9 | Harga berupa string | `("100000", 2, false)` | Error: harga harus berupa angka positif | Lulus |

## Catatan Pengujian
- Ambang gratis ongkir diperiksa menggunakan **total setelah diskon**, bukan subtotal.
- Pengujian T4 membuktikan bahwa nilai tepat Rp250.000 mendapatkan ongkos kirim gratis karena aturan menggunakan `>=`.
- Pengujian T6–T9 memastikan validasi menghentikan perhitungan saat input tidak valid.
- Status member yang bukan boolean juga divalidasi di implementasi, meskipun tidak termasuk delapan skenario minimum.
