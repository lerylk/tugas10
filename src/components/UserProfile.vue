<template>
  <section class="profile-container">
    <h2>Profil Pustakawan</h2>
    <div class="profile-card">
      <div class="profile-avatar">
        <img :src="profile.photo" alt="Foto Profil" />
        <input type="file" @change="onPhotoChange" accept="image/*" />
      </div>
      <div class="profile-info">
        <div class="info-row">
          <label>Nama</label>
          <input v-model="profile.name" :readonly="!editMode" />
        </div>
        <div class="info-row">
          <label>Email</label>
          <input v-model="profile.email" :readonly="!editMode" />
        </div>
        <div class="info-row">
          <label>Role</label>
          <input v-model="profile.role" readonly />
        </div>
        <div class="info-row">
          <label>Bergabung Sejak</label>
          <input v-model="profile.joined" readonly />
        </div>
        <div class="profile-actions">
          <button class="btn-primary" v-if="!editMode" @click="editMode = true">Edit Profil</button>
          <button class="btn-primary" v-if="editMode" @click="saveProfile">Simpan</button>
          <button class="btn-cancel" v-if="editMode" @click="cancelEdit">Batal</button>
          <button class="btn-secondary" @click="showPasswordModal = true">Ganti Password</button>
        </div>
      </div>
    </div>

    <!-- Statistik aktivitas -->
    <div class="profile-stats">
      <div>
        <strong>{{ stats.booksAdded }}</strong>
        <span>Buku Ditambahkan</span>
      </div>
      <div>
        <strong>{{ stats.booksEdited }}</strong>
        <span>Buku Diedit</span>
      </div>
      <div>
        <strong>{{ stats.loansProcessed }}</strong>
        <span>Peminjaman Diproses</span>
      </div>
    </div>

    <!-- Modal Ganti Password -->
    <div v-if="showPasswordModal" class="modal-overlay">
      <div class="modal-content">
        <h3>Ganti Password</h3>
        <form @submit.prevent="changePassword">
          <input type="password" v-model="passwords.old" placeholder="Password Lama" required />
          <input type="password" v-model="passwords.new" placeholder="Password Baru" required />
          <input type="password" v-model="passwords.confirm" placeholder="Konfirmasi Password Baru" required />
          <button class="btn-primary" type="submit">Simpan</button>
          <button class="btn-cancel" type="button" @click="showPasswordModal = false">Batal</button>
        </form>
        <div v-if="passwordMsg" class="password-msg">{{ passwordMsg }}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      profile: {
        name: "Dewi Pustakawan",
        email: "dewi@library.com",
        role: "Pustakawan",
        joined: "2022-01-15",
        photo: "https://randomuser.me/api/portraits/women/68.jpg",
      },
      editMode: false,
      originalProfile: {},
      stats: {
        booksAdded: 120,
        booksEdited: 56,
        loansProcessed: 210,
      },
      showPasswordModal: false,
      passwords: {
        old: "",
        new: "",
        confirm: "",
      },
      passwordMsg: "",
    };
  },
  methods: {
    onPhotoChange(e) {
      const file = e.target.files[0];
      if (file) {
        this.profile.photo = URL.createObjectURL(file);
      }
    },
    saveProfile() {
      this.editMode = false;
      // Simulasi simpan, bisa integrasi ke backend
      alert("Profil berhasil diperbarui!");
    },
    cancelEdit() {
      this.profile = { ...this.originalProfile };
      this.editMode = false;
    },
    changePassword() {
      if (this.passwords.new !== this.passwords.confirm) {
        this.passwordMsg = "Konfirmasi password tidak cocok!";
        return;
      }
      // Simulasi ganti password
      this.passwordMsg = "Password berhasil diganti!";
      setTimeout(() => {
        this.showPasswordModal = false;
        this.passwordMsg = "";
        this.passwords = { old: "", new: "", confirm: "" };
      }, 1200);
    },
  },
  watch: {
    editMode(val) {
      if (val) {
        this.originalProfile = { ...this.profile };
      }
    },
  },
};
</script>

<style scoped>
.profile-container {
  max-width: 600px;
  margin: 2.5rem auto;
  background: #fff;
  border-radius: 18px;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(100, 50, 200, 0.08);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
h2 {
  text-align: center;
  margin-bottom: 2rem;
}
.profile-card {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  margin-bottom: 2rem;
}
.profile-avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profile-avatar img {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 2px 12px rgba(118,75,162,0.15);
  margin-bottom: 0.7rem;
}
.profile-avatar input[type="file"] {
  margin-top: 0.3rem;
  font-size: 0.95rem;
}
.profile-info {
  flex: 1;
}
.info-row {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}
.info-row label {
  font-weight: 600;
  margin-bottom: 0.2rem;
}
input[readonly] {
  background: #f6f6f6;
  border: 1px solid #eee;
  color: #555;
}
input, textarea {
  padding: 0.7rem;
  border-radius: 8px;
  border: 1px solid #ccc;
}
.profile-actions {
  margin-top: 1.2rem;
  display: flex;
  gap: 0.7rem;
}
.btn-primary {
  background: #764ba2;
  color: #fff;
  padding: 0.6rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
}
.btn-primary:hover {
  background: #5c3d91;
}
.btn-secondary {
  background: #ffdd57;
  color: #333;
  padding: 0.6rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
}
.btn-secondary:hover {
  background: #ffe484;
}
.btn-cancel {
  background: #e74c3c;
  color: #fff;
  border: none;
  padding: 0.6rem 1.5rem;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
}
.btn-cancel:hover {
  background: #c0392b;
}
.profile-stats {
  display: flex;
  justify-content: space-around;
  background: #faf7ff;
  border-radius: 12px;
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(118,75,162,0.07);
}
.profile-stats div {
  text-align: center;
}
.profile-stats strong {
  font-size: 1.5rem;
  color: #764ba2;
}
.profile-stats span {
  display: block;
  font-size: 0.98rem;
  color: #777;
  margin-top: 0.2rem;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(33, 33, 33, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal-content {
  background: #fff;
  padding: 2rem 1.5rem;
  border-radius: 16px;
  min-width: 320px;
  max-width: 90vw;
  box-shadow: 0 6px 32px rgba(76, 54, 120, 0.18);
  text-align: center;
}
.modal-content form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.password-msg {
  margin-top: 1rem;
  color: #e67e22;
  font-weight: 600;
}
@media (max-width: 700px) {
  .profile-card {flex-direction: column;gap: 1rem;}
  .profile-container {padding: 1rem;}
  .modal-content {padding: 1rem;}
}
</style>
