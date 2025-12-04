import KursusImage1 from "/assets/kursus/github.png";
import KursusImage2 from "/assets/kursus/php.png";
import KursusImage3 from "/assets/kursus/java.png";
import KursusImage4 from "/assets/kursus/laravel.png";
import KursusImage5 from "/assets/kursus/react.png";
import KursusImage6 from "/assets/kursus/bootstrap.png";
import KursusImage7 from "/assets/kursus/js.png";
import KursusImage8 from "/assets/kursus/tailwindcss.png";

import People1 from "/assets/testimoni/people-1.jpg";
import People2 from "/assets/testimoni/people-2.jpg";
import People3 from "/assets/testimoni/people-3.jpg";

export const navLinks = [
  {
    id: 1,
    path: "",
    text: "Beranda",
  },
  {
    id: 2,
    path: "kursus",
    text: "Kursus",
  },
  {
    id: 3,
    path: "testimoni",
    text: "Testimoni",
  },
  {
    id: 4,
    path: "faq",
    text: "FAQ",
  },
  {
    id: 5,
    path: "syaratketentuan",
    text: "Syarat & Ketentuan",
  },
];

export const semuaKursus = [
  {
    id: 1,
    image: KursusImage1,
    nama: "Github",
    kategori: "Tools",
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star-half-stroke",
    title: "Belajar dasar menggunakan GitHub.",
    harga: "Rp. 99.999",
    deskripsi:
      "Kelas GitHub ini dirancang untuk membantu pemula memahami cara kerja version control system secara praktis. Kamu akan belajar membuat repository, melakukan commit, push, dan pull, hingga berkolaborasi dalam tim dengan branching. Selain itu, kamu juga akan mempelajari fitur penting seperti pull request, issues, dan GitHub Actions untuk otomatisasi. Dengan mengikuti kelas ini, kamu akan siap berkontribusi pada proyek open-source maupun proyek tim secara profesional."
  },
  {
    id: 2,
    image: KursusImage2,
    nama: "PHP",
    kategori: "Backend",
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Belajar Pemrograman Dasar PHP",
    harga: "Rp. 149.999",
    deskripsi:
      "Kelas ini memperkenalkan dasar-dasar bahasa PHP sebagai fondasi utama dalam pembuatan website dinamis. Materi mencakup sintaks dasar, variabel, tipe data, fungsi, hingga pengolahan form. Kamu juga akan belajar menghubungkan PHP dengan MySQL untuk membuat aplikasi sederhana. Di akhir kelas, kamu akan mampu membangun sistem CRUD (Create, Read, Update, Delete) yang dapat menjadi bekal untuk proyek lebih lanjut."
  },
  {
    id: 3,
    image: KursusImage3,
    nama: "Java",
    kategori: "Backend",
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Belajar Pemrograman Dasar java",
    harga: "Rp. 149.999",
    deskripsi:
      "Java adalah bahasa pemrograman yang kuat dan banyak digunakan di berbagai bidang mulai dari aplikasi Android hingga sistem enterprise. Dalam kelas ini, kamu akan mempelajari dasar sintaks Java, konsep OOP (Object Oriented Programming), dan struktur data. Selain itu, kamu juga akan dikenalkan pada exception handling serta penggunaan library dasar. Dengan menguasai materi ini, kamu akan memiliki pondasi yang kokoh untuk melanjutkan ke pengembangan aplikasi Android maupun backend."
  },
  {
    id: 4,
    image: KursusImage4,
    nama: "Laravel",
    kategori: "Backend",
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Belajar Membangun Web Dinamis dengan Laravel Framework",
    harga: "Rp. 199.999",
    deskripsi:
      "Laravel adalah framework PHP modern yang membantu developer membangun aplikasi web dengan cepat dan rapi. Dalam kelas ini, kamu akan belajar konsep MVC, routing, controller, model, migration, dan relasi antar database. Fitur canggih seperti autentikasi, middleware, hingga integrasi API juga akan dibahas. Setelah menyelesaikan kelas ini, kamu akan bisa membangun aplikasi web dinamis yang scalable dan sesuai standar industri."
  },
  {
    id: 5,
    image: KursusImage5,
    nama: "React",
    kategori: "Frontend",
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Belajar Cepat React Dengan Proyek Nyata",
    harga: "Rp. 380.000",
    deskripsi:
      "React adalah library JavaScript populer untuk membangun antarmuka pengguna yang interaktif. Di kelas ini, kamu akan belajar tentang component, props, state, dan hooks, serta bagaimana mengelola data dengan context API. Kamu juga akan membangun proyek nyata seperti aplikasi todo-list dan e-commerce sederhana. Dengan pendekatan berbasis praktik, kamu akan lebih siap menghadapi kebutuhan industri modern yang banyak menggunakan React."
  },
  {
    id: 6,
    image: KursusImage6,
    nama: "Bootstrap",
    kategori: "Styling",
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Kelas Praktik Cepat Bootstrap Membangun UI Modern",
    harga: "Rp. 300.000",
    deskripsi:
      "Kelas ini membahas cara membangun tampilan website responsif dengan Bootstrap. Kamu akan belajar memanfaatkan grid system, komponen bawaan, utilities, hingga membuat layout modern dengan cepat. Selain itu, kamu juga akan berlatih mengkustomisasi tema agar sesuai kebutuhan desain. Hasil akhir dari kelas ini adalah website dengan tampilan profesional yang responsif di berbagai perangkat."
  },
  {
    id: 7,
    image: KursusImage7,
    nama: "JavaScript",
    kategori: "Frontend",
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star-half-stroke",
    title: "Belajar JavaScript Dari Dasar Hingga Mahir",
    harga: "Rp. 340.000",
    deskripsi:
      "JavaScript adalah bahasa pemrograman inti dari web modern. Dalam kelas ini, kamu akan belajar dasar sintaks, manipulasi DOM, event handling, hingga konsep lanjutan seperti asynchronous programming dengan async/await. Kamu juga akan mempelajari cara mengonsumsi API eksternal untuk membuat aplikasi interaktif. Dengan menguasai JavaScript, kamu dapat membangun website dinamis dan interaktif dari nol."
  },
  {
    id: 8,
    image: KursusImage8,
    nama: "Tailwind CSS",
    kategori: "Styling",
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star-half-stroke",
    title: "Belajar Tailwind CSS Dari Dasar Hingga Responsif",
    harga: "Rp. 400.000",
    deskripsi:
      "Tailwind CSS adalah framework CSS modern dengan pendekatan utility-first. Kelas ini akan membimbingmu memahami cara styling tanpa menulis CSS panjang, membuat layout fleksibel, hingga mengatur tema kustom. Kamu juga akan belajar membangun desain responsif untuk berbagai perangkat. Setelah menyelesaikan kelas ini, kamu bisa membangun website dengan tampilan modern, konsisten, dan mudah dikembangkan."
  },
];

export const kursusPopuler = [
  {
    id: 1,
    image: KursusImage1,
    nama: "Github",
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star-half-stroke",
    title: "Belajar dasar menggunakan GitHub.",
    harga: "Rp. 99.999",
    delay: "",
  },
  {
    id: 2,
    image: KursusImage2,
    nama: "PHP",
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Belajar Pemrograman Dasar PHP",
    harga: "Rp. 149.999",
    delay: "200",
  },
  {
    id: 3,
    image: KursusImage3,
    nama: "Java",
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Belajar Pemrograman Dasar java",
    harga: "Rp. 149.999",
    delay: "400",
  },
  {
    id: 4,
    image: KursusImage4,
    nama: "Laravel",
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Belajar Membangun Web Dinamis dengan Laravel Framework",
    harga: "Rp. 199.999",
    delay: "",
  },
];

export const testimonial = [
  {
    id: 1,
    desc: "Belajar di platform ini menyenangkan. Materinya runtut dan gampang dipahami meski saya masih pemula.",
    image: People1,
    name: "Arga Ari",
    skill: "UI UX Designer",
  },
  {
    id: 2,
    desc: "Fiturnya sangat membantu. Saya bisa langsung praktek dan hasilnya terasa di pekerjaan sehari-hari.",
    image: People2,
    name: "Andhika Romadhoni",
    skill: "Flutter Developer",
  },
  {
    id: 3,
    desc: "Awalnya ragu belajar online, ternyata sangat mudah diikuti. Sekarang saya bisa bikin website sederhana sendiri.",
    image: People3,
    name: "Ari Rangga",
    skill: "Web Developer",
  },
  {
    id: 4,
    desc: "Sangat membantu meningkatkan skill baru. Cocok buat yang sibuk kerja tapi tetap ingin upgrade kemampuan.",
    image: People1,
    name: "Aditya Wahyuda",
    skill: "UI UX Designer",
  },
  {
    id: 5,
    desc: "Tutorialnya jelas, praktis, dan langsung bisa diterapkan di project nyata. Worth it banget!",
    image: People2,
    name: "Dicky Effendi",
    skill: "Flutter Developer",
  },
  {
    id: 6,
    desc: "Bahasanya mudah dipahami, jadi saya bisa belajar mandiri tanpa bingung. Sangat direkomendasikan.",
    image: People3,
    name: "Dimas Drajat",
    skill: "Web Developer",
  },
  {
    id: 7,
    desc: "Ilmu yang saya dapat bikin saya lebih percaya diri untuk mengembangkan karya digital sendiri.",
    image: People1,
    name: "Adrian Saputra",
    skill: "UI UX Designer",
  },
  {
    id: 8,
    desc: "Platform ini penting untuk menghadapi dunia kerja. Terima kasih sudah menyediakan pembelajaran berkualitas.",
    image: People2,
    name: "Risky Alfarizi",
    skill: "Flutter Developer",
  },
  {
    id: 9,
    desc: "Materinya relevan banget dengan kebutuhan bisnis online saya. Setelah ikut, penjualan saya meningkat.",
    image: People3,
    name: "Fajar Saputra",
    skill: "Web Developer",
  },
];

export const faq = [
  {
    id: 1,
    eventKey: 0,
    title: "Apa itu GetCode-app?",
    desc: "GetCode-app adalah platform pembelajaran interaktif yang membantu siapa saja belajar coding, teknologi, dan pengembangan aplikasi dengan cara yang praktis dan menyenangkan.",
  },
  {
    id: 2,
    eventKey: 1,
    title: "Apakah materi bisa diakses gratis?",
    desc: "Beberapa materi tersedia gratis, sedangkan konten premium bisa diakses dengan berlangganan.",
  },
  {
    id: 3,
    eventKey: 2,
    title: "Bagaimana cara mendaftar?",
    desc: "Cukup klik tombol Daftar di halaman utama, isi data diri, lalu akun langsung aktif dan bisa digunakan.",
  },
  {
    id: 4,
    eventKey: 3,
    title: "Apakah bisa belajar lewat HP?",
    desc: "Ya, platform ini sepenuhnya responsif dan bisa diakses melalui laptop, tablet, maupun smartphone.",
  },
  {
    id: 5,
    eventKey: 4,
    title: "Apakah saya mendapat sertifikat setelah menyelesaikan kelas?",
    desc: "Tentu, setelah menyelesaikan kelas tertentu, kamu akan mendapatkan sertifikat digital resmi.",
  },
  {
    id: 6,
    eventKey: 5,
    title: "Bagaimana jika saya mengalami kendala saat belajar?",
    desc: "Kamu bisa menghubungi tim support melalui menu Kontak atau email resmi, kami siap membantu.",
  },
  {
    id: 7,
    eventKey: 6,
    title: "Apakah ada batas waktu untuk mengakses materi?",
    desc: "Tidak ada, selama akun aktif dan masih berlangganan, materi bisa dipelajari kapan saja.",
  },
  {
    id: 8,
    eventKey: 7,
    title: "Apakah data pribadi saya aman?",
    desc: "Ya, semua data pengguna dilindungi dengan sistem keamanan dan enkripsi standar industri.",
  },
];
