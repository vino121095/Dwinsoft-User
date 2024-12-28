import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="single_footer">
              <h4>Company</h4>
              <ul>
                <li>
                  {" "}
                  <Link href="/">
                    <button href="#" className="" id="topmenu">
                      {" "}
                      Home
                    </button>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="/about">
                    <button href="#" className="" id="topmenu">
                      {" "}
                      About Us
                    </button>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="/api">
                    <button href="#" className="" id="topmenu">
                      {" "}
                      Api
                    </button>
                  </Link>
                </li>

                <li>
                  {" "}
                  <Link href="/blogs">
                    <button href="#" className="" id="topmenu">
                      {" "}
                      Blog
                    </button>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="/career">
                    <button href="#" className="" id="topmenu">
                      {" "}
                      Careers
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="single_footer single_footer_address">
              <h4>Services</h4>
              <ul>
                <li>
                  {" "}
                  <Link href="/services/consulting">
                    <button href="#" className="" id="topmenu">
                      {" "}
                      Mulesoft
                    </button>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/services/testing">
                    <button href="#" className="" id="topmenu">
                      {" "}
                      QA Testing
                    </button>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/services/full-stack">
                    <button href="#" className="" id="topmenu">
                      {" "}
                      Full-stack Development
                    </button>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/services/app">
                    <button href="#" className="" id="topmenu">
                      {" "}
                      App Develop - Android & IOS
                    </button>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link href="/services/certification">
                    <button href="#" className="" id="topmenu">
                      {" "}
                      Training & Certification
                    </button>
                  </Link>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="single_footer single_footer_address">
              <h4>Contact</h4>
              <ul>
                {/* <li><a href="/contact">IND: +91 9489320805</a></li> */}
                <li>
                  <a href="/contact">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#2E7DE0"
                      className="bi bi-envelope-fill me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                    </svg>
                    info@dwinsoft.in
                  </a>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#2E7DE0"
                    className="bi bi-geo-alt-fill me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                  </svg>
                  <a href="/contact">V2Rh+M6, </a>
                </li>
                <li>
                  <a href="/contact">N.S.N. Kalvi Nagar, Manalmedu, </a>
                </li>
                <li>
                  <a href="/contact">Thalapatti Post, NH 44,</a>
                </li>
                <li>
                  <a href="/contact">Tamil Nadu-639003.</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="single_footer single_footer_address">
              <h4>Get in Touch</h4>
              <div className="signup_form">
                <form action="#" className="subscribe">
                  <input
                    type="text"
                    className="subscribe__input"
                    placeholder="Your Email"
                  />
                  <button type="button" className="subscribe__btn">
                    Send
                  </button>
                </form>
              </div>
            </div>
            <div className="social_profile">
              <ul>
                {/* <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li> */}
                {/* <li><a href="#"><i cl12ss="fab fa-twitter"></i></a></li> */}
                <li>
                  <Link href="https://www.instagram.com/dwinsoft_technologies">
                  <img src="/Image/instagram.png" alt="instagram logo" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/dwinsoft-technologies-india/?originalSubdomain=in">
                  <img src="/Image/linkedin.png" alt="Linkedin Logo" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/dwinsoft-technologies-india/?originalSubdomain=in">
                  <img src="/Image/twitter.png" alt="twitter Logo"  />
                  </Link>
                </li>
              </ul>
            </div><br/>
            <div className="mt-3" style={{position: "absolute"}}>
          <img src="https://nexturn.com/wp-content/uploads/2024/04/Salesforce_Partner_Badge_RGB39.png" alt="" style={{height: "70px"}} />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvjHS7C4OlKqUOGHiZgX4lxCK9E9Hkmf9WIQ&s" alt="" style={{height: "50px", marginLeft: "10px", borderRadius: "4px"}} />
          </div>
          </div>
        </div>

        <div className="row copy_rights mt-2">
          <div className="col-lg-7 col-sm-7 col-xs-12">
            <p className="copyright CR_left">
              {" "}
              © 2024. All rights reserved by{" "}
              <Link href="/" id="company">
                {" "}
                Dwinsoft Technologies India Pvt Ltd.
              </Link>
            </p>
          </div>
          <div className="col-lg-5 col-sm-5 col-xs-12">
            <p className="copyright CR_right">
              <Link href="/privacy-policy" className="me-4">
                Privacy Policy{" "}
              </Link>
              <Link href="/terms-conditions">Terms & Conditions </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
