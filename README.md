# 🌐 Maulana Muhammad Adityawarman — Modern Interactive Bilingual Portfolio

> **Software Developer | Backend Developer | IT Enthusiast**  
> *"Building Digital Solutions Through Code and Technology."*  
> Graduate in Informatics (S1) from **Universitas Hayam Wuruk Perbanas Surabaya** (2026).

---

## 🚀 Live Demo & Profil Resmi
- **WhatsApp**: [+62 823-5339-2522](https://wa.me/6282353392522)
- **GitHub**: [github.com/MaulanaMA](https://github.com/MaulanaMA)
- **LinkedIn**: [linkedin.com/in/maulana-muhammad-adityawarman-50537724a](https://www.linkedin.com/in/maulana-muhammad-adityawarman-50537724a/)

---

## ⚡ Highlights & Fitur Utama

1. **Multilingual System (Bilingual Indonesian & English)**:
   - Toggle switch `[ ID ] [ EN ]` pada navbar dan mobile drawer.
   - Pergantian bahasa instan di sisi klien tanpa reload halaman (`i18next` + `react-i18next`).
   - Menyimpan preferensi bahasa ke `localStorage` dan sinkronisasi tag `document.documentElement.lang`.
   - Kamus terjemahan modular di `src/locales/id/translation.json` & `src/locales/en/translation.json`.

2. **Sistem Tema (Dark & Light Mode)**:
   - Default: **Dark Cyber Navy** (`#070A13`).
   - Tersedia tombol toggle **Light Mode** yang bersih dan kontras tinggi.
   - Tersimpan otomatis di `localStorage`.

3. **Showcase 4 Proyek Pilihan (Featured Projects)**:
   - **E-Rapor Keagamaan & Al-Qur'an – SD Patra Dharma 3 Balikpapan** (Production Web App)
   - **Augmented Reality Routing Learning Application** (AR Unity & Cisco Networking)
   - **School Scheduling Management System** (Algoritma Penjadwalan Bebas Konflik)
   - **Networking & Server Laboratory Environment** (MikroTik, VLAN, Linux Server)
   - Dilengkapi filter kategori dinamis, visual graphic mockup, dan **Interactive Project Detail Modal**.

4. **Sistem Pengalaman & Jejak Karier (Timeline)**:
   - Pengajar Coding & Computational Thinking Anak SD
   - Network Technician Intern
   - Network Technician Lapangan
   - Electrical & Hardware Support
   - Divisi IT & Organisasi Mahasiswa Informatika UHW Perbanas

5. **Keahlian Teruji vs Sedang Dipelajari (Skills & Currently Learning)**:
   - Pemisahan jelas antara skill produksi nyata dan riset teknologi masa depan (*Cloud Native/Docker, Next.js, Network Automation, Cybersecurity*).

6. **Layanan Freelance & Otomasi Inquiry**:
   - 6 Paket Layanan: Company Profile, Landing Page, Business Web, School System, Custom Web App, Maintenance.
   - Tombol klik langsung ke WhatsApp dengan template pesan terformat otomatis.

7. **Formulir Kontak Terintegrasi (Functional Contact Form)**:
   - Validasi input real-time (Nama, Email, Subjek, Pesan).
   - Pengiriman serverless via **Web3Forms API** (bebas biaya server & database).
   - Efek perayaan partikel confetti saat pesan terkirim.
   - Tombol **Salin Alamat Email** dengan feedback toast notifikasi.

8. **Optimasi SEO & Performa**:
   - Semantic HTML5, Schema.org JSON-LD structured data (`Person` & `WebSite`).
   - OpenGraph & Twitter Cards.
   - Code splitting otomatis Rollup/Vite.
   - Mendukung `prefers-reduced-motion` untuk aksesibilitas WCAG AA.

---

## 🛠️ Technology Stack

| Lapisan | Teknologi |
| :--- | :--- |
| **Frontend Framework** | React 19 + TypeScript |
| **Build Tool & Bundler** | Vite 8 (Ultra-fast HMR & Optimized Rollup chunking) |
| **Styling** | Tailwind CSS v3 + Tailwind Merge + Clsx |
| **Animation Engine** | Framer Motion (Motion) |
| **Internationalization** | i18next + react-i18next + i18next-browser-languagedetector |
| **Icons** | Lucide React + Custom SVG Brand Icons |
| **Micro-Interactions** | Canvas Confetti |
| **Deployment Target** | Vercel / Netlify / Cloudflare Pages / GitHub Pages |

---

## 📂 Struktur Direktori

```
Portofolio/
├── public/
│   ├── favicon.svg            # Favicon SVG modern
│   ├── robots.txt             # Panduan bot mesin pencari
│   ├── sitemap.xml            # Sitemap multilingual
│   └── documents/
│       └── CV_Maulana_Muhammad_Adityawarman.pdf # File PDF CV
├── src/
│   ├── components/
│   │   ├── common/            # BackToTop, LanguageSwitcher, ThemeToggle, ScrollProgress, Icons
│   │   ├── layout/            # Navbar, MobileNav, Footer
│   │   └── ui/                # Badge, Modal, SectionTitle
│   ├── contexts/              # ThemeContext (Dark/Light mode)
│   ├── data/                  # Static content (profile, skills, projects, experience, services)
│   ├── hooks/                 # useActiveSection, useScrollPosition, useClipboard
│   ├── locales/               # Kamus terjemahan (id/translation.json & en/translation.json)
│   ├── sections/              # Hero, About, Skills, Learning, Experience, Projects, Education, Services, Contact
│   ├── types/                 # TypeScript interfaces
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## 💻 Panduan Menjalankan di Komputer Lokal (Windows)

Pastikan Node.js (v18+) dan npm sudah terpasang di komputer Anda.

### 1. Masuk ke Direktori Proyek
```powershell
cd E:\Portofolio
```

### 2. Jalankan Server Pengembangan (Dev Mode)
```powershell
npm run dev
```
Buka browser di alamat `http://localhost:5173`.

### 3. Build untuk Produksi
```powershell
npm run build
```
File siap rilis akan terkompilasi ke dalam folder `dist/`.

### 4. Preview Hasil Build Produksi
```powershell
npm run preview
```

---

## 🚀 Panduan Deployment ke GitHub & Vercel

### Langkah A: Hubungkan ke Repositori GitHub
1. Buat repositori baru di GitHub Anda: [github.com/new](https://github.com/new) (misal bernama `portfolio`).
2. Di terminal PowerShell, jalankan:
```powershell
git remote add origin https://github.com/MaulanaMA/portfolio.git
git branch -M main
git push -u origin main
```

### Langkah B: Deploy Gratis ke Vercel (Rekomendasi Terbaik)
1. Buka [vercel.com](https://vercel.com/) dan login menggunakan akun GitHub Anda.
2. Klik tombol **"Add New Project"** -> Pilih repositori **`portfolio`**.
3. Framework Preset akan otomatis terdeteksi sebagai **Vite**.
4. Klik **"Deploy"**. Dalam $\approx 30$ detik website Anda sudah online di alamat `https://portfolio-maulanama.vercel.app` lengkap dengan sertifikat SSL HTTPS gratis!

---

## ✏️ Panduan Mengubah Konten Sendiri

- **Mengubah Profil / Kontak**: Edit file [`src/data/profile.ts`](src/data/profile.ts).
- **Menambah Proyek Baru**: Edit file [`src/data/projects.ts`](src/data/projects.ts).
- **Menambah / Mengubah Skill**: Edit file [`src/data/skills.ts`](src/data/skills.ts).
- **Mengubah Teks Terjemahan (Bahasa)**:
  - Bahasa Indonesia: [`src/locales/id/translation.json`](src/locales/id/translation.json)
  - English: [`src/locales/en/translation.json`](src/locales/en/translation.json)
- **Mengganti File PDF CV**: Cukup timpa file di [`public/documents/CV_Maulana_Muhammad_Adityawarman.pdf`](public/documents/CV_Maulana_Muhammad_Adityawarman.pdf).

---

## 📄 Lisensi
Hak Cipta &copy; 2026 Maulana Muhammad Adityawarman. Dibuat dengan dedikasi dan standar rekayasa perangkat lunak modern.
