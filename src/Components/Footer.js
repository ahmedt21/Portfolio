import React from 'react';
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle , AiFillLinkedin } from "react-icons/ai";

import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien sapien vel bibendum bibendum.
            </p>
          </div>
          <div className="col-md-4">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li><i className="fa fa-map-marker"></i>ahmedtaha0200@gmail.com</li>
              <li><i className="fa fa-phone"></i> (020) 1200243462</li>
              {/* <li><i className="fa fa-envelope"></i> info@example.com</li> */}
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Follow Us</h4>
            <ul className="list-unstyled" style={{display:'flex'}}>
              <li><a href="https://www.facebook.com/"><i className="fa fa-facebook"></i> <BsFacebook style={{ fontSize: '3rem' }}/> </a></li>
              <li><a href="https://twitter.com/"><i className="fa fa-twitter"></i> <AiFillTwitterCircle style={{ fontSize: '3rem' }}/> </a></li>
              <li><a href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i> <AiFillLinkedin style={{ fontSize: '3rem' }}/> </a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <hr />
            <p className="text-center">&copy; 2021 My Website. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;