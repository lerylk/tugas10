<template>
  <form class="book-form" @submit.prevent="onSubmit">
    <div class="form-header">
      <div class="header-icon">📚</div>
      <h4>Edit Buku</h4>
    </div>
    
    <div class="form-fields">
      <div class="form-group">
        <label for="title">Judul Buku</label>
        <div class="input-wrapper">
          <span class="input-icon">📖</span>
          <input 
            id="title"
            v-model="form.title" 
            type="text" 
            placeholder="Masukkan judul buku" 
            required 
          />
        </div>
      </div>
      
      <div class="form-group">
        <label for="author">Penulis</label>
        <div class="input-wrapper">
          <span class="input-icon">✍️</span>
          <input 
            id="author"
            v-model="form.author" 
            type="text" 
            placeholder="Masukkan nama penulis" 
            required 
          />
        </div>
      </div>
      
      <div class="form-group">
        <label for="year">Tahun</label>
        <div class="input-wrapper">
          <span class="input-icon">📅</span>
          <input 
            id="year"
            v-model="form.year" 
            type="text" 
            placeholder="Tahun terbit" 
            required 
          />
        </div>
      </div>
      
      <div class="form-group">
        <label for="category">Kategori</label>
        <div class="input-wrapper">
          <span class="input-icon">🏷️</span>
          <input 
            id="category"
            v-model="form.category" 
            type="text" 
            placeholder="Kategori buku" 
            required 
          />
        </div>
      </div>
    </div>
    
    <div class="form-actions">
      <button class="save-btn" type="submit">
        <span class="btn-icon">💾</span>
        Update Buku
      </button>
      <button class="cancel-btn" type="button" @click="$emit('cancel')">
        <span class="btn-icon">❌</span>
        Batal
      </button>
    </div>
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
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 2rem;
  width: 320px;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  overflow: hidden;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.book-form::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 20px 20px 0 0;
}

.form-header {
  text-align: center;
  margin-bottom: 0.5rem;
}

.header-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.form-header h4 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.form-fields {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  color: #374151;
  font-size: 0.9rem;
  margin-left: 0.25rem;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 1rem;
  z-index: 1;
  font-size: 1rem;
  opacity: 0.6;
}

.form-group input {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 0.95rem;
  background: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  outline: none;
  box-sizing: border-box;
}

.form-group input:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  background: #ffffff;
  transform: translateY(-1px);
}

.form-group input::placeholder {
  color: #9ca3af;
  font-size: 0.9rem;
}

.form-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.save-btn,
.cancel-btn {
  border: none;
  border-radius: 12px;
  padding: 0.875rem 1.5rem;
  width: 100%;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
}

.save-btn {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

.save-btn:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 10px 20px rgba(102, 126, 234, 0.3),
    0 5px 10px rgba(0, 0, 0, 0.1);
}

.cancel-btn {
  background: linear-gradient(135deg, #f87171, #ef4444);
  color: white;
}

.cancel-btn:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 10px 20px rgba(248, 113, 113, 0.3),
    0 5px 10px rgba(0, 0, 0, 0.1);
}

.save-btn:active,
.cancel-btn:active {
  transform: translateY(0);
}

.btn-icon {
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.save-btn:hover .btn-icon,
.cancel-btn:hover .btn-icon {
  transform: scale(1.1);
}

/* Responsive Design */
@media (max-width: 480px) {
  .book-form {
    width: 280px;
    padding: 1.5rem;
  }
  
  .form-group input {
    padding: 0.875rem 0.875rem 0.875rem 2.75rem;
  }
  
  .save-btn,
  .cancel-btn {
    padding: 0.75rem 1.25rem;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .book-form {
    background: rgba(30, 41, 59, 0.95);
    color: #f1f5f9;
  }
  
  .form-group label {
    color: #e2e8f0;
  }
  
  .form-group input {
    background: rgba(51, 65, 85, 0.8);
    border-color: #475569;
    color: #f1f5f9;
  }
  
  .form-group input::placeholder {
    color: #64748b;
  }
}
</style>
