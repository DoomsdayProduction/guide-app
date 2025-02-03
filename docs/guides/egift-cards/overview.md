<div class="gift-container">
  <div class="gift-particles"></div>
  <div class="header">
    <div class="diamond-text">GIFT CARD CENTRAL</div>
    <div class="gold-line"></div>
  </div>

  <div class="cards-grid">
    <div class="gift-card">
      <div class="card-shine"></div>
      <div class="card-content">
        <span class="card-icon">🎁</span>
        <h3>Gift Cards</h3>
        <div class="card-stats">
          <div class="stat">
            <span class="label">Success Rate</span>
            <span class="value">92%</span>
          </div>
          <div class="stat">
            <span class="label">Processing</span>
            <span class="value">Instant</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.gift-container {
  position: relative;
  padding: 2rem;
  background: linear-gradient(45deg, #1a1a2e, #16213e);
  border-radius: 1rem;
  margin: 2rem 0;
  overflow: hidden;
  border: 2px solid #ffd700;
}

.gift-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 10% 10%, rgba(255, 215, 0, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 90% 90%, rgba(255, 215, 0, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: sparkle 10s linear infinite;
}

.diamond-text {
  font-size: 3rem;
  background: linear-gradient(45deg, #ffd700, #ffffff, #ffd700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
  margin: 0;
  font-weight: bold;
}

.gold-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, #ffd700, transparent);
  margin: 2rem auto;
  width: 200px;
}

.gift-card {
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid #ffd700;
  border-radius: 0.5rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.card-shine {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 215, 0, 0.2),
    transparent
  );
  transform: rotate(45deg);
  animation: shine 3s infinite;
}

.card-stats {
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
  color: rgba(255, 215, 0, 0.7);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.stat .value {
  color: #ffd700;
  font-family: monospace;
  font-size: 1.2rem;
  text-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
}

@keyframes sparkle {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50px); }
}

@keyframes shine {
  0% { transform: translateX(-100%) rotate(45deg); }
  100% { transform: translateX(100%) rotate(45deg); }
}
</style>