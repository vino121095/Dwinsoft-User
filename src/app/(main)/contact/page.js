"use client";
import Layout from "@/app/modules/layouts/common/page";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from 'emailjs-com';


function Career() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3efyyyd', 'template_uu40ccl', form.current, 'e2PzbC_3ue4rcVqfy')
      .then((result) => {
        alert('Email sent successfully:', result.text);
      })
      .catch((error) => {
        alert('Error sending email:', error);
      });
  };
  // Animation
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);

  // Animation

  return (
    <Layout>
      <div className="contact-page container-fluid">
        {/* 1st Module Starts */}
        <div className="row">
          <div
            className="col-md-12 full-length-bg"
            id="bannersection"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <div
              className="image-overlay"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: "url('/Image/contactus.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: -1,
              }}
            ></div>
            <div className="container">
              <div className="row">
                <div className="col-md-6 ">
                  <div id="bannerhead">
                    <h1 style={{ color: "white" }}>Contact - Dwinsoft </h1>
                  </div>
                </div>
                <div className="col-md-6 text-end">
                  <div className="bannertext">
                    <h6>
                      <Link href="/">
                        <button href="#" className="" id="allbanner">
                          {" "}
                          Home /
                        </button>
                      </Link>
                      Contact
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 1st Module ends */}
        {/* 2nd Module Starts */}
        <div className="col-md-12 " id="sect">
          <div className="container">
            <div className="row ">
              <div className="col-md-6">
                <div className="row text-start">
                  <h4 data-aos="fade-up" data-aos-delay="200">
                    GET IN TOUCH
                  </h4>
                  <h2 data-aos="fade-up" data-aos-delay="400">
                    Reach out and let’s achieve greatness
                  </h2>
                  <h7 data-aos="fade-up" data-aos-delay="600">
                    Harness the power of MuleSoft with our expert team for
                    seamless integrations and innovative solutions.
                  </h7>
                  {/* <p id='aboutaligntext'>Thank You for Your Interest in Dwinsoft. To get started, please fill out the form below or email us at info@dwinsoft.in We look forward to connecting with you soon to discuss how we can assist you.</p> */}
                </div>
              </div>
              <div className="col-md-6 ">
                <p id="aboutaligntext" data-aos="fade-up" data-aos-delay="400">
                  Thank You for Your Interest in Dwinsoft. To get started,
                  please fill out the form below or email us at info@dwinsoft.in
                  We look forward to connecting with you soon to discuss how we
                  can assist you.
                </p>

                <form className="mt-4" data-aos="fade-up" data-aos-delay="600" ref={form} onSubmit={sendEmail}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Your Name *"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Your Email *"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="3"
                      placeholder="Your Message *"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" value="send" className="btn btn-secondary mt-2">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd Module End */}
        {/* 3rd Module Starts */}
        <div
          className="col-md-12 "
          id="sect"
          style={{ backgroundImage: "url('/Image/world-map-5.png')" }}
        >
          <div className="container">
            <div className="row ">
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <h2>India</h2>
                <div className="card mt-4">
                  <div className="card-body">
                    <div className="mail1">
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
                    </div>
                    <div className="address1 mt-4">
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
                      V2Rh+M6,
                      <br /> N.S.N. Kalvi Nagar, Manalmedu,
                      <br /> Thalapatti Post, NH 44,
                      <br /> Tamil Nadu-639003.
                    </div>
                    {/* <div className="phone1 mt-4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2E7DE0" className="bi bi-telephone-fill me-2" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg>+91 9489320805</div> */}
                  </div>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                <h2>USA</h2>

                <div className="card mt-4">
                  <div className="card-body">
                    <div className="mail1">
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
                    </div>
                    <div className="address1 mt-4">
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
                      {/* V2Rh+M6, */}3938,
                      {/* <br /> N.S.N. Kalvi Nagar, Manalmedu, */}<br />Somerset Circle,
                      {/* <br /> Thalapatti Post, NH 44, */}<br />Rochester Hills,
                      {/* <br /> Tamil Nadu-639003. */}<br />MI 48309.
                    </div>
                    {/* <div className="phone1 mt-4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2E7DE0" className="bi bi-telephone-fill me-2" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg>+91 9489320805</div> */}
                  </div>
                </div>
              </div>
              {/* <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
                <h2>UK</h2>

                <div className="card mt-4">
                  <div className="card-body">
                    <div className="mail1">
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
                    </div>
                    <div className="address1 mt-4">
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
                      V2Rh+M6,
                      <br /> N.S.N. Kalvi Nagar, Manalmedu,
                      <br /> Thalapatti Post, NH 44,
                      <br /> Tamil Nadu-639003.
                    </div>
                    <div className="phone1 mt-4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2E7DE0" className="bi bi-telephone-fill me-2" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg>+91 9489320805</div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* 3rd Module end */}
        {/* 4th Module Starts */}
        <div className="col-md-12 ">
          <div className="row ">
            <div className="col">
              <iframe
                width="100%"
                height="500"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.666440121263!2d78.02818090000005!3d10.891472699999989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba95f232776406b%3A0x652df6d63a2fdcab!2sDWINSOFT%20Technologies%20India%20Private%20Limited!5e1!3m2!1sen!2sin!4v1721378636066!5m2!1sen!2sin"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
        {/* 4th Module Starts */}
      </div>
    </Layout>
  );
}

export default Career;
