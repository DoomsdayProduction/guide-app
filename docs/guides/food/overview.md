<div class="food-container">
  <div class="matrix-bg"></div>
  <div class="header">
    <div class="neon-text">FOOD & GROCERIES</div>
    <div class="delivery-status">
      <div class="status-ring"></div>
      <span>DELIVERY ACTIVE</span>
    </div>
  </div>

  <div class="services-grid">
    <div class="service-card">
      <div class="card-glow"></div>
      <div class="card-content">
        <span class="service-icon">🍔</span>
        <h3>Food Delivery</h3>
        <div class="service-stats">
          <div class="stat">
            <span class="label">Success Rate</span>
            <span class="value">95%</span>
          </div>
          <div class="stat">
            <span class="label">Delivery Time</span>
            <span class="value">30-45m</span>
          </div>
        </div>
      </div>
    </div>
    <div class="service-card">
      <div class="card-glow"></div>
      <div class="card-content">
        <span class="service-icon">🛒</span>
        <h3>Grocery Delivery</h3>
        <div class="service-stats">
          <div class="stat">
            <span class="label">Success Rate</span>
            <span class="value">92%</span>
          </div>
          <div class="stat">
            <span class="label">Delivery Time</span>
            <span class="value">2-4h</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="delivery-tracker">
    <div class="tracker-line">
      <div class="tracker-point active">
        <span class="point-label">Order</span>
      </div>
      <div class="tracker-point">
        <span class="point-label">Prep</span>
      </div>
      <div class="tracker-point">
        <span class="point-label">Pickup</span>
      </div>
      <div class="tracker-point">
        <span class="point-label">Delivery</span>
      </div>
    </div>
  </div>
</div>

<style>
.food-container {
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
    linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: gridScroll 20s linear infinite;
}

.header {
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

.delivery-status {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  color: #00ff00;
  font-family: monospace;
}

.status-ring {
  width: 12px;
  height: 12px;
  border: 2px solid #00ff00;
  border-radius: 50%;
  animation: pulse  2s infinite;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 1;
}

.service-card {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #00ff00;
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
  background: radial-gradient(circle at 50% 50%, rgba(0, 255, 0, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card:hover .card-glow {
  opacity: 1;
}

.service-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: block;
}

.service-stats {
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
  color: rgba(0, 255, 0, 0.7);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.stat .value {
  color: #00ff00;
  font-family: monospace;
  font-size: 1.2rem;
  text-shadow: 0 0 5px #00ff00;
}

.delivery-tracker {
  margin: 3rem 0;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #00ff00;
  border-radius: 0.5rem;
}

.tracker-line {
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 2rem 0;
}

.tracker-line::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(0, 255, 0, 0.3);
  transform: translateY(-50%);
}

.tracker-point {
  width: 20px;
  height: 20px;
  background: rgba(0, 255, 0, 0.3);
  border: 2px solid #00ff00;
  border-radius: 50%;
  position: relative;
  z-index: 1;
}

.tracker-point.active {
  background: #00ff00;
  box-shadow: 0 0 10px #00ff00;
}

.point-label {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 0.5rem;
  white-space: nowrap;
  color: #00ff00;
  font-family: monospace;
  font-size: 0.8rem;
}

@keyframes gridScroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
}
</style>