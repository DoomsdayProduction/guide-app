<div class="admin-container">
  <div class="cyber-grid"></div>
  <div class="admin-header">
    <h1 class="neon-text">INBOX MESSAGES</h1>
    <div class="cyber-line"></div>
  </div>

  <div class="inbox-container">
    <!-- Message Categories -->
    <div class="message-categories">
      <button class="category active">All Messages</button>
      <button class="category">Updates</button>
      <button class="category">Alerts</button>
      <button class="category">Requests</button>
    </div>
    <!-- Message List -->
    <div class="message-list">
      <div class="message-card">
        <div class="message-header">
          <span class="message-type update">UPDATE</span>
          <span class="message-date">2024-01-20</span>
        </div>
        <h3>New Config Release</h3>
        <p>Added 25 new OpenBullet configs for popular services.</p>
      </div>
      <div class="message-card">
        <div class="message-header">
          <span class="message-type alert">ALERT</span>
          <span class="message-date">2024-01-19</span>
        </div>
        <h3>Security Notice</h3>
        <p>Important security update for all members. Please review.</p>
      </div>
      <div class="message-card">
        <div class="message-header">
          <span class="message-type request">REQUEST</span>
          <span class="message-date">2024-01-18</span>
        </div>
        <h3>Config Request</h3>
        <p>New config request for Amazon gift cards processing.</p>
      </div>
    </div>
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

.message-categories {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.category {
  padding: 0.5rem 1rem;
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid rgba(0, 255, 0, 0.2);
  border-radius: 0.5rem;
  color: #00ff00;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category:hover,
.category.active {
  background: rgba(0, 255, 0, 0.2);
  transform: translateY(-2px);
}

.message-list {
  display: grid;
  gap: 1.5rem;
}

.message-card {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #00ff00;
  border-radius: 0.5rem;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.message-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
}

.message-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.message-type {
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
}

.message-type.update {
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid rgba(0, 255, 0, 0.2);
  color: #00ff00;
}

.message-type.alert {
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.2);
  color: #ff0000;
}

.message-type.request {
  background: rgba(0, 229, 255, 0.1);
  border: 1px solid rgba(0, 229, 255, 0.2);
  color: #00e5ff;
}

.message-date {
  color: #666;
  font-size: 0.9rem;
}

.message-card h3 {
  margin: 0 0 0.5rem 0;
  color: #00ff00;
}

.message-card p {
  margin: 0;
  color: #a8b2c3;
}

@keyframes gridScroll {
  0% { transform: translate(0, 0); }
  100% { transform: translate(20px, 20px); }
}
</style>