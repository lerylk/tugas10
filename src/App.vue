<template>
  <div id="app">
    <header class="app-header">
      <div class="logo" @click="goHome">📚 Digital Library</div>
      <nav class="nav-links">
        <router-link to="/" exact-active-class="active-link">Home</router-link>
        <router-link to="/books" exact-active-class="active-link">Books</router-link>
        <router-link to="/loan/request" exact-active-class="active-link">Loan</router-link>
        <router-link to="/profile" exact-active-class="active-link">Profile</router-link>
        <router-link to="/login" exact-active-class="active-link">Login</router-link>
        <router-link to="/librarian/dashboard" exact-active-class="active-link">Librarian</router-link>
      </nav>
    </header>

    <main class="app-main">
      <router-view />
    </main>

    <footer class="app-footer">
      &copy; 2024 Digital Library. All rights reserved.
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goHome() {
      this.$router.push({ name: 'Home' });
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
body, html, #app {
  margin: 0;
  height: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f7f9fc;
  color: #2c3e50;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-header {
  background-color: #34495e;
  padding: 0.75rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
  box-shadow: 0 2px 5px rgb(0 0 0 / 0.15);
  user-select: none;
}

.app-header .logo {
  cursor: pointer;
}

.app-header .nav-links {
  display: flex;
  gap: 1.5rem;
}

.app-header .nav-links a {
  color: #eee;
  text-decoration: none;
  font-weight: 600;
  position: relative;
  padding: 0.15rem 0;
  transition: color 0.3s ease;
}

.app-header .nav-links a:hover,
.app-header .nav-links a.active-link {
  color: #1abc9c;
}

.app-main {
  flex-grow: 1;
  padding: 2rem 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

.app-footer {
  background-color: #34495e;
  color: #ccc;
  text-align: center;
  padding: 1rem 1.5rem;
  font-size: 0.9rem;
  user-select: none;
}
</style>
