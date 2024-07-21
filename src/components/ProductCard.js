import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const ProductCard = (props) => {
  const{grid}=props;
  let location =useLocation ();
console.log(location)
  return (
  <>
    <div className={`${location.pathname == "/store" ?`gr-${grid}`:"col-3"}`}>
      <Link to=":id" className="prodect-card position-relative">
        <div className="wishlist-icon position-absolute ">
          <Link><img src="images/wish.svg"  alt="wishlist"/></Link>
        </div>
        <div className="product-image">
        
          <img
            src="images/watch.jpg"
            className="img-fluid"
            alt="product image"
          />
            <img
            src="images/tab1.jpg"
            className="img-fluid"
            alt="product image"
          />

        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphones bulk 10 pack multi colored for students
          </h5>
          <ReactStars count={5} size={24} value={4}  edit={false} activeColor="#ffd700" />
          <p className="price"> $100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link ><img src="images/view.svg"  alt="view"/></Link>
            <Link ><img src="images/prodcompare.svg"  alt="compare"/></Link>
            <Link ><img src="images/add-cart.svg"  alt="add-cart"/></Link>
          </div>


        </div>
      </Link>
    </div>
    <div className={`${location.pathname == "/store" ?`gr-${grid}`:"col-3"}`}>
      <Link className="prodect-card position-relative">
        <div className="wishlist-icon position-absolute ">
          <Link><img src="images/wish.svg"  alt="wishlist"/></Link>
        </div>
        <div className="product-image">
        
          <img
            src="images/watch.jpg"
            className="img-fluid"
            alt="product image"
          />
            <img
            src="images/tab1.jpg"
            className="img-fluid"
            alt="product image"
          />

        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphones bulk 10 pack multi colored for students
          </h5>
          <ReactStars count={5} size={24} value={4}  edit={false} activeColor="#ffd700" />
          <p className={`description ${grid === 12 ?"d-block" :"d-none"}`}>
            Lorem ipsum dolor sit amet
             consectetur, adipisicing elit. 
             Temporibus doloremque ab ea 
             veritatis eligendi alias corporis
              fugiat possimus deleniti fugit
               maxime quas repellendus
                necessitatibus quo architecto, 
            sequi voluptatem ullam at.
          </p>
          <p className="price"> $100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link ><img src="images/view.svg"  alt="view"/></Link>
            <Link ><img src="images/prodcompare.svg"  alt="compare"/></Link>
            <Link ><img src="images/add-cart.svg"  alt="add-cart"/></Link>
          </div>


        </div>
      </Link>
    </div>
  </>
  );
};

export default ProductCard;
