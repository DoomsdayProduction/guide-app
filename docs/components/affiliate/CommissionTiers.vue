<!-- CommissionTiers.vue -->
<script setup lang="ts">
const tiers = [
  {
    level: 'Bronze',
    sales: '0-10k',
    rate: '20%',
    color: '#CD7F32'
  },
  {
    level: 'Silver',
    sales: '10k-50k',
    rate: '25%',
    color: '#C0C0C0'
  },
  {
    level: 'Gold',
    sales: '50k-100k',
    rate: '30%',
    color: '#FFD700'
  },
  {
    level: 'Diamond',
    sales: '100k+',
    rate: '35%',
    color: '#B9F2FF'
  }
]
</script>

<template>
  <div class="commission-tiers">
    <div v-for="tier in tiers" :key="tier.level" class="tier-card" :style="{'--tier-color': tier.color}">
      <div class="tier-header">
        <h3>{{ tier.level }}</h3>
        <span class="rate">{{ tier.rate }}</span>
      </div>
      <div class="tier-body">
        <span class="sales">{{ tier.sales }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.commission-tiers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.tier-card {
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid var(--tier-color);
  border-radius: 0.5rem;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
}

.tier-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(var(--tier-color), 0.3);
}

.tier-header {
  margin-bottom: 1rem;
}

.tier-header h3 {
  color: var(--tier-color);
  margin: 0 0 0.5rem 0;
}

.rate {
  font-size: 2rem;
  font-weight: bold;
  color: var(--tier-color);
}

.sales {
  color: #a8b2c3;
  font-size: 0.9rem;
}
</style>
