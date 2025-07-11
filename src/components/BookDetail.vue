<template>
  <div>
    <h2>Detail Buku</h2>
    <p>Informasi detail buku dengan ID: {{ bookId }}</p>
  </div>
</template>

<script>
export default {
  name: 'BookDetail',
  props: ['bookId'],
};
</script>

<style scoped>
</style>