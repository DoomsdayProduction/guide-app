<div class="diamond-container">
  <div class="hologram-grid"></div>
  <div class="header">
    <div class="diamond-text">DIAMOND ACCESS</div>
    <div class="status-bar">
      <div class="status-item">
        <span class="label">TIER</span>
        <span class="value">DIAMOND</span>
      </div>
      <div class="status-item">
        <span class="label">STATUS</span>
        <span class="value">ELITE</span>
      </div>
    </div>
  </div>

  <div class="features-section">
    <AccordionItem type="cyber" title="Elite Features" icon="👑" status="ACTIVE">
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-header">
            <span class="icon">🏦</span>
            <h3>Banking Operations</h3>
          </div>
          <div class="feature-content">
            <p>Premium banking and financial services</p>
            <div class="feature-stats">
              <div class="stat">
                <span class="label">Success</span>
                <span class="value">98%</span>
              </div>
              <div class="stat">
                <span class="label">Access</span>
                <span class="value">FULL</span>
              </div>
            </div>
          </div>
        </div>
        <div class="feature-card">
          <div class="feature-header">
            <span class="icon">🛍️</span>
            <h3>Shopping Services</h3>
          </div>
          <div class="feature-content">
            <p>Premium retail and e-commerce access</p>
            <div class="feature-stats">
              <div class="stat">
                <span class="label">Success</span>
                <span class="value">95%</span>
              </div>
              <div class="stat">
                <span class="label">Shipping</span>
                <span class="value">24H</span>
              </div>
            </div>
          </div>
        </div>
        <div class="feature-card">
          <div class="feature-header">
            <span class="icon">🎮</span>
            <h3>Gaming Services</h3>
          </div>
          <div class="feature-content">
            <p>Premium gaming and entertainment</p>
            <div class="feature-stats">
              <div class="stat">
                <span class="label">Access</span>
                <span class="value">VIP</span>
              </div>
              <div class="stat">
                <span class="label">Games</span>
                <span class="value">ALL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AccordionItem>
  </div>

  <div class="limits-section">
    <AccordionItem type="neon" title="Service Limits" icon="📊" status="UNLIMITED">
      <div class="limits-grid">
        <div class="limit-item">
          <div class="limit-header">
            <span class="icon">🏪</span>
            <h3>Retail Access</h3>
          </div>
          <div class="limit-value">UNLIMITED</div>
          <div class="limit-bar">
            <div class="bar-fill"></div>
          </div>
        </div>
        <div class="limit-item">
          <div class="limit-header">
            <span class="icon">🎁</span>
            <h3>Gift Cards</h3>
          </div>
          <div class="limit-value">UNLIMITED</div>
          <div class="limit-bar">
            <div class="bar-fill"></div>
          </div>
        </div>
        <div class="limit-item">
          <div class="limit-header">
            <span class="icon">🎮</span>
            <h3>Gaming</h3>
          </div>
          <div class="limit-value">UNLIMITED</div>
          <div class="limit-bar">
            <div class="bar-fill"></div>
          </div>
        </div>
      </div>
    </AccordionItem>
  </div>

  <div class="services-section">
    <AccordionItem type="hologram" title="Premium Services" icon="💎" status="ELITE">
      <div class="services-grid">
        <div class="service-card">
          <div class="service-header">
            <span class="icon">🛒</span>
            <h3>Premium Shopping</h3>
          </div>
          <div class="service-content">
            <p>Elite retail services access</p>
            <div class="service-stats">
              <div class="stat">
                <span class="label">Stores</span>
                <span class="value">ALL</span>
              </div>
              <div class="stat">
                <span class="label">Delivery</span>
                <span class="value">24H</span>
              </div>
            </div>
          </div>
        </div>
        <div class="service-card">
          <div class="service-header">
            <span class="icon">💳</span>
            <h3>Financial Services</h3>
          </div>
          <div class="service-content">
            <p>Premium banking operations</p>
            <div class="service-stats">
              <div class="stat">
                <span class="label">Access</span>
                <span class="value">FULL</span>
              </div>
              <div class="stat">
                <span class="label">Limits</span>
                <span class="value">NONE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AccordionItem>
  </div>
</div>

<style>
.diamond-container {
  position: relative;
  padding: 2rem;
  background: linear-gradient(45deg, #000022, #000044);
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

.header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
}

.diamond-text {
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
}

.status-item .label {
  color: #666;
  font-size: 0.8rem;
  font-family: monospace;
}

.status-item .value {
  color: #00e5ff;
  font-family: monospace;
  font-weight: bold;
}

.diamond-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.diamond-card {
  background: rgba(0, 0, 0, 0.7);
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
  margin-bottom: 1rem;
}

.access-level {
  margin-left: auto;
  padding: 0.25rem 0.75rem;
  background: rgba(0, 229, 255, 0.1);
  border: 1px solid #00e5ff;
  border-radius: 1rem;
  color: #00e5ff;
  font-family: monospace;
}

.stat-line {
  font-family: monospace;
  color: #666;
  margin: 0.5rem 0;
}

.value {
  color: #00e5ff;
}

.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #00e5ff;
  opacity: 0.5;
  animation: scan 2s linear infinite;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.feature-card {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 229, 255, 0.2);
  border-radius: 0.5rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.feature-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.feature-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}

.feature-stats .stat {
  text-align: center;
}

.feature-stats .label {
  display: block;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.feature-stats .value {
  color: #00e5ff;
  font-family: monospace;
  font-size: 1.2rem;
}

.limits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.limit-item {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 229, 255, 0.2);
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.limit-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.limit-value {
  color: #00e5ff;
  font-family: monospace;
  font-size: 1.2rem;
  text-align: center;
  margin: 1rem 0;
}

.limit-bar {
  height: 4px;
  background: rgba(0, 229, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  width: 100%;
  background: #00e5ff;
  animation: barPulse 2s infinite;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.tool-card {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 229, 255, 0.2);
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.tool-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.tool-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.service-card {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 229, 255, 0.2);
  border-radius: 0.5rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.service-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.service-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}

.service-stats .stat {
  text-align: center;
}

.service-stats .label {
  display: block;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.service-stats .value {
  color: #00e5ff;
  font-family: monospace;
  font-size: 1.2rem;
}

@keyframes hologramGrid {
  0% { transform: perspective(1000px) rotateX(0deg); }
  100% { transform: perspective(1000px) rotateX(360deg); }
}

@keyframes scan {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes barPulse {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}
</style>