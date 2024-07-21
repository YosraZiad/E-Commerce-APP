import React from "react";
import BreadCrumb from "../components/breadCrumb";
import Meta from "../components/Meta";
import Form from "react-bootstrap/Form";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
const OutStore = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper homewrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="fillter-card mb-3">
                <h3 className="fillter-title"> Shop By categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="fillter-card mb-3">
                <h3 className="fillter-title"> Fillter By</h3>
                <div>
                  <h5 className="sub-title"> Availablity</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <labal className="form-check-labal" htmlFor="">
                        In Stock {1}
                      </labal>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        checked
                      />
                      <labal className="form-check-labal" htmlFor="">
                        Out of Stock {0}
                      </labal>
                    </div>
                  </div>
                  <h5 className="sub-title"> Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <Form>
                      <Form.Group
                        className=""
                        controlId="exampleForm.ControlInput1"
                      >
                        {/* <Form.Label>from</Form.Label> */}
                        <Form.Control
                          type="email"
                          placeholder="from"
                          className="py-1"
                        />
                      </Form.Group>
                    </Form>
                    <Form>
                      <Form.Group
                        className=""
                        controlId="exampleForm.ControlInput1"
                      >
                        {/* <Form.Label>To</Form.Label> */}
                        <Form.Control type="email" placeholder="To" />
                      </Form.Group>
                    </Form>
                  </div>
                  <h5 className="sub-title"> Colors</h5>
                  <div>
                    <div className="d-flex flex-wrap">
                  <Color/>
                  <Color/>
                    </div>
                  </div>
                  <h5 className="sub-title"> Size</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-1"
                        checked
                      />
                      <labal className="form-check-labal" htmlFor="color-1">
                        S {2}
                      </labal>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-1"
                        checked
                      />
                      <labal className="form-check-labal" htmlFor="color-1">
                        M {2}
                      </labal>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fillter-card mb-3">
                <h3 className="fillter-title"> Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge text-secondary bg-light rounded-3 py-2 px-3">
                      Headphone
                    </span>
                    <span className="badge text-secondary bg-light rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge text-secondary bg-light rounded-3 py-2 px-3">
                      Mobile
                    </span>
                    <span className="badge text-secondary bg-light rounded-3 py-2 px-3">
                      Wire
                    </span>
                  </div>
                </div>
              </div>
              <div className="fillter-card mb-3">
                <h3 className="fillter-title"> Random Product</h3>
                <div>
                  <div className="random-product mb-3 d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids headphones bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p>$ 300</p>
                    </div>
                  </div>
                  <div className="random-product  d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>
                        Kids headphones bulk 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p>$ 300</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10 ">
                    <p className="mb-0 d-block" style={{ width: "100px" }}>
                      Sort By:
                    </p>
                    <select name=" " className="form-control form-select" id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">
                        Best Selling
                      </option>
                      <option value="title-ascending">
                        Alphabetically ,A-Z
                      </option>
                      <option value="title-descending">
                        Alphabetically ,A-Z
                      </option>
                      <option value="price-ascending">
                        Price ,high to low
                      </option>
                      <option value="price-descending">
                        Data , new to old
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts">21 products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        src="images/gr4.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src="images/gr3.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        src="images/gr2.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        src="images/gr.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
              <ProductCard  grid={grid}/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OutStore;
