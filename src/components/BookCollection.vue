<template>
  <section class="collection-container">
    <h2>Koleksi Buku Langka</h2>
    <p>Temukan buku-buku langka dari berbagai genre dan masa.</p>
    <div class="book-list">
      <div
        class="book-item"
        v-for="book in sampleBooks"
        :key="book.id"
        tabindex="0"
        role="button"
        @click="onBookClick(book)"
      >
        <div class="cover-wrapper">
          <img :src="book.cover" :alt="`Sampul buku ${book.title}`" />
        </div>
        <h3>{{ book.title }}</h3>
        <p class="author">Penulis: {{ book.author }}</p>
        <p class="year">Tahun Terbit: {{ book.year }}</p>
        <p class="desc">{{ book.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BookCollection",
  data() {
    return {
      sampleBooks: [
        {
          id: 1,
          title: "Manuskrip Kuno Nusantara",
          author: "P.N Hadi",
          year: 1920,
          description:
            "Kumpulan manuskrip kuno yang menceritakan sejarah dan budaya Nusantara.",
          cover:
            "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: 2,
          title: "Kitab Klasik Jawa",
          author: "R. Soekarno",
          year: 1935,
          description: "Kitab klasik berbahasa Jawa yang kaya akan filosofi dan sastra.",
          cover:
            "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: 3,
          title: "Cerita dari Masa Lampau",
          author: "Kartini",
          year: 1910,
          description:
            "Kumpulan cerita rakyat dan legenda yang diwariskan secara turun-temurun.",
          cover:
            "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: 4,
          title: "Legenda Nusantara",
          author: "Dewi Sartika",
          year: 1945,
          description:
            "Cerita legenda dan mitos dari berbagai daerah di Indonesia yang menarik.",
          cover:
            "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: 5,
          title: "Sejarah Kerajaan Majapahit",
          author: "Gajah Mada",
          year: 1925,
          description:
            "Dokumentasi sejarah kerajaan Majapahit yang menjadi salah satu kerajaan terbesar di Nusantara.",
          cover:
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: 6,
          title: "Sastra Kuno Bali",
          author: "I Gusti Ngurah",
          year: 1930,
          description:
            "Karya sastra kuno dari Bali yang mengandung nilai budaya dan keagamaan.",
          cover:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        },
      ],
    };
  },
  methods: {
    onBookClick(book) {
      alert(`Anda memilih buku:\n${book.title}\nPenulis: ${book.author}`);
    },
  },
};
</script>

<style scoped>
.collection-container {
  background: linear-gradient(135deg, #ff6a00, #ee0979);
  padding: 3rem 2rem;
  border-radius: 24px;
  box-shadow: 0 12px 40px rgba(238, 9, 121, 0.7);
  color: #f1e6da;
  max-width: 1200px;
  margin: 3rem auto;
  user-select: none;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-sizing: border-box;
}

.collection-container h2 {
  font-size: 2.8rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(255, 221, 87, 0.8);
}

.collection-container p {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  color: #ffd6cc;
  font-weight: 500;
}

.book-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem 2rem; /* jarak vertikal 1.5rem, horizontal 2rem */
  justify-items: center;
  margin: 0;
  padding: 0;
}

.book-item {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 1.5rem 1.5rem 2rem;
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.2);
  color: #fff;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  outline-offset: 4px;
}

.book-item:focus,
.book-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 14px 40px rgba(255, 255, 255, 0.45);
  outline: none;
}

.cover-wrapper {
  width: 150px;
  height: 220px;
  margin-bottom: 1rem;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
  flex-shrink: 0;
}

.cover-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.book-item:hover .cover-wrapper img,
.book-item:focus .cover-wrapper img {
  transform: scale(1.07);
}

.book-item h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.35);
}

.author,
.year {
  font-style: italic;
  font-weight: 500;
  color: #ffd6cc;
  font-size: 0.95rem;
  margin-bottom: 0.2rem;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
}

.desc {
  font-size: 0.9rem;
  color: #ffe6d6;
  margin-top: 0.6rem;
  line-height: 1.3;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}

/* Responsive */
@media (max-width: 600px) {
  .collection-container {
    padding: 2rem 1rem;
  }
  .book-list {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .book-item {
    max-width: 100%;
  }
}
</style>
