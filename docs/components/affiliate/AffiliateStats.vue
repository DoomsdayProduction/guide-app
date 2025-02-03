<!-- AffiliateStats.vue -->
<script setup lang="ts">
defineProps<{
  stats: {
    clicks: number
    conversions: number
    earnings: number
    rate: number
  }
}>()
</script>

<template>
  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-icon">👆</div>
      <div class="stat-content">
        <span class="value">{{ stats.clicks.toLocaleString() }}</span>
        <span class="label">Total Clicks</span>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon">💰</div>
      <div class="stat-content">
        <span class="value">${{ stats.earnings.toLocaleString() }}</span>
        <span class="label">Total Earnings</span>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon">🎯</div>
      <div class="stat-content">
        <span class="value">{{ stats.conversions.toLocaleString() }}</span>
        <span class="label">Conversions</span>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-icon">📈</div>
      <div class="stat-content">
        <span class="value">{{ stats.rate.toFixed(1) }}%</span>
        <span class="label">Conversion Rate</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.stat-card {
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #00ff00;
  border-radius: 0.5rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.stat-icon {
  font-size: 2rem;
}

.stat-content {
  display: flex;
  flex-direction: column;
}

.value {
  color: #00ff00;
  font-size: 1.5rem;
  font-weight: bold;
}

.label {
  color: #a8b2c3;
  font-size: 0.9rem;
}
</style>
