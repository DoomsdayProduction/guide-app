<div class="retail-container dark">
  <div class="store-header">
    <div class="logo-section">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/512px-Meta_Platforms_Inc._logo.svg.png" alt="Meta" class="store-logo">
    </div>
    <div class="store-info">
      <div class="badges">
        <span class="badge verified">✓ Verified Store</span>
        <span class="badge global">🌍 Global</span>
      </div>
    </div>
  </div>

  <div class="product-categories">
    <AccordionItem type="cyber" title="Available Products" icon="🛍️" status="IN STOCK">
      <div class="categories-grid">
        <div class="category-card">
          <span class="category-icon">👓</span>
          <h3>Meta Quest</h3>
          <p>VR Headsets & Accessories</p>
          <span class="price-range">$299 - $999</span>
        </div>
        <div class="category-card">
          <span class="category-icon">⌚</span>
          <h3>Meta Smart Watch</h3>
          <p>Smart Wearables</p>
          <span class="price-range">$199 - $399</span>
        </div>
        <div class="category-card">
          <span class="category-icon">🎮</span>
          <h3>Gaming</h3>
          <p>VR Games & Content</p>
          <span class="price-range">$29 - $59</span>
        </div>
      </div>
    </AccordionItem>
  </div>

  <div class="payment-section">
    <AccordionItem type="neon" title="Payment Methods" icon="💳" status="SECURE">
      <div class="payment-grid">
        <div class="payment-method">
          <span class="method-icon">💳</span>
          <span class="method-name">Credit Card</span>
          <span class="method-status accepted">Accepted</span>
        </div>
        <div class="payment-method">
          <span class="method-icon">🏦</span>
          <span class="method-name">Bank Transfer</span>
          <span class="method-status accepted">Accepted</span>
        </div>
        <div class="payment-method">
          <span class="method-icon">📱</span>
          <span class="method-name">Digital Wallet</span>
          <span class="method-status accepted">Accepted</span>
        </div>
      </div>
    </AccordionItem>
  </div>

  <div class="shipping-section">
    <AccordionItem type="hologram" title="Shipping Info" icon="🚚" status="AVAILABLE">
      <div class="shipping-options">
        <div class="shipping-option">
          <div class="option-header">
            <span class="option-icon">✈️</span>
            <h3>Express Shipping</h3>
          </div>
          <p>2-3 Business Days</p>
          <span class="shipping-price">$15.99</span>
        </div>
        <div class="shipping-option">
          <div class="option-header">
            <span class="option-icon">🚚</span>
            <h3>Standard Shipping</h3>
          </div>
          <p>5-7 Business Days</p>
          <span class="shipping-price">$9.99</span>
        </div>
        <div class="shipping-option">
          <div class="option-header">
            <span class="option-icon">🏪</span>
            <h3>Store Pickup</h3>
          </div>
          <p>Available at select locations</p>
          <span class="shipping-price">Free</span>
        </div>
      </div>
    </AccordionItem>
  </div>
</div>

<style>
.retail-container.dark {
  background: #1c1c1e;
  color: #ffffff;
}

.store-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: #2c2c2e;
  border-radius: 1rem;
}

.store-logo {
  max-width: 200px;
  height: auto;
  margin-bottom: 1rem;
  background: #fff;
  padding: 1rem;
  border-radius: 1rem;
}

.badge {
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  font-weight: 600;
}

.badge.verified {
  background: rgba(52, 199, 89, 0.2);
  color: #34c759;
  border: 1px solid rgba(52, 199, 89, 0.4);
}

.badge.global {
  background: rgba(0, 122, 255, 0.2);
  color: #0a84ff;
  border: 1px solid rgba(0, 122, 255, 0.4);
}

.category-card {
  background: #2c2c2e;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.category-card p {
  color: rgba(255, 255, 255, 0.7);
}

.price-range {
  color: #0a84ff;
  font-weight: 600;
}

.payment-method {
  background: #2c2c2e;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
}

.method-status.accepted {
  background: rgba(52, 199, 89, 0.2);
  color: #34c759;
  border: 1px solid rgba(52, 199, 89, 0.4);
}

.shipping-option {
  background: #2c2c2e;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
}

.shipping-price {
  color: #0a84ff;
  font-weight: 600;
}

.retail-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.badges {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.category-card {
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.category-card:hover {
  transform: translateY(-5px);
}

.category-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.payment-grid {
  display: grid;
  gap: 1rem;
}

.payment-method {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.75rem;
}

.method-icon {
  font-size: 1.5rem;
}

.method-status {
  margin-left: auto;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
}

.shipping-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.shipping-option {
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
}

.option-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.option-icon {
  font-size: 1.5rem;
}
</style>