# Pseudocode — hitungCheckout

```text
FUNCTION hitungCheckout(harga, jumlah, isMember)

    IF harga bukan angka finite ATAU harga <= 0 THEN
        RETURN error "Harga harus berupa angka positif."
    END IF

    IF jumlah bukan bilangan bulat ATAU jumlah <= 0 THEN
        RETURN error "Jumlah harus berupa bilangan bulat positif."
    END IF

    IF isMember bukan boolean THEN
        RETURN error "Status member harus berupa true atau false."
    END IF

    subtotal ← harga × jumlah

    IF isMember = true THEN
        diskon ← subtotal × 10%
    ELSE
        diskon ← 0
    END IF

    totalSetelahDiskon ← subtotal − diskon

    IF totalSetelahDiskon >= 250000 THEN
        ongkosKirim ← 0
    ELSE
        ongkosKirim ← 15000
    END IF

    totalPembayaran ← totalSetelahDiskon + ongkosKirim

    RETURN {
        subtotal,
        diskon,
        totalSetelahDiskon,
        ongkosKirim,
        totalPembayaran,
        isMember
    }

END FUNCTION
```

**Catatan:** Validasi dilakukan terlebih dahulu. Jika ada input tidak valid, fungsi langsung mengembalikan error dan tidak menjalankan perhitungan.
