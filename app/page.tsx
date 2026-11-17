import React from "react";
import Image from 'next/image';
import {
  BookOpen,
  GraduationCap,
  Users,
  Award,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Building2,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800">
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 bg-linear-to-br from-[#0F683D] via-[#073B22]  to-[#0B5E36] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between text-white">
          {/* Logo & Nama Yayasan */}
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/logo-almukhtariyah.jpg"
              alt="Logo Yayasan Pondok Pesantren Al-Mukhtariyah"
              height={900}
              width={900}
              className="h-12 w-12 object-contain"
            />
            <div>
              <span className="block text-xs font-bold tracking-wider text-amber-600 uppercase">
                Yayasan Pondok Pesantren
              </span>
              <span className="block text-lg sm:text-xl font-extrabold text-white leading-tight">
                AL-MUKHTARIYAH
              </span>
            </div>
          </a>

          {/* Navigasi Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-white">
            <a href="#profil" className="hover:text-[#0B5E36] transition">
              Profil
            </a>
            <a href="#sambutan" className="hover:text-[#0B5E36] transition">
              Sambutan
            </a>
            <a href="#pendidikan" className="hover:text-[#0B5E36] transition">
              Unit Pendidikan
            </a>
            <a href="#galeri" className="hover:text-[#0B5E36] transition">
              Galeri
            </a>
            <a href="#ppdb" className="hover:text-[#0B5E36] transition">
              Info PPDB
            </a>
            <a href="https://ponpes-mukhtariyah.emergent.host/"  className="hover:text-[#0B5E36] transition">
              Login
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <a
              href="#ppdb"
              className="bg-[#0B5E36] hover:bg-[#084729] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md transition flex items-center gap-2"
            >
              <span>Daftar Santri</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-linear-to-br from-[#073B22] via-[#0B5E36] to-[#0F683D] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D99B26_1px,transparent_1px)] background-size-[24px_24px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-medium">
              <Award className="w-4 h-4" />
              <span>Penerimaan Santri & Peserta Didik Baru Telah Dibuka</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Membentuk Generasi{" "}
              <span className="text-amber-400">Qur&apos;ani</span>, Berilmu, dan
              Berakhlakul Karimah
            </h1>

            <p className="text-base sm:text-lg text-emerald-100 max-w-2xl leading-relaxed">
              Yayasan Pondok Pesantren Al-Mukhtariyah memadukan kurikulum
              kepesantrenan salafiyah-modern dengan pendidikan formal guna
              melahirkan insan yang tangguh secara spiritual maupun intelektual.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#ppdb"
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl shadow-lg transition flex items-center gap-2"
              >
                Daftar Sekarang
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#profil"
                className="bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-7 py-3.5 rounded-xl transition"
              >
                Pelajari Profil Yayasan
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Foto Santri */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-2 bg-linear-to-r from-amber-400 to-amber-600 rounded-3xl rotate-2 opacity-40 blur-sm"></div>
              <div className="relative bg-emerald-950 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-4/5">
                <Image
                  src="/santri-hero.jpg"
                  alt="Santri Al-Mukhtariyah Memegang Al-Qur'an dan Kitab"
                  height={900}
                  width={900}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-4 inset-x-4 bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold">Kultur Pesantren Modern</h4>
                    <p className="text-xs text-slate-300">Tahfidz, Kitab Kuning & Prestasi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATISTIK SINGKAT ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {[
            { label: "Santri Aktif", value: "500+", icon: Users },
            { label: "Tenaga Pendidik & Asatidz", value: "45+", icon: GraduationCap },
            { label: "Unit Pendidikan", value: "4 Jenjang", icon: Building2 },
            { label: "Tahun Mengabdi", value: "25+ Thn", icon: BookOpen },
          ].map((stat, idx) => (
            <div key={idx} className="p-6 text-center flex flex-col items-center">
              <stat.icon className="w-7 h-7 text-amber-500 mb-2" />
              <span className="text-2xl sm:text-3xl font-extrabold text-[#0B5E36]">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROFIL & VISI MISI ================= */}
      <section id="profil" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="text-sm font-bold uppercase tracking-wider text-amber-600">
              Tentang Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Mengenal Yayasan Pondok Pesantren Al-Mukhtariyah
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Yayasan Pondok Pesantren Al-Mukhtariyah hadir sebagai lembaga
              pendidikan Islam dan dakwah kemasyarakatan yang berkomitmen
              menjaga nilai-nilai keislaman Ahlussunnah wal Jama&apos;ah sekaligus
              adaptif terhadap perkembangan zaman.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Dengan lingkungan asrama yang kondusif, bimbingan intensif para
              kiai dan asatidz, serta fasilitas pembelajaran modern, santri
              dididik untuk mandiri, disiplin, dan siap berkontribusi bagi umat
              dan bangsa.
            </p>
          </div>

          <div className="bg-white border border-emerald-100 rounded-3xl p-8 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#0B5E36] mb-2">Visi Yayasan</h3>
              <p className="text-slate-600 italic">
                &ldquo;Terwujudnya lembaga pendidikan Islam yang unggul dalam
                membentuk generasi beriman, bertakwa, berakhlak mulia, dan
                menguasai ilmu agama serta pengetahuan umum.&rdquo;
              </p>
            </div>

            <div className="border-t border-slate-100 pt-5">
              <h3 className="text-xl font-bold text-[#0B5E36] mb-3">Misi Utama</h3>
              <ul className="space-y-3 text-slate-600 text-sm sm:text-base">
                {[
                  "Menyelenggarakan pendidikan pesantren berbasis kajian kitab kuning dan tahfidzul Qur'an.",
                  "Mengintegrasikan kurikulum pendidikan formal yang berkualitas dan berdaya saing.",
                  "Membiasakan akhlakul karimah, kemandirian, dan jiwa kepemimpinan santri.",
                  "Mengembangkan potensi kewirausahaan, literasi digital, dan pengabdian masyarakat.",
                ].map((misi, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#0B5E36] shrink-0 mt-0.5" />
                    <span>{misi}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SAMBUTAN KETUA YAYASAN ================= */}
      <section id="sambutan" className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-2 bg-amber-500 rounded-3xl rotate-2 opacity-30"></div>
                <div className="relative bg-emerald-900 rounded-3xl overflow-hidden shadow-xl border-4 border-white max-w-sm">
                  <Image
                    src="/ketua-yayasan.jpg"
                    alt="Ketua Yayasan Pondok Pesantren Al-Mukhtariyah"
                    
                  height={500}
                  width={500}
                    className="w-full h-80 sm:h-96 object-cover object-top"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-linear-to-t from-slate-950/90 to-transparent p-6 text-white text-center">
                    <h3 className="font-bold text-lg">KH. Bubung Nizar, S.Pd.I.</h3>
                    <p className="text-xs text-amber-300">Ketua Yayasan Al-Mukhtariyah</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="text-sm font-bold uppercase tracking-wider text-amber-600">
                Sambutan Pimpinan
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Membangun Generasi Unggul Berlandaskan Iman & Ilmu
              </h2>
              <blockquote className="text-slate-600 italic border-l-4 border-amber-500 pl-4 py-1 leading-relaxed">
                &ldquo;Pendidikan pesantren bukan hanya tentang transfer ilmu pengetahuan, melainkan pembentukan karakter, adab, dan kedekatan spiritual kepada Allah SWT. Kami berkomitmen mendampingi santri menggali potensi terbaik mereka.&rdquo;
              </blockquote>
              <p className="text-slate-600 leading-relaxed">
                Kami mengajak seluruh orang tua dan masyarakat untuk bersama-sama membimbing putra-putri tercinta agar menjadi pribadi yang mandiri, cerdas, serta bermanfaat bagi agama dan sesama.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= UNIT PENDIDIKAN ================= */}
      <section id="pendidikan" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-bold uppercase tracking-wider text-amber-600">
            Lembaga Pendidikan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            Unit Pendidikan di Bawah Naungan Yayasan
          </h2>
          <p className="text-slate-600 mt-3">
            Jenjang pendidikan terpadu dari tingkat dasar hingga menengah atas
            yang terintegrasi dengan program kepesantrenan.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Pondok Pesantren",
              badge: "Salafiyah & Modern",
              desc: "Pendidikan asrama 24 jam dengan fokus pendalaman ilmu alat, fiqih, akidah akhlak, dan pembiasaan ibadah.",
            },
            {
              title: "Madrasah Diniyah",
              badge: "Takmiliyah",
              desc: "Penguatan materi dasar keislaman, baca tulis Al-Qur'an, hafalan doa harian, dan kajian kitab dasar.",
            },
            {
              title: "SMP / MTs",
              badge: "Pendidikan Menengah",
              desc: "Kurikulum nasional terpadu dengan muatan lokal kepesantrenan, bahasa Arab, dan bahasa Inggris.",
            },
            {
              title: "SMA / MA / SMK",
              badge: "Pendidikan Atas",
              desc: "Persiapan menuju perguruan tinggi maupun kemandirian kerja dengan bekal karakter islami yang kuat.",
            },
          ].map((unit, idx) => (
            <div
              key={idx}
              className="group bg-white hover:bg-[#0B5E36] border border-slate-200 hover:border-[#0B5E36] rounded-2xl p-6 transition duration-300 flex flex-col justify-between shadow-sm"
            >
              <div>
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-800 group-hover:bg-amber-400 group-hover:text-slate-950 mb-4">
                  {unit.badge}
                </span>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-white mb-2">
                  {unit.title}
                </h3>
                <p className="text-sm text-slate-600 group-hover:text-emerald-100 leading-relaxed">
                  {unit.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 group-hover:border-emerald-700">
                <a
                  href="#ppdb"
                  className="text-sm font-semibold text-[#0B5E36] group-hover:text-amber-300 inline-flex items-center gap-1"
                >
                  Info Pendaftaran <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= GALERI KEGIATAN SANTRI ================= */}
      <section id="galeri" className="py-24 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-bold uppercase tracking-wider text-amber-600">
              Dokumentasi & Aktivitas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Galeri Kegiatan Santri
            </h2>
            <p className="text-slate-600 mt-3">
              Potret keseharian, suasana belajar, dan kegiatan positif santri di lingkungan pondok pesantren.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Kegiatan Haul & Imtihan",
                img: "/kegiatan-1.jpg",
                tag: "Kajian & Hafalan",
              },
              {
                title: "Kunjungan ",
                img: "/kegiatan-2.jpg",
                tag: "Kunjungan",
              },
              {
                title: "Kajian & Hafalan",
                img: "/kegiatan-3.jpg",
                tag: "Aktivitas Santri",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition duration-300 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden bg-slate-200">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-amber-300 text-xs font-semibold px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-[#0B5E36] transition">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm mt-2">
                    -
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BANNER PPDB ================= */}
      <section id="ppdb" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-linear-to-r from-[#0B5E36] to-[#084427] rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 text-amber-300 text-sm font-semibold">
              <Calendar className="w-4 h-4" />
              <span>Tahun Ajaran 2026 / 2027</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold">
              Bergabunglah Bersama Keluarga Besar Al-Mukhtariyah
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base">
              Daftarkan putra-putri Anda sekarang melalui pendaftaran online
              maupun datang langsung ke sekretariat pendaftaran yayasan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto">
            <a
              href="https://wa.me/6281234567890?text=Assalamu'alaikum,%20saya%20ingin%20bertanya%20informasi%20pendaftaran%20santri%20baru%20Yayasan%20Al-Mukhtariyah"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-7 py-4 rounded-xl text-center shadow-lg transition"
            >
              Daftar via WhatsApp
            </a>
            <a
              href="#kontak"
              className="bg-white/15 hover:bg-white/25 text-white font-semibold px-7 py-3.5 rounded-xl text-center transition"
            >
              Lihat Alamat Sekretariat
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER & KONTAK ================= */}
      <footer id="kontak" className="bg-[#071F14] text-slate-300 pt-16 pb-8 mt-auto border-t border-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-10 pb-12 border-b border-emerald-900/50">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-almukhtariyah.jpg"
                alt="Logo Al-Mukhtariyah"
                height={900}
                width={900}
                className="h-12 w-12 bg-white rounded-full p-1 object-contain"
              />
              <div>
                <h3 className="text-white font-bold text-lg">
                  Yayasan Pondok Pesantren
                </h3>
                <p className="text-amber-400 font-extrabold text-sm">
                  AL-MUKHTARIYAH
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Lembaga pendidikan Islam, dakwah, dan sosial kemasyarakatan yang
              berkomitmen mencetak generasi berilmu amaliah dan beramal ilmiah.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#profil" className="hover:text-amber-400 transition">
                  Profil & Sejarah Yayasan
                </a>
              </li>
              <li>
                <a href="#sambutan" className="hover:text-amber-400 transition">
                  Sambutan Ketua Yayasan
                </a>
              </li>
              <li>
                <a href="#pendidikan" className="hover:text-amber-400 transition">
                  Unit Pendidikan Formal & Non-Formal
                </a>
              </li>
              <li>
                <a href="#ppdb" className="hover:text-amber-400 transition">
                  Informasi Pendaftaran Santri Baru
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Kontak & Alamat</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Jl. Raya Pesantren Al-Mukhtariyah, Jawa Barat, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <span>+62 812-3456-7890 (Sekretariat)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                <span>info@almukhtariyah.or.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 text-center text-xs text-slate-400">
          &copy; 2026 Yayasan Pondok Pesantren Al-Mukhtariyah. Hak Cipta Dilindungi Undang-Undang.
        </div>
      </footer>
    </div>
  );
}
