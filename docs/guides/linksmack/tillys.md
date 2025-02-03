<div class="retail-container dark">
  <div class="store-header">
    <div class="logo-section">
      <img src="https://logo.clearbit.com/tillys.com" alt="Tillys" class="store-logo">
    </div>
    <div class="store-info">
      <div class="badges">
        <span class="badge trending">🔥 Trending</span>
        <span class="badge sale">🏷️ Sale Active</span>
      </div>
    </div>
  </div>

  <div class="trending-section">
    <AccordionItem type="cyber" title="Trending Now" icon="🔥" status="HOT">
      <div class="trending-grid">
        <div class="trend-card">
          <span class="trend-icon">👕</span>
          <h3>Graphic Tees</h3>
          <p>Latest designs from top brands</p>
          <div class="price-tag">From $19.99</div>
          <div class="trend-badge">Bestseller</div>
        </div>
        <div class="trend-card">
          <span class="trend-icon">👖</span>
          <h3>Denim</h3>
          <p>Premium jeans collection</p>
          <div class="price-tag">From $39.99</div>
          <div class="trend-badge">New Arrivals</div>
        </div>
        <div class="trend-card">
          <span class="trend-icon">👟</span>
          <h3>Footwear</h3>
          <p>Sneakers and shoes</p>
          <div class="price-tag">From $49.99</div>
          <div class="trend-badge">Top Rated</div>
        </div>
      </div>
    </AccordionItem>
  </div>

  <div class="brands-section">
    <AccordionItem type="neon" title="Featured Brands" icon="✨" status="PREMIUM">
      <div class="brands-grid">
        <div class="brand-card">
          <div class="brand-logo">👕</div>
          <h3>Nike</h3>
          <p>Athletic & Lifestyle</p>
          <div class="brand-discount">Up to 40% OFF</div>
        </div>
        <div class="brand-card">
          <div class="brand-logo">🏄</div>
          <h3>Hurley</h3>
          <p>Surf & Skate</p>
          <div class="brand-discount">Up to 50% OFF</div>
        </div>
        <div class="brand-card">
          <div class="brand-logo">🛹</div>
          <h3>Vans</h3>
          <p>Skate & Street</p>
          <div class="brand-discount">Up to 35% OFF</div>
        </div>
      </div>
    </AccordionItem>
  </div>

  <div class="deals-section">
    <AccordionItem type="hologram" title="Current Deals" icon="🏷️" status="ACTIVE">
      <div class="deals-grid">
        <div class="deal-card">
          <div class="deal-header">
            <span class="deal-icon">👕</span>
            <h3>T-Shirt Bundle</h3>
          </div>
          <div class="deal-content">
            <p>Buy 2 Get 1 Free</p>
            <div class="deal-timer">Ends in 24h</div>
          </div>
        </div>
        <div class="deal-card">
          <div class="deal-header">
            <span class="deal-icon">👖</span>
            <h3>Denim Sale</h3>
          </div>
          <div class="deal-content">
            <p>All Jeans $39.99</p>
            <div class="deal-timer">Limited Time</div>
          </div>
        </div>
        <div class="deal-card">
          <div class="deal-header">
            <span class="deal-icon">👟</span>
            <h3>Footwear</h3>
          </div>
          <div class="deal-content">
            <p>20% OFF All Shoes</p>
            <div class="deal-timer">Weekend Only</div>
          </div>
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

.badge.trending {
  background: rgba(255, 59, 48, 0.2);
  color: #ff3b30;
  border: 1px solid rgba(255, 59, 48, 0.4);
}

.badge.sale {
  background: rgba(255, 149, 0, 0.2);
  color: #ff9500;
  border: 1px solid rgba(255, 149, 0, 0.4);
}

.trend-card {
  background: #2c2c2e;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.trend-card p {
  color: rgba(255, 255, 255, 0.7);
}

.price-tag {
  color: #ff3b30;
  font-weight: 600;
}

.trend-badge {
  background: #ff9500;
  color: #fff;
  font-weight: 600;
}

.brand-card {
  background: #2c2c2e;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
}

.brand-card p {
  color: rgba(255, 255, 255, 0.7);
}

.brand-discount {
  color: #34c759;
  font-weight: 600;
}

.deal-card {
  background: #2c2c2e;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
}

.deal-timer {
  color: #ff3b30;
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

.trending-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.trend-card {
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  position: relative;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.trend-card:hover {
  transform: translateY(-5px);
}

.trend-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.trend-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
}

.brands-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.brand-card {
  border-radius: 1rem;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease;
}

.brand-card:hover {
  transform: translateY(-5px);
}

.brand-logo {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.deals-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.deal-card {
  border-radius: 1rem;
  padding: 1.5rem;
}

.deal-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.deal-icon {
  font-size: 2rem;
}
</style>