import React from "react";
import { NavLink, Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 &Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline :
                <a className="text-white" href="tel:+91 8264954234">
                  +91 8264954234
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-2">
              <h3>
                <Link className="text-white">Dev Corner</Link>
              </h3>
            </div>
            <div className="col-5 align-items-center py-3">
              <InputGroup >
                <Form.Control
                  className="py-2"
                  placeholder="Search Product Here"
                  aria-label="ReSearch Product Here"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">
                  {" "}
                  <BsSearch className="fs-6" />
                </InputGroup.Text>
              </InputGroup>
            </div>
            <div className="col-5 ">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <NavLink to='/compare-product' className="d-flex align-items-center gap-10 text-white">
                    <img src="/images/compare.svg" alt="compare" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </NavLink>
                </div>
                <div>
                  <Link to="/wishlist" className="d-flex align-items-center gap-10 text-white">
                    <img src="/images/wishlist.svg" alt="wishlist" />
                    <p className="mb-0">
                      Favourite <br /> wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/login" className="d-flex align-items-center gap-10 text-white">
                    <img src="/images/user.svg" alt="user" />
                    <p className="mb-0">
                      Log in <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link  to="/cart" className="d-flex align-items-center gap-10 text-white">
                    <img src="/images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0"> $ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <Dropdown>
                    <Dropdown.Toggle variant="transparent" id="dropdown-basic" className=" border-0 d-flex align-items-center gap-15 ">
                    <img src="images/menu.svg" alt=""/> <span className="me-5 d-inline-block">Chop Categories</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Link to="#/action-1" className="dropdown-item  text-white">Action</Link>
                      <Link to="#/action-2" className="dropdown-item text-white">
                        Another action
                      </Link>
                      <Link to="#/action-3" className="dropdown-item text-white">
                        Something else
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Our Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/Contact">Contact</NavLink>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
