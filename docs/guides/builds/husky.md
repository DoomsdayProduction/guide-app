<div class="build-container">
  <div class="cyber-grid"></div>
  <div class="header">
    <div class="glitch-text" data-text="HUSKY ARMORY">HUSKY ARMORY</div>
    <div class="status-bar">
      <div class="status-item">
        <span class="label">BUILD</span>
        <span class="value">ACTIVE</span>
      </div>
      <div class="status-item">
        <span class="label">VERSION</span>
        <span class="value">2.1.0</span>
      </div>
    </div>
  </div>

  <div class="build-grid">
    <div class="build-card">
      <div class="card-header">
        <span class="icon">🛠️</span>
        <h3>Build Status</h3>
        <div class="build-level">STABLE</div>
      </div>
      <div class="card-content">
        <div class="stat-line">Success Rate: <span class="value">95%</span></div>
        <div class="stat-line">Detection: <span class="value">LOW</span></div>
        <div class="stat-line">Compatibility: <span class="value">HIGH</span></div>
      </div>
      <div class="scan-line"></div>
    </div>
  </div>

  <div class="build-section">
    <AccordionItem type="cyber" title="Build Requirements" icon="📋" status="ACTIVE">
      <div class="requirements-grid">
        <div class="req-card">
          <div class="req-header">
            <span class="icon">💻</span>
            <h3>System</h3>
          </div>
          <ul>
            <li>Windows 10/11</li>
            <li>8GB RAM</li>
            <li>2GB Storage</li>
            <li>.NET Framework 4.8</li>
          </ul>
        </div>
        <div class="req-card">
          <div class="req-header">
            <span class="icon">🔧</span>
            <h3>Tools</h3>
          </div>
          <ul>
            <li>Visual Studio 2019+</li>
            <li>Git</li>
            <li>NuGet</li>
            <li>Build Tools</li>
          </ul>
        </div>
        <div class="req-card">
          <div class="req-header">
            <span class="icon">📦</span>
            <h3>Dependencies</h3>
          </div>
          <ul>
            <li>Selenium WebDriver</li>
            <li>ChromeDriver</li>
            <li>Newtonsoft.Json</li>
            <li>RestSharp</li>
          </ul>
        </div>
      </div>
    </AccordionItem>
    <AccordionItem type="neon" title="Build Steps" icon="🔨" status="GUIDE">
      <div class="steps">
        <div class="step">
          <div class="step-number">01</div>
          <div class="step-content">
            <h3>Environment Setup</h3>
            <p>Prepare development environment</p>
            <div class="step-notes">
              <span class="note">Install tools</span>
              <span class="note">Configure VS</span>
            </div>
          </div>
        </div>
        <div class="step">
          <div class="step-number">02</div>
          <div class="step-content">
            <h3>Source Code</h3>
            <p>Clone repository and install dependencies</p>
            <div class="step-notes">
              <span class="note">Git clone</span>
              <span class="note">NuGet restore</span>
            </div>
          </div>
        </div>
        <div class="step">
          <div class="step-number">03</div>
          <div class="step-content">
            <h3>Build Process</h3>
            <p>Compile and build solution</p>
            <div class="step-notes">
              <span class="note">Debug build</span>
              <span class="note">Release build</span>
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
      <p>Always build in a secure, isolated environment. Test thoroughly before deployment.</p>
    </div>
    <div class="notice-scanner"></div>
  </div>
</div>

<style>
.build-container {
  position: relative;
  padding: 2rem;
  background: linear-gradient(45deg, #000022, #000044);
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

.build-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.build-card {
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

.build-level {
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

.requirements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.req-card {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 255, 0, 0.2);
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.req-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.req-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.req-card li {
  padding: 0.5rem 0;
  color: #a8b2c3;
  border-bottom: 1px solid rgba(0, 255, 0, 0.1);
}

.req-card li:last-child {
  border-bottom: none;
}

.steps {
  display: grid;
  gap: 1.5rem;
}

.step {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 255, 0, 0.2);
  border-radius: 0.5rem;
}

.step-number {
  font-size: 1.5rem;
  font-weight: bold;
  color: #00ff00;
  font-family: monospace;
}

.step-content h3 {
  margin: 0 0 0.5rem 0;
  color: #00ff00;
}

.step-content p {
  margin: 0 0 0.5rem 0;
  color: #a8b2c3;
}

.step-notes {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.note {
  padding: 0.25rem 0.75rem;
  background: rgba(0, 255, 0, 0.1);
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
