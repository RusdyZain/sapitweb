# Dashboard Sapit

[![Next.js](https://img.shields.io/badge/Next.js-Framework-blue)](https://nextjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)](https://www.mongodb.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-orange)](https://www.prisma.io/)

## Deskripsi Proyek
**Dashboard Sapit** adalah sebuah proyek yang dibangun untuk membantu masyarakat Desa Sapit dalam mengelola dan mendata warganya melalui kepala wilayah (Kawil). Sistem ini memberikan akses yang mudah bagi Kawil untuk memantau data warga secara rinci, mulai dari informasi dasar seperti nama dan alamat, hingga rincian lebih detail seperti jumlah kendaraan yang dimiliki oleh setiap rumah tangga.

Proyek ini disusun sebagai bagian dari Program Kerja Nyata (KKN) yang dilaksanakan oleh Universitas Mataram. Dengan menggunakan framework **Next.js** sebagai teknologi utama, Dashboard Sapit dirancang untuk menyediakan platform yang intuitif dan efisien bagi masyarakat Desa Sapit dalam mengelola data kependudukan mereka.

## Fitur Utama
- **Manajemen Data Warga**: Kawil dapat menambahkan, mengedit, dan menghapus data warga melalui dashboard yang mudah digunakan.
- **Rincian Data Warga**: Data setiap warga terkelola dengan detail, mencakup informasi pribadi, status pekerjaan, tingkat pendidikan, hingga jumlah kendaraan yang dimiliki.
- **Filter dan Pencarian**: Fitur pencarian dan filter memudahkan Kawil untuk menemukan data warga secara cepat dan akurat.
- **Keamanan Data**: Sistem dilengkapi dengan otentikasi pengguna untuk memastikan hanya Kawil yang berhak mengakses data warga.
- **Responsif**: Dashboard dirancang untuk dapat digunakan di berbagai perangkat, baik desktop maupun mobile.

## Teknologi yang Digunakan
Proyek ini dibangun menggunakan beberapa teknologi modern untuk memastikan performa, keamanan, dan kemudahan pengembangan:

- **Next.js**: Framework React untuk server-side rendering dan pengembangan aplikasi web yang cepat dan efisien.
- **MongoDB**: Database NoSQL yang digunakan untuk menyimpan data warga secara fleksibel dan terstruktur.
- **Prisma**: ORM yang memudahkan integrasi antara Next.js dan MongoDB, serta mempermudah query data.
- **TypeScript**: Superset JavaScript yang memastikan pengembangan aplikasi lebih stabil dengan tipe data yang kuat.
- **JWT (JSON Web Token)**: Digunakan untuk otentikasi dan menjaga keamanan akses ke dashboard.
- **SweetAlert2**: Library untuk memberikan notifikasi interaktif dan elegan ketika data berhasil diperbarui atau dihapus.

## Instalasi
Ikuti langkah-langkah berikut untuk menjalankan proyek secara lokal:

1. **Clone repository ini**:
   ```bash
   git clone https://github.com/SapitDev/DashboardSapit.git
   cd DashboardSapit
   ```

2. **Instal dependensi yang diperlukan**:
   Pastikan Anda memiliki Node.js dan npm/yarn terinstal di komputer Anda. Kemudian, jalankan:
   ```bash
   npm install
   ```
   atau
   ```bash
   yarn install
   ```

3. **Konfigurasi Database**:
   Pastikan Anda telah memiliki akses ke database MongoDB. Sesuaikan koneksi database pada file `.env` seperti berikut:
   ```env
   DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/SapitDB
   ```

4. **Jalankan aplikasi**:
   Setelah semua terpasang, jalankan aplikasi dengan:
   ```bash
   npm run dev
   ```
   Akses dashboard melalui `http://localhost:3000`.

## Struktur Proyek
Berikut adalah struktur direktori utama dari proyek ini:
```
.
├── prisma/             # Skema Prisma untuk koneksi database
├── public/             # Aset publik seperti gambar
├── src/
│   ├── components/     # Komponen React yang digunakan di halaman
│   ├── pages/          # Halaman aplikasi (Next.js routing)
│   ├── utils/          # Helper functions dan utilities
│   ├── styles/         # Berkas styling (CSS atau Tailwind)
├── .env                # Variabel lingkungan untuk konfigurasi database
└── ...
```

## Fitur Keamanan
- **JWT Authentication**: Setiap Kawil harus login dengan token JWT sebelum bisa mengakses data warga.
- **Otorisasi Berbasis Peran**: Sistem ini mendukung otorisasi berbasis peran, di mana hanya Kawil yang berhak mengelola data warga.

## Roadmap Pengembangan
- [x] Implementasi manajemen data warga
- [x] Pembuatan filter dan pencarian data
- [ ] Peningkatan UI/UX untuk halaman detail warga
- [ ] Penambahan fitur laporan data warga dalam bentuk PDF atau Excel
- [ ] Integrasi Google Maps untuk menampilkan sebaran lokasi warga

## Kontribusi
Jika Anda ingin berkontribusi dalam pengembangan Dashboard Sapit, ikuti langkah berikut:
1. Fork repository ini.
2. Buat branch baru untuk fitur atau perbaikan Anda (`git checkout -b fitur-anda`).
3. Commit perubahan Anda (`git commit -m 'Tambah fitur baru'`).
4. Push ke branch Anda (`git push origin fitur-anda`).
5. Ajukan pull request.
Proyek ini dikembangkan oleh mahasiswa Universitas Mataram sebagai bagian dari Program Kerja Nyata (KKN) di Desa Sapit.

---

README ini memberikan informasi lengkap tentang proyek, cara instalasi, dan teknologi yang digunakan dalam pengembangan **Dashboard Sapit**.
