<script setup>
import BinVerifier from '../../components/bin/BinVerifier.vue'
</script>

<div class="luxury-container">
  <div class="gold-particles"></div>
  <div class="luxury-header">
    <div class="diamond-text">ELITE<br><br><center>BIN</center><br> VERIFICATION</div>
    <div class="gold-line"></div>
  </div>

  <div class="luxury-content">
    <div class="luxury-section">
      <div class="section-header">
        <span class="section-icon">💎</span>
        <h2>Premium BIN Structure</h2>
      </div>
      <div class="premium-card">
        <div class="card-shine"></div>
        <div class="card-number">
          <span class="bin-segment" title="Bank/Card Issuer">4532</span>
          <span class="bin-segment" title="Card Type">15</span>
          <span class="bin-segment" title="Branch Code">93</span>
          <span class="remaining-digits">XXXXXX</span>
        </div>
        <div class="segment-labels">
          <div class="label">Issuer</div>
          <div class="label">Type</div>
          <div class="label">Branch</div>
          <div class="label">Account</div>
        </div>
      </div>
    </div>
    <div class="luxury-section">
      <div class="section-header">
        <span class="section-icon">👑</span>
        <h2>Elite Verification</h2>
      </div>
      <BinVerifier />
    </div>
  </div>
</div>


<div class="luxury-container">
  <div class="gold-particles"></div>
  <div class="luxury-header">
    <div class="diamond-text">PREMIUM BIN ANALYSIS</div>
    <div class="gold-line"></div>
  </div>

  <div class="luxury-content">
    <div class="luxury-section">
      <div class="section-header">
        <span class="section-icon">💎</span>
        <h2>Elite BIN Structure</h2>
      </div>
      <div class="premium-card">
        <div class="card-shine"></div>
        <div class="card-number">
          <span class="bin-segment" title="Bank/Card Issuer">4532</span>
          <span class="bin-segment" title="Card Type">15</span>
          <span class="bin-segment" title="Branch Code">93</span>
          <span class="remaining-digits">XXXXXX</span>
        </div>
        <div class="segment-labels">
          <div class="label">Issuer</div>
          <div class="label">Type</div>
          <div class="label">Branch</div>
          <div class="label">Account</div>
        </div>
      </div>
      <div class="info-text">
        <p>A Bank Identification Number (BIN) identifies the following information about a payment card:</p>
        <ul>
          <li>Card issuer: The financial institution that issued the card </li>
          <li>Card type: The type of card, such as Visa or MasterCard </li>
          <li>Card scheme: The card scheme, such as Visa or MasterCard </li>
          <li>Geographic location: The geographic location of the bank that issued the card </li>
        </ul>
      </div>
    </div>
    <div class="luxury-section">
      <div class="section-header">
        <span class="section-icon">👑</span>
        <h2>Premium Applications</h2>
      </div>
      <div class="premium-grid">
        <div class="premium-card">
          <div class="card-shine"></div>
          <h3>🏆 Elite Management</h3>
          <p>Premium transaction validation</p>
        </div>
        <div class="premium-card">
          <div class="card-shine"></div>
          <h3>💫 VIP Processing</h3>
          <p>Priority payment handling</p>
        </div>
        <div class="premium-card">
          <div class="card-shine"></div>
          <h3>📊 Wealth Analytics</h3>
          <p>High-value transaction insights</p>
        </div>
        <div class="premium-card">
          <div class="card-shine"></div>
          <h3>🏛️ Private Banking</h3>
          <p>Exclusive financial operations</p>
        </div>
      </div>
    </div>
    <div class="luxury-section">
      <div class="section-header">
        <span class="section-icon">✨</span>
        <h2>Premium Verification</h2>
      </div>
      <div class="premium-checker">
        <div class="input-group">
          <input 
            type="text" 
            placeholder="Enter Premium BIN"
            maxlength="8"
            class="luxury-input"
          >
          <button class="luxury-button">
            <span class="button-icon">💎</span>
            Verify Elite BIN
          </button>
        </div>
        <div class="results-grid">
          <div class="result-card">
            <div class="card-shine"></div>
            <span class="result-label">Institution</span>
            <span class="result-value">-</span>
          </div>
          <div class="result-card">
            <div class="card-shine"></div>
            <span class="result-label">Classification</span>
            <span class="result-value">-</span>
          </div>
          <div class="result-card">
            <div class="card-shine"></div>
            <span class="result-label">Territory</span>
            <span class="result-value">-</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.luxury-container {
  position: relative;
  padding: 2rem;
  background: linear-gradient(45deg, #1a1a2e, #16213e);
  border-radius: 1rem;
  margin: 2rem 0;
  overflow: hidden;
  border: 2px solid #ffd700;
  box-shadow: 0 0 30px rgba(255, 215, 0, 0.2);
}

.gold-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 10% 10%, rgba(255, 215, 0, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 90% 90%, rgba(255, 215, 0, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: sparkle 10s linear infinite;
}

.luxury-header {
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.diamond-text {
  font-size: 3rem;
  background: linear-gradient(45deg, #ffd700, #ffffff, #ffd700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
  margin: 0;
  font-weight: bold;
}

.gold-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, #ffd700, transparent);
  margin: 2rem auto;
  width: 200px;
  position: relative;
}

.gold-line::after {
  content: '💎';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
}

.luxury-section {
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid #ffd700;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
}

.section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.section-header h2 {
  margin: 0;
  background: linear-gradient(45deg, #ffd700, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.premium-card {
  position: relative;
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  border: 1px solid #ffd700;
  border-radius: 0.5rem;
  padding: 1.5rem;
  overflow: hidden;
}

.card-shine {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 215, 0, 0.2),
    transparent
  );
  transform: rotate(45deg);
  animation: shine 3s infinite;
}

.premium-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.luxury-input {
  flex: 1;
  padding: 0.75rem;
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid #ffd700;
  border-radius: 0.5rem;
  color: #ffd700;
  font-family: monospace;
  font-size: 1.2rem;
}

.luxury-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(45deg, #ffd700, #ffed4a);
  border: none;
  border-radius: 0.5rem;
  color: #1a1a2e;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

.luxury-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.result-card {
  position: relative;
  padding: 1rem;
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid #ffd700;
  border-radius: 0.5rem;
  overflow: hidden;
}

.result-label {
  color: rgba(255, 215, 0, 0.7);
  font-size: 0.9rem;
  display: block;
  margin-bottom: 0.5rem;
}

.result-value {
  color: #ffd700;
  font-family: monospace;
  font-weight: bold;
}

@keyframes sparkle {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50px); }
}

@keyframes shine {
  0% { transform: translateX(-100%) rotate(45deg); }
  100% { transform: translateX(100%) rotate(45deg); }
}
</style>