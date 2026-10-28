/**
 * Sistem Checkout Produk Sederhana
 * Jalankan: node checkout.js
 * Pengujian: node checkout.js --test
 */

function hitungCheckout(harga, jumlah, isMember) {
  // Validasi input dilakukan sebelum perhitungan.
  if (typeof harga !== "number" || !Number.isFinite(harga) || harga <= 0) {
    return { error: "Harga harus berupa angka positif." };
  }

  if (!Number.isInteger(jumlah) || jumlah <= 0) {
    return { error: "Jumlah harus berupa bilangan bulat positif." };
  }

  if (typeof isMember !== "boolean") {
    return { error: "Status member harus berupa true atau false." };
  }

  const subtotal = harga * jumlah;
  const diskon = isMember ? subtotal * 0.10 : 0;
  const totalSetelahDiskon = subtotal - diskon;
  const ongkosKirim = totalSetelahDiskon >= 250000 ? 0 : 15000;
  const totalPembayaran = totalSetelahDiskon + ongkosKirim;

  return {
    subtotal,
    diskon,
    totalSetelahDiskon,
    ongkosKirim,
    totalPembayaran,
    isMember
  };
}

function formatRupiah(nilai) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 2
  }).format(nilai);
}

function tampilkanHasil(label, hasil) {
  console.log(`\n${label}`);
  if (hasil.error) {
    console.log(`Error: ${hasil.error}`);
    return;
  }

  console.log(`Subtotal             : ${formatRupiah(hasil.subtotal)}`);
  console.log(`Diskon               : ${formatRupiah(hasil.diskon)}`);
  console.log(`Total setelah diskon : ${formatRupiah(hasil.totalSetelahDiskon)}`);
  console.log(`Ongkos kirim         : ${formatRupiah(hasil.ongkosKirim)}`);
  console.log(`Total pembayaran     : ${formatRupiah(hasil.totalPembayaran)}`);
}

function jalankanPengujian() {
  const tests = [
    {
      nama: "T1 - Member mendapat diskon",
      args: [100000, 2, true],
      expected: { subtotal: 200000, diskon: 20000, totalSetelahDiskon: 180000, ongkosKirim: 15000, totalPembayaran: 195000 }
    },
    {
      nama: "T2 - Non-member tanpa diskon",
      args: [100000, 2, false],
      expected: { subtotal: 200000, diskon: 0, totalSetelahDiskon: 200000, ongkosKirim: 15000, totalPembayaran: 215000 }
    },
    {
      nama: "T3 - Total setelah diskon di bawah Rp250.000",
      args: [100000, 2, true],
      expected: { totalSetelahDiskon: 180000, ongkosKirim: 15000, totalPembayaran: 195000 }
    },
    {
      nama: "T4 - Tepat Rp250.000 setelah diskon",
      args: [250000, 1, false],
      expected: { totalSetelahDiskon: 250000, ongkosKirim: 0, totalPembayaran: 250000 }
    },
    {
      nama: "T5 - Di atas Rp250.000 setelah diskon",
      args: [130000, 2, false],
      expected: { totalSetelahDiskon: 260000, ongkosKirim: 0, totalPembayaran: 260000 }
    },
    {
      nama: "T6 - Jumlah 0 ditolak",
      args: [50000, 0, false],
      expectedError: "Jumlah harus berupa bilangan bulat positif."
    },
    {
      nama: "T7 - Jumlah pecahan ditolak",
      args: [50000, 1.5, false],
      expectedError: "Jumlah harus berupa bilangan bulat positif."
    },
    {
      nama: "T8 - Harga tidak valid (0)",
      args: [0, 2, false],
      expectedError: "Harga harus berupa angka positif."
    },
    {
      nama: "T9 - Harga bukan angka ditolak",
      args: ["100000", 2, false],
      expectedError: "Harga harus berupa angka positif."
    }
  ];

  let lulus = 0;

  for (const test of tests) {
    const actual = hitungCheckout(...test.args);
    let pass;

    if (test.expectedError) {
      pass = actual.error === test.expectedError;
    } else {
      pass = Object.entries(test.expected).every(
        ([key, value]) => actual[key] === value
      );
    }

    console.log(`${pass ? "LULUS" : "GAGAL"} — ${test.nama}`);
    if (!pass) {
      console.log("  Hasil aktual:", actual);
      console.log("  Ekspektasi:", test.expected ?? test.expectedError);
    } else {
      lulus++;
    }
  }

  console.log(`\nRingkasan: ${lulus}/${tests.length} pengujian lulus.`);
  if (lulus !== tests.length) {
    process.exitCode = 1;
  }
}

if (require.main === module) {
  if (process.argv.includes("--test")) {
    jalankanPengujian();
  } else {
    tampilkanHasil(
      "Contoh checkout (harga Rp100.000, jumlah 2, member)",
      hitungCheckout(100000, 2, true)
    );
    console.log("\nJalankan `node checkout.js --test` untuk menjalankan pengujian.");
  }
}

module.exports = { hitungCheckout };
