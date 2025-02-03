<div class="access-container">
  <div class="hologram-grid"></div>
  <div class="access-header">
    <div class="hologram-text">DIRECT ACCESS</div>
    <div class="status-bar">
      <div class="status-item">
        <span class="label">SYSTEM</span>
        <span class="value">ONLINE</span>
      </div>
      <div class="status-item">
        <span class="label">SECURITY</span>
        <span class="value">ACTIVE</span>
      </div>
    </div>
  </div>

  <div class="access-grid">
    <div class="access-card">
      <div class="card-header">
        <span class="icon">🔐</span>
        <h3>Security Level</h3>
      </div>
      <div class="security-meter">
        <div class="meter-fill"></div>
      </div>
      <div class="security-status">MAXIMUM</div>
    </div>
    <div class="access-card">
      <div class="card-header">
        <span class="icon">🌐</span>
        <h3>Network Status</h3>
      </div>
      <div class="network-display">
        <div class="network-ring"></div>
        <div class="network-status">CONNECTED</div>
      </div>
    </div>
  </div>
</div>

<style>
.access-container {
  position: relative;
  padding: 2rem;
  background: rgba(0, 10, 20, 0.9);
  border: 1px solid #00e5ff;
  border-radius: 1rem;
  margin: 2rem 0;
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

.access-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

.hologram-text {
  font-size: 3rem;
  color: #00e5ff;
  text-shadow: 0 0 10px #00e5ff;
  margin: 0;
}

.status-bar {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
}

.status-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.status-item .label {
  color: rgba(0, 229, 255, 0.7);
  font-size: 0.8rem;
  font-family: monospace;
}

.status-item .value {
  color: #00e5ff;
  font-family: monospace;
  font-weight: bold;
}

.access-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.access-card {
  background: rgba(0, 229, 255, 0.05);
  border: 1px solid #00e5ff;
  border-radius: 0.5rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.security-meter {
  height: 4px;
  background: rgba(0, 229, 255, 0.2);
  border-radius: 2px;
  margin: 1rem 0;
  overflow: hidden;
}

.meter-fill {
  height: 100%;
  width: 85%;
  background: #00e5ff;
  animation: meterPulse 2s infinite;
}

.security-status {
  text-align: center;
  color: #00e5ff;
  font-family: monospace;
  font-size: 1.2rem;
  letter-spacing: 2px;
}

.network-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.network-ring {
  width: 80px;
  height: 80px;
  border: 2px solid #00e5ff;
  border-radius: 50%;
  position: relative;
  animation: ringRotate 4s linear infinite;
}

.network-status {
  color: #00e5ff;
  font-family: monospace;
  font-size: 1.2rem;
}

@keyframes hologramGrid {
  0% { transform: perspective(1000px) rotateX(0deg); }
  100% { transform: perspective(1000px) rotateX(360deg); }
}

@keyframes meterPulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

@keyframes ringRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>