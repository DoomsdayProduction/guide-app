<div class="admin-container">
  <div class="cyber-grid"></div>
  <div class="admin-header">
    <h1 class="neon-text">ADMIN CONTROL PANEL</h1>
    <div class="cyber-line"></div>
  </div>

  <SubMenu />

  <div class="section-grid">
    <!-- File Upload Section -->
    <div class="section-card">
      <h2>📤 File Upload</h2>
      <FileUpload />
    </div>
    <!-- Guide Styles Section -->
    <div class="section-card">
      <h2>🎨 Guide Styles</h2>
      <div class="content-list">
        <a href="/guides/styles/cyber" class="content-item">
          <span class="item-icon">⚡</span>
          <span class="item-text">Cyber Style</span>
        </a>
        <a href="/guides/styles/neon" class="content-item">
          <span class="item-icon">💫</span>
          <span class="item-text">Neon Style</span>
        </a>
        <a href="/guides/styles/hologram" class="content-item">
          <span class="item-icon">🌐</span>
          <span class="item-text">Hologram Style</span>
        </a>
        <a href="/guides/styles/glitch" class="content-item">
          <span class="item-icon">🎭</span>
          <span class="item-text">Glitch Style</span>
        </a>
      </div>
    </div>
    <!-- Quick Actions Section -->
    <div class="section-card">
      <h2>⚡ Quick Actions</h2>
      <div class="actions-grid">
        <button class="action-button">
          <span class="action-icon">🔄</span>
          Refresh Cache
        </button>
        <button class="action-button">
          <span class="action-icon">🔍</span>
          Scan Files
        </button>
        <button class="action-button">
          <span class="action-icon">📊</span>
          View Stats
        </button>
      </div>
    </div>
  </div>
</div>

<script setup>
import SubMenu from '../components/admin/SubMenu.vue'
import FileUpload from '../components/admin/FileUpload.vue'
</script>

<style>
.admin-container {
  position: relative;
  padding: 2rem;
  background: linear-gradient(45deg, #000, #1a1a1a);
  border-radius: 1rem;
  margin: 2rem 0;
  overflow: hidden;
}

.cyber-grid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: gridScroll 20s linear infinite;
}

.admin-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
}

.neon-text {
  font-size: 3rem;
  color: #00ff00;
  text-shadow: 
    0 0 5px #00ff00,
    0 0 10px #00ff00,
    0 0 20px #00ff00;
  margin: 0;
}

.cyber-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ff00, transparent);
  margin: 2rem auto;
  width: 200px;
}

.section-grid {
  display: grid;
  gap: 2rem;
  position: relative;
  z-index: 1;
}

.section-card {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #00ff00;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.content-list {
  display: grid;
  gap: 0.5rem;
}

.content-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: rgba(0, 255, 0, 0.1);
  border-radius: 0.5rem;
  text-decoration: none;
  color: #00ff00;
  transition: all 0.3s ease;
}

.content-item:hover {
  background: rgba(0, 255, 0, 0.2);
  transform: translateX(10px);
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.action-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid rgba(0, 255, 0, 0.2);
  border-radius: 0.5rem;
  color: #00ff00;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-button:hover {
  background: rgba(0, 255, 0, 0.2);
  transform: translateY(-2px);
}

@keyframes gridScroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}
</style>