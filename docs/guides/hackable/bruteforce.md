<div class="bruteforce-container">
  <div class="matrix-bg"></div>
  <div class="header">
    <div class="glitch-text" data-text="BRUTEFORCE">BRUTEFORCE</div>
    <div class="status-display">
      <div class="status-ring"></div>
      <span>SYSTEM READY</span>
    </div>
  </div>

  <div class="attack-grid">
    <div class="attack-card">
      <div class="card-header">
        <span class="icon">🔓</span>
        <h3>Attack Status</h3>
      </div>
      <div class="attack-stats">
        <div class="stat">
          <span class="label">Attempts</span>
          <span class="value counter">0</span>
        </div>
        <div class="stat">
          <span class="label">Success</span>
          <span class="value percentage">0%</span>
        </div>
        <div class="stat">
          <span class="label">Speed</span>
          <span class="value">100/s</span>
        </div>
      </div>
      <div class="progress-bar">
        <div class="progress"></div>
      </div>
    </div>
  </div>

  <div class="method-section">
    <AccordionItem type="cyber" title="Attack Methods" icon="⚡" status="ACTIVE">
      <div class="methods-grid">
        <div class="method-card">
          <div class="method-header">
            <span class="icon">🔑</span>
            <h3>Dictionary Attack</h3>
          </div>
          <div class="method-stats">
            <div class="stat">
              <span class="label">Success Rate</span>
              <span class="value">75%</span>
            </div>
            <div class="stat">
              <span class="label">Speed</span>
              <span class="value">Fast</span>
            </div>
          </div>
        </div>
        <div class="method-card">
          <div class="method-header">
            <span class="icon">🔢</span>
            <h3>Hybrid Attack</h3>
          </div>
          <div class="method-stats">
            <div class="stat">
              <span class="label">Success Rate</span>
              <span class="value">85%</span>
            </div>
            <div class="stat">
              <span class="label">Speed</span>
              <span class="value">Medium</span>
            </div>
          </div>
        </div>
      </div>
    </AccordionItem>
  </div>

  <div class="terminal-section">
    <div class="terminal-window">
      <div class="terminal-header">
        <div class="controls">
          <span class="control"></span>
          <span class="control"></span>
          <span class="control"></span>
        </div>
        <div class="title">bruteforce.exe</div>
      </div>
      <div class="terminal-content">
        <div class="line">Initializing attack vectors...</div>
        <div class="line">Loading wordlists...</div>
        <div class="line">Starting bruteforce sequence...</div>
        <div class="cursor">_</div>
      </div>
    </div>
  </div>
</div>

<style>
.bruteforce-container {
  position: relative;
  padding: 2rem;
  background: linear-gradient(45deg, #000, #1a1a1a);
  border-radius: 1rem;
  margin: 2rem 0;
  overflow: hidden;
}

.matrix-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(90deg, rgba(255, 0, 0, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(255, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: matrixScroll 20s linear infinite;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
}

.glitch-text {
  font-size: 3rem;
  color: #ff0000;
  text-shadow: 0 0 10px #ff0000;
  position: relative;
  animation: textGlitch 3s infinite;
}

.status-display {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  color: #ff0000;
  font-family: monospace;
}

.status-ring {
  width: 12px;
  height: 12px;
  border: 2px solid #ff0000;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.attack-grid {
  display: grid;
  gap: 2rem;
  margin: 2rem 0;
}

.attack-card {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #ff0000;
  border-radius: 0.5rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.attack-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1rem 0;
}

.stat {
  text-align: center;
}

.stat .label {
  display: block;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.stat .value {
  color: #ff0000;
  font-family: monospace;
  font-size: 1.2rem;
  text-shadow: 0 0 5px #ff0000;
}

.progress-bar {
  height: 4px;
  background: rgba(255, 0, 0, 0.2);
  border-radius: 2px;
  overflow: hidden;
}

.progress {
  height: 100%;
  width: 0%;
  background: #ff0000;
  animation: progress 3s infinite;
}

.terminal-window {
  background: #000;
  border: 1px solid #ff0000;
  border-radius: 0.5rem;
  margin-top: 2rem;
}

.terminal-header {
  padding: 0.5rem;
  background: rgba(255, 0, 0, 0.1);
  display: flex;
  align-items: center;
}

.controls {
  display: flex;
  gap: 0.5rem;
}

.control {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ff0000;
  opacity: 0.5;
}

.title {
  margin-left: 1rem;
  color: #ff0000;
  font-family: monospace;
}

.terminal-content {
  padding: 1rem;
  font-family: monospace;
  color: #ff0000;
}

.line {
  margin: 0.5rem 0;
}

.cursor {
  animation: blink 1s infinite;
}

@keyframes matrixScroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}

@keyframes textGlitch {
  0% { transform: skew(0deg); }
  20% { transform: skew(-2deg); }
  40% { transform: skew(2deg); }
  60% { transform: skew(-1deg); }
  80% { transform: skew(3deg); }
  100% { transform: skew(0deg); }
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes progress {
  0% { width: 0%; }
  50% { width: 75%; }
  100% { width: 100%; }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const counter = document.querySelector('.counter')
  const percentage = document.querySelector('.percentage')
  let count = 0
  
  setInterval(() => {
    if (count < 1000) {
      count += Math.floor(Math.random() * 10)
      counter.textContent = count.toLocaleString()
      percentage.textContent = Math.min(Math.floor(count / 10), 100) + '%'
    }
  }, 100)
})
</script>
