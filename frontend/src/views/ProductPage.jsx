import logo from '../assets/logo.png';
import productimage from '../assets/productimage.jpg';
import barbellplate from '../assets/barbellplate.jpg';
import belt from '../assets/belt.jpg';
import barbellrack from '../assets/barbellrack.jpg';
import avatar from '../assets/avatar.png';
import '../assets/styles/styleproductpage.css';



function productpage() {
    return (
      <div>
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <img src={logo} alt="Shop Logo" />
          </div>
          <nav className="navbar">
            <ul className="nav-list">
              <li className="nav-item"><a href="#">Category 1</a></li>
              <li className="nav-item"><a href="#">Category 2</a></li>
              <li className="nav-item"><a href="#">Everything</a></li>
              <li className="nav-item"><a href="#">About</a></li>
              <li className="nav-item"><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
  
      <section className="product">
        <div className="product-image">
          <img src={productimage} alt="Product Image" />
        </div>
        <div className="product-details">
          <h1 className="product-title">Dumbbells</h1>
          <p className="product-description">PAIR of dumbbells. Each colour and weight variation comes as a pair. 0.5kg, 1kg, 1.5kg, 2kg, 3kg, 4kg, 5kg and 6kg all available, either multicoloured or in black.</p>
          <p className="product-description">GREAT FOR ALL USERS, either for those who are just starting out or regular users. They can be used for many different styles of workouts, from aerobics, HIIT, strength training, body pump style classes or barre. Ideal for home workouts as part of a home gym.</p>
          <p className="product-price">$19.99</p>
          <div className="quantity">
            <input type="number" className="input-text qty text" name="quantity" value="1" aria-label="Product quantity" size="4" min="1" max="" step="1" placeholder="" inputMode="numeric" autoComplete="off" />
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
      </section>
  
      <section className="product-details-section">
        <h2 className="section-title">Product Details</h2>
        <ul className="product-details-list">
          <li className="product-details-item">Weight: 5kg</li>
          <li className="product-details-item">Material: Metal</li>
          <li className="product-details-item">A perfect choice for beginners!</li>
        </ul>
      </section>
  
      <section className="reviews-section">
        <h2 className="section-title">Customer Reviews</h2>
        <div className="review">
          <div className="review-author">
            <img src= {avatar} alt="User Avatar" className="user-avatar" />
            <p className="user-name">John Doe</p>
          </div>
          <p className="review-text">It feels good</p>
        </div>
        {/* More reviews can be added here */}
      </section>
  
      <section className="related-products">
        <h2 className="section-title">Related Products</h2>
        <ul className="product-list">
          <li className="product-item">
            <img src={barbellplate} alt="Product 1" />
            <h3 className="product-title">Barbell Plates</h3>
            <p className="product-price">$19.99</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </li>
          <li className="product-item">
            <img src={belt} alt="Product 2" />
            <h3 className="product-title">Belt</h3>
            <p className="product-price">$29.99</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </li>
          <li className="product-item">
            <img src={barbellrack} alt="Product 3" />
            <h3 className="product-title">Barbell Rack</h3>
            <p className="product-price">$39.99</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </li>
        </ul>
      </section>
  
      <footer className="footer">
        <p className="footer-text">&copy; 2023 Your Company</p>
      </footer>
    </div>
    );
  }
  
  export default productpage;
  