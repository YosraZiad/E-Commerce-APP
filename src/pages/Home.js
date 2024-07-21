import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative ">
                <img
                  src="images/main-banner-1.jpg"
                  alt="main-banner"
                  className="img-fluid rounded-3"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>ipad SI3+ Pro</h5>
                  <p>From $999.00 or $41.62/mo</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
                <div className="small-banner position-relative  ">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="catbanner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>bestsale</h4>
                    <h5>Laptop Max</h5>
                    <p>
                      From $169.00 <br />
                      or $64.62/mo
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative  ">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="catbanner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>new arrival</h4>
                    <h5>Buy Ipad Air</h5>
                    <p>
                      From $599.00 <br />
                      or $49.62/12mo
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative  ">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="catbanner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>new arrival</h4>
                    <h5>Buy Ipad Air</h5>
                    <p>
                      From $599.00 <br />
                      or $49.62/12mo
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative  ">
                  <img
                    src="images/catbanner-04.jpg"
                    alt="catbanner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>new arrival</h4>
                    <h5>Buy Ipad Air</h5>
                    <p>
                      From $599.00 <br />
                      or $49.62/12mo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="homewrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="servies d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service.png" alt="servies" />
                  <div>
                    <h5 className="fs-6">Free Shopping</h5>
                    <p className="mb-0 fs-6"> From all orders over $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="servies" />
                  <div>
                    <h5 className="fs-6">Daily Surprise Offers </h5>
                    <p className="mb-0 fs-6">Save upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="servies" />
                  <div>
                    <h5 className="fs-6">support 24/7</h5>
                    <p className="mb-0 fs-6">Shop with an export</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="servies" />
                  <div>
                    <h5 className="fs-6">Affordable Prices</h5>
                    <p className="mb-0 fs-6">Get Factory Default Prices</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="servies" />
                  <div>
                    <h5 className="fs-6">Secure Payments</h5>
                    <p className="mb-0 fs-6">100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="homewrapper-2 py-5">
        <div class="container">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Music &Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="category" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="category" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="category" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="category" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Music &Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="category" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="category" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="category" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="category" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Featured-wrapper py-5 homewrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 homewrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="famous-card  position-relative">
                <img src="images/catsection.jpg" className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                <h5> big Screen</h5>
                <h6>Smart Watch </h6>
                <p>From $399or &16.62/mo.<br/> for 24 mo. *</p>
                </div>

              </div>
            </div>
            <div className="col-3">
              <div className="famous-card  position-relative">
                <img src="images/laptop123.jpg" className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                <h5 className="text-dark"> Studio display</h5>
                <h6 className="text-dark">600 nits of brightness </h6>
                <p className="text-dark">27-inch 5K Retina display<br/> for 24 mo. *</p>
                </div>

              </div>
            </div>
            <div className="col-3">
              <div className="famous-card  position-relative">
                <img src="images/laptop123.jpg" className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                <h5 className="text-dark">  smartphone</h5>
                <h6 className="text-dark">smartphone 13 pro. </h6>
                <p className="text-dark">Now in Green. from 1999.80 or $41.62/mo. for mo. Footnote*</p>
                </div>

              </div>
            </div>
            <div className="col-3">
              <div className="famous-card  position-relative">
                <img src="images/laptop123.jpg" className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                <h5 className="text-dark">home speakers</h5>
                <h6 className="text-dark">Room.filling sound. </h6>
                <p className="text-dark"> From $699 or $116.58/mo for mo.*</p>
                </div>

              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="special-wrapper py-5 homewrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 homewrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading"> Our Popular Products </h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="marque-wrapper homewrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 homewrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading"> Our Lastest Blogs</h3>
            </div>
            
          </div>
          <div className="row">
            <div className="col-3">
            <BlogCard />
          
            </div>
            <div className="col-3">
            <BlogCard />
          
            </div>
            <div className="col-3">
            <BlogCard />
          
            </div>
            <div className="col-3">
            <BlogCard />
          
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
