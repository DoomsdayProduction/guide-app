<script setup lang="ts">
const menuItems = [
  { text: 'Database Search', link: '/admin/members' },
  { text: 'Guides', link: '/admin/methods' },
  { text: 'Configs', link: '/admin/configs' },
  { text: 'Inbox', link: '/admin/inbox' }
]
</script>

<template>
  <nav class="submenu">
    <div class="submenu-container">
      <a v-for="item in menuItems" 
         :key="item.text"
         :href="item.link"
         class="submenu-item">
        {{ item.text }}
        <div class="item-highlight"></div>
      </a>
    </div>
  </nav>
</template>

<style scoped>
.submenu {
  background: rgba(0, 0, 0, 0.8);
  border-bottom: 1px solid #00ff00;
  padding: 0.5rem 0;
  position: sticky;
  top: var(--vp-nav-height);
  z-index: 10;
  backdrop-filter: blur(10px);
}

.submenu-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  padding: 0 1.5rem;
}

.submenu-item {
  color: #00ff00;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  position: relative;
  transition: all 0.3s ease;
}

.submenu-item:hover {
  background: rgba(0, 255, 0, 0.1);
}

.item-highlight {
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #00ff00;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.submenu-item:hover .item-highlight {
  transform: scaleX(1);
}
</style>