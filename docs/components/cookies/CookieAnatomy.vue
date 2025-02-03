<!-- CookieAnatomy.vue - Visual representation of cookie structure -->
<script setup lang="ts">
const cookieFields = {
  'Name': 'Cookie identifier',
  'Value': 'Encoded data/token',
  'Domain': 'Cookie scope',
  'Path': 'URL path scope',
  'Expires': 'Expiration date',
  'Secure': 'HTTPS only flag',
  'HttpOnly': 'JS access restriction'
}
</script>

<template>
  <div class="cookie-anatomy">
    <div class="anatomy-card">
      <h3>Basic Structure</h3>
      <code class="cookie-code">name=value; domain=example.com; path=/; expires=date; secure; httpOnly</code>
      <div class="anatomy-grid">
        <div 
          v-for="(desc, key) in cookieFields" 
          :key="key"
          class="anatomy-item"
        >
          <span class="label">{{ key }}</span>
          <span class="value">{{ desc }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cookie-anatomy {
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
}

.anatomy-card {
  padding: 1rem;
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid rgba(0, 255, 0, 0.2);
  border-radius: 0.5rem;
}

.cookie-code {
  display: block;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0.25rem;
  color: #00ff00;
  font-family: monospace;
  margin: 1rem 0;
  overflow-x: auto;
  white-space: nowrap;
}

.anatomy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.anatomy-item {
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.25rem;
}

.anatomy-item .label {
  display: block;
  color: #00ff00;
  font-family: monospace;
  margin-bottom: 0.25rem;
}

.anatomy-item .value {
  color: #a8b2c3;
  font-size: 0.9rem;
}
</style>