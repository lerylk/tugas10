<template>
  <div class="dashboard-container">
    <h2 class="center">Dashboard Pustakawan</h2>
    <div class="stats-row">
      <div class="stat-box">
        <div class="stat-number">{{ books.length }}</div>
        <div>Total Buku</div>
      </div>
      <div class="stat-box">
        <div class="stat-number">2</div>
        <div>Buku Dipinjam</div>
      </div>
      <div class="stat-box">
        <div class="stat-number">120</div>
        <div>Anggota Aktif</div>
      </div>
    </div>
    <ManageBooks
      :books="books"
      @add-book="addBook"
      @edit-book="editBook"
    />
    <!-- LoanRequests dan Reports bisa ditambahkan di bawah sesuai kebutuhan -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ManageBooks from './ManageBooks.vue'

const books = ref([
  { id: 1, title: 'Manuskrip Kuno Nusantara', author: 'PN Hadi', year: '1920', category: 'Sejarah' },
  { id: 2, title: 'Gita Kisah Jawa', author: 'E. Soekarno', year: '1905', category: 'Sastra' },
  { id: 3, title: 'Cerita dari Nusa Lampah', author: 'Dewi Sartika', year: '1945', category: 'Legenda' },
  { id: 4, title: 'Legenda Nusantara', author: 'Dewi Sartika', year: '1945', category: 'Legenda' },
  { id: 5, title: 'Sejarah Kerajaan Majapahit', author: 'Gajah Mada', year: '1905', category: 'Sejarah' },
  { id: 6, title: 'Sastra Kuno Bali', author: 'I Gusti Ngurah', year: '1900', category: 'Sastra' },
])

function addBook(book) {
  books.value.push({ ...book, id: books.value.length + 1 })
}

function editBook(updatedBook) {
  const idx = books.value.findIndex(b => b.id === updatedBook.id)
  if (idx !== -1) books.value[idx] = { ...updatedBook }
}
</script>

<style scoped>
.dashboard-container {
  max-width: 900px;
  margin: 30px auto;
  background: #fff;
  border-radius: 16px;
  padding: 30px 30px 40px 30px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
}
.center { text-align: center; }
.stats-row {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
}
.stat-box {
  background: #7c3aed;
  color: #fff;
  padding: 20px 0;
  border-radius: 10px;
  width: 120px;
  text-align: center;
}
.stat-number {
  font-size: 28px;
  font-weight: bold;
}
</style>
