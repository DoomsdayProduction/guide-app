<div class="hologram-container">
  <div class="hologram-grid"></div>
  <div class="header">
    <h1 class="title">SIGNAL GROUPS</h1>
    <div class="status-line">SECURE COMMUNICATION HUB</div>
  </div>

  <div class="groups-container">
    <div class="group-card">
      <div class="card-frame"></div>
      <div class="card-content">
        <div class="group-icon">🔒</div>
        <h3>Main Group</h3>
        <p>End-to-end encrypted discussions</p>
        <div class="member-count">
          <div class="count-ring"></div>
          <span>2.5K Members</span>
        </div>
        <a href="signal://..." class="join-link">
          <span class="join-text">Join Secure Group</span>
          <div class="link-overlay"></div>
        </a>
      </div>
    </div>
    <div class="group-card">
      <div class="card-frame"></div>
      <div class="card-content">
        <div class="group-icon">💎</div>
        <h3>Premium Hub</h3>
        <p>VIP discussions and tools</p>
        <div class="member-count">
          <div class="count-ring"></div>
          <span>1.2K Members</span>
        </div>
        <a href="signal://..." class="join-link">
          <span class="join-text">Access VIP Group</span>
          <div class="link-overlay"></div>
        </a>
      </div>
    </div>
    <div class="group-card">
      <div class="card-frame"></div>
      <div class="card-content">
        <div class="group-icon">🛠️</div>
        <h3>Tools Group</h3>
        <p>Technical support and tools</p>
        <div class="member-count">
          <div class="count-ring"></div>
          <span>1.8K Members</span>
        </div>
        <a href="signal://..." class="join-link">
          <span class="join-text">Join Tools Group</span>
          <div class="link-overlay"></div>
        </a>
      </div>
    </div>
  </div>
</div>

<style>
.hologram-container {
  padding: 2rem;
  background: linear-gradient(45deg, #000033, #000066);
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
}

.hologram-grid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(90deg, rgba(0, 229, 255, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(0, 229, 255, 0.1) 1px, transparent 1px);
  background-size: 30px 30px;
  animation: hologramGrid 10s linear infinite;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

.title {
  font-size: 3rem;
  color: #00e5ff;
  text-shadow: 0 0 10px #00e5ff;
  margin: 0;
}

.status-line {
  color: #00e5ff;
  font-family: monospace;
  margin-top: 1rem;
  opacity: 0.8;
}

.groups-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.group-card {
  background: rgba(0, 229, 255, 0.05);
  border: 1px solid #00e5ff;
  border-radius: 1rem;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transform: perspective(1000px) rotateX(5deg);
  transition: all 0.3s ease;
}

.group-card:hover {
  transform: perspective(1000px) rotateX(0deg) translateY(-5px);
  box-shadow: 0 0 30px rgba(0, 229, 255, 0.2);
}

.card-frame {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid #00e5ff;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  animation: frameGlitch 2s infinite;
}

.group-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.member-count {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
  color: #00e5ff;
  font-family: monospace;
}

.count-ring {
  width: 12px;
  height: 12px;
  border: 2px solid #00e5ff;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.join-link {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: rgba(0, 229, 255, 0.1);
  border: 1px solid #00e5ff;
  border-radius: 0.5rem;
  color: #00e5ff;
  text-decoration: none;
  font-family: monospace;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.join-link:hover {
  background: rgba(0, 229, 255, 0.2);
  transform: translateY(-2px);
}

.link-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent, rgba(0, 229, 255, 0.1), transparent);
  transform: translateX(-100%);
  animation: shine 3s infinite;
}

@keyframes hologramGrid {
  0% { transform: perspective(1000px) rotateX(0deg); }
  100% { transform: perspective(1000px) rotateX(360deg); }
}

@keyframes frameGlitch {
  0% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
  5% { clip-path: polygon(5% 5%, 95% 5%, 95% 95%, 5% 95%); }
  10% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes shine {
  0% { transform: translateX(-100%) rotate(45deg); }
  100% { transform: translateX(100%) rotate(45deg); }
}
</style>