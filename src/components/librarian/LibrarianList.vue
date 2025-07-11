<template>
  <div>
    <h3>Daftar Pustakawan</h3>
    <div v-if="librarians.length === 0">
      <p>Belum ada data pustakawan.</p>
    </div>
    <table v-else class="librarian-table">
      <thead>
        <tr>
          <th>Nama</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="librarian in librarians" :key="librarian.id">
          <td>{{ librarian.name }}</td>
          <td>{{ librarian.username }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const librarians = ref([])

async function fetchLibrarians() {
  try {
    const response = await fetch('http://localhost:3000/users')
    if (!response.ok) throw new Error('Gagal mengambil data pustakawan')
    const users = await response.json()
    librarians.value = users.filter(user => user.role === 'librarian')
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchLibrarians()
})
</script>

<style scoped>
.librarian-container {
  max-width: 700px;
  margin: 2rem auto;
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem 2rem;
  box-shadow: 0 6px 24px rgba(118, 75, 162, 0.15);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h3 {
  text-align: center;
  color: #5c3d91;
  margin-bottom: 1.5rem;
}

.librarian-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
  font-size: 1rem;
}

.librarian-table th, .librarian-table td {
  padding: 12px 15px;
  text-align: left;
}

.librarian-table thead th {
  background-color: #764ba2;
  color: white;
  border-radius: 12px 12px 0 0;
}

.librarian-table tbody tr {
  background: #faf7ff;
  box-shadow: 0 2px 8px rgba(118, 75, 162, 0.1);
  border-radius: 12px;
  transition: background-color 0.3s ease;
}

.librarian-table tbody tr:hover {
  background-color: #e6d9f7;
}

.librarian-table tbody td {
  border-bottom: 1px solid #ddd;
  border-radius: 0 0 12px 12px;
}
</style>
