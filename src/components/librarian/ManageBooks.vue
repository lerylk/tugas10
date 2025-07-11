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
import { ref, onMounted } from 'vue'
import AddBook from './AddBook.vue'
import EditBook from './EditBook.vue'

const books = ref([])
const showAdd = ref(false)
const showEdit = ref(false)
const selectedBook = ref(null)

async function fetchBooks() {
  try {
    const response = await fetch('http://localhost:3000/books')
    if (!response.ok) throw new Error('Gagal mengambil data buku')
    books.value = await response.json()
  } catch (error) {
    console.error(error)
  }
}

function handleAdd(book) {
  resetForm()
  fetchBooks()
}
function handleEdit(book) {
  resetForm()
  fetchBooks()
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

onMounted(() => {
  fetchBooks()
})
</script>

<style scoped>
/* ...CSS sama seperti sebelumnya... */
</style>
