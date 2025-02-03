<!-- BinInfo.vue - BIN information display -->
<script setup lang="ts">
const sections = [
  {
    icon: '🏦',
    label: 'Premium Institution',
    items: [
      'Elite banking networks',
      'Premium card issuers',
      'Private banking services'
    ]
  },
  {
    icon: '💳',
    label: 'Card Classification',
    items: [
      'Platinum/Black/Infinite',
      'Business/Corporate',
      'Private Banking'
    ]
  },
  {
    icon: '🌍',
    label: 'Global Presence',
    items: [
      'International coverage',
      'Regional privileges',
      'Worldwide acceptance'
    ]
  }
]
</script>

<template>
  <div class="info-grid">
    <div 
      v-for="section in sections"
      :key="section.label"
      class="info-card"
    >
      <div class="card-shine"></div>
      <span class="section-icon">{{ section.icon }}</span>
      <h3>{{ section.label }}</h3>
      <ul class="info-list">
        <li v-for="item in section.items" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.info-card {
  position: relative;
  padding: 1.5rem;
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid #ffd700;
  border-radius: 0.5rem;
  overflow: hidden;
}

.section-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: block;
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

h3 {
  color: #ffd700;
  margin: 0 0 1rem 0;
  position: relative;
  z-index: 1;
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  z-index: 1;
}

.info-list li {
  color: rgba(255, 215, 0, 0.7);
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 215, 0, 0.2);
}

@keyframes shine {
  0% { transform: translateX(-100%) rotate(45deg); }
  100% { transform: translateX(100%) rotate(45deg); }
}
</style>