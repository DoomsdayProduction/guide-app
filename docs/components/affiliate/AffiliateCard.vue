<!-- AffiliateCard.vue -->
<script setup lang="ts">
defineProps<{
  title: string
  description: string
  commission: string
  benefits: string[]
  icon: string
}>()
</script>

<template>
  <div class="affiliate-card">
    <div class="card-glow"></div>
    <div class="card-content">
      <span class="card-icon">{{ icon }}</span>
      <h3>{{ title }}</h3>
      <p class="description">{{ description }}</p>
      <div class="commission">
        <span class="label">Commission</span>
        <span class="value">{{ commission }}</span>
      </div>
      <ul class="benefits">
        <li v-for="benefit in benefits" :key="benefit">{{ benefit }}</li>
      </ul>
      <button class="join-button">Join Program</button>
    </div>
  </div>
</template>

<style scoped>
.affiliate-card {
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #00ff00;
  border-radius: 1rem;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.affiliate-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 30px rgba(0, 255, 0, 0.2);
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(0, 255, 0, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.affiliate-card:hover .card-glow {
  opacity: 1;
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

h3 {
  color: #00ff00;
  margin: 0 0 1rem 0;
}

.description {
  color: #a8b2c3;
  margin-bottom: 1.5rem;
}

.commission {
  background: rgba(0, 255, 0, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.commission .label {
  color: #a8b2c3;
}

.commission .value {
  color: #00ff00;
  font-size: 1.25rem;
  font-weight: bold;
}

.benefits {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
}

.benefits li {
  padding: 0.5rem 0;
  color: #a8b2c3;
  border-bottom: 1px solid rgba(0, 255, 0, 0.1);
}

.benefits li:last-child {
  border-bottom: none;
}

.join-button {
  width: 100%;
  padding: 1rem;
  background: #00ff00;
  color: #000;
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.join-button:hover {
  background: #00cc00;
  transform: translateY(-2px);
}
</style>
