<template>
  <section class="home-container">
    <header class="hero-section">
      <h1>
        Selamat Datang di <br />
        <span class="highlight">Perpustakaan Digital Buku Langka</span>
      </h1>
      <p>
        Temukan koleksi buku langka dan kuno dengan database terlengkap dan fitur pencarian canggih.
      </p>
      <button @click="scrollToFeatures" class="btn-primary">Jelajahi Fitur</button>
    </header>

    <section ref="features" class="features-section">
      <h2>Fitur Unggulan</h2>
      <div class="features-grid">
        <div class="feature-card" v-for="feature in features" :key="feature.id">
          <div class="icon">{{ feature.icon }}</div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <section class="articles-section">
      <h2>Artikel Terbaru</h2>
      <div class="articles-list">
        <article v-for="article in articles" :key="article.id" class="article-card no-image">
          <div class="article-content">
            <h3>{{ article.title }}</h3>
            <p>{{ article.excerpt }}</p>
            <a href="#" class="read-more">Baca Selengkapnya →</a>
          </div>
        </article>
      </div>
    </section>

    <section class="testimonial-section">
      <h2>Apa Kata Pengguna</h2>
      <div class="testimonial-card" v-for="testi in testimonials" :key="testi.id">
        <p>"{{ testi.message }}"</p>
        <h4>- {{ testi.name }}</h4>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      features: [
        { id: 1, icon: "📚", title: "Koleksi Lengkap", description: "Ribuan buku langka dan kuno tersedia." },
        { id: 2, icon: "🔍", title: "Pencarian Canggih", description: "Cari buku berdasarkan kategori, tahun, dan penulis." },
        { id: 3, icon: "💾", title: "Simpan Favorit", description: "Simpan buku favorit di akunmu dengan mudah." },
        { id: 4, icon: "🌐", title: "Akses Online", description: "Baca buku langsung dari browser kapan saja." },
      ],
      articles: [
        {
          id: 1,
          title: "Sejarah Buku Langka di Indonesia",
          excerpt: "Mengenal lebih dalam tentang asal usul dan nilai buku langka di tanah air.",
          // gambar dihilangkan
        },
        {
          id: 2,
          title: "Tips Merawat Buku Kuno",
          excerpt: "Cara menjaga agar buku kuno tetap awet dan tidak rusak oleh waktu.",
        },
        {
          id: 3,
          title: "Digitalisasi Koleksi Buku Langka",
          excerpt: "Transformasi perpustakaan tradisional ke era digital yang lebih mudah diakses.",
        },
      ],
      testimonials: [
        { id: 1, name: "Andi", message: "Perpustakaan ini sangat membantu saya menemukan buku langka yang sulit dicari." },
        { id: 2, name: "Sari", message: "Tampilan website modern dan mudah digunakan, sangat menyenangkan!" },
        { id: 3, name: "Budi", message: "Fitur pencarian sangat lengkap, saya bisa menemukan buku sesuai kebutuhan." },
      ],
    };
  },
  methods: {
    scrollToFeatures() {
      this.$refs.features.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
/* Container tetap max-width agar konten rapi */
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem 3rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

/* Hero Section full width dan full background */
.hero-section {
  width: 100vw;
  padding: 5rem 2rem 6rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  text-align: center;
  box-shadow: 0 8px 30px rgba(102, 126, 234, 0.4);
  margin-left: calc(-50vw + 50%);
  border-radius: 0 0 24px 24px;
}

.hero-section h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
  line-height: 1.1;
}

.highlight {
  color: #ffdd57;
  font-weight: 800;
  text-shadow: 0 0 8px #ffdd57;
}

.hero-section p {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.btn-primary {
  background-color: #ffdd57;
  color: #333;
  border: none;
  padding: 1rem 2.5rem;
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 6px 20px rgba(255, 221, 87, 0.7);
}

.btn-primary:hover {
  background-color: #f0c419;
  box-shadow: 0 8px 30px rgba(240, 196, 25, 0.85);
}

/* Features Section */
.features-section {
  margin-top: 4rem;
  text-align: center;
}

.features-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #444;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  cursor: default;
}

.feature-card:hover {
  transform: translateY(-8px);
}

.feature-card .icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  margin-bottom: 0.8rem;
  color: #667eea;
}

.feature-card p {
  font-size: 0.95rem;
  color: #666;
}

/* Articles Section tanpa gambar */
.articles-section {
  margin-top: 5rem;
}

.articles-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #444;
}

.articles-list {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
  gap: 2rem;
}

.article-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease;
}

.article-card:hover {
  box-shadow: 0 8px 30px rgba(0,0,0,0.15);
}

.article-content h3 {
  margin-bottom: 0.5rem;
  color: #764ba2;
}

.article-content p {
  color: #555;
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.read-more {
  align-self: flex-start;
  color: #667eea;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
}

.read-more:hover {
  color: #ffdd57;
}

/* Testimonial Section */
.testimonial-section {
  margin-top: 5rem;
  padding: 3rem 1rem;
  background: #f7f7f7;
  border-radius: 16px;
  text-align: center;
}

.testimonial-section h2 {
  font-size: 2rem;
  margin-bottom: 3rem;
  color: #444;
}

.testimonial-card {
  max-width: 700px;
  margin: 0 auto 2rem auto;
  font-style: italic;
  color: #555;
  padding: 1.5rem 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

.testimonial-card h4 {
  margin-top: 1rem;
  font-style: normal;
  font-weight: 700;
  color: #667eea;
}

/* Responsive tweaks */
@media (max-width: 600px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  .btn-primary {
    width: 100%;
  }
}
</style>
