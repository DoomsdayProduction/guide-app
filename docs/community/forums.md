<div class="retro-container">
  <div class="scanlines"></div>
  <div class="header">
    <div class="glitch-text" data-text="FORUMS">FORUMS</div>
    <div class="status">SYSTEM ONLINE</div>
  </div>

  <div class="forums-grid">
    <!-- XSS.is -->
    <div class="forum-card cyber">
      <div class="card-glow"></div>
      <div class="card-content">
        <div class="card-header">
          <div class="status-light"></div>
          <h3>XSS.is</h3>
        </div>
        <div class="forum-stats">
          <div class="stat">
            <span class="label">MEMBERS</span>
            <span class="value">180K+</span>
          </div>
          <div class="stat">
            <span class="label">STATUS</span>
            <span class="value">ACTIVE</span>
          </div>
          <div class="stat">
            <span class="label">ACCESS</span>
            <span class="value">INVITE</span>
          </div>
        </div>
        <div class="latest-topics">
          <div class="topic">
            <span class="topic-title">Russian Hacking Forum</span>
            <span class="topic-time">Premium</span>
          </div>
          <div class="topic">
            <span class="topic-title">Advanced Security</span>
            <span class="topic-time">Invite Only</span>
          </div>
        </div>
        <a href="https://xss.is" class="enter-button" target="_blank">
          ENTER FORUM
          <div class="button-glow"></div>
        </a>
      </div>
      <div class="scan-line"></div>
    </div>
    <!-- Exploit.in -->
    <div class="forum-card neon">
      <div class="neon-border"></div>
      <div class="card-content">
        <div class="card-header">
          <div class="status-light"></div>
          <h3>Exploit.in</h3>
        </div>
        <div class="forum-stats">
          <div class="stat">
            <span class="label">MEMBERS</span>
            <span class="value">150K+</span>
          </div>
          <div class="stat">
            <span class="label">STATUS</span>
            <span class="value">ACTIVE</span>
          </div>
          <div class="stat">
            <span class="label">ACCESS</span>
            <span class="value">INVITE</span>
          </div>
        </div>
        <div class="latest-topics">
          <div class="topic">
            <span class="topic-title">Russian Market</span>
            <span class="topic-time">Premium</span>
          </div>
          <div class="topic">
            <span class="topic-title">Elite Access</span>
            <span class="topic-time">Invite Only</span>
          </div>
        </div>
        <a href="https://exploit.in" class="enter-button" target="_blank">
          ENTER FORUM
          <div class="button-glow"></div>
        </a>
      </div>
      <div class="neon-glow"></div>
    </div>
    <!-- Coockie.pro -->
    <div class="forum-card hologram">
      <div class="holo-grid"></div>
      <div class="card-content">
        <div class="card-header">
          <div class="status-light"></div>
          <h3>Coockie.pro</h3>
        </div>
        <div class="forum-stats">
          <div class="stat">
            <span class="label">MEMBERS</span>
            <span class="value">50K+</span>
          </div>
          <div class="stat">
            <span class="label">STATUS</span>
            <span class="value">ACTIVE</span>
          </div>
          <div class="stat">
            <span class="label">ACCESS</span>
            <span class="value">OPEN</span>
          </div>
        </div>
        <div class="latest-topics">
          <div class="topic">
            <span class="topic-title">Cookie Tools</span>
            <span class="topic-time">Public</span>
          </div>
          <div class="topic">
            <span class="topic-title">Tutorials</span>
            <span class="topic-time">Free</span>
          </div>
        </div>
        <a href="https://coockie.pro" class="enter-button" target="_blank">
          ENTER FORUM
          <div class="button-glow"></div>
        </a>
      </div>
      <div class="holo-scan"></div>
    </div>
    <!-- Zelenka.guru -->
    <div class="forum-card glitch">
      <div class="glitch-overlay"></div>
      <div class="card-content">
        <div class="card-header">
          <div class="status-light"></div>
          <h3>Zelenka.guru</h3>
        </div>
        <div class="forum-stats">
          <div class="stat">
            <span class="label">MEMBERS</span>
            <span class="value">200K+</span>
          </div>
          <div class="stat">
            <span class="label">STATUS</span>
            <span class="value">ACTIVE</span>
          </div>
          <div class="stat">
            <span class="label">ACCESS</span>
            <span class="value">OPEN</span>
          </div>
        </div>
        <div class="latest-topics">
          <div class="topic">
            <span class="topic-title">Russian Market</span>
            <span class="topic-time">Premium</span>
          </div>
          <div class="topic">
            <span class="topic-title">Tools & Configs</span>
            <span class="topic-time">VIP</span>
          </div>
        </div>
        <a href="https://zelenka.guru" class="enter-button" target="_blank">
          ENTER FORUM
          <div class="button-glow"></div>
        </a>
      </div>
    </div>
  </div>
</div>

<style>
/* Base Container */
.retro-container {
  padding: 2rem;
  background: linear-gradient(45deg, #000022, #000044);
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
}

/* Header Styles */
.header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

.glitch-text {
  font-size: 3rem;
  color: #00ff00;
  text-shadow: 0 0 10px #00ff00;
  position: relative;
  animation: glitchText 3s infinite;
}

.status {
  color: #00ff00;
  font-family: monospace;
  margin-top: 1rem;
  animation: blink 2s infinite;
}

/* Forums Grid */
.forums-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 1;
}

/* Card Base Styles */
.forum-card {
  background: rgba(0, 0, 0, 0.8);
  border-radius: 1rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.card-content {
  position: relative;
  z-index: 1;
}

/* Card Header */
.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.status-light {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

/* Stats Section */
.forum-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.stat {
  text-align: center;
}

.label {
  display: block;
  color: #666;
  font-size: 0.8rem;
  margin-bottom: 0.25rem;
}

.value {
  color: #00ff00;
  font-family: monospace;
  font-size: 1.1rem;
}

/* Topics Section */
.latest-topics {
  margin-bottom: 1.5rem;
}

.topic {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* Enter Button */
.enter-button {
  display: block;
  width: 100%;
  padding: 0.75rem;
  text-align: center;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.button-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transform: rotate(45deg);
  animation: buttonShine 3s infinite;
}

/* Cyber Style */
.forum-card.cyber {
  border: 1px solid #00ff00;
  animation: cyberPulse 4s infinite;
}

.forum-card.cyber .status-light {
  background: #00ff00;
}

.forum-card.cyber .enter-button {
  background: linear-gradient(45deg, #00ff00, #00cc00);
  color: #000;
}

/* Neon Style */
.forum-card.neon {
  border: 1px solid #ff00ff;
  animation: neonFloat 3s infinite;
}

.forum-card.neon .status-light {
  background: #ff00ff;
}

.forum-card.neon .enter-button {
  background: linear-gradient(45deg, #ff00ff, #cc00cc);
  color: #000;
}

/* Hologram Style */
.forum-card.hologram {
  border: 1px solid #00e5ff;
  transform: perspective(1000px) rotateX(5deg);
}

.forum-card.hologram .status-light {
  background: #00e5ff;
}

.forum-card.hologram .enter-button {
  background: linear-gradient(45deg, #00e5ff, #00b8d4);
  color: #000;
}

/* Glitch Style */
.forum-card.glitch {
  border: 1px solid #ff0000;
  animation: glitchShake 0.5s infinite;
}

.forum-card.glitch .status-light {
  background: #ff0000;
}

.forum-card.glitch .enter-button {
  background: linear-gradient(45deg, #ff0000, #cc0000);
  color: #000;
}

/* Animations */
@keyframes glitchText {
  0% { transform: skew(0deg); }
  20% { transform: skew(-2deg); }
  40% { transform: skew(2deg); }
  60% { transform: skew(-1deg); }
  80% { transform: skew(3deg); }
  100% { transform: skew(0deg); }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes buttonShine {
  0% { transform: translateX(-100%) rotate(45deg); }
  100% { transform: translateX(100%) rotate(45deg); }
}

@keyframes cyberPulse {
  0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 0, 0.2); }
  50% { box-shadow: 0 0 40px rgba(0, 255, 0, 0.4); }
}

@keyframes neonFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes glitchShake {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
}

/* Hover Effects */
.forum-card:hover {
  transform: translateY(-5px);
}

.forum-card.cyber:hover {
  box-shadow: 0 0 30px rgba(0, 255, 0, 0.3);
}

.forum-card.neon:hover {
  box-shadow: 0 0 30px rgba(255, 0, 255, 0.3);
}

.forum-card.hologram:hover {
  transform: perspective(1000px) rotateX(0deg) translateY(-5px);
  box-shadow: 0 0 30px rgba(0, 229, 255, 0.3);
}

.forum-card.glitch:hover {
  box-shadow: 0 0 30px rgba(255, 0, 0, 0.3);
}

/* Responsive Design */
@media (max-width: 768px) {
  .forums-grid {
    grid-template-columns: 1fr;
  }
  
  .glitch-text {
    font-size: 2rem;
  }
}
</style>
```