<div class="admin-container">
  <div class="cyber-grid"></div>
  <div class="admin-header">
    <h1 class="neon-text">CONFIG LIBRARY</h1>
    <div class="cyber-line"></div>
  </div>

  <div class="configs-grid">
    <!-- OpenBullet Configs -->
    <AccordionItem type="cyber" title="OpenBullet Configs" icon="🎯" status="312 CONFIGS">
      <div class="config-list">
        <div class="config-card">
          <div class="config-header">
            <span class="config-icon">🛍️</span>
            <h3>Shopping</h3>
            <span class="config-count">124</span>
          </div>
          <ul>
            <li>Amazon</li>
            <li>Walmart</li>
            <li>Target</li>
            <li>More...</li>
          </ul>
        </div>
        <div class="config-card">
          <div class="config-header">
            <span class="config-icon">🎮</span>
            <h3>Gaming</h3>
            <span class="config-count">86</span>
          </div>
          <ul>
            <li>Steam</li>
            <li>Epic Games</li>
            <li>Origin</li>
            <li>More...</li>
          </ul>
        </div>
        <div class="config-card">
          <div class="config-header">
            <span class="config-icon">📺</span>
            <h3>Streaming</h3>
            <span class="config-count">102</span>
          </div>
          <ul>
            <li>Netflix</li>
            <li>Disney+</li>
            <li>Hulu</li>
            <li>More...</li>
          </ul>
        </div>
      </div>
    </AccordionItem>
    <!-- SilverBullet Configs -->
    <AccordionItem type="neon" title="SilverBullet Configs" icon="⚡" status="156 CONFIGS">
      <div class="config-list">
        <div class="config-card">
          <div class="config-header">
            <span class="config-icon">🏦</span>
            <h3>Banking</h3>
            <span class="config-count">58</span>
          </div>
          <ul>
            <li>Chase</li>
            <li>Wells Fargo</li>
            <li>Bank of America</li>
            <li>More...</li>
          </ul>
        </div>
        <div class="config-card">
          <div class="config-header">
            <span class="config-icon">💳</span>
            <h3>Payment</h3>
            <span class="config-count">98</span>
          </div>
          <ul>
            <li>PayPal</li>
            <li>Stripe</li>
            <li>Square</li>
            <li>More...</li>
          </ul>
        </div>
      </div>
    </AccordionItem>
    <!-- BAS Configs -->
    <AccordionItem type="hologram" title="BAS Configs" icon="🌐" status="213 CONFIGS">
      <div class="config-list">
        <div class="config-card">
          <div class="config-header">
            <span class="config-icon">🔑</span>
            <h3>Authentication</h3>
            <span class="config-count">89</span>
          </div>
          <ul>
            <li>OAuth</li>
            <li>JWT</li>
            <li>Session</li>
            <li>More...</li>
          </ul>
        </div>
        <div class="config-card">
          <div class="config-header">
            <span class="config-icon">🤖</span>
            <h3>Automation</h3>
            <span class="config-count">124</span>
          </div>
          <ul>
            <li>Form Fill</li>
            <li>Data Scraping</li>
            <li>API Testing</li>
            <li>More...</li>
          </ul>
        </div>
      </div>
    </AccordionItem>
  </div>
</div>

<style>
.admin-container {
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

.admin-header {
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

.cyber-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ff00, transparent);
  margin: 2rem auto;
  width: 200px;
}

.configs-grid {
  display: grid;
  gap: 2rem;
  position: relative;
  z-index: 1;
}

.config-list {
  display: grid;
  gap: 1.5rem;
}

.config-card {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #00ff00;
  border-radius: 0.5rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.config-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
}

.config-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.config-icon {
  font-size: 1.5rem;
}

.config-count {
  margin-left: auto;
  padding: 0.25rem 0.75rem;
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid rgba(0, 255, 0, 0.2);
  border-radius: 1rem;
  font-size: 0.8rem;
  color: #00ff00;
}

.config-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.config-card li {
  padding: 0.5rem 0;
  color: #a8b2c3;
  border-bottom: 1px solid rgba(0, 255, 0, 0.1);
}

.config-card li:last-child {
  border-bottom: none;
}

@keyframes gridScroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}
</style>