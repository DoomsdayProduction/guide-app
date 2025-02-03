<div class="casino-container">
  <div class="neon-grid"></div>
  <div class="casino-header">
    <div class="neon-text" data-text="GAMBLING CENTRAL">GAMBLING CENTRAL</div>
    <div class="neon-line"></div>
  </div>

  <div class="casino-grid">
    <div class="casino-card">
      <div class="card-glow"></div>
      <div class="card-content">
        <span class="card-icon">🎰</span>
        <h3>Bookie Casinos</h3>
        <div class="stats">
          <div class="stat">
            <span class="label">Success Rate</span>
            <span class="value">96.5%</span>
          </div>
          <div class="stat">
            <span class="label">Risk Level</span>
            <span class="value">LOW</span>
          </div>
        </div>
      </div>
    </div>
    <div class="casino-card">
      <div class="card-glow"></div>
      <div class="card-content">
        <span class="card-icon">🎲</span>
        <h3>Sweepstakes</h3>
        <div class="stats">
          <div class="stat">
            <span class="label">Success Rate</span>
            <span class="value">92.8%</span>
          </div>
          <div class="stat">
            <span class="label">Risk Level</span>
            <span class="value">LOW</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.casino-container {
  position: relative;
  padding: 2rem;
  background: linear-gradient(45deg, #000033, #330066);
  border-radius: 1rem;
  margin: 2rem 0;
  overflow: hidden;
}

.neon-grid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(90deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(255, 0, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: gridPulse 4s ease infinite;
}

.casino-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
}

.neon-text {
  font-size: 3rem;
  color: #ff00ff;
  text-shadow: 
    0 0 5px #ff00ff,
    0 0 10px #ff00ff,
    0 0 20px #ff00ff;
  margin: 0;
  animation: textFlicker 2s infinite;
}

.neon-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, #ff00ff, transparent);
  margin: 2rem auto;
  width: 200px;
  animation: linePulse 2s infinite;
}

.casino-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 1;
}

.casino-card {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #ff00ff;
  border-radius: 0.5rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(255, 0, 255, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.casino-card:hover .card-glow {
  opacity: 1;
}

.card-content {
  position: relative;
  z-index: 1;
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: block;
}

.stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}

.stat {
  text-align: center;
}

.stat .label {
  display: block;
  color: rgba(255, 0, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.stat .value {
  color: #ff00ff;
  font-family: monospace;
  font-size: 1.2rem;
  text-shadow: 0 0 5px #ff00ff;
}

@keyframes gridPulse {
  0% { opacity: 0.3; }
  50% { opacity: 0.7; }
  100% { opacity: 0.3; }
}

@keyframes textFlicker {
  0% { opacity: 1; }
  92% { opacity: 1; }
  93% { opacity: 0.3; }
  94% { opacity: 1; }
  100% { opacity: 1; }
}

@keyframes linePulse {
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
}
</style>