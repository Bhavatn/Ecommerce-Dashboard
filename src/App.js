import './App.css';
import React, { useState } from 'react';
import products from './Products';

function filterProducts(products, searchTerm, selectedCategory, selectedRating, selectedPrice) {
  return products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesRating = selectedRating ? product.rating === selectedRating : true;
    const matchesPrice = product.cost <= selectedPrice;
    return matchesSearch && matchesCategory && matchesRating && matchesPrice;
  });
}

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedPrice, setSelectedPrice] = useState(5000);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);
  const [checkoutCart, setCheckoutCart] = useState([]);
  const [showCouponPopup, setShowCouponPopup] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState("");

  const categories = [
    "Electronics",
    "Fashion & Apparel",
    "Home & Kitchen",
    "Beauty & Personal Care",
    "Sports & Outdoors",
    "Books & Stationery"
  ];

  const filteredProducts = filterProducts(products, searchTerm, selectedCategory, selectedRating, selectedPrice);

  return (
    <div className="App">
      <div className="dashboard-layout">
        <div className="filter-panel">
          <h2>Filter</h2>
          <div className="filter-section">
            <h3>Category</h3>
            <ul className="category-list">
              {categories.map(cat => (
                <li
                  key={cat}
                  className={cat === selectedCategory ? "selected-category" : ""}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setShowCart(false);
                    setShowWishlist(false);
                  }}
                >
                  {cat}
                </li>
              ))}
              <li
                key="all"
                className={!selectedCategory ? "selected-category" : ""}
                style={{ cursor: "pointer", marginTop: "8px" }}
                onClick={() => setSelectedCategory("")}
              >
                All Categories
              </li>
            </ul>
          </div>
          <div className="filter-section">
            <h3>Price</h3>
            <div className="price-range">
              <input
                type="range"
                min="0"
                max="50000"
                step="100"
                className="price-slider"
                value={selectedPrice}
                onChange={e => setSelectedPrice(Number(e.target.value))}
              />
              <div className="price-labels" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <span>₹0</span>
                <span style={{ fontWeight: 'bold', color: '#1976d2' }}>₹{selectedPrice}</span>
                <span>₹50,000+</span>
              </div>
            </div>
          </div>
          <div className="filter-section">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3 style={{ margin: 0 }}>Ratings</h3>
              <span
                style={{ cursor: 'pointer', marginLeft: '8px' }}
                title="Reset ratings filter"
                onClick={() => setSelectedRating(0)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 4v6h6"/>
                  <path d="M3.51 9a9 9 0 1 1 2.13 9"/>
                </svg>
              </span>
            </div>
            <div className="ratings-filter">
              {[1,2,3,4,5].map(star => (
                <span
                  key={star}
                  className={"filter-star" + (selectedRating === star ? " selected-rating" : "")}
                  style={{ cursor: "pointer", marginRight: "4px" }}
                  onClick={() => setSelectedRating(star)}
                  title={`Show products with ${star} star${star > 1 ? 's' : ''}`}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill={star <= selectedRating ? "#FFD700" : "#ccc"} stroke={star <= selectedRating ? "#FFD700" : "#ccc"} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </span>
              ))}
         
            </div>
          </div>
   
        </div>
        <div className="main-content">
          <div className="top-bar">
            <div className="search-bar-container">
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search"
                  className="search-input"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
                <span className="search-icon">
                  <svg height="20" width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                </span>
              </div>
            </div>
            <div className="icon-group" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              <span className="icon wishlist-icon" title="Wishlist" style={{ cursor: 'pointer', position: 'relative' }} onClick={() => { setShowWishlist(true); setShowCart(false); }}>
                <svg height="24" width="24" viewBox="0 0 24 24" fill="none" stroke="#d32f2f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#d32f2f"/>
                </svg>
                {wishlist.length > 0 && (
                  <span style={{ position: 'absolute', top: '-6px', right: '-6px', background: '#d32f2f', color: '#fff', borderRadius: '50%', padding: '2px 7px', fontSize: '0.8rem' }}>{wishlist.length}</span>
                )}
              </span>
              <span className="icon cart-icon" title="Cart" style={{ cursor: 'pointer', position: 'relative' }} onClick={() => { setShowCart(true); setShowWishlist(false); }}>
                <svg height="24" width="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.38-7.39H6"/></svg>
                {cart.length > 0 && (
                  <span style={{ position: 'absolute', top: '-6px', right: '-6px', background: '#1976d2', color: '#fff', borderRadius: '50%', padding: '2px 7px', fontSize: '0.8rem' }}>{cart.length}</span>
                )}
              </span>
              <span className="icon user-icon" title="User">
                <svg height="24" width="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a6.5 6.5 0 0 1 13 0"/></svg>
              </span>
            </div>
          </div>
          {!showCart && !showWishlist ? (
            <div className="product-list">
              {filteredProducts.map((product, idx) => (
                <div className="product-card" key={product.name} onClick={() => setSelectedProduct(product)} style={{ cursor: 'pointer' }}>
                  <img src={product.img} alt={product.name} className="product-img" />
                  <div className="product-name">{product.name}</div>
                  <div className="product-cost">₹{product.cost}</div>
                  <div className="product-rating">
                    {[1,2,3,4,5].map(i => (
                      <span className={i <= product.rating ? "star filled" : "star"} key={i}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill={i <= product.rating ? "#FFD700" : "#ccc"} stroke={i <= product.rating ? "#FFD700" : "#ccc"} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      </span>
                    ))}
                  </div>
                  <button className="add-to-cart-btn" onClick={e => {e.stopPropagation(); setCart([...cart, product]);}}>Add to Cart</button>
                </div>
              ))}
            </div>
          ) : showWishlist ? (
            <div className="cart-page" style={{ width: '100%', maxWidth: '900px', margin: '48px auto 0 auto', padding: '0 24px' }}>
              <h2 style={{ textAlign: 'left', marginBottom: '24px', color: '#d32f2f', fontWeight: '700', fontSize: '2.2rem' }}>Wishlist</h2>
              {wishlist.length === 0 ? (
                <div style={{ textAlign: 'left', color: '#888', fontSize: '1.1rem' }}>Your wishlist is empty.</div>
              ) : (
                <div className="cart-list">
                  {wishlist.map((item, idx) => (
                    <div className="cart-item" key={item.name + idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '28px', background: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(211,47,47,0.07)', border: '1px solid #f3f3f3', padding: '18px 32px', width: '100%', minWidth: '280px', maxWidth: '100%', position: 'relative' }}>
                      <img src={item.img} alt={item.name} style={{ width: '90px', height: '72px', objectFit: 'cover', borderRadius: '10px', marginRight: '32px', boxShadow: '0 1px 4px rgba(211,47,47,0.10)' }} />
                      <div style={{ flex: 1, textAlign: 'left', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                          <div style={{ fontWeight: '700', fontSize: '1.25rem', marginBottom: '6px', color: '#222', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</div>
                          <div style={{ color: '#d32f2f', fontWeight: '600', fontSize: '1.08rem' }}>₹{item.cost}</div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '100%', gap: '24px' }}>
                          <button className="add-to-cart-btn" style={{ background: '#1976d2', color: '#fff', border: '2px solid #1976d2', borderRadius: '18px', padding: '7px 32px', fontSize: '1.08rem', fontWeight: '500', cursor: 'pointer', transition: 'background 0.2s, color 0.2s', marginRight: '24px', minWidth: '140px' }} onMouseOver={e => {e.target.style.background='#fff';e.target.style.color='#1976d2';}} onMouseOut={e => {e.target.style.background='#1976d2';e.target.style.color='#fff';}} onClick={() => setCart([...cart, item])}>Add to Cart</button>
                          <button className="remove-btn" style={{ background: '#fff', color: '#d32f2f', border: '2px solid #d32f2f', borderRadius: '18px', padding: '7px 32px', fontSize: '1.08rem', fontWeight: '500', cursor: 'pointer', transition: 'background 0.2s, color 0.2s', minWidth: '140px' }} onMouseOver={e => {e.target.style.background='#d32f2f';e.target.style.color='#fff';}} onMouseOut={e => {e.target.style.background='#fff';e.target.style.color='#d32f2f';}} onClick={() => setWishlist(wishlist.filter((_, i) => i !== idx))}>Remove</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div style={{ textAlign: 'left', marginTop: '24px' }}>
                <button className="add-to-cart-btn" style={{ background: '#d32f2f', color: '#fff', fontSize: '1.08rem', padding: '8px 24px', borderRadius: '18px' }} onClick={() => setShowWishlist(false)}>Back to Products</button>
              </div>
            </div>
          ) : (
            <div className="cart-page" style={{ width: '100%', maxWidth: '900px', margin: '48px auto 0 auto', padding: '0 24px' }}>
              <h2 style={{ textAlign: 'left', marginBottom: '24px', color: '#1976d2', fontWeight: '700', fontSize: '2.2rem' }}>Cart</h2>
              {cart.length === 0 ? (
                <div style={{ textAlign: 'left', color: '#888', fontSize: '1.1rem' }}>Your cart is empty.</div>
              ) : (
                <>
                  <div className="cart-list">
                    {cart.map((item, idx) => (
                      <div className="cart-item" key={item.name + idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '28px', background: '#fff', borderRadius: '12px', boxShadow: '0 2px 12px rgba(25,118,210,0.07)', border: '1px solid #f3f3f3', padding: '18px 32px', width: '100%', minWidth: '280px', maxWidth: '100%', position: 'relative' }}>
                        <img src={item.img} alt={item.name} style={{ width: '90px', height: '72px', objectFit: 'cover', borderRadius: '10px', marginRight: '32px', boxShadow: '0 1px 4px rgba(25,118,210,0.10)' }} />
                        <div style={{ flex: 1, textAlign: 'left', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                          <div>
                            <div style={{ fontWeight: '700', fontSize: '1.25rem', marginBottom: '6px', color: '#222' }}>{item.name}</div>
                            <div style={{ color: '#1976d2', fontWeight: '600', fontSize: '1.08rem' }}>₹{item.cost}</div>
                          </div>
                          <button className="remove-btn" style={{ background: '#fff', color: '#1976d2', border: '2px solid #1976d2', borderRadius: '18px', padding: '7px 22px', fontSize: '1.05rem', fontWeight: '500', cursor: 'pointer', transition: 'background 0.2s, color 0.2s', marginLeft: '32px' }} onMouseOver={e => {e.target.style.background='#1976d2';e.target.style.color='#fff';}} onMouseOut={e => {e.target.style.background='#fff';e.target.style.color='#1976d2';}} onClick={() => setCart(cart.filter((_, i) => i !== idx))}>Remove</button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ textAlign: 'right', marginTop: '32px', fontWeight: '700', fontSize: '1.3rem', color: '#1976d2' }}>
                    Total: ₹{cart.reduce((sum, item) => sum + item.cost, 0)}
                  </div>
                </>
              )}
              <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '18px', marginTop: '24px' }}>
                <button className="add-to-cart-btn" style={{ background: '#1976d2', color: '#fff', fontSize: '1.08rem', padding: '8px 24px', borderRadius: '18px' }} onClick={() => setShowCart(false)}>Back to Products</button>
                <button className="add-to-cart-btn" style={{ background: '#43a047', color: '#fff', fontSize: '1.08rem', padding: '8px 32px', borderRadius: '18px', fontWeight: '600', boxShadow: '0 2px 8px rgba(67,160,71,0.10)' }} onClick={() => {
                  if (cart.length === 0) {
                    setCheckoutCart([]);
                    setShowThankYouPopup(true);
                  } else {
                    setCheckoutCart(cart);
                    setShowCouponPopup(true);
                  }
                }}>Checkout</button>
              </div>
            </div>
          )}
        </div>
        {/* Product Detail Page for any product */}
        {selectedProduct && (
          <div className="product-detail-page" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(247,249,252,0.98)', zIndex: 99, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ background: '#fff', borderRadius: '18px', boxShadow: '0 2px 16px rgba(0,0,0,0.12)', padding: '32px 28px', maxWidth: '480px', width: '100%', position: 'relative' }}>
              <button style={{ position: 'absolute', top: 18, right: 18, background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }} onClick={() => setSelectedProduct(null)}>&times;</button>
              {/* Main Image only */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '24px' }}>
                <img src={selectedProduct.img} alt={selectedProduct.name} style={{ width: '180px', height: '140px', objectFit: 'cover', borderRadius: '12px', border: '2px solid #1976d2' }} />
              </div>
              <div style={{ textAlign: 'center', marginBottom: '18px' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '8px' }}>{selectedProduct.name}</div>
                <div style={{ fontSize: '1.2rem', color: '#1976d2', fontWeight: '600', marginBottom: '8px' }}>₹{selectedProduct.cost}</div>
                <div style={{ background: '#e3f2fd', borderRadius: '8px', padding: '12px', color: '#444', fontSize: '1rem', marginBottom: '16px', borderLeft: '4px solid #1976d2' }}>
                  {selectedProduct.description || 'No description available.'}
                </div>
                {/* Customer Review for Blender and Electronics */}
                {selectedProduct.name === 'Blender' && (
                  <div style={{ background: '#fffde7', borderRadius: '10px', padding: '16px', marginBottom: '16px', boxShadow: '0 1px 6px rgba(25,118,210,0.07)', borderLeft: '4px solid #ffd600' }}>
                    <div style={{ fontWeight: '600', fontSize: '1.08rem', color: '#ffb300', marginBottom: '8px' }}>Customer Review</div>
                    <div style={{ color: '#333', fontSize: '1rem', marginBottom: '6px', fontStyle: 'italic' }}>
                      "This blender is amazing! It crushes ice and blends smoothies perfectly. Easy to clean and looks great on my kitchen counter. Highly recommended!"
                    </div>
                    <div style={{ color: '#888', fontSize: '0.95rem' }}>- Priya S.</div>
                  </div>
                )}
                {/* Electronics reviews */}
                {selectedProduct.category === 'Electronics' && (
                  <div style={{ background: '#fffde7', borderRadius: '10px', padding: '16px', marginBottom: '16px', boxShadow: '0 1px 6px rgba(25,118,210,0.07)', borderLeft: '4px solid #ffd600' }}>
                    <div style={{ fontWeight: '600', fontSize: '1.08rem', color: '#ffb300', marginBottom: '8px' }}>Customer Review</div>
                    <div style={{ color: '#333', fontSize: '1rem', marginBottom: '6px', fontStyle: 'italic' }}>
                      {selectedProduct.name === 'Smartphone' && '"Fantastic smartphone! The display is sharp and battery lasts all day. Great value for money."'}
                      {selectedProduct.name === 'Laptop' && '"Super fast laptop, perfect for work and gaming. Sleek design and lightweight."'}
                      {selectedProduct.name === 'Bluetooth Speaker' && '"Impressive sound quality and bass. Easy to connect and portable for travel."'}
                      {selectedProduct.name === 'Smartwatch' && '"Love the fitness tracking features. Notifications are handy and battery life is good."'}
                      {selectedProduct.name === 'Wireless Earbuds' && '"Crystal clear sound and comfortable fit. Noise cancellation works well."'}
                      {selectedProduct.name === 'Tablet' && '"Lightweight and fast. Great for reading, streaming, and productivity on the go."'}
                      {selectedProduct.name === 'Gaming Console' && '"Amazing graphics and smooth gameplay. Loads of fun for the whole family!"'}
                      {selectedProduct.name === 'DSLR Camera' && '"Photos are crisp and vibrant. Easy to use for both beginners and pros."'}
                      {selectedProduct.name === 'Monitor' && '"Bright display and wide viewing angles. Perfect for work and gaming."'}
                      {selectedProduct.name === 'Power Bank' && '"Charges my devices quickly and lasts for multiple cycles. Compact and reliable."'}
                    </div>
                    <div style={{ color: '#888', fontSize: '0.95rem' }}>- Verified Buyer</div>
                  </div>
                )}

                {/* Home & Kitchen reviews */}
                {selectedProduct.category === 'Home & Kitchen' && selectedProduct.name !== 'Blender' && (
                  <div style={{ background: '#fffde7', borderRadius: '10px', padding: '16px', marginBottom: '16px', boxShadow: '0 1px 6px rgba(25,118,210,0.07)', borderLeft: '4px solid #ffd600' }}>
                    <div style={{ fontWeight: '600', fontSize: '1.08rem', color: '#ffb300', marginBottom: '8px' }}>Customer Review</div>
                    <div style={{ color: '#333', fontSize: '1rem', marginBottom: '6px', fontStyle: 'italic' }}>
                      {selectedProduct.name === 'Coffee Maker' && '"Brews coffee quickly and tastes great. Easy to use and clean!"'}
                      {selectedProduct.name === 'Cookware Set' && '"High quality and non-stick. Makes cooking a breeze!"'}
                      {selectedProduct.name === 'Vacuum Cleaner' && '"Powerful suction and lightweight. Cleans carpets and floors perfectly."'}
                      {selectedProduct.name === 'Toaster' && '"Compact and efficient. Toasts bread evenly every time."'}
                      {selectedProduct.name === 'Air Fryer' && '"Healthy cooking made easy. Crispy results with little oil!"'}
                      {selectedProduct.name === 'Water Purifier' && '"Water tastes fresh and clean. Installation was simple."'}
                      {selectedProduct.name === 'Microwave Oven' && '"Heats food quickly and evenly. Multiple modes are very useful."'}
                      {selectedProduct.name === 'Refrigerator' && '"Spacious and keeps food fresh for days. Energy efficient too!"'}
                      {selectedProduct.name === 'Rice Cooker' && '"Perfect rice every time. Very easy to operate and clean."'}
                    </div>
                    <div style={{ color: '#888', fontSize: '0.95rem' }}>- Verified Buyer</div>
                  </div>
                )}

                {/* Fashion & Apparel reviews */}
                {selectedProduct.category === 'Fashion & Apparel' && (
                  <div style={{ background: '#fffde7', borderRadius: '10px', padding: '16px', marginBottom: '16px', boxShadow: '0 1px 6px rgba(211,47,47,0.07)', borderLeft: '4px solid #ffd600' }}>
                    <div style={{ fontWeight: '600', fontSize: '1.08rem', color: '#ffb300', marginBottom: '8px' }}>Customer Review</div>
                    <div style={{ color: '#333', fontSize: '1rem', marginBottom: '6px', fontStyle: 'italic' }}>
                      {selectedProduct.name === 'T-Shirt' && '"Super comfortable and fits perfectly. The fabric is soft and breathable!"'}
                      {selectedProduct.name === 'Jeans' && '"Great quality denim. Stylish and durable, goes well with everything."'}
                      {selectedProduct.name === 'Sneakers' && '"Love these sneakers! Very trendy and comfortable for long walks."'}
                      {selectedProduct.name === 'Sandals' && '"Perfect for summer. Lightweight and easy to wear all day."'}
                      {selectedProduct.name === 'Jacket' && '"Keeps me warm and looks stylish. The material feels premium."'}
                      {selectedProduct.name === 'Handbag' && '"Spacious and elegant. Perfect for work and travel."'}
                      {selectedProduct.name === 'Sunglasses' && '"Very stylish and offers great UV protection. Highly recommended!"'}
                      {selectedProduct.name === 'Watch' && '"Classic design and reliable timekeeping. Goes well with any outfit."'}
                      {selectedProduct.name === 'Hat' && '"Lightweight and comfortable. Great for outdoor activities."'}
                      {selectedProduct.name === 'Scarf' && '"Soft and cozy. Adds a nice touch to my winter outfits."'}
                    </div>
                    <div style={{ color: '#888', fontSize: '0.95rem' }}>- Verified Buyer</div>
                  </div>
                )}

                {/* Beauty & Personal Care reviews */}
                {selectedProduct.category === 'Beauty & Personal Care' && (
                  <div style={{ background: '#fffde7', borderRadius: '10px', padding: '16px', marginBottom: '16px', boxShadow: '0 1px 6px rgba(211,47,47,0.07)', borderLeft: '4px solid #ffd600' }}>
                    <div style={{ fontWeight: '600', fontSize: '1.08rem', color: '#ffb300', marginBottom: '8px' }}>Customer Review</div>
                    <div style={{ color: '#333', fontSize: '1rem', marginBottom: '6px', fontStyle: 'italic' }}>
                      {selectedProduct.name === 'Face Wash' && '"Leaves my skin feeling fresh and clean. Gentle and effective!"'}
                      {selectedProduct.name === 'Shampoo' && '"Hair feels soft and looks shiny. Smells great too!"'}
                      {selectedProduct.name === 'Conditioner' && '"Makes my hair smooth and manageable. No more frizz!"'}
                      {selectedProduct.name === 'Body Lotion' && '"Hydrates my skin all day. Absorbs quickly and smells nice."'}
                      {selectedProduct.name === 'Sunscreen' && '"Lightweight and non-greasy. Provides great sun protection!"'}
                      {selectedProduct.name === 'Lip Balm' && '"Keeps my lips soft and healthy. Works wonders in winter."'}
                      {selectedProduct.name === 'Face Cream' && '"Deeply hydrates and improves skin texture. Love the glow!"'}
                      {selectedProduct.name === 'Hand Sanitizer' && '"Convenient and effective. Perfect for on-the-go use."'}
                      {selectedProduct.name === 'Perfume' && '"Long-lasting fragrance. Refreshing and perfect for daily wear."'}
                      {selectedProduct.name === 'Hair Oil' && '"Reduces hair fall and makes my hair shiny. Very nourishing!"'}
                    </div>
                    <div style={{ color: '#888', fontSize: '0.95rem' }}>- Verified Buyer</div>
                  </div>
                )}

                {/* Sports & Outdoors reviews */}
                {selectedProduct.category === 'Sports & Outdoors' && (
                  <div style={{ background: '#fffde7', borderRadius: '10px', padding: '16px', marginBottom: '16px', boxShadow: '0 1px 6px rgba(25,118,210,0.07)', borderLeft: '4px solid #ffd600' }}>
                    <div style={{ fontWeight: '600', fontSize: '1.08rem', color: '#ffb300', marginBottom: '8px' }}>Customer Review</div>
                    <div style={{ color: '#333', fontSize: '1rem', marginBottom: '6px', fontStyle: 'italic' }}>
                      {selectedProduct.name === 'Football' && '"Great grip and durable. Perfect for weekend matches!"'}
                      {selectedProduct.name === 'Yoga Mat' && '"Comfortable and non-slip. Makes my yoga sessions better."'}
                      {selectedProduct.name === 'Water Bottle' && '"Keeps water cold for hours. Easy to carry and clean."'}
                      {selectedProduct.name === 'Dumbbells' && '"Good quality and easy to hold. Great for home workouts."'}
                      {selectedProduct.name === 'Tennis Racket' && '"Lightweight and powerful. Improved my game!"'}
                      {selectedProduct.name === 'Skipping Rope' && '"Strong and tangle-free. Perfect for cardio routines."'}
                      {selectedProduct.name === 'Sports Shoes' && '"Very comfortable and stylish. Good for running and gym."'}
                      {selectedProduct.name === 'Helmet' && '"Sturdy and fits well. Provides great protection."'}
                      {selectedProduct.name === 'Swim Goggles' && '"Clear vision and comfortable fit. No leaks!"'}
                      {selectedProduct.name === 'Cricket Bat' && '"Well balanced and durable. Great for practice and matches."'}
                    </div>
                    <div style={{ color: '#888', fontSize: '0.95rem' }}>- Verified Buyer</div>
                  </div>
                )}
                {/* Books & Stationery reviews */}
                {selectedProduct.category === 'Books & Stationery' && (
                  <div style={{ background: '#fffde7', borderRadius: '10px', padding: '16px', marginBottom: '16px', boxShadow: '0 1px 6px rgba(25,118,210,0.07)', borderLeft: '4px solid #ffd600' }}>
                    <div style={{ fontWeight: '600', fontSize: '1.08rem', color: '#ffb300', marginBottom: '8px' }}>Customer Review</div>
                    <div style={{ color: '#333', fontSize: '1rem', marginBottom: '6px', fontStyle: 'italic' }}>
                      {selectedProduct.name === 'Notebook' && '"Excellent quality notebook. Pages are smooth and don’t bleed ink. Great for school and office!"'}
                      {selectedProduct.name === 'Ball Pen' && '"Writes smoothly and lasts long. Comfortable grip for extended writing sessions."'}
                      {selectedProduct.name === 'Textbook' && '"Very informative and well-structured. Helped me score better in exams."'}
                      {selectedProduct.name === 'Sketchbook' && '"Perfect for sketching and drawing. Thick pages prevent smudging."'}
                      {selectedProduct.name === 'Highlighter' && '"Bright colors and doesn’t smudge. Makes studying easier!"'}
                      {selectedProduct.name === 'Stapler' && '"Compact and reliable. Staples papers easily without jamming."'}
                      {selectedProduct.name === 'Calculator' && '"Accurate and easy to use. Large display is very helpful."'}
                      {selectedProduct.name === 'Diary' && '"Beautiful cover and quality pages. Great for daily journaling."'}
                      {selectedProduct.name === 'Sticky Notes' && '"Sticks well and comes in vibrant colors. Perfect for reminders!"'}
                      {selectedProduct.name === 'Bookmark' && '"Beautiful design and sturdy material. Makes reading more enjoyable!"'}
                    </div>
                    <div style={{ color: '#888', fontSize: '0.95rem' }}>- Verified Buyer</div>
                  </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                  {[1,2,3,4,5].map(i => (
                    <span className={i <= selectedProduct.rating ? "star filled" : "star"} key={i}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill={i <= selectedProduct.rating ? "#FFD700" : "#ccc"} stroke={i <= selectedProduct.rating ? "#FFD700" : "#ccc"} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    </span>
                  ))}
                </div>
                <button className="add-to-cart-btn" style={{ marginRight: '12px' }} onClick={() => setCart([...cart, selectedProduct])}>Add to Cart</button>
                <button className="add-to-cart-btn" style={{ background: '#fff', color: '#1976d2', border: '2px solid #1976d2' }} onClick={() => setWishlist([...wishlist, selectedProduct])}>Wishlist</button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Coupon Popup before Checkout */}
      {showCouponPopup && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.35)', zIndex: 999, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ background: '#fff', borderRadius: '18px', boxShadow: '0 2px 16px rgba(0,0,0,0.18)', padding: '32px 28px', maxWidth: '420px', width: '100%', textAlign: 'center', position: 'relative' }}>
            <button style={{ position: 'absolute', top: 18, right: 18, background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }} onClick={() => setShowCouponPopup(false)}>&times;</button>
            <img src="https://cdn-icons-png.flaticon.com/512/3523/3523887.png" alt="Coupon" style={{ width: '90px', marginBottom: '18px' }} />
            <h2 style={{ color: '#1976d2', fontWeight: '700', marginBottom: '12px' }}>Apply Coupon?</h2>
            <input type="text" value={couponCode} onChange={e => setCouponCode(e.target.value)} placeholder="Enter coupon code" style={{ padding: '8px', borderRadius: '8px', border: '1px solid #ccc', width: '80%', marginBottom: '16px', fontSize: '1rem' }} />
            <div style={{ display: 'flex', justifyContent: 'center', gap: '18px', marginBottom: '12px' }}>
              <button style={{ padding: '8px 18px', borderRadius: '12px', background: '#43a047', color: '#fff', border: 'none', fontWeight: '600', cursor: 'pointer' }} onClick={() => {
                setAppliedCoupon(couponCode);
                setShowCouponPopup(false);
                setShowThankYouPopup(true);
                setCart([]);
              }}>Apply & Checkout</button>
              <button style={{ padding: '8px 18px', borderRadius: '12px', background: '#888', color: '#fff', border: 'none', fontWeight: '600', cursor: 'pointer' }} onClick={() => {
                setAppliedCoupon("");
                setShowCouponPopup(false);
                setShowThankYouPopup(true);
                setCart([]);
              }}>Skip & Checkout</button>
            </div>
          </div>
        </div>
      )}
      {/* Single Popup after Checkout */}
      {showThankYouPopup && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.35)', zIndex: 999, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ background: '#fff', borderRadius: '18px', boxShadow: '0 2px 16px rgba(0,0,0,0.18)', padding: '32px 28px', maxWidth: '420px', width: '100%', textAlign: 'center', position: 'relative' }}>
            <button style={{ position: 'absolute', top: 18, right: 18, background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }} onClick={() => setShowThankYouPopup(false)}>&times;</button>
            {checkoutCart.length === 0 ? (
              <>
                <img src="https://cdn-icons-png.flaticon.com/512/753/753345.png" alt="No Products" style={{ width: '90px', marginBottom: '18px' }} />
                <h2 style={{ color: '#d32f2f', fontWeight: '700', marginBottom: '12px' }}>No products selected</h2>
                <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: '18px' }}>Please add products to your cart before checkout.</p>
              </>
            ) : (
              <>
                <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Thank You" style={{ width: '120px', marginBottom: '18px' }} />
                <h2 style={{ color: '#43a047', fontWeight: '700', marginBottom: '12px' }}>Thank You for Your Purchase!</h2>
                <p style={{ fontSize: '1.15rem', color: '#444', marginBottom: '18px' }}>Your order has been placed successfully.<br />We appreciate your business!</p>
                {appliedCoupon && (
                  <div style={{ marginTop: '12px', color: '#1976d2', fontWeight: '600', fontSize: '1.08rem' }}>Coupon Applied: {appliedCoupon}</div>
                )}
              </>
            )}
            <button style={{ marginTop: '18px', padding: '8px 32px', borderRadius: '18px', background: '#43a047', color: '#fff', fontWeight: '700', fontSize: '1.08rem', border: 'none', cursor: 'pointer' }} onClick={() => setShowThankYouPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
