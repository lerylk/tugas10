<template>
  <form class="book-form" @submit.prevent="onSubmit">
    <h4>Edit Buku</h4>
    <input v-model="form.title" type="text" placeholder="Judul Buku" required />
    <input v-model="form.author" type="text" placeholder="Penulis" required />
    <input v-model="form.year" type="text" placeholder="Tahun" required />
    <input v-model="form.category" type="text" placeholder="Kategori" required />
    <button class="save-btn" type="submit">Update</button>
    <button class="cancel-btn" type="button" @click="$emit('cancel')">Batal</button>
  </form>
</template>

<script setup>
import { reactive, watch } from 'vue'
const props = defineProps(['book'])
const emit = defineEmits(['edit', 'cancel'])
const form = reactive({ id: null, title: '', author: '', year: '', category: '' })

watch(() => props.book, (val) => {
  if (val) Object.assign(form, val)
}, { immediate: true })

function onSubmit() {
  emit('edit', { ...form })
}
</script>

<style scoped>
.book-form {
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 250px;
  box-shadow: 0 1px 6px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.book-form input {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ddd;
}
.save-btn {
  background: #7c3aed;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 0;
  width: 100%;
  margin-bottom: 8px;
  font-weight: bold;
  cursor: pointer;
}
.cancel-btn {
  background: #f87171;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 0;
  width: 100%;
  font-weight: bold;
  cursor: pointer;
}
</style>
