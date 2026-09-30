# Portofolio: Fransisko Varano Udetaputra Bato Tuga

## Struktur

```
Profile/
├── index.html
├── style.css
├── script.js        <- semua data (experience, project, sertifikat, skill) ada di bagian DATA
├── CV.docx          <- tombol "Download CV"
└── assets/          <- taruh semua foto di sini (nama folder huruf kecil semua)
```

## Gambar

Salin folder `assets/` lamamu ke dalam folder ini (gabungkan dengan `assets/` yang ada). Nama file yang dicari situs:

| Bagian | File |
|---|---|
| Buck converter (prototype) | `proj-buck-converter-1/2/3.jpeg` |
| Buck converter (paper) | `paper-fortei-icee-2026-1.jpg`, `-2.jpeg`, `-3.jpeg` |
| Inverter | `proj-hbridge-inverter-1.jpeg`, `-2.jpg`, `-3.jpeg` |
| PLC | `proj-plc-omron-1/2/3.jpeg` |
| SCADA | `proj-scada-module-1/2/3.jpeg` |
| Solar panel cleaning | `proj-pv-cleaning-1/2/3.jpeg` |
| Tilt monitoring | `proj-tilt-monitoring-1.jpg`, `-2.jpg`, `-3.png` |
| Telegram bot | `proj-n8n-automation-1/2/3.png` |
| Experience | `exp-ardi-widya-utama-1/2/3.jpeg`, `exp-basic-electronics-teacher-1/2/3.jpeg`, `exp-pln-internship-1/2/3.jpeg` |
| Sertifikat | `cert-toefl-1.png`, `cert-krti-2023-1.png`, `cert-pnbrc-2026-1.png`, `cert-fortei-authorship-1.jpeg`, `cert-fortei-presentation-1.jpeg`, `cert-bootcamp-data-analyst-1.jpg` (+ nomor 2 dan 3 bila ada) |

Ekstensi harus persis seperti di tabel (`.jpg` beda dengan `.jpeg`). Kalau ekstensi file-mu berbeda, ubah path-nya di `script.js`. Foto yang tidak ditemukan dilewati otomatis, jadi tidak perlu mengisi semuanya. Klik gambar di situs untuk membuka jendela galeri.

## Publikasi lewat GitHub Pages

```bash
cd Profile
git init
git add .
git commit -m "Portfolio v2"
git branch -M main
git remote add origin https://github.com/varanotuga/Profile.git
git push -u origin main
```

Lalu di GitHub: **Settings > Pages > Source: Deploy from a branch > `main` / `(root)` > Save**.

Catatan penting: GitHub Pages membedakan huruf besar/kecil. Folder harus bernama `assets` (bukan `Assets`), kalau tidak semua gambar tidak akan muncul.

## Catatan konten

- Untuk project inverter, situs lamamu memakai judul "Five-Level Single-Phase Buck-Boost Inverter", sedangkan CV memakai "Multi-Cell H-Bridge Inverter". Saya pakai judul dari situs, dan caption galerinya tetap "Multi-cell H-bridge inverter". Sesuaikan di `script.js` bila perlu.
- Link LinkedIn memakai `linkedin.com/in/varano-tuga-772a3a2aa/` dari situs lama (di CV alamatnya berbeda).
