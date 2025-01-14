import React, { useState } from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
const SingleProduct = () => {
  const [orderProduct, setOrderProduct] = useState(true);
  const props = {
    width: 400,
    height: 350,
    zoomWidth: 600,
    img: "https://th.bing.com/th/id/R.2edbf87aa2fbe80b82863c6f288c254b?rik=9TAaf2c1QKazHA&pid=ImgRaw&r=0",
  };
  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  return (
    <>
      <Meta title={"Single Product"} />
      <BreadCrumb title="Single Product" />
      <div className="main-product-wrapper homewrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="https://th.bing.com/th/id/R.2edbf87aa2fbe80b82863c6f288c254b?rik=9TAaf2c1QKazHA&pid=ImgRaw&r=0"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://th.bing.com/th/id/R.2edbf87aa2fbe80b82863c6f288c254b?rik=9TAaf2c1QKazHA&pid=ImgRaw&r=0"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://th.bing.com/th/id/R.2edbf87aa2fbe80b82863c6f288c254b?rik=9TAaf2c1QKazHA&pid=ImgRaw&r=0"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://th.bing.com/th/id/R.2edbf87aa2fbe80b82863c6f288c254b?rik=9TAaf2c1QKazHA&pid=ImgRaw&r=0"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    Kids Headphones Bulk 10 Pack Multi Colored For Students
                  </h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$ 100</p>
                  <div className="d-flex  align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0  t-review">(2 reviews) </p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write a Review
                  </a>
                </div>
                <div className="border-bottom">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Type:</h3>{" "}
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand:</h3>{" "}
                    <p className="product-data">Havells</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Category:</h3>{" "}
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags:</h3>{" "}
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availablity:</h3>{" "}
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Size:</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border  border-1 bg-white text-dark border-secondary">
                        S
                      </span>
                      <span className="badge border  border-1 bg-white text-dark border-secondary">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XL
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Color:</h3>{" "}
                    <p className="product-data">
                      <Color />
                    </p>
                  </div>
                  <div className="d-flex  align-items-center gap-15 flex-raw mt-2 mb-3">
                    <h3 className="product-heading">Quantity:</h3>
                    <div className="">
                      <input
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        style={{ width: "50px" }}
                        id=""
                        className="form-control"
                      />
                    </div>
                    <div className=" d-flex   gap-30  align-items-center ms-5">
                      <button className="button border-0"> Add to Cart</button>
                      <button className="button sign-up">Buy It Now</button>
                    </div>
                  </div>
                  <div className="d-flex  align-items-center gap-15">
                    <div>
                      <a href="">
                        <TbGitCompare
                          className="fs-5 me-2 "
                        />
                        Add to Compare
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <AiOutlineHeart
                          className="fs-5 me-2"
                        />
                        Add to Wishlist
                      </a>
                    </div>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading"> Shipping & Returns:</h3>
                    <p className="product-data">Free shipping and returns available on all orders!<br/> <b>5-10 business days!</b></p>
                  </div>
                    <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">  Copy Product Link:</h3>
                  <a href="" onClick={()=>{copyToClipboard("https://th.bing.com/th/id/R.2edbf87aa2fbe80b82863c6f288c254b?rik=9TAaf2c1QKazHA&pid=ImgRaw&r=0")}}>Copy Product Link</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper homewrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bg-white p-3">
                <h4>description</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  atque odio nihil molestiae vero placeat magnam voluptatum
                  reprehenderit similique id ratione consequatur aut
                  exercitationem quas iure voluptatibus cupiditate doloribus
                  maiores!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews-wrapper homewrapper-2 ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 id="review"> Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end ">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex  align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 reviews</p>
                    </div>
                  </div>
                  {orderProduct && (
                    <div>
                      <a
                        href=""
                        className=" text-dark text-decoration-underline"
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div id="review" className="review-form py-4">
                  <h4>Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Navdeep</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui perspiciatis reiciendis distinctio. Porro quo facere
                      similique ex, magnam consequatur atque quidem, nisi modi
                      magni eveniet eaque ipsum earum neque accusamus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="popular-wrapper py-5 homewrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading"> Our Popular Products </h3>
            </div>
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
