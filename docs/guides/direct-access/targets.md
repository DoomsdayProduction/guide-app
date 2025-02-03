<div class="targets-container">
  <div class="matrix-bg"></div>
  <div class="header">
    <div class="glitch-text" data-text="DIRECT ACCESS TARGETS">DIRECT ACCESS TARGETS</div>
    <div class="status-line">SYSTEM STATUS: ACTIVE</div>
  </div>

  <div class="targets-grid">
    <AccordionItem type="cyber" title="Target Analysis" icon="🎯" status="ACTIVE">
      <div class="target-list">
        <div class="target-card">
          <div class="card-header">
            <span class="icon">🔒</span>
            <h3>Security Level</h3>
            <div class="security-badge">MEDIUM</div>
          </div>
          <div class="card-content">
            <div class="stat-line">Success Rate: <span class="value">87%</span></div>
            <div class="stat-line">Detection Risk: <span class="value">LOW</span></div>
            <div class="stat-line">Access Method: <span class="value">DIRECT</span></div>
          </div>
          <div class="scan-line"></div>
        </div>
      </div>
    </AccordionItem>
  </div>
</div>

<style>
.targets-container {
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

.status-line {
  color: #00ff00;
  font-family: monospace;
  margin-top: 1rem;
  animation: blink 1s infinite;
}

.target-card {
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

.security-badge {
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

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes scan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(500%); }
}
</style>