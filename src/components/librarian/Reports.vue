<template>
  <div class="card">
    <h3>Laporan</h3>
    <ul>
      <li>Total Buku: <b>{{ totalBooks }}</b></li>
      <li>Buku Dipinjam: <b>2</b></li>
      <li>Anggota Aktif: <b>120</b></li>
    </ul>
  </div>
</template>
<script setup>
const props = defineProps(['totalBooks'])
</script>
<style scoped>
.card {
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 1px 6px rgba(0,0,0,0.04);
}
</style>
