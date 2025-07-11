<template>
  <div>
    <h2>Riwayat Peminjaman</h2>
    <p>Daftar riwayat peminjaman buku langka yang pernah Anda lakukan.</p>
    <div v-if="loans.length === 0">
      <p>Belum ada riwayat peminjaman.</p>
    </div>
    <table v-else class="loan-table">
      <thead>
        <tr>
          <th>Buku</th>
          <th>Peminjam</th>
          <th>Tanggal Pinjam</th>
          <th>Tanggal Kembali</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="loan in loans" :key="loan.id">
          <td>{{ loan.book }}</td>
          <td>{{ loan.borrower }}</td>
          <td>{{ loan.loanDate }}</td>
          <td>{{ loan.returnDate }}</td>
          <td>{{ loan.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const loans = ref([])

async function fetchLoans() {
  try {
    const response = await fetch('http://localhost:3000/loans')
    if (!response.ok) throw new Error('Gagal mengambil data riwayat peminjaman')
    loans.value = await response.json()
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchLoans()
})
</script>

<style scoped>
.loan-table {
  width: 100%;
  border-collapse: collapse;
}
.loan-table th, .loan-table td {
  border: 1px solid #ddd;
  padding: 8px;
}
.loan-table th {
  background-color: #764ba2;
  color: white;
}
</style>
