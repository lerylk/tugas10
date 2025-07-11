<template>
  <div class="dashboard-container">
    <!-- Header Section -->
    <div class="dashboard-header">
      <div class="header-content">
        <div class="header-icon">📚</div>
        <h2 class="dashboard-title">Dashboard Pustakawan</h2>
        <p class="dashboard-subtitle">Kelola perpustakaan digital Anda dengan mudah</p>
      </div>
    </div>

    <!-- Statistics Cards -->
    <div class="stats-section">
      <div class="stat-card total-books">
        <div class="stat-icon">📖</div>
        <div class="stat-content">
          <div class="stat-number">{{ books.length }}</div>
          <div class="stat-label">Total Buku</div>
        </div>
        <div class="stat-trend">+{{ Math.floor(books.length * 0.1) }} bulan ini</div>
      </div>
      
      <div class="stat-card borrowed-books">
        <div class="stat-icon">📋</div>
        <div class="stat-content">
          <div class="stat-number">2</div>
          <div class="stat-label">Buku Dipinjam</div>
        </div>
        <div class="stat-trend">-3 dari minggu lalu</div>
      </div>
      
      <div class="stat-card active-members">
        <div class="stat-icon">👥</div>
        <div class="stat-content">
          <div class="stat-number">120</div>
          <div class="stat-label">Anggota Aktif</div>
        </div>
        <div class="stat-trend">+8 anggota baru</div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="quick-actions">
      <h3 class="section-title">Aksi Cepat</h3>
      <div class="action-buttons">
        <button class="action-btn primary">
          <span class="btn-icon">➕</span>
          Tambah Buku Baru
        </button>
        <button class="action-btn secondary">
          <span class="btn-icon">📊</span>
          Lihat Laporan
        </button>
        <button class="action-btn tertiary">
          <span class="btn-icon">🔍</span>
          Cari Buku
        </button>
      </div>
    </div>

    <!-- Manage Books Component -->
    <div class="manage-books-section">
      <ManageBooks
        :books="books"
        @add-book="addBook"
        @edit-book="editBook"
      />
    </div>
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
}

/* Header Section */
.dashboard-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

.header-content {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.2);
  animation: slideDown 0.8s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.header-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  display: inline-block;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.dashboard-title {
  margin: 0 0 0.5rem 0;
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.dashboard-subtitle {
  margin: 0;
  color: #64748b;
  font-size: 1.1rem;
  font-weight: 400;
}

/* Statistics Section */
.stats-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.stat-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.08),
    0 0 0 1px rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stat-card:hover {
  transform: translateY(-8px);
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.2);
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  border-radius: 20px 20px 0 0;
}

.total-books::before {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.borrowed-books::before {
  background: linear-gradient(135deg, #f093fb, #f5576c);
}

.active-members::before {
  background: linear-gradient(135deg, #4facfe, #00f2fe);
}

.stat-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: inline-block;
}

.stat-content {
  margin-bottom: 1rem;
}

.stat-number {
  font-size: 3rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 0.5rem;
  line-height: 1;
}

.stat-label {
  font-size: 1.1rem;
  color: #64748b;
  font-weight: 600;
}

.stat-trend {
  font-size: 0.9rem;
  color: #059669;
  font-weight: 500;
  padding: 0.5rem 1rem;
  background: rgba(5, 150, 105, 0.1);
  border-radius: 12px;
  display: inline-block;
}

/* Quick Actions Section */
.quick-actions {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1.5rem;
  text-align: center;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.action-btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 180px;
  justify-content: center;
}

.action-btn.primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

.action-btn.secondary {
  background: linear-gradient(135deg, #f093fb, #f5576c);
  color: white;
}

.action-btn.tertiary {
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  color: white;
}

.action-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
}

.btn-icon {
  font-size: 1.2rem;
}

/* Manage Books Section */
.manage-books-section {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.08),
    0 0 0 1px rgba(255, 255, 255, 0.2);
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .dashboard-container {
    padding: 1rem;
  }
  
  .header-content {
    padding: 2rem 1.5rem;
  }
  
  .dashboard-title {
    font-size: 2rem;
  }
  
  .stats-section {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .stat-card {
    padding: 1.5rem;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
  
  .action-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .action-btn {
    width: 100%;
    max-width: 280px;
  }
  
  .manage-books-section {
    padding: 1.5rem;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .dashboard-container {
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  }
  
  .header-content,
  .stat-card,
  .manage-books-section {
    background: rgba(30, 41, 59, 0.95);
    color: #f1f5f9;
  }
  
  .dashboard-subtitle,
  .stat-label {
    color: #94a3b8;
  }
  
  .stat-number {
    color: #f1f5f9;
  }
  
  .section-title {
    color: #f1f5f9;
  }
}
</style>
