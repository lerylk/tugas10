<template>
  <div class="card">
    <h3>Permintaan Peminjaman</h3>
    <div v-if="loanRequests.length === 0">
      <p>Belum ada permintaan.</p>
    </div>
    <table v-else class="loan-table">
      <thead>
        <tr>
          <th>Member</th>
          <th>Book</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="request in loanRequests" :key="request.id">
          <td>{{ request.member }}</td>
          <td>{{ request.book }}</td>
          <td>{{ request.date }}</td>
          <td>{{ request.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const loanRequests = ref([])

// Override fetchLoanRequests to keep loanRequests empty
async function fetchLoanRequests() {
  loanRequests.value = []
}

onMounted(() => {
  fetchLoanRequests()
})
</script>

<style scoped>
.card {
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 1px 6px rgba(0,0,0,0.04);
}
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
