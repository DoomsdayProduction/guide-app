<div class="affiliate-container">
  <div class="cyber-grid"></div>
  <div class="hero-section">
    <h1 class="neon-text">AFFILIATE PROGRAM</h1>
    <div class="cyber-line"></div>
    <p class="hero-subtitle">Earn up to 35% commission promoting our premium tools</p>
  </div>

  <div class="program-features">
    <AffiliateCard
      title="Premium Partner Program"
      description="Join our elite affiliate network and earn substantial commissions promoting our professional tools and services."
      commission="Up to 35%"
      :benefits="[
        'Instant payouts via crypto',
        'Dedicated affiliate manager',
        'Custom promotional materials',
        'Real-time tracking dashboard',
        'Exclusive promotions and offers'
      ]"
      icon="💎"
    />
  </div>

  <AccordionItem type="cyber" title="Commission Structure" icon="💰" status="ACTIVE">
    <CommissionTiers />
  </AccordionItem>

  <AccordionItem type="neon" title="Performance Dashboard" icon="📊" status="LIVE">
    <AffiliateStats :stats="{
      clicks: 15423,
      conversions: 1842,
      earnings: 52360,
      rate: 11.9
    }" />
  </AccordionItem>

  <div class="requirements">
    <AccordionItem type="hologram" title="Program Requirements" icon="📋" status="INFO">
      <ul class="req-list">
        <li>Active presence in relevant communities</li>
        <li>Professional conduct and reputation</li>
        <li>Regular promotional activity</li>
        <li>Compliance with our terms of service</li>
      </ul>
    </AccordionItem>
  </div>
</div>

<style>
.affiliate-container {
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

.hero-section {
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

.hero-subtitle {
  color: #a8b2c3;
  font-size: 1.2rem;
  margin-top: 1rem;
}

.cyber-line {
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ff00, transparent);
  margin: 2rem auto;
  width: 200px;
}

.program-features {
  margin: 2rem 0;
}

.req-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.req-list li {
  padding: 1rem;
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid rgba(0, 255, 0, 0.2);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  color: #a8b2c3;
}

.req-list li:last-child {
  margin-bottom: 0;
}

@keyframes gridScroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}
</style>
