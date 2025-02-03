<div class="guide-container">
  <div class="cyber-grid"></div>
  <div class="guide-header">
    <div class="neon-text">TOKEN EXTRACTION</div>
    <div class="cyber-line"></div>
  </div>

  <AccordionItem type="cyber" title="Webhook Examples" icon="🔗" status="DEMO">
    <div class="webhook-examples">
      <div class="example-card">
        <h3>Discord Webhook</h3>
        <code class="webhook-url">https://discord.com/api/webhooks/...</code>
        <button class="demo-button">Test Discord</button>
      </div>
      <div class="example-card">
        <h3>Telegram Bot</h3>
        <code class="webhook-url">https://api.telegram.org/bot[TOKEN]/sendMessage</code>
        <button class="demo-button">Test Telegram</button>
      </div>
      <div class="example-card">
        <h3>Custom Webhook</h3>
        <code class="webhook-url">https://api.example.com/webhook</code>
        <button class="demo-button">Test Custom</button>
      </div>
    </div>
  </AccordionItem>

  <AccordionItem type="neon" title="Telegram Bot Examples" icon="🤖" status="ACTIVE">
    <div class="code-examples">
      <div class="code-card">
        <h3>Send Message</h3>
        <pre><code class="language-python"></code></pre>
      </div>
      <!-- Other code examples remain the same -->
    </div>
  </AccordionItem>
</div>

<style>
.guide-container {
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

.webhook-examples {
  display: grid;
  gap: 1.5rem;
  margin: 1rem 0;
}

.example-card {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid #00ff00;
  border-radius: 0.5rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.example-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
}

.webhook-url {
  display: block;
  padding: 0.75rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0.25rem;
  color: #00ff00;
  font-family: monospace;
  margin: 1rem 0;
}

.demo-button {
  width: 100%;
  padding: 0.75rem;
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid #00ff00;
  border-radius: 0.5rem;
  color: #00ff00;
  cursor: pointer;
  font-family: monospace;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.demo-button::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(0, 255, 0, 0.1),
    transparent
  );
  transform: rotate(45deg);
  animation: buttonShine 3s infinite;
}

.demo-button:hover {
  background: rgba(0, 255, 0, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 0 15px rgba(0, 255, 0, 0.3);
}

@keyframes buttonShine {
  0% { transform: translateX(-100%) rotate(45deg); }
  100% { transform: translateX(100%) rotate(45deg); }
}

@keyframes gridScroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}
</style>