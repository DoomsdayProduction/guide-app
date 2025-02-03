<!-- BinDiagram.vue - Visual representation of BIN structure -->
<script setup lang="ts">
const segments = [
  { value: '4532', label: 'Issuer', title: 'Bank/Card Issuer' },
  { value: '15', label: 'Type', title: 'Card Type' },
  { value: '93', label: 'Branch', title: 'Branch Code' }
]
</script>

<template>
  <div class="bin-diagram">
    <div class="premium-card">
      <div class="card-shine"></div>
      <div class="card-number">
        <span 
          v-for="segment in segments" 
          :key="segment.label"
          class="bin-segment" 
          :title="segment.title"
        >{{ segment.value }}</span>
        <span class="remaining-digits">XXXXXX</span>
      </div>
      <div class="segment-labels">
        <div 
          v-for="segment in segments" 
          :key="segment.label"
          class="label"
        >{{ segment.label }}</div>
        <div class="label">Account</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bin-diagram {
  padding: 2rem;
  background: rgba(255, 215, 0, 0.05);
  border-radius: 0.5rem;
  text-align: center;
}

.premium-card {
  position: relative;
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  border: 1px solid #ffd700;
  border-radius: 1rem;
  padding: 2rem;
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
    rgba(255, 215, 0, 0.2),
    transparent
  );
  transform: rotate(45deg);
  animation: shine 3s infinite;
}

.card-number {
  font-family: monospace;
  font-size: 2rem;
  letter-spacing: 4px;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.bin-segment {
  color: #ffd700;
  cursor: help;
  padding: 0.25rem;
  border-bottom: 2px solid #ffd700;
  margin: 0 0.25rem;
  text-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
}

.remaining-digits {
  color: rgba(255, 215, 0, 0.3);
}

.segment-labels {
  display: flex;
  justify-content: space-around;
  color: rgba(255, 215, 0, 0.7);
  font-size: 0.8rem;
  position: relative;
  z-index: 1;
}

@keyframes shine {
  0% { transform: translateX(-100%) rotate(45deg); }
  100% { transform: translateX(100%) rotate(45deg); }
}
</style>