<div class="bank-container">
  <div class="matrix-bg"></div>
  <div class="header">
    <div class="glitch-text" data-text="BANK OPERATIONS">BANK OPERATIONS</div>
    <div class="status-bar">
      <div class="status-item">
        <span class="label">SYSTEM</span>
        <span class="value">ACTIVE</span>
      </div>
      <div class="status-item">
        <span class="label">SECURITY</span>
        <span class="value">MAXIMUM</span>
      </div>
    </div>
  </div>

  <div class="bank-grid">
    <div class="bank-card">
      <div class="card-header">
        <span class="icon">🏦</span>
        <h3>Bank Access</h3>
        <div class="security-level">LEVEL 3</div>
      </div>
      <div class="card-content">
        <div class="stat-line">Success Rate: <span class="value">82%</span></div>
        <div class="stat-line">Detection Risk: <span class="value">HIGH</span></div>
        <div class="stat-line">Access Method: <span class="value">DIRECT</span></div>
      </div>
      <div class="scan-line"></div>
    </div>
  </div>

  <div class="methods-section">
    <AccordionItem type="cyber" title="Access Methods" icon="🔐" status="ACTIVE">
      <div class="methods-grid">
        <div class="method-card">
          <div class="method-header">
            <span class="icon">🔑</span>
            <h3>Direct Access</h3>
          </div>
          <div class="method-content">
            <p>Direct portal access through credentials</p>
            <div class="method-stats">
              <div class="stat">
                <span class="label">Success</span>
                <span class="value">85%</span>
              </div>
              <div class="stat">
                <span class="label">Risk</span>
                <span class="value">High</span>
              </div>
            </div>
          </div>
        </div>
        <div class="method-card">
          <div class="method-header">
            <span class="icon">📱</span>
            <h3>Mobile Access</h3>
          </div>
          <div class="method-content">
            <p>Access through mobile banking apps</p>
            <div class="method-stats">
              <div class="stat">
                <span class="label">Success</span>
                <span class="value">78%</span>
              </div>
              <div class="stat">
                <span class="label">Risk</span>
                <span class="value">Medium</span>
              </div>
            </div>
          </div>
        </div>
        <div class="method-card">
          <div class="method-header">
            <span class="icon">📞</span>
            <h3>Phone Banking</h3>
          </div>
          <div class="method-content">
            <p>Access through automated phone systems</p>
            <div class="method-stats">
              <div class="stat">
                <span class="label">Success</span>
                <span class="value">92%</span>
              </div>
              <div class="stat">
                <span class="label">Risk</span>
                <span class="value">Low</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AccordionItem>
  </div>

  <div class="security-notice">
    <div class="notice-icon">⚠️</div>
    <div class="notice-content">
      <h4>Security Warning</h4>
      <p>Maintain strict OPSEC when accessing banking systems. Multiple failed attempts may trigger security alerts.</p>
    </div>
    <div class="notice-scanner"></div>
  </div>
</div>

<style>
.bank-container {
  position: relative;
  padding: 2rem;
  background: linear-gradient(45deg, #000022, #000044);
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
  color: #00ff00;
  text-shadow: 0 0 10px #00ff00;
  position: relative;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip: rect(0, 900px, 0, 0);
  animation: glitch 2s infinite linear alternate-reverse;
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

.bank-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.bank-card {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #00ff00;
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

.security-level {
  margin-left: auto;
  padding: 0.25rem 0.75rem;
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid #00ff00;
  border-radius: 1rem;
  color: #00ff00;
  font-family: monospace;
}

.stat-line {
  font-family: monospace;
  color: #666;
  margin: 0.5rem 0;
}

.value {
  color: #00ff00;
}

.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #00ff00;
  opacity: 0.5;
  animation: scan 2s linear infinite;
}

.methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.method-card {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 255, 0, 0.2);
  border-radius: 0.5rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.method-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.method-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}

.method-stats .stat {
  text-align: center;
}

.method-stats .label {
  display: block;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.method-stats .value {
  color: #00ff00;
  font-family: monospace;
  font-size: 1.2rem;
}

.security-notice {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid #ff0000;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
}

.notice-icon {
  font-size: 1.5rem;
}

.notice-content h4 {
  margin: 0 0 0.5rem 0;
  color: #ff0000;
}

.notice-content p {
  margin: 0;
  color: #a8b2c3;
}

.notice-scanner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ff0000, transparent);
  animation: scan 2s linear infinite;
}

@keyframes matrixScroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}

@keyframes glitch {
  0% { clip: rect(44px, 900px, 56px, 0); }
  20% { clip: rect(12px, 900px, 65px, 0); }
  40% { clip: rect(78px, 900px, 92px, 0); }
  60% { clip: rect(23px, 900px, 45px, 0); }
  80% { clip: rect(34px, 900px, 86px, 0); }
  100% { clip: rect(67px, 900px, 91px, 0); }
}

@keyframes scan {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
</style>
