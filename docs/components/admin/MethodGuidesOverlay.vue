<template>
  <div class="method-overlay" :class="{ active: isOpen }" @click.self="$emit('close')">
    <div class="overlay-content">
      <button class="close-button" @click="$emit('close')">×</button>
      
      <div class="overlay-header">
        <span class="category-icon">{{ icon }}</span>
        <h2>{{ title }}</h2>
        <div class="header-stats">
          <span class="guide-count">{{ guides.length }} Guides</span>
          <span class="active-count">{{ activeGuides }} Active</span>
        </div>
      </div>
      
      <div class="search-bar">
        <input 
          v-model="searchQuery"
          type="text"
          placeholder="Search guides..."
          @input="filterGuides"
        >
        <div class="filter-buttons">
          <button 
            v-for="status in ['All', 'Active', 'New', 'Updated']"
            :key="status"
            :class="{ active: currentFilter === status }"
            @click="filterByStatus(status)"
          >
            {{ status }}
          </button>
        </div>
      </div>

      <div class="guides-grid">
        <div v-for="guide in filteredGuides" 
             :key="guide.id" 
             class="guide-card"
             :class="{ 'new': guide.status === 'NEW' }">
          <div class="guide-header">
            <span class="guide-icon">📝</span>
            <h3>{{ guide.title }}</h3>
            <span class="guide-status" :class="guide.status.toLowerCase()">
              {{ guide.status }}
            </span>
          </div>
          
          <p class="guide-description">{{ guide.description }}</p>
          
          <div class="guide-meta">
            <div class="meta-info">
              <span class="guide-date">{{ formatDate(guide.date) }}</span>
              <span class="guide-views" v-if="guide.views">
                {{ guide.views }} views
              </span>
            </div>
            <a :href="guide.url" class="guide-link">
              View Guide
              <span class="link-arrow">→</span>
            </a>
          </div>
          
          <div class="scan-line"></div>
          <div class="card-glow"></div>
        </div>
      </div>

      <div v-if="filteredGuides.length === 0" class="no-results">
        <span class="no-results-icon">🔍</span>
        <p>No guides found matching your search</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  isOpen: boolean
  title: string
  icon: string
  guides: Array<{
    id: string
    title: string
    description: string
    status: string
    date: string
    url: string
    views?: number
  }>
}>()

defineEmits(['close'])

const searchQuery = ref('')
const currentFilter = ref('All')

// Computed properties
const activeGuides = computed(() => 
  props.guides.filter(g => g.status === 'ACTIVE').length
)

const filteredGuides = computed(() => {
  let filtered = props.guides

  // Apply status filter
  if (currentFilter.value !== 'All') {
    filtered = filtered.filter(g => g.status === currentFilter.value.toUpperCase())
  }

  // Apply search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(g => 
      g.title.toLowerCase().includes(query) || 
      g.description.toLowerCase().includes(query)
    )
  }

  return filtered
})

// Methods
const filterByStatus = (status: string) => {
  currentFilter.value = status
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

<style scoped>
/* Previous styles remain, adding new ones */

.search-bar {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.search-bar input {
  width: 100%;
  padding: 0.75rem;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 255, 0, 0.2);
  border-radius: 0.5rem;
  color: #00ff00;
  font-family: monospace;
}

.search-bar input:focus {
  outline: none;
  border-color: #00ff00;
  box-shadow: 0 0 10px rgba(0, 255, 0, 0.2);
}

.filter-buttons {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.filter-buttons button {
  padding: 0.5rem 1rem;
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid rgba(0, 255, 0, 0.2);
  border-radius: 0.5rem;
  color: #00ff00;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-buttons button.active {
  background: #00ff00;
  color: #000;
}

.header-stats {
  display: flex;
  gap: 1rem;
  margin-left: auto;
}

.active-count {
  padding: 0.25rem 0.75rem;
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid rgba(0, 255, 0, 0.2);
  border-radius: 1rem;
  font-size: 0.9rem;
  color: #00ff00;
}

.meta-info {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.guide-views {
  color: #666;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.guide-views::before {
  content: '👁️';
  font-size: 0.8rem;
}

.link-arrow {
  display: inline-block;
  transition: transform 0.3s ease;
}

.guide-link:hover .link-arrow {
  transform: translateX(4px);
}

.no-results {
  text-align: center;
  padding: 3rem;
  color: #666;
}

.no-results-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 1rem;
}

.guide-card.new::before {
  content: 'NEW';
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem 0.75rem;
  background: rgba(255, 215, 0, 0.2);
  color: #ffd700;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: bold;
}

/* Enhanced animations */
@keyframes cardEnter {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.guide-card {
  animation: cardEnter 0.3s ease forwards;
  animation-delay: calc(var(--index) * 0.1s);
}
</style>
