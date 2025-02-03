<div class="shipping-container">
  <div class="cyber-grid"></div>
  <div class="header">
    <div class="neon-text">INSTANT SHIPPING</div>
    <div class="status-bar">
      <div class="status-item">
        <span class="label">SYSTEM</span>
        <span class="value">ONLINE</span>
      </div>
      <div class="status-item">
        <span class="label">DELIVERY</span>
        <span class="value">24H</span>
      </div>
    </div>
  </div>

  <div class="shipping-grid">
    <div class="shipping-card">
      <div class="card-header">
        <span class="icon">🚚</span>
        <h3>Express Delivery</h3>
      </div>
      <div class="delivery-tracker">
        <div class="tracker-line">
          <div class="tracker-point active">
            <span class="point-label">Order</span>
          </div>
          <div class="tracker-point">
            <span class="point-label">Processing</span>
          </div>
          <div class="tracker-point">
            <span class="point-label">Shipping</span>
          </div>
          <div class="tracker-point">
            <span class="point-label">Delivered</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="steps-container">
    <div class="step">
      <div class="step-number">01</div>
      <div class="step-content">
        <h3>Order Placement</h3>
        <p>Place order with express shipping</p>
        <div class="step-notes">
          <span class="note">Select 24h delivery</span>
          <span class="note">Verify address</span>
        </div>
      </div>
    </div>
    <div class="step">
      <div class="step-number">02</div>
      <div class="step-content">
        <h3>Processing</h3>
        <p>Order processing and verification</p>
        <div class="step-notes">
          <span class="note">Quick processing</span>
          <span class="note">Track status</span>
        </div>
      </div>
    </div>
    <div class="step">
      <div class="step-number">03</div>
      <div class="step-content">
        <h3>Delivery</h3>
        <p>Express shipping to destination</p>
        <div class="step-notes">
          <span class="note">24h delivery</span>
          <span class="note">Track package</span>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.shipping-container {
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
}

.status-item .label {
  color: #666;
  font-size: 0.8rem;
  font-family: monospace;
}

.status-item .value {
  color: #00ff00;
  font-family: monospace;
  font-weight: bold;
}

.shipping-card {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #00ff00;
  border-radius: 0.5rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.delivery-tracker {
  margin: 2rem 0;
  padding: 1rem;
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

.steps-container {
  margin-top: 2rem;
}

.step {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 255, 0, 0.2);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.step-number {
  font-size: 1.5rem;
  color: #00ff00;
  font-family: monospace;
}

.step-notes {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.note {
  padding: 0.25rem 0.75rem;
  background: rgba(0, 255, 0, 0.1);
  border-radius: 1rem;
  font-size: 0.8rem;
  color: #00ff00;
}

@keyframes gridScroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}
</style>