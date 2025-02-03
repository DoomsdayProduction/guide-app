<div class="retail-container dark">
  <div class="store-header">
    <div class="logo-section">
      <img src="https://logo.clearbit.com/lightinthebox.com" alt="Light in the Box" class="store-logo">
    </div>
    <div class="store-info">
      <div class="badges">
        <span class="badge global">🌍 International Store</span>
        <span class="badge shipping">🚚 Free Shipping</span>
      </div>
    </div>
  </div>

  <div class="product-categories">
    <AccordionItem type="cyber" title="Popular Categories" icon="🛍️" status="IN STOCK">
      <div class="categories-grid">
        <div class="category-card">
          <span class="category-icon">👗</span>
          <h3>Fashion</h3>
          <p>Clothing & Accessories</p>
          <div class="discount-badge">Up to 70% OFF</div>
        </div>
        <div class="category-card">
          <span class="category-icon">💡</span>
          <h3>Home & Garden</h3>
          <p>Decor & Lighting</p>
          <div class="discount-badge">Up to 60% OFF</div>
        </div>
        <div class="category-card">
          <span class="category-icon">📱</span>
          <h3>Electronics</h3>
          <p>Gadgets & Accessories</p>
          <div class="discount-badge">Up to 50% OFF</div>
        </div>
      </div>
    </AccordionItem>
  </div>

  <div class="deals-section">
    <AccordionItem type="neon" title="Special Offers" icon="🏷️" status="LIMITED TIME">
      <div class="deals-grid">
        <div class="deal-card">
          <div class="deal-tag">FLASH SALE</div>
          <h3>Wedding Dresses</h3>
          <p>Custom-made wedding gowns</p>
          <div class="price-comparison">
            <span class="original-price">$999</span>
            <span class="sale-price">$299</span>
          </div>
          <span class="savings">Save 70%</span>
        </div>
        <div class="deal-card">
          <div class="deal-tag">TODAY ONLY</div>
          <h3>LED Lighting</h3>
          <p>Smart home lighting solutions</p>
          <div class="price-comparison">
            <span class="original-price">$129</span>
            <span class="sale-price">$49</span>
          </div>
          <span class="savings">Save 62%</span>
        </div>
        <div class="deal-card">
          <div class="deal-tag">CLEARANCE</div>
          <h3>Phone Cases</h3>
          <p>Premium protective cases</p>
          <div class="price-comparison">
            <span class="original-price">$39</span>
            <span class="sale-price">$9.99</span>
          </div>
          <span class="savings">Save 74%</span>
        </div>
      </div>
    </AccordionItem>
  </div>

  <div class="shipping-section">
    <AccordionItem type="hologram" title="Global Shipping" icon="🌍" status="WORLDWIDE">
      <div class="shipping-info">
        <div class="shipping-option">
          <div class="option-header">
            <span class="option-icon">✈️</span>
            <h3>Express Shipping</h3>
          </div>
          <ul class="shipping-details">
            <li>3-7 business days</li>
            <li>Door-to-door tracking</li>
            <li>Insurance included</li>
          </ul>
        </div>
        <div class="shipping-option">
          <div class="option-header">
            <span class="option-icon">🚢</span>
            <h3>Standard Shipping</h3>
          </div>
          <ul class="shipping-details">
            <li>10-20 business days</li>
            <li>Free on orders over $50</li>
            <li>Basic tracking</li>
          </ul>
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

.badge.global {
  background: rgba(0, 122, 255, 0.2);
  color: #0a84ff;
  border: 1px solid rgba(0, 122, 255, 0.4);
}

.badge.shipping {
  background: rgba(52, 199, 89, 0.2);
  color: #34c759;
  border: 1px solid rgba(52, 199, 89, 0.4);
}

.category-card {
  background: #2c2c2e;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.category-card p {
  color: rgba(255, 255, 255, 0.7);
}

.discount-badge {
  background: #ff3b30;
  color: #fff;
  font-weight: 600;
}

.deal-card {
  background: #2c2c2e;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
}

.deal-tag {
  background: #ff9500;
  color: #fff;
  font-weight: 600;
}

.original-price {
  color: rgba(255, 255, 255, 0.5);
}

.sale-price {
  color: #ff3b30;
  font-weight: 600;
}

.savings {
  color: #34c759;
  font-weight: 600;
}

.shipping-option {
  background: #2c2c2e;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
}

.shipping-details li {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
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
  position: relative;
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

.discount-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
}

.deals-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.deal-card {
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  position: relative;
}

.deal-tag {
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
}

.price-comparison {
  margin: 1rem 0;
}

.original-price {
  text-decoration: line-through;
  margin-right: 1rem;
}

.sale-price {
  font-size: 1.2rem;
}

.savings {
  display: block;
  margin-top: 0.5rem;
}

.shipping-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.shipping-option {
  border-radius: 1rem;
  padding: 1.5rem;
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

.shipping-details {
  list-style: none;
  padding: 0;
  margin: 0;
}

.shipping-details li {
  padding: 0.5rem 0;
}

.shipping-details li:last-child {
  border-bottom: none;
}
</style>