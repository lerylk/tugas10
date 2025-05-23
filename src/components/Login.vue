<template>
  <section class="login-container">
    <div class="login-card">
      <div class="login-header">
        <img src="https://cdn-icons-png.flaticon.com/512/2991/2991108.png" alt="Digital Library" />
        <h2>Digital Library Login</h2>
      </div>
      <form @submit.prevent="login">
        <div class="form-group">
          <label>Email</label>
          <input v-model="email" type="email" placeholder="Masukkan email" required />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input v-model="password" type="password" placeholder="Masukkan password" required />
        </div>
        <button class="btn-login" type="submit">Masuk</button>
        <div v-if="error" class="error-msg">{{ error }}</div>
      </form>
      <div class="login-footer">
        <p>Belum punya akun? <a href="#">Daftar sekarang</a></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    login() {
      // Simulasi login, ganti dengan autentikasi asli di aplikasi Anda
      if (this.email === "librarian@library.com" && this.password === "password") {
        this.error = "";
        alert("Login berhasil!"); // Ganti dengan redirect ke dashboard
      } else {
        this.error = "Email atau password salah!";
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #764ba2, #667eea 80%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-card {
  background: #fff;
  padding: 2.5rem 2rem 2rem 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(118,75,162,0.15);
  max-width: 370px;
  width: 100%;
  animation: fadeIn 1s;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px);}
  to { opacity: 1; transform: translateY(0);}
}
.login-header {
  text-align: center;
  margin-bottom: 2rem;
}
.login-header img {
  width: 64px;
  margin-bottom: 0.5rem;
}
.login-header h2 {
  font-weight: 800;
  color: #764ba2;
  margin-bottom: 0;
}
.form-group {
  margin-bottom: 1.3rem;
}
label {
  font-weight: 600;
  margin-bottom: 0.3rem;
  display: block;
  color: #764ba2;
}
input {
  width: 100%;
  padding: 0.8rem;
  border-radius: 10px;
  border: 1px solid #dcdcdc;
  font-size: 1rem;
  transition: border 0.2s;
}
input:focus {
  border: 1.5px solid #764ba2;
  outline: none;
}
.btn-login {
  width: 100%;
  background: linear-gradient(90deg, #ffdd57 60%, #ffb347 100%);
  color: #333;
  font-weight: 700;
  padding: 0.9rem;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  margin-top: 0.7rem;
  cursor: pointer;
  transition: background 0.3s;
  box-shadow: 0 4px 16px rgba(255,221,87,0.15);
}
.btn-login:hover {
  background: linear-gradient(90deg, #ffb347 60%, #ffdd57 100%);
}
.error-msg {
  color: #e74c3c;
  text-align: center;
  margin-top: 1rem;
  font-weight: 600;
}
.login-footer {
  text-align: center;
  margin-top: 1.2rem;
  font-size: 0.98rem;
  color: #888;
}
.login-footer a {
  color: #764ba2;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;
}
.login-footer a:hover {
  color: #ffb347;
}
@media (max-width: 500px) {
  .login-card { padding: 1.5rem 0.5rem;}
}
</style>
