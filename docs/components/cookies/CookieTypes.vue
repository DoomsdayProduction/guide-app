<!-- CookieTypes.vue - Different types of cookies and their purposes -->
<script setup lang="ts">
const cookieTypes = [
  {
    title: 'Session Cookies',
    items: [
      'Temporary storage',
      'Deleted on browser close',
      'Used for active sessions'
    ],
    example: 'PHPSESSID=abc123...'
  },
  {
    title: 'Authentication Cookies',
    items: [
      'Stores login state',
      'Contains tokens/identifiers',
      'Security sensitive'
    ],
    example: 'auth_token=jwt...'
  },
  {
    title: 'Tracking Cookies',
    items: [
      'User behavior tracking',
      'Analytics data',
      'Marketing purposes'
    ],
    example: '_ga=GA1.2.123.456'
  }
]
</script>

<template>
  <div class="cookie-types">
    <div 
      v-for="type in cookieTypes" 
      :key="type.title" 
      class="type-card"
    >
      <h3>{{ type.title }}</h3>
      <ul>
        <li v-for="(item, index) in type.items" :key="index">
          {{ item }}
        </li>
        <li>Example: <code>{{ type.example }}</code></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.cookie-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.type-card {
  padding: 1rem;
  background: rgba(0, 229, 255, 0.1);
  border: 1px solid rgba(0, 229, 255, 0.2);
  border-radius: 0.5rem;
}

.type-card h3 {
  color: #00e5ff;
  margin: 0 0 1rem 0;
}

.type-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.type-card li {
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(0, 229, 255, 0.1);
  color: #a8b2c3;
}

.type-card code {
  color: #00e5ff;
  font-family: monospace;
  font-size: 0.9rem;
}
</style>