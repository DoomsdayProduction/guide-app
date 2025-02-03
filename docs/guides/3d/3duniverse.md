<div class="printer-container">
  <div class="grid-overlay"></div>
  <div class="header">
    <div class="tech-text">3D UNIVERSE</div>
    <div class="tech-line"></div>
  </div>

  <AccordionItem type="cyber" title="Target Information" icon="🎯" status="ACTIVE">
    <div class="info-grid">
      <div class="info-item">
        <span class="label">Website</span>
        <WebsiteMetadata url="https://3duniverse.org" />
      </div>
      <div class="info-item">
        <span class="label">Categories</span>
        <div class="tags">
          <span class="tag">3D Printing</span>
          <span class="tag">Filaments</span>
          <span class="tag">Accessories</span>
        </div>
      </div>
      <div class="info-item">
        <span class="label">Payment Methods</span>
        <div class="payment-methods">
          <span class="payment-chip" title="Credit Card">
            <span class="chip-icon">💳</span>
            <span class="chip-text">CC</span>
          </span>
          <span class="payment-chip" title="PayPal">
            <span class="chip-icon">💰</span>
            <span class="chip-text">PP</span>
          </span>
        </div>
      </div>
    </div>
  </AccordionItem>

  <div class="printer-animation">
    <div class="printer-head"></div>
    <div class="print-bed">
      <div class="model"></div>
    </div>
  </div>

  <div class="steps-container">
    <div class="step">
      <div class="step-number">01</div>
      <div class="step-content">
        <h3>Account Creation</h3>
        <p>Create new account with clean profile</p>
        <div class="step-notes">
          <span class="note">Use fresh email</span>
          <span class="note">Valid info</span>
        </div>
      </div>
    </div>
    <div class="step">
      <div class="step-number">02</div>
      <div class="step-content">
        <h3>Payment Setup</h3>
        <p>Add payment method with matching info</p>
        <div class="step-notes">
          <span class="note">Match billing</span>
          <span class="note">Verify card</span>
        </div>
      </div>
    </div>
    <div class="step">
      <div class="step-number">03</div>
      <div class="step-content">
        <h3>Order Processing</h3>
        <p>Process order with selected items</p>
        <div class="step-notes">
          <span class="note">Check stock</span>
          <span class="note">Review order</span>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.printer-container {
  position: relative;
  padding: 2rem;
  background: linear-gradient(45deg, #000022, #000044);
  border-radius: 1rem;
  margin: 2rem 0;
  overflow: hidden;
}

.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(90deg, rgba(0, 229, 255, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(0, 229, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: gridMove 20s linear infinite;
}

.tech-text {
  font-size: 3rem;
  color: #00e5ff;
  text-shadow: 0 0 10px #00e5ff;
  text-align: center;
  margin: 0;
}

.tech-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, #00e5ff, transparent);
  margin: 2rem auto;
  width: 200px;
}

.printer-animation {
  height: 200px;
  margin: 2rem 0;
  background: rgba(0, 229, 255, 0.1);
  border: 1px solid #00e5ff;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
}

.printer-head {
  width: 20px;
  height: 10px;
  background: #00e5ff;
  position: absolute;
  top: 0;
  left: 0;
  animation: printHead 3s linear infinite;
}

.print-bed {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: rgba(0, 229, 255, 0.3);
}

.model {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  background: #00e5ff;
  animation: printModel 3s linear infinite;
}

.steps-container {
  margin-top: 2rem;
}

.step {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: rgba(0, 229, 255, 0.1);
  border: 1px solid rgba(0, 229, 255, 0.2);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.step-number {
  font-size: 1.5rem;
  color: #00e5ff;
  font-family: monospace;
}

.step-notes {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.note {
  padding: 0.25rem 0.75rem;
  background: rgba(0, 229, 255, 0.1);
  border-radius: 1rem;
  font-size: 0.8rem;
  color: #00e5ff;
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}

@keyframes printHead {
  0% { left: 0; }
  45% { left: calc(100% - 20px); }
  50% { left: calc(100% - 20px); }
  95% { left: 0; }
  100% { left: 0; }
}

@keyframes printModel {
  0% { height: 0; }
  100% { height: 100px; }
}
</style>