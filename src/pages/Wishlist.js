import React from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/Meta";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <div className="store-wrapper homewrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card  position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />

                <div className="wishlist-card-image w-100">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid"
                    alt="watch"
                  />
                </div>
                <div className=" py-3">
                  <h5 className="title">
                    Honor TI 7.0.1 GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price mb-3 mt-3">$100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card  position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />

                <div className="wishlist-card-image w-100">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid"
                    alt="watch"
                  />
                </div>
                <div className=" py-3">
                  <h5 className="title">
                    Honor TI 7.0.1 GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price mb-3 mt-3">$100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card  position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />

                <div className="wishlist-card-image w-100">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid"
                    alt="watch"
                  />
                </div>
                <div className=" py-3">
                  <h5 className="title">
                    Honor TI 7.0.1 GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price mb-3 mt-3">$100</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
