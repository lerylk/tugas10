<template>
  <section class="loan-section">
    <h2>Permintaan Peminjaman Buku</h2>
    <table class="loan-table">
      <thead>
        <tr>
          <th>Nama Anggota</th>
          <th>Judul Buku</th>
          <th>Tanggal Permintaan</th>
          <th>Status</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="request in loanRequests" :key="request.id">
          <td>{{ request.member }}</td>
          <td>{{ request.book }}</td>
          <td>{{ request.date }}</td>
          <td>
            <span :class="'status ' + request.status">{{ statusLabel(request.status) }}</span>
          </td>
          <td>
            <button
              v-if="request.status === 'pending'"
              @click="approve(request)"
              class="btn-approve"
            >Setujui</button>
            <button
              v-if="request.status === 'pending'"
              @click="reject(request)"
              class="btn-reject"
            >Tolak</button>
            <span v-else>-</span>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="message" class="success-msg">{{ message }}</div>
  </section>
</template>

<script>
export default {
  name: "LoanRequests",
  data() {
    return {
      loanRequests: [
        { id: 1, member: "Andi", book: "Kitab Klasik Jawa", date: "2025-05-20", status: "pending" },
        { id: 2, member: "Sari", book: "Legenda Nusantara", date: "2025-05-22", status: "approved" },
        { id: 3, member: "Budi", book: "Cerita dari Masa Lampau", date: "2025-05-21", status: "pending" },
      ],
      message: "",
    };
  },
  methods: {
    approve(request) {
      request.status = "approved";
      this.message = `Permintaan oleh ${request.member} disetujui.`;
      setTimeout(() => (this.message = ""), 2000);
    },
    reject(request) {
      request.status = "rejected";
      this.message = `Permintaan oleh ${request.member} ditolak.`;
      setTimeout(() => (this.message = ""), 2000);
    },
    statusLabel(status) {
      if (status === "pending") return "Menunggu";
      if (status === "approved") return "Disetujui";
      if (status === "rejected") return "Ditolak";
      return status;
    },
  },
};
</script>

<style scoped>
.loan-section {
  max-width: 900px;
  margin: 2rem auto;
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(100,50,200,0.08);
}
h2 {
  text-align: center;
  margin-bottom: 1.5rem;
}
.loan-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}
.loan-table th, .loan-table td {
  padding: 0.8rem;
  border-bottom: 1px solid #eee;
  text-align: left;
}
.loan-table th {
  background: #764ba2;
  color: #fff;
}
.status {
  padding: 0.3rem 0.7rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
}
.status.pending {
  background: #ffdd57;
  color: #333;
}
.status.approved {
  background: #2ecc71;
  color: #fff;
}
.status.rejected {
  background: #e74c3c;
  color: #fff;
}
.btn-approve {
  background: #2ecc71;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  margin-right: 0.5rem;
  cursor: pointer;
  font-weight: 600;
}
.btn-approve:hover {
  background: #27ae60;
}
.btn-reject {
  background: #e74c3c;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}
.btn-reject:hover {
  background: #c0392b;
}
.success-msg {
  margin-top: 1rem;
  color: #2ecc71;
  text-align: center;
  font-weight: 600;
}
@media (max-width: 700px) {
  .loan-section {padding: 1rem;}
  .loan-table th, .loan-table td {padding: 0.5rem;}
}
</style>
