import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from 'react-bootstrap/Dropdown';

import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className="header-top-strip">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">Free Shipping</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Call us:{" "}
                <a className="text-white" href="+567276576">
                  (088) 567 8765 76
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <main className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align items-center">
            <div className="col-2">
              <h1>
                <Link className="text-white">Shop</Link>
              </h1>
            </div>
            <div className="col-5">
              <InputGroup className="input-group">
                <Form.Control
                  className="form-control py-2"
                  placeholder="Search ..."
                  aria-label="Search ..."
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text
                  id="basic-addon2"
                  className="input-group-text p3"
                >
                  <BsSearch className="f5-6" />
                </InputGroup.Text>
              </InputGroup>
            </div>
            <div className="col-5">
              <div className="header-upper-link d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img
                      src="images/images-1.jpg"
                      alt="compare"
                      className="images-top-header"
                    />
                    <p className="text-icon-header">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img
                      src="images/images-1.jpg"
                      alt="wishlist"
                      className="images-top-header"
                    />
                    <p className="text-icon-header">
                      My favorite <br /> Whish
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img
                      src="images/images-1.jpg"
                      alt="login"
                      className="images-top-header"
                    />
                    <p className="text-icon-header">
                      Login <br /> My account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img
                      src="images/images-1.jpg"
                      alt="cart"
                      className="images-top-header"
                    />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div
                className="menu-bottom d-flex 
                    laign-items-center gap-30"
              >
                <div>
                  <Dropdown className="d-inline">
                    <Dropdown.Toggle id="dropdown-autoclose-true" className="btn btn-secondary bg-transparent border-0 gap-15 d-flex align-items-center">
                      <img src="images/images-1.jpg" alt=""/>
                      <span>Shop</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Link className="dropdown-item text-white" to="">Menu Item</Link>
                      <Link className="dropdown-item text-white">Menu Item</Link>
                      <Link className="dropdown-item text-white">Menu Item</Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Store</NavLink>
                    <NavLink to="/">Blog</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
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
