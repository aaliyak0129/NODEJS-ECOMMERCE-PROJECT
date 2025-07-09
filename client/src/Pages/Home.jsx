import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../Images/slider1.jpg";
import img2 from "../Images/slider2.jpg";
import img3 from "../Images/slider3.jpg";
import img4 from "../Images/banner box1.jpg";
import img5 from "../Images/banner box2.jpg";
import img7 from "../Images/p2.jpg";
import img6 from "../Images/p1.jpg";
import img8 from "../Images/p3.jpg";
import img9 from "../Images/p4.jpg";
import img10 from "../Images/p5.jpg";
import img11 from "../Images/available1.jpg";
import img12 from "../Images/available2.jpg";
import img13 from "../Images/available3.jpg";
import img14 from "../Images/available4.jpg";
import img15 from "../Images/p11.jpg";
import img16 from "../Images/p12.jpg";
import img17 from "../Images/p13.jpg";
import img18 from "../Images/p14.jpg";
import img19 from "../Images/p15.jpg";
import img20 from "../Images/box3.jpg";
import img21 from "../Images/box4.jpg";
import img22 from "../Images/foot1.jpg";
import img23 from "../Images/foot2.jpg";
import img24 from "../Images/foot3.jpg";
import img25 from "../Images/foot4.jpg";
import img26 from "../Images/foot5.jpg";
import img27 from "../Images/people1.jpg";
import img28 from "../Images/people2.jpg";
import img29 from "../Images/people3.jpg";
import img30 from "../Images/people4.jpg";
import img31 from "../Images/ad.jpg";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

import "../Css/home.css";

const Home = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <div>
        <Carousel>
          <Carousel.Item>
            <img src={img1} className="slide" alt="" />{" "}
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={img2} className="slide" alt="" />{" "}
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={img3} className="slide" alt="" />{" "}
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="side-container">
        <div className="image-box">
          <img src={img4} alt="Image 1" />
          <div className="text-on-image">
            <h3>Image One</h3>
            <p>Description over the image.</p>
          </div>
        </div>

        <div className="image-box">
          <img src={img5} alt="Image 2" />
          <div className="text-on-image">
            <h3>Image Two</h3>
            <p>Another description here.</p>
          </div>
        </div>
      </div>

      <div className="marquee-container">
        <div className="marquee-text">
          Black Friday Offer ✿ The Iconic Collection ✿ Elegant and Everlasting ✿
          Color In Your Looks ✿ Black Friday Offer ✿ The Iconic Collection ✿
          Elegant and Everlasting ✿ Color In Your Looks Black Friday Offer ✿ The
          Iconic Collection ✿ Elegant and Everlasting ✿ Color In Your Looks ✿
          Black Friday Offer ✿ The Iconic Collection ✿ Elegant and Everlasting ✿
          Color In Your Looks Black Friday Offer ✿ The Iconic Collection ✿
          Elegant and Everlasting ✿ Color In Your Looks ✿ Black Friday Offer ✿
          The Iconic Collection ✿ Elegant and Everlasting ✿ Color In Your Looks
          Black Friday Offer ✿ The Iconic Collection ✿ Elegant and Everlasting ✿
          Color In Your Looks ✿ Black Friday Offer ✿ The Iconic Collection ✿
          Elegant and Everlasting ✿ Color In Your Looks
        </div>
      </div>
      <h1 style={{ textAlign: "center" }}>Our Best Sellers</h1>
      <h2 style={{ textAlign: "center", fontSize: "15px" }}>
        Our jewelry is made by the finest artists and carefully selected to
        reflect your style and personality
      </h2>
      <div className="card-container">
        <div className="product-card">
          <img src={img22} alt="Product 1" />
          <h3>Product 1</h3>
          <p className="price">$10</p>
          <div className="stars">★★★★★</div>
          <button
            onClick={() =>
              handleAddToCart({
                id: 1,
                title: "pendant",
                price: 10,
                img: img22,
              })
            }
          >
            Add to Cart
          </button>{" "}
        </div>
        <div className="product-card">
          <img src={img23} alt="Product 2" />
          <h3>Product 2</h3>
          <p className="price">$12</p>
          <div className="stars">★★★★★</div>
          <button
            onClick={() =>
              handleAddToCart({
                id: 2,
                title: "Product 2",
                price: 12,
                img: img23,
              })
            }
          >
            Add to Cart
          </button>{" "}
        </div>
        <div className="product-card">
          <img src={img24} alt="Product 3" />
          <h3>Product 3</h3>
          <p className="price">$15</p>
          <div className="stars">★★★★★</div>
          <button
            onClick={() =>
              handleAddToCart({
                id: 1,
                title: "pendent",
                price: 10,
                img: img22,
              })
            }
          >
            Add to Cart
          </button>{" "}
        </div>
        <div className="product-card">
          <img src={img25} alt="Product 4" />
          <h3>Product 4</h3>
          <p className="price">$8</p>
          <div className="stars">★★★★★</div>
          <button
            onClick={() =>
              handleAddToCart({
                id: 1,
                title: "Product 1",
                price: 10,
                img: img22,
              })
            }
          >
            Add to Cart
          </button>{" "}
        </div>
        <div className="product-card">
          <img src={img26} alt="Product 5" />
          <h3>Product 5</h3>
          <p className="price">$18</p>
          <div className="stars">★★★★★</div>
          <button
            onClick={() =>
              handleAddToCart({
                id: 1,
                title: "Product 1",
                price: 10,
                img: img22,
              })
            }
          >
            Add to Cart
          </button>{" "}
        </div>
      </div>

      <div className="background-box">
        <img src={img31} alt="" />
        <div className="center-text">
          <h1>Welcome</h1>
          <p>This is centered text over a background image.</p>
        </div>
      </div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Most Purchased Product
      </h1>
      <div className="card-container">
        <div className="product-card">
          <img src={img7} alt="Product 1" />
          <h3>Product 1</h3>
          <p className="price">$10</p>
          <div className="stars">★★★★★</div>
          <button>Add to Cart</button>
        </div>
        <div className="product-card">
          <img src={img6} alt="Product 2" />
          <h3>Product 2</h3>
          <p className="price">$12</p>
          <div className="stars">★★★★★</div>
          <button>Add to Cart</button>
        </div>
        <div className="product-card">
          <img src={img10} alt="Product 3" />
          <h3>Product 3</h3>
          <p className="price">$15</p>
          <div className="stars">★★★★★</div>
          <button>Add to Cart</button>
        </div>
        <div className="product-card">
          <img src={img8} alt="Product 4" />
          <h3>Product 4</h3>
          <p className="price">$8</p>
          <div className="stars">★★★★★</div>
          <button>Add to Cart</button>
        </div>
        <div className="product-card">
          <img src={img9} alt="Product 5" />
          <h3>Product 5</h3>
          <p className="price">$18</p>
          <div className="stars">★★★★★</div>
          <button>Add to Cart</button>
        </div>
      </div>
      <div className="gallery-grid">
        <div className="gallery-card">
          <img src={img11} alt="1" />
          <div className="gallery-title">
            ONE-OF-A-KINDS <br />
            RINGS
          </div>
        </div>

        <div className="gallery-card">
          <img src={img12} alt="2" />
          <div className="gallery-title">
            HIGH TIDE LOOKS <br />
            STACKED BRACELETS
          </div>
        </div>

        <div className="gallery-card">
          <img src={img13} alt="3" />
          <div className="gallery-title">
            NEW ORGANIC DOME <br />
            EARRINGS
          </div>
        </div>

        <div className="gallery-card">
          <img src={img14} alt="4" />
          <div className="gallery-title">
            THE TIFFANY LOOKS <br />
            NECKLACES
          </div>
        </div>
      </div>
      <h1 style={{ textAlign: "center" }}>Trend Products of The Week</h1>
      <h2 style={{ textAlign: "center", fontSize: "15px" }}>
        Our jewelry is made by the finest artists and carefully selected to
        reflect your style and personality
      </h2>
      <div className="card-container">
        <div className="product-card">
          <img src={img16} alt="Product 1" />
          <h3>Product 1</h3>
          <p className="price">$10</p>
          <div className="stars">★★★★★</div>
          <button>Add to Cart</button>
        </div>
        <div className="product-card">
          <img src={img17} alt="Product 2" />
          <h3>Product 2</h3>
          <p className="price">$12</p>
          <div className="stars">★★★★★</div>
          <button>Add to Cart</button>
        </div>
        <div className="product-card">
          <img src={img18} alt="Product 3" />
          <h3>Product 3</h3>
          <p className="price">$15</p>
          <div className="stars">★★★★★</div>
          <button>Add to Cart</button>
        </div>
        <div className="product-card">
          <img src={img19} alt="Product 4" />
          <h3>Product 4</h3>
          <p className="price">$8</p>
          <div className="stars">★★★★★</div>
          <button>Add to Cart</button>
        </div>
        <div className="product-card">
          <img src={img15} alt="Product 5" />
          <h3>Product 5</h3>
          <p className="price">$18</p>
          <div className="stars">★★★★★</div>
          <button>Add to Cart</button>
        </div>
      </div>
      <div className="side-container">
        <div className="image-box">
          <img src={img20} alt="Image 1" />
          <div className="text-on-image">
            <h3>Image One</h3>
            <p>Description over the image.</p>
          </div>
        </div>

        <div className="image-box">
          <img src={img21} alt="Image 2" />
          <div className="text-on-image">
            <h3>Image Two</h3>
            <p>Another description here.</p>
          </div>
        </div>
      </div>
      <div className="testimonials-section">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">
              "Absolutely stunning! The necklace I bought was even more
              beautiful in person. Will definitely order again."
            </p>
            <img src={img27} alt="Ayesha Khan" className="testimonial-image" />
            <div className="testimonial-name">– Ayesha Khan</div>
            <div className="testimonial-rating">★★★★★</div>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-text">
              "Great quality and fast delivery. Their customer service was very
              helpful too."
            </p>
            <img src={img28} alt="Meera Sharma" className="testimonial-image" />
            <div className="testimonial-name">– Meera Sharma</div>
            <div className="testimonial-rating">★★★★☆</div>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-text">
              "Bought a bridal set — it made my day so special. Got so many
              compliments!"
            </p>
            <img src={img29} alt="Priya Patel" className="testimonial-image" />
            <div className="testimonial-name">– Priya Patel</div>
            <div className="testimonial-rating">★★★★★</div>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-text">
              "Beautiful craftsmanship and elegant designs. I’m obsessed!"
            </p>
            <img src={img30} alt="Zara Ali" className="testimonial-image" />
            <div className="testimonial-name">– Zara Ali</div>
            <div className="testimonial-rating">★★★★☆</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
