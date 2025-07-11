<template>
  <div class="db-json-viewer">
    <h3>DB JSON Content</h3>
    <pre>{{ jsonContent }}</pre>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const jsonContent = ref('Loading...')

async function fetchDbJson() {
  try {
    const response = await fetch('/db.json')
    if (!response.ok) throw new Error('Failed to fetch db.json')
    const data = await response.json()
    jsonContent.value = JSON.stringify(data, null, 2)
  } catch (error) {
    jsonContent.value = 'Error loading db.json: ' + error.message
  }
}

onMounted(() => {
  fetchDbJson()
})
</script>

<style scoped>
.db-json-viewer {
  background: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  white-space: pre-wrap;
  font-family: monospace;
  box-shadow: 0 1px 6px rgba(0,0,0,0.1);
}
</style>
