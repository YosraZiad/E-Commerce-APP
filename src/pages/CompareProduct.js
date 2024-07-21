import React from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/Meta";
import Color from "../components/Color";

const CompareProduct = () => {
  return (
    <div>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <div className="compare-product-wrapper homewrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />

                <div className="compare-card-image">
                  <img
                    src="images/watch.jpg"
                    alt="watch"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="compare-card-details">
                  <h5 className="title">
                    Honor TI 7.0.1 GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price mb-3 mt-3">$100</h6>
                  <div className="product-detail">
                    <h5> Brand:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5> Type:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5> Availablity:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5> Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5> Size</h5>
                    <div className="d-flex gap-10">
                      <p>5</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute  img-fluid cross"
                />

                <div className="compare-card-image">
                  <img
                    src="images/watch.jpg"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
                <div className="compare-card-details">
                  <h5 className="title">
                    Honor TI 7.0.1 GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price mb-3 mt-3">$100</h6>
                  <div className="product-detail">
                    <h5> Brand:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5> Type:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5> Availablity:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5> Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5> Size</h5>
                    <div className="d-flex gap-10">
                      <p>5</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareProduct;
