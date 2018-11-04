---
title: Autentikasi
description: Cara menyimpan password, dan lainnya
date: "2018-10-27T14:00:32.169Z"
---

Setelah mengerjakan beberapa proyek dan berbicara dengan beberapa orang, ternyata banyak orang yang tidak paham dengan proses dan teori dibelakang proses autentikasi. Di sini saya akan membahas secara umum 2 komponen besar dalam autentikasi yaitu password hashing, dan penyimpanan password.

### Password Hashing

Apa itu fungsi hash? Fungsi hash adalah fungsi yang memetakan data dengan panjang arbitrary menjadi data dengan panjang yang tetap. Sering kali, tipe data output dari funsi hash adalah string. Fungsi hash biasanya memiliki beberapa karakteristik yang sangat sesuai untuk menyimpan password yaitu:

1. Deterministic

Hasil dari suatu hash function akan selalu sama jika diberi input yang sama.

2. Non Invertable (Tidak bisa di balik)

```
F(x) => y

F(x) adalah fungsi hash,
x adalah input,
dan y adalah ouput
```

Jika `F(x)` merupakan fungsi hash yang baik, akan sangat susah untuk mencari `x` jika hanya diberi `y`.

Contoh fungsi hash yang sering dipakai adalah Argon2, Bcrypt.

### Penyimpangan Password

Best practice di industri adalah untuk menyimpan hash dari password user. Jika user `a` memiliki password test 12345, yang disimpan di database kita adalah hasil dari `bcrypt.hash(12345)` atau `argon2.hash(12345)`

### Bagaimana cara meautentikasi user?

#### Register

Pada proses register, user mengirimkan username dan password. Karena melalui HTTPS, plaintext pun tidak apa-apa, tidak perlu melakukan encrypt di frontend. Sesampainya di backend, lakukan proses hash pada password menggunakan hash function pilihan dan simpan hasil hash.

#### Login

Dengan HTTPS, user dapat dengan aman mengirimkan plain-text password mereka. Sesampainya di server, kita dapat melakukan check terhadap password yang tersimpan di database dengan menggunakan

```
bcrypt.compare(plaintextPassword, hashStoredInDatabase)
```

Di balik `bcrypt.compare`, bcrypt me-hash lagi `plainTextPassword` user dan melakukan check apakah hasil hash sama dengan yang tersimpan dalam database. Karena salah satu karakteristik dari fungsi hash adalah deterministik, maka kita dapat dengan mudah melakukan pengecekan. Selanjutnya, karakteristik ke 2 (Non invertable) berguna jika terjadi kebocoran pada database. Dengan menyimpan hash, akan amatlah susah bagi hacker untuk mengetahui password asli dari seorang user.

### Kesimpulan

Jangan pernah membuat fungsi hash sendiri! Selalu gunakan Bcrypt atau Argon2! Dua fungsi hash ini telah terbukti keamanannya. Selain itu, penjelasan di sini adalah penjelasan yang sangat dasar. Sebenarnya masih banyak faktor yang mempengaruhi tingkat keamanan suatu password seperti panjang salt, serta generasi dari salt. Namun dengan menggunakan bcrypt atau argon2 mempermudah proses ini (bcrypt secara otomatis men-generate cryptographically save salt). Hope this helps!

\*\* Feel free to create PR or contact me @tibudiyanto!
