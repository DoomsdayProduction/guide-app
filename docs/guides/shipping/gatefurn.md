<div class="furniture-container">
  <div class="blueprint-grid"></div>
  <div class="header">
    <div class="tech-text">GATEFURN</div>
    <div class="status-display">
      <div class="status-ring"></div>
      <span>SYSTEM OPERATIONAL</span>
    </div>
  </div>

  <AccordionItem type="cyber" title="Target Information" icon="🏠" status="ACTIVE">
    <div class="info-grid">
      <div class="info-item">
        <span class="label">Website</span>
        <WebsiteMetadata url="https://gatefurn.com" />
      </div>
      <div class="info-item">
        <span class="label">Categories</span>
        <div class="tags">
          <span class="tag">Furniture</span>
          <span class="tag">Home Decor</span>
          <span class="tag">Appliances</span>
        </div>
      </div>
      <div class="info-item">
        <span class="label">Shipping</span>
        <div class="shipping-badge">SAME DAY</div>
      </div>
    </div>
  </AccordionItem>

  <div class="process-flow">
    <div class="process-step">
      <div class="step-indicator">01</div>
      <div class="step-details">
        <h3>Account Setup</h3>
        <p>Create new account with valid information</p>
        <div class="step-tags">
          <span class="tag">Setup</span>
          <span class="tag">Verify</span>
        </div>
      </div>
    </div>
    <div class="process-step">
      <div class="step-indicator">02</div>
      <div class="step-details">
        <h3>Order Processing</h3>
        <p>Select items and process payment</p>
        <div class="step-tags">
          <span class="tag">Payment</span>
          <span class="tag">Verify</span>
        </div>
      </div>
    </div>
    <div class="process-step">
      <div class="step-indicator">03</div>
      <div class="step-details">
        <h3>Delivery Setup</h3>
        <p>Configure same-day delivery options</p>
        <div class="step-tags">
          <span class="tag">Shipping</span>
          <span class="tag">Track</span>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.furniture-container {
  position: relative;
  padding: 2rem;
  background: linear-gradient(45deg, #001133, #002266);
  border-radius: 1rem;
  margin: 2rem 0;
  overflow: hidden;
}

.blueprint-grid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(90deg, rgba(0, 102, 255, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(0, 102, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: gridScroll 20s linear infinite;
}

.tech-text {
  font-size: 3rem;
  color: #0066ff;
  text-shadow: 0 0 10px #0066ff;
  text-align: center;
  margin: 0;
}

.status-display {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  color: #0066ff;
  font-family: monospace;
}

.status-ring {
  width: 12px;
  height: 12px;
  border: 2px solid #0066ff;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.process-flow {
  display: grid;
  gap: 1.5rem;
  margin-top: 2rem;
}

.process-step {
  background: rgba(0, 102, 255, 0.1);
  border: 1px solid #0066ff;
  border-radius: 0.5rem;
  padding: 1.5rem;
  display: flex;
  gap: 1.5rem;
  position: relative;
  overflow: hidden;
}

.step-indicator {
  font-size: 2rem;
  font-weight: bold;
  color: #0066ff;
  font-family: monospace;
  opacity: 0.5;
}

.step-details h3 {
  color: #0066ff;
  margin: 0 0 0.5rem 0;
}

.step-details p {
  color: rgba(0, 102, 255, 0.7);
  margin: 0 0 1rem 0;
}

.step-tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  padding: 0.25rem 0.75rem;
  background: rgba(0, 102, 255, 0.1);
  border: 1px solid rgba(0, 102, 255, 0.2);
  border-radius: 1rem;
  font-size: 0.8rem;
  color: #0066ff;
  font-family: monospace;
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