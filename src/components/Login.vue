<template>
<section class="login-container">
  <div class="login-card">
    <div class="login-header">
      <div class="login-icon">🔐</div>
      <h1>Welcome Back</h1>
      <p class="login-subtitle">Please sign in to your account</p>
    </div>
    
    <form @submit.prevent="onSubmit" class="login-form">
      <div class="form-group">
        <label for="username">Username</label>
        <div class="input-wrapper">
          <span class="input-icon">👤</span>
          <input 
            id="username"
            v-model="username" 
            required 
            autocomplete="username"
            placeholder="Enter your username"
          />
        </div>
      </div>
      
      <div class="form-group">
        <label for="password">Password</label>
        <div class="input-wrapper">
          <span class="input-icon">🔒</span>
          <input 
            id="password"
            v-model="password" 
            type="password" 
            required 
            autocomplete="current-password"
            placeholder="Enter your password"
          />
        </div>
      </div>
      
      <button type="submit" class="login-button">
        <span class="button-text">Sign In</span>
        <span class="button-icon">→</span>
      </button>
      
      <div v-if="error" class="error-msg">
        <span class="error-icon">⚠️</span>
        Invalid credentials. Please try again.
      </div>
    </form>
  </div>
  
  <!-- Background decorative elements -->
  <div class="bg-decoration">
    <div class="circle circle-1"></div>
    <div class="circle circle-2"></div>
    <div class="circle circle-3"></div>
  </div>
</section>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['login']);
const username = ref('');
const password = ref('');
const error = ref(false);

function onSubmit() {
  if (username.value === 'admin' && password.value === 'admin') {
    error.value = false;
    emit('login', { username: username.value });
  } else {
    error.value = true;
  }
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.login-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 3rem 2.5rem;
  width: 100%;
  max-width: 440px;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.2);
  position: relative;
  z-index: 10;
  animation: slideIn 0.6s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.login-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.login-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: inline-block;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.login-header h1 {
  margin: 0 0 0.5rem 0;
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.login-subtitle {
  margin: 0;
  color: #64748b;
  font-size: 0.95rem;
  font-weight: 400;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
  font-size: 1.1rem;
  opacity: 0.6;
}

.form-group input {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid #e5e7eb;
  border-radius: 16px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  outline: none;
}

.form-group input:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  background: #ffffff;
}

.form-group input::placeholder {
  color: #9ca3af;
}

.login-button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.login-button:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 15px 25px rgba(102, 126, 234, 0.3),
    0 5px 10px rgba(0, 0, 0, 0.1);
}

.login-button:active {
  transform: translateY(0);
}

.button-text {
  transition: transform 0.3s ease;
}

.button-icon {
  transition: transform 0.3s ease;
  font-size: 1.2rem;
}

.login-button:hover .button-icon {
  transform: translateX(3px);
}

.error-msg {
  background: linear-gradient(135deg, #fee2e2, #fecaca);
  color: #dc2626;
  padding: 1rem;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid #fca5a5;
  animation: shake 0.5s ease-in-out;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

.error-icon {
  font-size: 1.1rem;
}

/* Background decorative elements */
.bg-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 6s ease-in-out infinite;
}

.circle-1 {
  width: 200px;
  height: 200px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.circle-2 {
  width: 300px;
  height: 300px;
  top: 70%;
  right: 10%;
  animation-delay: 2s;
}

.circle-3 {
  width: 150px;
  height: 150px;
  top: 30%;
  right: 20%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.3;
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
    opacity: 0.1;
  }
}

/* Responsive design */
@media (max-width: 480px) {
  .login-container {
    padding: 1rem;
  }
  
  .login-card {
    padding: 2rem 1.5rem;
    border-radius: 20px;
  }
  
  .login-header h1 {
    font-size: 1.75rem;
  }
  
  .form-group input {
    padding: 0.875rem 0.875rem 0.875rem 2.75rem;
  }
  
  .login-button {
    padding: 0.875rem 1.5rem;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .login-card {
    background: rgba(30, 41, 59, 0.95);
    color: #f1f5f9;
  }
  
  .login-subtitle {
    color: #94a3b8;
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
