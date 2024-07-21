import React from 'react';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from 'react-router-dom';
import { BsLinkedin ,BsYoutube ,BsGithub ,BsInstagram } from 'react-icons/bs'
const Footer = () => {
  return (
    <>
  
    <footer className='py-4'>
      <div class="container ">
<div className="row align-items-center">
  <div className="col-5">
    <div className="footer-top-data d-flex gap-30 align-items-center">
      <img src='/images/newsletter.png' alt="newsletter" />
      <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>

    </div>
  </div>
  <div className="col-7">
  <InputGroup >
                <Form.Control
                  className="py-1"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2" className="py-2">
                  {" "}
                Subscribe
                </InputGroup.Text>
              </InputGroup>
  </div>
</div>
      
      </div>
    </footer>
    <footer className='py-4'>
      <div class="container ">
      <div className="row">
        <div className="col-4">
          <h4  className='mb-0 text-white'>Contact Us</h4>
          <div>
            <address className='text-white  fs-6'>
              Hno:277 Near Vill chopal <br/> ,Sonipat , Haryana <br/>
              PinCode :131103
            </address>
            <a href="tel:+91 8264954234" className="mt-4 mb-1 d-block  text-white">+91 8264954234</a>
            <a href="mailto:navdeepdahiya753@gmail.com" className="mt-2 mb-0 d-block  text-white">navdeepdahiya753@gmail.com</a>
            <div className="social_icon d-flex align-items-center gap-30 mt-4">
              <a className='text-white' href="#">
                <BsLinkedin className=' fs-4'/>
              </a>
              <a className='text-white' href="#">
                <BsInstagram className=' fs-4'/>
              </a>
              <a className='text-white' href="#">
                <BsGithub className=' fs-4'/>
              </a>
              <a  className='text-white' href="#">
              <BsYoutube className=' fs-4'/>
              </a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <h4 className='mb-0 text-white' >Information</h4>
          <div className='footer-links d-flex flex-column'>
            <Link to="/privacy-policy" className='text-white py-2 mb-1'>Privacy Policy</Link>
            <Link to="/refund-policy" className='text-white py-2 mb-1'>Refund Policy</Link>
            <Link to="/shipping-policy" className='text-white py-2 mb-1'>Shipping Policy</Link>
            <Link to="/term-condition"  className='text-white py-2 mb-1'>Team & conditions</Link>
            <Link  to="/" className='text-white py-2 mb-1'>blogs</Link>
          </div>
        </div>
        <div className="col-3">
          <h4 className='mb-0 text-white' >Account</h4>
          <div className='footer-links d-flex flex-column'>
            <Link className='text-white py-2 mb-1'>About Us</Link>
            <Link className='text-white py-2 mb-1'>Faq</Link>
            <Link className='text-white py-2 mb-1'>Contact</Link>
          
          </div>
        </div>
        <div className="col-2">
          <h4  className='mb-0 text-white'>Quick Links</h4>
          <div className='footer-links d-flex flex-column'>
            <Link className='text-white py-2 mb-1'>Laptops</Link>
            <Link className='text-white py-2 mb-1'>Headphones</Link>
            <Link className='text-white py-2 mb-1'>Tablets</Link>
            <Link className='text-white py-2 mb-1'>Watch</Link>
          </div>

        </div>
      </div>
      </div>

    </footer>
    <footer className='py-4'>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center mb-0 text-white"> &copy;
{new Date().getFullYear()};powered by Devloper's Corner 
            </div>
          </div>
        </div>

      </div>
    </footer>
    </>
  );
}

export default Footer;
