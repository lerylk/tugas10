<template>
  <section class="loan-section">
    <h2>Permintaan Peminjaman Buku</h2>
    <table class="loan-table" v-if="loanRequests.length">
      <thead>
        <tr>
          <th>Nama Anggota</th>
          <th>Judul Buku</th>
          <th>Tanggal Permintaan</th>
          <th>Status</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="request in loanRequests" :key="request.id">
          <td>{{ request.member }}</td>
          <td>{{ request.book }}</td>
          <td>{{ request.date }}</td>
          <td>
            <span :class="'status ' + request.status">{{ statusLabel(request.status) }}</span>
          </td>
          <td>
            <button v-if="request.status === 'pending'" @click="approve(request)" class="btn-approve">Setujui</button>
            <button v-if="request.status === 'pending'" @click="reject(request)" class="btn-reject">Tolak</button>
            <span v-else>-</span>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else class="no-loan-msg">
      <p v-if="apiStatus === 'disconnected'">
        <strong>JSON Server belum dijalankan.</strong><br>
        Silakan jalankan: <code>npx json-server --watch db.json --port 3000</code>
      </p>
      <p v-else-if="apiStatus === 'connected' && loanRequests.length === 0">
        JSON Server terhubung, tetapi tidak ada data loan di database.
      </p>
      <p v-else-if="apiStatus === 'checking'">
        Mengecek koneksi ke database...
      </p>
    </div>
    <div v-if="message" class="success-msg">{{ message }}</div>
  </section>
</template>

<script>
export default {
  name: "LoanRequests",
  data() {
    return {
      loanRequests: [],
      message: "",
      apiStatus: 'checking', // 'checking', 'connected', 'disconnected'
    };
  },
  mounted() {
    this.loadLoanData();
  },
  methods: {
    async loadLoanData() {
      this.apiStatus = 'checking';
      
      try {
        // Fetch data loan dari API json-server
        const response = await fetch('http://localhost:3000/loans');
        
        if (response.ok) {
          const data = await response.json();
          this.apiStatus = 'connected';
          
          // Mapping data dari API agar sesuai dengan format tampilan
          this.loanRequests = data.map(item => ({
            id: item.id,
            member: item.member || item.borrower || item.user || "-",
            book: item.book || item.title || "-",
            date: item.date || item.loanDate || item.requestDate || "-",
            status: item.status || "pending"
          }));
          
          // TIDAK menggunakan fallback data - hanya data dari API
        } else {
          // Jika response tidak berhasil
          this.apiStatus = 'disconnected';
          this.loanRequests = [];
        }
      } catch (error) {
        // Jika json-server belum jalan atau terjadi error
        this.apiStatus = 'disconnected';
        this.loanRequests = [];
        console.log("JSON Server tidak tersedia");
      }
    },

    approve(request) {
      // Temukan index request di array
      const idx = this.loanRequests.findIndex(r => r.id === request.id);
      if (idx !== -1) {
        // Buat array baru dengan status yang diubah (untuk reaktivitas Vue)
        this.loanRequests = this.loanRequests.map(item => 
          item.id === request.id 
            ? { ...item, status: 'approved' }
            : item
        );
        
        this.message = `Permintaan oleh ${request.member} disetujui.`;
        this.clearMessage();
        
        // Update ke server jika API tersedia
        this.updateStatusToServer(request.id, 'approved');
      }
    },

    reject(request) {
      // Temukan index request di array
      const idx = this.loanRequests.findIndex(r => r.id === request.id);
      if (idx !== -1) {
        // Buat array baru dengan status yang diubah (untuk reaktivitas Vue)
        this.loanRequests = this.loanRequests.map(item => 
          item.id === request.id 
            ? { ...item, status: 'rejected' }
            : item
        );
        
        this.message = `Permintaan oleh ${request.member} ditolak.`;
        this.clearMessage();
        
        // Update ke server jika API tersedia
        this.updateStatusToServer(request.id, 'rejected');
      }
    },

    async updateStatusToServer(id, status) {
      try {
        await fetch(`http://localhost:3000/loans/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status: status })
        });
      } catch (error) {
        console.log("Gagal update ke server, tapi status sudah berubah di frontend");
      }
    },

    clearMessage() {
      setTimeout(() => {
        this.message = "";
      }, 2000);
    },

    statusLabel(status) {
      switch(status) {
        case "pending": return "Menunggu";
        case "approved": return "Disetujui";
        case "rejected": return "Ditolak";
        default: return status;
      }
    }
  }
};
</script>

<style scoped>
.loan-section {
  max-width: 900px;
  margin: 2rem auto;
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(100,50,200,0.08);
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.loan-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

.loan-table th, 
.loan-table td {
  padding: 0.8rem;
  border-bottom: 1px solid #eee;
  text-align: left;
}

.loan-table th {
  background: #764ba2;
  color: #fff;
  font-weight: 600;
}

.loan-table tbody tr:hover {
  background-color: #f8f9fa;
  transition: background-color 0.2s;
}

.status {
  padding: 0.3rem 0.7rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  display: inline-block;
}

.status.pending {
  background: #ffdd57;
  color: #333;
}

.status.approved {
  background: #2ecc71;
  color: #fff;
}

.status.rejected {
  background: #e74c3c;
  color: #fff;
}

.btn-approve {
  background: #2ecc71;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  margin-right: 0.5rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
}

.btn-approve:hover {
  background: #27ae60;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.btn-reject {
  background: #e74c3c;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
}

.btn-reject:hover {
  background: #c0392b;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.success-msg {
  margin-top: 1rem;
  color: #2ecc71;
  text-align: center;
  font-weight: 600;
  background: #d4edda;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #c3e6cb;
  animation: fadeIn 0.3s ease-in;
}

.no-loan-msg {
  text-align: center;
  color: #666;
  margin-top: 2rem;
  font-size: 1.1rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px dashed #ddd;
  line-height: 1.6;
}

.no-loan-msg code {
  background: #e9ecef;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #495057;
  font-family: 'Courier New', monospace;
}

.no-loan-msg strong {
  color: #e74c3c;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 700px) {
  .loan-section {
    padding: 1rem;
    margin: 1rem;
  }
  
  .loan-table th, 
  .loan-table td {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
  
  .btn-approve, 
  .btn-reject {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
    margin-bottom: 0.2rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
  
  .no-loan-msg {
    font-size: 1rem;
    padding: 1.5rem;
  }
}
</style>
