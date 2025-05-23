<template>
  <div class="book-table-container">
    <div class="table-header">
      <h3>Koleksi Buku</h3>
      <button class="add-btn" @click="showAdd = true; showEdit = false">+ Tambah Buku</button>
    </div>
    <table class="book-table">
      <thead>
        <tr>
          <th>Judul</th>
          <th>Penulis</th>
          <th>Tahun</th>
          <th>Kategori</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id">
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.year }}</td>
          <td>{{ book.category }}</td>
          <td>
            <button class="edit-btn" @click="startEdit(book)">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="form-row">
      <AddBook v-if="showAdd" @add="handleAdd" @cancel="resetForm" />
      <EditBook v-if="showEdit" :book="selectedBook" @edit="handleEdit" @cancel="resetForm" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AddBook from './AddBook.vue'
import EditBook from './EditBook.vue'

const props = defineProps(['books'])
const emit = defineEmits(['add-book', 'edit-book'])

const showAdd = ref(false)
const showEdit = ref(false)
const selectedBook = ref(null)

function handleAdd(book) {
  emit('add-book', book)
  resetForm()
}
function handleEdit(book) {
  emit('edit-book', book)
  resetForm()
}
function startEdit(book) {
  selectedBook.value = { ...book }
  showAdd.value = false
  showEdit.value = true
}
function resetForm() {
  showAdd.value = false
  showEdit.value = false
  selectedBook.value = null
}
</script>

<style scoped>
.book-table-container {
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 1px 6px rgba(0,0,0,0.04);
}
.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.add-btn {
  background: #7c3aed;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-weight: bold;
  cursor: pointer;
}
.book-table {
  width: 100%;
  border-collapse: collapse;
}
.book-table th, .book-table td {
  padding: 10px 8px;
  text-align: left;
}
.book-table th {
  background: #ede9fe;
}
.book-table tr:not(:last-child) {
  border-bottom: 1px solid #eee;
}
.edit-btn {
  background: #6366f1;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 14px;
  cursor: pointer;
  font-weight: bold;
}
.form-row {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 30px;
}
</style>
