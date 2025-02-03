<div class="cyber-container">
  <div class="matrix-bg"></div>
  <div class="header">
    <center><h1 class="neon-text">TELEGRAM GROUPS</h1></center>
    <div class="cyber-line"></div>
  </div>

  <div class="groups-grid">
    <!-- Main Channel - Cyber Style -->
    <div class="group-card cyber">
      <div class="card-glow"></div>
      <div class="card-content">
        <div class="group-icon">📢</div>
        <h3>Main Channel</h3>
        <p>Official announcements and updates</p>
        <div class="stats">
          <span class="stat">👥 15.2K Members</span>
          <span class="stat">📈 Active</span>
        </div>
        <a href="https://t.me/DoomsdayxProductions" class="join-button" target="_blank">
          Join Channel
          <div class="button-glow"></div>
        </a>
      </div>
      <div class="scan-line"></div>
    </div>
    <!-- Discussion Group - Neon Style -->
    <div class="group-card neon">
      <div class="neon-border"></div>
      <div class="card-content">
        <div class="group-icon">💬</div>
        <h3>Discussion Group</h3>
        <p>Community chat and support</p>
        <div class="stats">
          <span class="stat">👥 8.7K Members</span>
          <span class="stat">📈 Active</span>
        </div>
        <a href="https://t.me/DoomsdayxChat" class="join-button" target="_blank">
          Join Group
        </a>
      </div>
      <div class="neon-glow"></div>
    </div>
    <!-- Premium Group - Hologram Style -->
    <div class="group-card hologram">
      <div class="holo-grid"></div>
      <div class="card-content">
        <div class="group-icon">🔥</div>
        <h3>Premium Group</h3>
        <p>Exclusive content and tools</p>
        <div class="stats">
          <span class="stat">👥 3.1K Members</span>
          <span class="stat">💎 VIP</span>
        </div>
        <a href="https://t.me/DoomsdayxVIP" class="join-button" target="_blank">
          Join VIP
        </a>
      </div>
      <div class="holo-scan"></div>
    </div>
    <!-- Tools Support - Glitch Style -->
    <div class="group-card glitch">
      <div class="glitch-overlay"></div>
      <div class="card-content">
        <div class="group-icon">🛠️</div>
        <h3 class="glitch-text" data-text="Tools Support">Tools Support</h3>
        <p>Technical assistance and troubleshooting</p>
        <div class="stats">
          <span class="stat">👥 5.3K Members</span>
          <span class="stat">🔧 Active</span>
        </div>
        <a href="https://t.me/DoomsdayxTools" class="join-button" target="_blank">
          Join Support
        </a>
      </div>
    </div>
    <!-- Tutorials - Matrix Style -->
    <div class="group-card matrix">
      <div class="matrix-overlay"></div>
      <div class="card-content">
        <div class="group-icon">📚</div>
        <h3>Tutorials</h3>
        <p>Step-by-step guides and tutorials</p>
        <div class="stats">
          <span class="stat">👥 4.2K Members</span>
          <span class="stat">📖 Learning</span>
        </div>
        <a href="https://t.me/DoomsdayxTutorials" class="join-button" target="_blank">
          Join Tutorials
        </a>
      </div>
      <div class="matrix-rain"></div>
    </div>
  </div>
</div>

<style>
/* Base Styles */
.cyber-container {
  padding: 2rem;
  background: linear-gradient(45deg, #000022, #000044);
  border-radius: 1rem;
  position: relative;
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
  background-size: 10px 10px;
  animation: matrixScroll 20s linear infinite;
}

.groups-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

/* Cyber Style Card */
.group-card.cyber {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #00ff00;
  animation: borderPulse 2s infinite;
}

.group-card.cyber .scan-line {
  height: 2px;
  background: #00ff00;
  animation: scanLine 2s linear infinite;
}

/* Neon Style Card */
.group-card.neon {
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid #ff00ff;
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.3);
}

.group-card.neon h3 {
  color: #ff00ff;
  text-shadow: 0 0 10px #ff00ff;
}

.group-card.neon .neon-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(255, 0, 255, 0.2), transparent);
  animation: neonPulse 2s infinite;
}

/* Hologram Style Card */
.group-card.hologram {
  background: rgba(0, 229, 255, 0.1);
  border: 1px solid #00e5ff;
  transform: perspective(1000px) rotateX(5deg);
}

.group-card.hologram .holo-grid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(90deg, rgba(0, 229, 255, 0.1) 1px, transparent 1px),
    linear-gradient(rgba(0, 229, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  animation: holoGrid 10s linear infinite;
}

.group-card.hologram .holo-scan {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    transparent,
    rgba(0, 229, 255, 0.2),
    transparent
  );
  animation: holoScan 3s linear infinite;
}

/* Glitch Style Card */
.group-card.glitch {
  background: #1a1a1a;
  border: 2px solid #ff0000;
  position: relative;
}

.group-card.glitch .glitch-text {
  position: relative;
  animation: textGlitch 3s infinite;
}

.group-card.glitch .glitch-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 0, 0, 0.1);
  animation: glitchOverlay 2s infinite;
  pointer-events: none;
}

/* Matrix Style Card */
.group-card.matrix {
  background: #000;
  border: 1px solid #00ff00;
  overflow: hidden;
}

.group-card.matrix .matrix-rain {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(0deg, 
    rgba(0, 255, 0, 0.1) 25%, 
    transparent 25%,
    transparent 50%,
    rgba(0, 255, 0, 0.1) 50%,
    rgba(0, 255, 0, 0.1) 75%,
    transparent 75%
  );
  background-size: 100% 4px;
  animation: matrixRain 1s linear infinite;
}

/* Common Card Styles */
.group-card {
  border-radius: 1rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.card-content {
  position: relative;
  z-index: 1;
}

.group-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

h3 {
  font-size: 1.1rem;
  margin: 0 0 0.5rem 0;
}

p {
  font-size: 0.9rem;
  margin: 0 0 0.75rem 0;
  opacity: 0.8;
}

.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
}

.stat {
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.8rem;
}

.join-button {
  display: inline-block;
  width: 100%;
  padding: 0.75rem;
  text-align: center;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
}

/* Animations */
@keyframes borderPulse {
  0%, 100% { border-color: #00ff00; }
  50% { border-color: #00cc00; }
}

@keyframes scanLine {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(500%); }
}

@keyframes neonPulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.8; }
}

@keyframes holoGrid {
  0% { transform: perspective(1000px) rotateX(0deg); }
  100% { transform: perspective(1000px) rotateX(360deg); }
}

@keyframes holoScan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

@keyframes textGlitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}

@keyframes glitchOverlay {
  0% { opacity: 0; }
  25% { opacity: 0.3; }
  30% { opacity: 0; }
  35% { opacity: 0.3; }
  100% { opacity: 0; }
}

@keyframes matrixRain {
  0% { transform: translateY(0); }
  100% { transform: translateY(4px); }
}

/* Card-specific button styles */
.group-card.cyber .join-button {
  background: #00ff00;
  color: #000;
}

.group-card.neon .join-button {
  background: #ff00ff;
  color: #000;
  box-shadow: 0 0 15px rgba(255, 0, 255, 0.5);
}

.group-card.hologram .join-button {
  background: rgba(0, 229, 255, 0.2);
  color: #00e5ff;
  border: 1px solid #00e5ff;
}

.group-card.glitch .join-button {
  background: #ff0000;
  color: #000;
  animation: buttonGlitch 3s infinite;
}

.group-card.matrix .join-button {
  background: rgba(0, 255, 0, 0.2);
  color: #00ff00;
  border: 1px solid #00ff00;
}

/* Hover effects */
.group-card:hover {
  transform: translateY(-5px);
}

.group-card.cyber:hover {
  box-shadow: 0 0 30px rgba(0, 255, 0, 0.3);
}

.group-card.neon:hover {
  box-shadow: 0 0 40px rgba(255, 0, 255, 0.4);
}

.group-card.hologram:hover {
  transform: perspective(1000px) rotateX(0deg) translateY(-5px);
}

.group-card.glitch:hover {
  box-shadow: 0 0 30px rgba(255, 0, 0, 0.3);
}

.group-card.matrix:hover {
  box-shadow: 0 0 30px rgba(0, 255, 0, 0.3);
}
.group-card.matrix {
  animation: matrixPulse 4s infinite;
}

.group-card.matrix .matrix-rain {
  animation: matrixRain 1s linear infinite, matrixOpacity 4s infinite;
}


/* New Animations */
@keyframes cyberGlow {
  0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 0, 0.2); }
  50% { box-shadow: 0 0 40px rgba(0, 255, 0, 0.4); }
}

@keyframes cyberShine {
  0% { transform: translateX(-100%) rotate(45deg); }
  100% { transform: translateX(100%) rotate(45deg); }
}

@keyframes neonFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes holoFloat {
  0%, 100% { transform: perspective(1000px) rotateX(5deg) translateY(0); }
  50% { transform: perspective(1000px) rotateX(10deg) translateY(-5px); }
}

@keyframes holoRainbow {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

@keyframes glitchShake {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
}

@keyframes glitchLayers {
  0% { clip-path: polygon(0 0, 100% 0, 100% 5%, 0 5%); }
  20% { clip-path: polygon(0 15%, 100% 15%, 100% 20%, 0 20%); }
  40% { clip-path: polygon(0 40%, 100% 40%, 100% 45%, 0 45%); }
  60% { clip-path: polygon(0 60%, 100% 60%, 100% 65%, 0 65%); }
  80% { clip-path: polygon(0 80%, 100% 80%, 100% 85%, 0 85%); }
  100% { clip-path: polygon(0 0, 100% 0, 100% 5%, 0 5%); }
}

@keyframes matrixPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
}

@keyframes matrixRain {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

@keyframes matrixOpacity {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

  
</style>