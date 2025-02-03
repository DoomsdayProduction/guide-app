<script setup lang="ts">
import { ref } from 'vue'

const binNumber = ref('')
const results = ref({
  issuer: '-',
  type: '-',
  country: '-'
})

const checkBin = async () => {
  // For demo purposes just showing UI
  // In production, this would call the Neutrino API
  if (binNumber.value.length >= 6) {
    results.value = {
      issuer: 'Premium Bank',
      type: 'Platinum',
      country: 'United States'
    }
  }
}
</script>

<template>
  <div class="bin-verifier">
    <div class="input-group">
      <input 
        v-model="binNumber"
        type="text" 
        placeholder="Enter Premium BIN"
        maxlength="8"
        class="luxury-input"
        @input="checkBin"
      >
      <button class="luxury-button" @click="checkBin">
        <span class="button-icon">💎</span>
        Verify Elite BIN
      </button>
    </div>
    <div class="results-grid">
      <div class="result-card">
        <div class="card-shine"></div>
        <span class="result-label">Institution</span>
        <span class="result-value">{{ results.issuer }}</span>
      </div>
      <div class="result-card">
        <div class="card-shine"></div>
        <span class="result-label">Type</span>
        <span class="result-value">{{ results.type }}</span>
      </div>
      <div class="result-card">
        <div class="card-shine"></div>
        <span class="result-label">Territory</span>
        <span class="result-value">{{ results.country }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bin-verifier {
  padding: 1.5rem;
  background: rgba(255, 215, 0, 0.05);
  border-radius: 0.5rem;
}

.input-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.luxury-input {
  flex: 1;
  padding: 0.75rem;
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid #ffd700;
  border-radius: 0.5rem;
  color: #ffd700;
  font-family: monospace;
  font-size: 1.2rem;
}

.luxury-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(45deg, #ffd700, #ffed4a);
  border: none;
  border-radius: 0.5rem;
  color: #1a1a2e;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

.luxury-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.result-card {
  position: relative;
  padding: 1rem;
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid #ffd700;
  border-radius: 0.5rem;
  overflow: hidden;
}

.card-shine {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 215, 0, 0.1),
    transparent
  );
  transform: rotate(45deg);
  animation: shine 3s infinite;
}

.result-label {
  color: rgba(255, 215, 0, 0.7);
  font-size: 0.9rem;
  display: block;
  margin-bottom: 0.5rem;
}

.result-value {
  color: #ffd700;
  font-family: monospace;
  font-weight: bold;
}

@keyframes shine {
  0% { transform: translateX(-100%) rotate(45deg); }
  100% { transform: translateX(100%) rotate(45deg); }
}
</style>