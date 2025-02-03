<div class="casino-container">
  <div class="neon-grid"></div>
  <div class="casino-header">
    <div class="neon-text" data-text="SWEEPSTAKES CASINO">SWEEPSTAKES CASINO</div>
    <div class="neon-line"></div>
  </div>

  <div class="casino-grid">
    <div class="casino-card">
      <div class="card-glow"></div>
      <div class="card-content">
        <span class="card-icon">🎰</span>
        <h3>Sweepstakes Games</h3>
        <div class="stats">
          <div class="stat">
            <span class="label">Success Rate</span>
            <span class="value">98.2%</span>
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
        <h3>Social Casino</h3>
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
  </div>

  <div class="method-section">
    <AccordionItem type="cyber" title="Method Details" icon="💳" status="ACTIVE">
      <div class="methods-grid">
        <div class="method-card">
          <div class="method-header">
            <span class="icon">🔑</span>
            <h3>Account Access</h3>
          </div>
          <div class="method-content">
            <p>Direct sweepstakes account access</p>
            <div class="method-stats">
              <div class="stat">
                <span class="label">Success</span>
                <span class="value">95%</span>
              </div>
              <div class="stat">
                <span class="label">Risk</span>
                <span class="value">Low</span>
              </div>
            </div>
          </div>
        </div>
        <div class="method-card">
          <div class="method-header">
            <span class="icon">💰</span>
            <h3>Coin Purchase</h3>
          </div>
          <div class="method-content">
            <p>Virtual currency acquisition</p>
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

  <div class="steps-section">
    <AccordionItem type="neon" title="Step-by-Step Guide" icon="📝" status="GUIDE">
      <div class="steps">
        <div class="step">
          <div class="step-number">01</div>
          <div class="step-content">
            <h3>Account Setup</h3>
            <p>Create sweepstakes account</p>
            <div class="step-notes">
              <span class="note">Clean profile</span>
              <span class="note">Valid info</span>
            </div>
          </div>
        </div>
        <div class="step">
          <div class="step-number">02</div>
          <div class="step-content">
            <h3>Coin Purchase</h3>
            <p>Purchase virtual currency package</p>
            <div class="step-notes">
              <span class="note">Select package</span>
              <span class="note">Process payment</span>
            </div>
          </div>
        </div>
        <div class="step">
          <div class="step-number">03</div>
          <div class="step-content">
            <h3>Gameplay</h3>
            <p>Play games and accumulate winnings</p>
            <div class="step-notes">
              <span class="note">Game selection</span>
              <span class="note">Strategy use</span>
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
      <p>Maintain proper OPSEC when accessing sweepstakes casinos. Multiple accounts may trigger security measures.</p>
    </div>
    <div class="notice-scanner"></div>
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

.methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.method-card {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 0, 255, 0.2);
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
  color: #ff00ff;
  font-family: monospace;
  font-size: 1.2rem;
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
  border: 1px solid rgba(255, 0, 255, 0.2);
  border-radius: 0.5rem;
}

.step-number {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff00ff;
  font-family: monospace;
}

.step-content h3 {
  margin: 0 0 0.5rem 0;
  color: #ff00ff;
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
  background: rgba(255, 0, 255, 0.1);
  border-radius: 1rem;
  font-size: 0.8rem;
  color: #ff00ff;
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
  margin-top: 2rem;
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

@keyframes scan {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
</style>