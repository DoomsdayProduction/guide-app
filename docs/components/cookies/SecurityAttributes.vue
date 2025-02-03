<!-- SecurityAttributes.vue - Cookie security attributes and their importance -->
<script setup lang="ts">
const securityAttributes = [
  {
    title: 'Secure Flag',
    description: 'Only sent over HTTPS connections',
    icon: '🔒',
    status: 'PROTECTED',
    level: 'secure'
  },
  {
    title: 'HttpOnly Flag',
    description: 'Prevents JavaScript access',
    icon: '🛡️',
    status: 'NO JS ACCESS',
    level: 'protected'
  },
  {
    title: 'SameSite',
    description: 'Controls cross-site behavior',
    icon: '⚠️',
    status: 'VERIFY SETTING',
    level: 'warning'
  }
]
</script>

<template>
  <div class="security-grid">
    <div 
      v-for="attr in securityAttributes" 
      :key="attr.title" 
      class="security-card"
    >
      <h3>{{ attr.title }}</h3>
      <p>{{ attr.description }}</p>
      <div :class="['security-indicator', attr.level]">
        <span class="icon">{{ attr.icon }}</span>
        <span class="status">{{ attr.status }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.security-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.security-card {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.security-card h3 {
  color: #00e5ff;
  margin: 0 0 0.5rem 0;
}

.security-card p {
  color: #a8b2c3;
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
}

.security-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-family: monospace;
}

.security-indicator.secure {
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid rgba(0, 255, 0, 0.2);
}

.security-indicator.protected {
  background: rgba(0, 229, 255, 0.1);
  border: 1px solid rgba(0, 229, 255, 0.2);
}

.security-indicator.warning {
  background: rgba(255, 255, 0, 0.1);
  border: 1px solid rgba(255, 255, 0, 0.2);
}
</style>