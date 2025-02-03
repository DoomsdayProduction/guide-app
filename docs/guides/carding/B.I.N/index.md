<script setup>
import { BinDiagram, BinInfo, BinChecker } from '../../../components/bin'
</script>

<div class="luxury-container">
  <div class="gold-particles"></div>
  <div class="luxury-header">
    <div class="diamond-text">ELITE<br><br><center>BIN</center><br>VERIFICATION</div>
    <div class="gold-line"></div>
  </div>

  <div class="luxury-content">
    <div class="luxury-section">
      <div class="section-header">
        <span class="section-icon">💎</span>
        <h2>Premium BIN Structure</h2>
      </div>
      <BinDiagram />
    </div>
    <div class="luxury-section">
      <div class="section-header">
        <span class="section-icon">👑</span>
        <h2>Elite Card Information</h2>
      </div>
      <BinInfo />
    </div>
    <div class="luxury-section">
      <div class="section-header">
        <span class="section-icon">✨</span>
        <h2>Premium Verification</h2>
      </div>
      <BinChecker />
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

@keyframes sparkle {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50px); }
}
</style>