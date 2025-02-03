<div class="shop-container">
  <div class="shop-header">
    <div class="app-bar">
      <div class="status-icons">
        <span class="time">9:41</span>
        <div class="icons">
          <span class="signal">📶</span>
          <span class="wifi">📡</span>
          <span class="battery">🔋</span>
        </div>
      </div>
    </div>
    <div class="profile-section">
      <div class="greeting">
        <h1>Good morning</h1>
        <p class="username">John Doe</p>
      </div>
      <div class="profile-icon">👤</div>
    </div>
  </div>

  <div class="balance-card">
    <div class="card-content">
      <div class="balance-header">
        <h2>Shop Pay Balance</h2>
        <span class="shop-icon">💳</span>
      </div>
      <div class="balance-amount">$2,458.65</div>
      <div class="card-actions">
        <button class="action-button">
          <span class="icon">↑</span>
          Send
        </button>
        <button class="action-button">
          <span class="icon">↓</span>
          Receive
        </button>
      </div>
    </div>
  </div>

  <div class="recent-activity">
    <h2>Recent Activity</h2>
    <div class="transactions">
      <div class="transaction-item">
        <div class="merchant-info">
          <div class="merchant-icon">🛍️</div>
          <div class="merchant-details">
            <h3>Nike Store</h3>
            <span class="date">Today, 2:30 PM</span>
          </div>
        </div>
        <div class="amount debit">-$129.99</div>
      </div>
      <div class="transaction-item">
        <div class="merchant-info">
          <div class="merchant-icon">🍔</div>
          <div class="merchant-details">
            <h3>McDonald's</h3>
            <span class="date">Yesterday</span>
          </div>
        </div>
        <div class="amount debit">-$12.49</div>
      </div>
      <div class="transaction-item">
        <div class="merchant-info">
          <div class="merchant-icon">📦</div>
          <div class="merchant-details">
            <h3>Amazon</h3>
            <span class="date">Jan 19</span>
          </div>
        </div>
        <div class="amount debit">-$54.99</div>
      </div>
    </div>
  </div>

  <div class="quick-actions">
    <h2>Quick Actions</h2>
    <div class="actions-grid">
      <button class="quick-action">
        <span class="action-icon">🏪</span>
        <span>Stores</span>
      </button>
      <button class="quick-action">
        <span class="action-icon">📊</span>
        <span>Activity</span>
      </button>
      <button class="quick-action">
        <span class="action-icon">⚙️</span>
        <span>Settings</span>
      </button>
      <button class="quick-action">
        <span class="action-icon">❓</span>
        <span>Help</span>
      </button>
    </div>
  </div>

  <nav class="bottom-nav">
    <button class="nav-item active">
      <span class="nav-icon">🏠</span>
      <span>Home</span>
    </button>
    <button class="nav-item">
      <span class="nav-icon">💳</span>
      <span>Cards</span>
    </button>
    <button class="nav-item">
      <span class="nav-icon">📊</span>
      <span>Activity</span>
    </button>
    <button class="nav-item">
      <span class="nav-icon">👤</span>
      <span>Profile</span>
    </button>
  </nav>
</div>

<style>
.shop-container {
  max-width: 430px;
  margin: 2rem auto;
  background: #f5f5f7;
  border-radius: 2rem;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  padding-bottom: 5rem;
}

.shop-header {
  background: #000;
  color: white;
  padding: 1rem;
}

.app-bar {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  color: white;
}

.status-icons {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.icons {
  display: flex;
  gap: 0.5rem;
}

.profile-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.greeting h1 {
  font-size: 1.5rem;
  margin: 0;
}

.username {
  color: #999;
  margin: 0.25rem 0 0 0;
}

.profile-icon {
  font-size: 2rem;
  background: #333;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.balance-card {
  margin: 1rem;
  background: linear-gradient(135deg, #5851DB, #833AB4);
  border-radius: 1rem;
  color: white;
  padding: 1.5rem;
}

.balance-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.balance-header h2 {
  margin: 0;
  font-size: 1.2rem;
}

.balance-amount {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 1rem 0;
}

.card-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.action-button {
  flex: 1;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  padding: 0.75rem;
  border-radius: 0.75rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.action-button:hover {
  background: rgba(255, 255, 255, 0.3);
}

.recent-activity {
  padding: 1.5rem;
}

.recent-activity h2 {
  font-size: 1.2rem;
  margin: 0 0 1rem 0;
}

.transactions {
  display: grid;
  gap: 1rem;
}

.transaction-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: white;
  border-radius: 1rem;
}

.merchant-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.merchant-icon {
  width: 3rem;
  height: 3rem;
  background: #f0f0f0;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.merchant-details h3 {
  margin: 0;
  font-size: 1rem;
}

.date {
  color: #999;
  font-size: 0.875rem;
}

.amount {
  font-weight: bold;
}

.amount.debit {
  color: #ff3b30;
}

.amount.credit {
  color: #34c759;
}

.quick-actions {
  padding: 1.5rem;
}

.quick-actions h2 {
  font-size: 1.2rem;
  margin: 0 0 1rem 0;
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.quick-action {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background: white;
  border: none;
  padding: 1rem;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.quick-action:hover {
  transform: translateY(-2px);
}

.action-icon {
  font-size: 1.5rem;
}

.bottom-nav {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0.75rem;
  gap: 0.5rem;
  border-top: 1px solid #eee;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 0.75rem;
}

.nav-item.active {
  color: #5851DB;
}

.nav-icon {
  font-size: 1.25rem;
}
</style>
