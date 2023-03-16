import React from "react";
import { Link } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/images-1" alt="imgfooter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
            <InputGroup className="input-group">
                <Form.Control
                  className="form-control py-2"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text
                  id="basic-addon2"
                  className="input-group-text p3"
                >
                  <span>Subscrib</span>
                </InputGroup.Text>
              </InputGroup>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
          <div className="col-4">
            <h4 className="text-white">Contact us </h4>
            <div className="footer-links d-flex flex-column">
              <address className="text-white">Hno _ 537 Year Vill Chopal, Tex, Hant <br />
              PinCode: 1311
              </address>
              <Link className="text-white p-2 mb-1">Fruits</Link>
              <Link className="text-white p-2 mb-1">Vegetables</Link>
              <Link className="text-white p-2 mb-1">Snacks</Link>
            </div>
          </div>
          <div className="col-3">
          <h4 className="text-white">Information</h4>
          <div className="footer-links d-flex flex-column">
              <Link className="text-white p-2 mb-1">Privacy Policy</Link>
              <Link className="text-white p-2 mb-1">Refund Policy</Link>
              <Link className="text-white p-2 mb-1">Shipping Policy</Link>
              <Link className="text-white p-2 mb-1">Blogs</Link>
              <Link className="text-white p-2 mb-1">Terms & Conditions</Link>
            </div>
          </div>
          <div className="col-3">
          <h4 className="text-white">Account</h4>
          <div className="footer-links d-flex flex-column">
              <Link className="text-white p-2 mb-1">About us</Link>
              <Link className="text-white p-2 mb-1">Faq</Link>
              <Link className="text-white p-2 mb-1">Contact</Link>
            </div>
          </div>
          <div className="col-2">
          <h4 className="text-white">Quick Links</h4>
            <div className="footer-links d-flex flex-column">
              <Link className="text-white p-2 mb-1">Groceries</Link>
              <Link className="text-white p-2 mb-1">Fruits</Link>
              <Link className="text-white p-2 mb-1">Vegetables</Link>
              <Link className="text-white p-2 mb-1">Snacks</Link>
            </div>
          </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Developer EMR
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
