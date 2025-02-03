<div class="atomic-container">
  <div class="atomic-grid"></div>
  <div class="header">
    <div class="atomic-text">ATOMIC FILAMENT</div>
    <div class="particle-ring"></div>
  </div>

  <AccordionItem type="cyber" title="Target Information" icon="⚛️" status="ACTIVE">
    <div class="info-grid">
      <div class="info-item">
        <span class="label">Website</span>
        <WebsiteMetadata url="https://atomicfilament.com" />
      </div>
      <div class="info-item">
        <span class="label">Products</span>
        <div class="tags">
          <span class="tag">PLA Filament</span>
          <span class="tag">PETG</span>
          <span class="tag">ABS</span>
        </div>
      </div>
      <div class="info-item">
        <span class="label">Payment Methods</span>
        <div class="payment-methods">
          <span class="payment-chip">
            <span class="chip-icon">💳</span>
            <span class="chip-text">CC</span>
          </span>
          <span class="payment-chip">
            <span class="chip-icon">💰</span>
            <span class="chip-text">PP</span>
          </span>
        </div>
      </div>
    </div>
  </AccordionItem>

  <div class="atomic-animation">
    <div class="atom">
      <div class="electron"></div>
      <div class="electron"></div>
      <div class="electron"></div>
    </div>
  </div>

  <div class="steps-container">
    <div class="step">
      <div class="step-number">01</div>
      <div class="step-content">
        <h3>Account Setup</h3>
        <p>Create new account with valid information</p>
        <div class="step-notes">
          <span class="note">Clean profile</span>
          <span class="note">Verify email</span>
        </div>
      </div>
    </div>
    <div class="step">
      <div class="step-number">02</div>
      <div class="step-content">
        <h3>Product Selection</h3>
        <p>Choose filament type and quantity</p>
        <div class="step-notes">
          <span class="note">Check stock</span>
          <span class="note">Review specs</span>
        </div>
      </div>
    </div>
    <div class="step">
      <div class="step-number">03</div>
      <div class="step-content">
        <h3>Order Processing</h3>
        <p>Complete checkout and payment</p>
        <div class="step-notes">
          <span class="note">Verify order</span>
          <span class="note">Track shipping</span>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.atomic-container {
  position: relative;
  padding: 2rem;
  background: linear-gradient(45deg, #000022, #002244);
  border-radius: 1rem;
  margin: 2rem 0;
  overflow: hidden;
}

.atomic-grid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(90deg, rgba(51, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(51, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: gridPulse 4s ease infinite;
}

.atomic-text {
  font-size: 3rem;
  color: #33ffff;
  text-shadow: 0 0 10px #33ffff;
  text-align: center;
  margin: 0;
}

.particle-ring {
  width: 100px;
  height: 100px;
  border: 2px solid #33ffff;
  border-radius: 50%;
  margin: 2rem auto;
  position: relative;
  animation: ringRotate 10s linear infinite;
}

.atomic-animation {
  height: 200px;
  margin: 2rem 0;
  position: relative;
}

.atom {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.electron {
  width: 100%;
  height: 100%;
  position: absolute;
  border: 2px solid #33ffff;
  border-radius: 50%;
  animation: orbit 3s linear infinite;
}

.electron:nth-child(2) {
  animation-delay: -1s;
  transform: rotate(60deg);
}

.electron:nth-child(3) {
  animation-delay: -2s;
  transform: rotate(-60deg);
}

.steps-container {
  margin-top: 2rem;
}

.step {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: rgba(51, 255, 255, 0.1);
  border: 1px solid rgba(51, 255, 255, 0.2);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.step-number {
  font-size: 1.5rem;
  color: #33ffff;
  font-family: monospace;
}

.step-notes {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.note {
  padding: 0.25rem 0.75rem;
  background: rgba(51, 255, 255, 0.1);
  border-radius: 1rem;
  font-size: 0.8rem;
  color: #33ffff;
}

@keyframes gridPulse {
  0% { opacity: 0.3; }
  50% { opacity: 0.7; }
  100% { opacity: 0.3; }
}

@keyframes ringRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes orbit {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>