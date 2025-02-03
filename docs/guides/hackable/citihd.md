<div class="bank-container">
  <div class="matrix-bg"></div>
  <div class="header">
    <div class="glitch-text" data-text="CITI BANKING">CITI BANKING</div>
    <div class="status-bar">
      <div class="status-item">
        <span class="label">TARGET</span>
        <span class="value">HOME DEPOT</span>
      </div>
      <div class="status-item">
        <span class="label">STATUS</span>
        <span class="value">ACTIVE</span>
      </div>
    </div>
  </div>

  <AccordionItem type="cyber" title="Target Information" icon="🏦" status="ACTIVE">
    <div class="info-grid">
      <div class="info-item">
        <span class="label">Bank</span>
        <span class="value">Citi Bank</span>
      </div>
      <div class="info-item">
        <span class="label">Target</span>
        <span class="value">Home Depot</span>
      </div>
      <div class="info-item">
        <span class="label">Method</span>
        <span class="value">Direct Access</span>
      </div>
      <div class="info-item">
        <span class="label">Success Rate</span>
        <span class="value success">92%</span>
      </div>
    </div>
  </AccordionItem>

  <div class="process-flow">
    <div class="process-step">
      <div class="step-indicator">01</div>
      <div class="step-details">
        <h3>Initial Access</h3>
        <p>Gain access to Citi Banking portal</p>
        <div class="step-tags">
          <span class="tag">Portal</span>
          <span class="tag">Access</span>
        </div>
      </div>
    </div>
    <div class="process-step">
      <div class="step-indicator">02</div>
      <div class="step-details">
        <h3>Account Verification</h3>
        <p>Verify account details and status</p>
        <div class="step-tags">
          <span class="tag">Verify</span>
          <span class="tag">Check</span>
        </div>
      </div>
    </div>
    <div class="process-step">
      <div class="step-indicator">03</div>
      <div class="step-details">
        <h3>Home Depot Link</h3>
        <p>Link account to Home Depot profile</p>
        <div class="step-tags">
          <span class="tag">Link</span>
          <span class="tag">Connect</span>
        </div>
      </div>
    </div>
  </div>

  <div class="security-notice">
    <div class="notice-icon">⚠️</div>
    <div class="notice-content">
      <h4>Security Warning</h4>
      <p>Maintain strict OPSEC when accessing banking portals.</p>
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

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.info-item {
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 255, 0, 0.2);
}

.info-item .value.success {
  color: #00ff00;
}

.process-flow {
  margin: 2rem 0;
}

.process-step {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 255, 0, 0.2);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.step-indicator {
  font-size: 2rem;
  font-weight: bold;
  color: #00ff00;
  opacity: 0.5;
}

.step-details h3 {
  color: #00ff00;
  margin: 0 0 0.5rem 0;
}

.step-details p {
  color: #a8b2c3;
  margin: 0 0 1rem 0;
}

.step-tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  padding: 0.25rem 0.75rem;
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid rgba(0, 255, 0, 0.2);
  border-radius: 1rem;
  font-size: 0.8rem;
  color: #00ff00;
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
