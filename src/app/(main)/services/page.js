"use client";

import Layout from "@/app/modules/layouts/common/page";
import React from "react";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import axios from "axios";

function Services() {
  // Animation
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);

  // Animation

  const [data, setData] = useState([]);
  const [cat, setCat] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseAuthor = await axios.post(
          "http://testbackend.dwinsoft.in/blogs/authentication",
          {
            email: "dwinsoftAdmin@gmail.com",
            password: "FhU4avm3+!S5MeV",
          }
        );
        const newToken = responseAuthor.data.token;
        console.log("Token:", newToken);
        // Set up headers with the access token
        const headers = {
          Authorization: `Bearer ${newToken}`,
        };
        // Make the API call
        const response = await axios.get(
          "http://testbackend.dwinsoft.in/blogs/user/blog/list",
          { headers }
        );
        const category_response = await axios.get(
          "http://testbackend.dwinsoft.in/blogs/user/category/list",
          { headers }
        );
        // Update state with the data from the response

        setCat(category_response.data);
        setData(response.data);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Progress Bar

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll(".progress-bar");
            progressBars.forEach((bar) => {
              const value = bar.getAttribute("aria-valuenow");
              bar.style.width = value + "%";
              bar.style.transition = "width 2s";
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = document.querySelector("#team-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Progress Bar

  return (
    <Layout>
      <div className="team-page container-fluid">
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
                backgroundImage: "url('/Image/service1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: -1,
              }}
            ></div>
            <div className="container">
              <div className="row">
                <div className="col-md-6 ">
                  <div id="bannerhead">
                    <h1 style={{ color: "white" }}>Services - Dwinsoft </h1>
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
                      Services
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 1st Module ends */}
        {/* 2nd Module Starts */}
        <div
          className="col-md-12 homeset"
          id="sect"
          style={{ backgroundImage: "url('/Image/services-bg-2.png')" }}
        >
          <div className="container">
            <div className="row text-center">
              <h4>WHAT WE DO</h4>
              <h2>We Make Things Possible</h2>

              <p>
                Our solutions are simple, robust and are aesthetically designed
                to keep the customer engaged to deliver consistent growth for
                your business.{" "}
              </p>
            </div>
            <div
                  style={{
                    background:
                      "radial-gradient(circle closest-side, rgba(76, 129, 197, 0.8), rgba(108, 164, 233, 0.3), rgba(255, 255, 255, 0.1))",
                  }}
                >
            <div className="row">
              {/* <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <div className="card mt-4" id="servicecard">
                  <div className="card-body text-start">
                    <img
                      src="/Image/clarification.png"
                      alt=""
                      width={50}
                      height={50}
                      className="mb-4"
                    />
                    <h3>
                      MULESOFT <br /> CONSULTING
                    </h3>
                    <p>Our expert consultants offer strategic MuleSoft ...</p>
                    <Link href="/services/consulting">
                      <button href="#" className="" id="servicecard2">
                        {" "}
                        Read More{" "}
                        <img
                          src="\Image\next.png"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </button>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                <div className="card mt-4" id="servicecard">
                  <div className="card-body text-start">
                    <img
                      src="\Image\developement.png"
                      alt=""
                      width={50}
                      height={50}
                      className="mb-4"
                    />
                    <h3>
                      MULESOFT <br /> DEVELOPMENT{" "}
                    </h3>
                    <p>Our expert consultants offer strategic MuleSoft ...</p>
                    <Link href="/services/developement">
                      <button href="#" className="" id="servicecard2">
                        {" "}
                        Read More{" "}
                        <img
                          src="\Image\next.png"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </button>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
                <div className="card mt-4" id="servicecard">
                  <div className="card-body text-start">
                    <img
                      src="/Image/migration.png"
                      alt=""
                      width={50}
                      height={50}
                      className="mb-4"
                    />
                    <h3>
                      MULE-4 <br /> MIGRATION
                    </h3>
                    <p>
                      Transition smoothly to Mule 4 with our comprehensive ...
                    </p>
                    <Link href="/services/migration">
                      <button href="#" className="" id="servicecard2">
                        {" "}
                        Read More{" "}
                        <img
                          src="\Image\next.png"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </button>{" "}
                    </Link>
                  </div>
                </div>
              </div> */}
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <Link href="/services/consulting">
                  <div
                    className="card mt-4 services-card"
                    id="servicecard"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="card-body text-start">
                      <img
                        src="/Image/clarification.png"
                        alt=""
                        width={50}
                        height={50}
                        className="mb-4"
                      />
                      <h3>
                        MULESOFT <br /> CONSULTING
                      </h3>
                      <p>Our expert consultants offer strategic MuleSoft ...</p>
                      <button href="#" className="" id="servicecard2">
                        {" "}
                        Read More{" "}
                        <img
                          src="\Image\next.png"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </button>{" "}
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                <Link href="/services/developement">
                  <div
                    className="card mt-4"
                    id="servicecard"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="card-body text-start">
                      <img
                        src="\Image\developement.png"
                        alt=""
                        width={50}
                        height={50}
                        className="mb-4"
                      />
                      <h3>
                        MULESOFT <br /> DEVELOPMENT{" "}
                      </h3>
                      <p>Our expert consultants offer strategic MuleSoft ...</p>
                      <button href="#" className="" id="servicecard2">
                        {" "}
                        Read More{" "}
                        <img
                          src="\Image\next.png"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </button>{" "}
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
                <Link href="/services/migration">
                  <div
                    className="card mt-4"
                    id="servicecard"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="card-body text-start">
                      <img
                        src="/Image/migration.png"
                        alt=""
                        width={50}
                        height={50}
                        className="mb-4"
                      />
                      <h3>
                        MULE-4 <br /> MIGRATION
                      </h3>
                      <p>
                        Transition smoothly to Mule 4 with our comprehensive ...
                      </p>
                      <button href="#" className="" id="servicecard2">
                        {" "}
                        Read More{" "}
                        <img
                          src="\Image\next.png"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </button>{" "}
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className=" row ">
              {/* <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <div className="card mt-4" id="servicecard">
                  <div className="card-body text-start">
                    <img
                      src="\Image\integration.png"
                      alt=""
                      width={50}
                      height={50}
                      className="mb-4"
                    />
                    <h3>
                      MULE B2B <br /> INTEGRATION
                    </h3>
                    <p>Enhance your business collaborations with our ... </p>
                    <Link href="/services/integration">
                      <button href="#" className="" id="servicecard2">
                        {" "}
                        Read More{" "}
                        <img
                          src="\Image\next.png"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </button>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                <div className="card mt-4" id="servicecard">
                  <div className="card-body text-start">
                    <img
                      src="\Image\support.png"
                      alt=""
                      width={50}
                      height={50}
                      className="mb-4"
                    />
                    <h3>
                      PRODUCTION <br /> SUPPORT
                    </h3>
                    <p>Ensure continuous operations with our dedicated ... </p>
                    <Link href="/services/support">
                      <button href="#" className="" id="servicecard2">
                        {" "}
                        Read More{" "}
                        <img
                          src="\Image\next.png"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </button>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
                <div className="card mt-4" id="servicecard">
                  <div className="card-body text-start">
                    <img
                      src="\Image\testing.png"
                      alt=""
                      width={50}
                      height={50}
                      className="mb-4"
                    />
                    <h3>
                      FULL-STACK <br /> DEVELOPMENT
                    </h3>
                    <p>
                      Transform your ideas into reality with our full-stack ...{" "}
                    </p>
                    <Link href="/services/full-stack">
                      <button href="#" className="" id="servicecard2">
                        {" "}
                        Read More{" "}
                        <img
                          src="\Image\next.png"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </button>{" "}
                    </Link>
                  </div>
                </div>
              </div> */}
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <Link href="/services/integration">
                  <div
                    className="card mt-4"
                    id="servicecard"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="card-body text-start">
                      <img
                        src="\Image\integration.png"
                        alt=""
                        width={50}
                        height={50}
                        className="mb-4"
                      />
                      <h3>
                        MULE B2B <br /> INTEGRATION
                      </h3>
                      <p>Enhance your business collaborations with our ... </p>
                      <button href="#" className="" id="servicecard2">
                        {" "}
                        Read More{" "}
                        <img
                          src="\Image\next.png"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </button>{" "}
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                <Link href="/services/support">
                  <div
                    className="card mt-4"
                    id="servicecard"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="card-body text-start">
                      <img
                        src="\Image\support.png"
                        alt=""
                        width={50}
                        height={50}
                        className="mb-4"
                      />
                      <h3>
                        PRODUCTION <br /> SUPPORT
                      </h3>
                      <p>
                        Ensure continuous operations with our dedicated ...{" "}
                      </p>
                      <button href="#" className="" id="servicecard2">
                        {" "}
                        Read More{" "}
                        <img
                          src="\Image\next.png"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </button>{" "}
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
                <Link href="/services/full-stack">
                  <div
                    className="card mt-4"
                    id="servicecard"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="card-body text-start">
                      <img
                        src="\Image\testing.png"
                        alt=""
                        width={50}
                        height={50}
                        className="mb-4"
                      />
                      <h3>
                        FULL-STACK <br /> DEVELOPMENT
                      </h3>
                      <p>
                        Transform your ideas into reality with our full-stack
                        ...{" "}
                      </p>
                      <button href="#" className="" id="servicecard2">
                        {" "}
                        Read More{" "}
                        <img
                          src="\Image\next.png"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </button>{" "}
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className=" row ">
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <Link href="/services/app">
                  <div
                    className="card mt-4"
                    id="servicecard"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="card-body text-start">
                      <img
                        src="\Image\full stack.png"
                        alt=""
                        width={50}
                        height={50}
                        className="mb-4"
                      />
                      <h3>
                        APP DEVELOPMENT <br /> FOR ANDROID & IOS
                      </h3>
                      <p>
                        Reach your audience on any device with our custom ...
                      </p>
                      <button href="#" className="" id="servicecard2">
                        {" "}
                        Read More{" "}
                        <img
                          src="\Image\next.png"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </button>{" "}
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                <Link href="/services/certification">
                  <div
                    className="card mt-4"
                    id="servicecard"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="card-body text-start">
                      <img
                        src="\Image\training.png"
                        alt=""
                        width={50}
                        height={50}
                        className="mb-4"
                      />
                      <h3>
                        {" "}
                        TRAINING &<br /> CERTIFICATION
                      </h3>
                      <p>
                        Empower your team with our specialized training and ...{" "}
                      </p>
                      <button href="#" className="" id="servicecard2">
                        {" "}
                        Read More{" "}
                        <img
                          src="\Image\next.png"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </button>{" "}
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
                <Link href="/services/testing">
                  <div
                    className="card mt-4"
                    id="servicecard"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="card-body text-start">
                      <img
                        src="\Image\snaplogic.png"
                        alt=""
                        width={50}
                        height={50}
                        className="mb-4"
                      />
                      <h3>
                        {" "}
                        INTEGRATION & <br /> TESTING
                      </h3>
                      <p>Ensure seamless interaction between different ... </p>
                      <button href="#" className="" id="servicecard2">
                        {" "}
                        Read More{" "}
                        <img
                          src="\Image\next.png"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </button>{" "}
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className=" row ">
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <Link href="/services/performance">
                  <div
                    className="card mt-4"
                    id="servicecard"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="card-body text-start">
                      <img
                        src="\Image\performance.png"
                        alt=""
                        width={50}
                        height={50}
                        className="mb-4"
                      />
                      <h3>
                        PERFORMANCE <br /> TESTING
                      </h3>
                      <p>
                        Maximize the efficiency of your applications with our
                        ...{" "}
                      </p>
                      <button href="#" className="" id="servicecard2">
                        {" "}
                        Read More{" "}
                        <img
                          src="\Image\next.png"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </button>{" "}
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                <Link href="/services/security">
                  <div
                    className="card mt-4"
                    id="servicecard"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="card-body text-start">
                      <img
                        src="\Image\security.png"
                        alt=""
                        width={50}
                        height={50}
                        className="mb-4"
                      />
                      <h3>
                        SECURITY <br /> TESTING
                      </h3>
                      <p>
                        Protect your applications from potential threats with
                        our ...{" "}
                      </p>
                      <button href="#" className="" id="servicecard2">
                        {" "}
                        Read More{" "}
                        <img
                          src="\Image\next.png"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </button>{" "}
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
                <Link href="/services/automation">
                  <div
                    className="card mt-4"
                    id="servicecard"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="card-body text-start">
                      <img
                        src="\Image\automated.png"
                        alt=""
                        width={50}
                        height={50}
                        className="mb-4"
                      />
                      <h3>
                        AUTOMATION <br /> TESTING
                      </h3>
                      <p>
                        Streamline your testing processes with our advanced ...{" "}
                      </p>
                      <button href="#" className="" id="servicecard2">
                        {" "}
                        Read More{" "}
                        <img
                          src="\Image\next.png"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </button>{" "}
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className=" row ">
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <Link href="/services/manual">
                  <div
                    className="card mt-4"
                    id="servicecard"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="card-body text-start">
                      <img
                        src="\Image\software-testing.png"
                        alt=""
                        width={50}
                        height={50}
                        className="mb-4"
                      />
                      <h3>
                        MANUAL <br /> TESTING
                      </h3>
                      <p>Ensure thorough and accurate evaluation of your ...</p>
                      <button href="#" className="" id="servicecard2">
                        {" "}
                        Read More{" "}
                        <img
                          src="\Image\next.png"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </button>{" "}
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                <Link href="/services/smoke">
                  <div
                    className="card mt-4"
                    id="servicecard"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="card-body text-start">
                      <img
                        src="\Image\test.png"
                        alt=""
                        width={50}
                        height={50}
                        className="mb-4"
                      />
                      <h3>
                        {" "}
                        SMOKE <br /> TESTING
                      </h3>
                      <p>
                        Validate the core functionality of your application with
                        our ...{" "}
                      </p>
                      <button href="#" className="" id="servicecard2">
                        {" "}
                        Read More{" "}
                        <img
                          src="\Image\next.png"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </button>{" "}
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
                <Link href="/services/functional">
                  <div
                    className="card mt-4"
                    id="servicecard"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="card-body text-start">
                      <img
                        src="\Image\functional.png"
                        alt=""
                        width={50}
                        height={50}
                        className="mb-4"
                      />
                      <h3>
                        {" "}
                        FUNCTIONAL
                        <br /> TESTING
                      </h3>
                      <p>
                        Ensure your application’s features work as intended ...{" "}
                      </p>
                      <button href="#" className="" id="servicecard2">
                        {" "}
                        Read More{" "}
                        <img
                          src="\Image\next.png"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </button>{" "}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {/* <div className='row'>
                <div className='col-md-4' data-aos="fade-up" data-aos-delay="200">
                  <div className='card mt-4' id='servicecard'>
                    <div className='card-body text-start'>
                      <img src='/Image/clarification.png' alt='' width={50} height={50} className='mb-4' />
                      <h3>MULESOFT <br/> CONSULTING</h3>
                      <p>Our expert consultants offer strategic MuleSoft ...</p>
                      <Link href="/services/consulting"><button href="#" className="" id='servicecard2' >  Read More  <img src='\Image\next.png' alt='' width={18} height={18} /></button>  </Link>

                    </div>
                  </div>
                </div>
                <div className='col-md-4' data-aos="fade-up" data-aos-delay="400">
                  <div className='card mt-4' id='servicecard'>
                  <div className='card-body text-start'>
                      <img src='\Image\developement.png' alt='' width={50} height={50} className='mb-4' />
                      <h3>MULESOFT <br/> DEVELOPMENT  </h3>
                      <p>Our expert consultants offer strategic MuleSoft ...</p>
                      <Link href="/services/developement"><button href="#" className="" id='servicecard2' >   Read More  <img src='\Image\next.png' alt='' width={18} height={18} /></button>  </Link>

                    </div>
                  </div>
                </div>
                <div className='col-md-4' data-aos="fade-up" data-aos-delay="600">
                  <div className='card mt-4' id='servicecard'>
                    <div className='card-body text-start'>
                      <img src='/Image/migration.png' alt='' width={50} height={50} className='mb-4' />
                      <h3>MULE-4 <br/> MIGRATION</h3>
                      <p>Transition smoothly to Mule 4 with our comprehensive ...</p>
                      <Link href="/services/migration"><button href="#" className="" id='servicecard2' >   Read More  <img src='\Image\next.png' alt='' width={18} height={18} /></button>  </Link>

                    </div>
                  </div>
                </div>
              </div>
              <div className=' row '>
                <div className='col-md-4' data-aos="fade-up" data-aos-delay="200">
                  <div className='card mt-4' id='servicecard'>
                    <div className='card-body text-start'>
                      <img src='\Image\integration.png' alt='' width={50} height={50} className='mb-4' />
                      <h3 >MULE B2B <br/> INTEGRATION</h3>
                      <p>Enhance your business collaborations with our ... </p>
                      <Link href="/services/integration"><button href="#" className="" id='servicecard2' >   Read More  <img src='\Image\next.png' alt='' width={18} height={18} /></button>  </Link>

                    </div>
                  </div>
                </div>
                <div className='col-md-4' data-aos="fade-up" data-aos-delay="400">
                  <div className='card mt-4' id='servicecard'>
                    <div className='card-body text-start'>
                      <img src='\Image\support.png' alt='' width={50} height={50} className='mb-4' />
                      <h3>PRODUCTION <br/> SUPPORT</h3>
                      <p>Ensure continuous operations with our dedicated ... </p>
                      <Link href="/services/support"><button href="#" className="" id='servicecard2' >   Read More  <img src='\Image\next.png' alt='' width={18} height={18} /></button>  </Link>

                    </div>
                  </div>
                </div>
                <div className='col-md-4' data-aos="fade-up" data-aos-delay="600">
                  <div className='card mt-4' id='servicecard'>
                    <div className='card-body text-start'>
                      <img src='\Image\testing.png' alt='' width={50} height={50} className='mb-4' />
                      <h3 >FULL-STACK <br/> DEVELOPMENT</h3>
                      <p>Transform your ideas into reality with our full-stack ... </p>
                      <Link href="/services/full-stack"><button href="#" className="" id='servicecard2' >   Read More  <img src='\Image\next.png' alt='' width={18} height={18} /></button>  </Link>

                    </div>
                  </div>
                </div>


              </div>
              <div className=' row '>
                <div className='col-md-4' data-aos="fade-up" data-aos-delay="200">
                  <div className='card mt-4' id='servicecard'>
                    <div className='card-body text-start'>
                      <img src='\Image\full stack.png' alt='' width={50} height={50} className='mb-4' />
                      <h3 >APP DEVELOPMENT <br/> FOR ANDROID & IOS</h3>
                      <p>Reach your audience on any device with our custom ...</p>
                      <Link href="/services/app"><button href="#" className="" id='servicecard2' >   Read More  <img src='\Image\next.png' alt='' width={18} height={18} /></button>  </Link>

                    </div>
                  </div>
                </div>
                <div className='col-md-4' data-aos="fade-up" data-aos-delay="400">
                  <div className='card mt-4' id='servicecard'>
                    <div className='card-body text-start'>
                      <img src='\Image\training.png' alt='' width={50} height={50} className='mb-4' />
                      <h3 > TRAINING &<br/> CERTIFICATION</h3>
                      <p>Empower your team with our specialized training and ... </p>
                      <Link href="/services/certification"><button href="#" className="" id='servicecard2' >   Read More  <img src='\Image\next.png' alt='' width={18} height={18} /></button>  </Link>

                    </div>
                  </div>
                </div>
                <div className='col-md-4' data-aos="fade-up" data-aos-delay="600">
                  <div className='card mt-4' id='servicecard'>
                    <div className='card-body text-start'>
                      <img src='\Image\snaplogic.png' alt='' width={50} height={50} className='mb-4' />
                      <h3 > INTEGRATION & <br/> TESTING</h3>
                      <p>Ensure seamless interaction between different ... </p>
                      <Link href="/services/testing"><button href="#" className="" id='servicecard2' >   Read More  <img src='\Image\next.png' alt='' width={18} height={18} /></button>  </Link>

                    </div>
                  </div>
                </div>

              </div>
              <div className=' row '>
                <div className='col-md-4' data-aos="fade-up" data-aos-delay="200">
                  <div className='card mt-4' id='servicecard'>
                    <div className='card-body text-start'>
                      <img src='\Image\performance.png' alt='' width={50} height={50} className='mb-4' />
                      <h3 >PERFORMANCE <br/> TESTING</h3>
                      <p>Maximize the efficiency of your applications with our ... </p>
                      <Link href="/services/performance"><button href="#" className="" id='servicecard2' >   Read More  <img src='\Image\next.png' alt='' width={18} height={18} /></button>  </Link>

                    </div>
                  </div>
                </div>
                <div className='col-md-4' data-aos="fade-up" data-aos-delay="400">
                  <div className='card mt-4' id='servicecard'>
                    <div className='card-body text-start'>
                      <img src='\Image\security.png' alt='' width={50} height={50} className='mb-4' />
                      <h3>SECURITY <br/> TESTING</h3>
                      <p>Protect your applications from potential threats with our ... </p>
                      <Link href="/services/security"><button href="#" className="" id='servicecard2' >   Read More  <img src='\Image\next.png' alt='' width={18} height={18} /></button>  </Link>

                    </div>
                  </div>
                </div>
                <div className='col-md-4' data-aos="fade-up" data-aos-delay="600">
                  <div className='card mt-4' id='servicecard'>
                    <div className='card-body text-start'>
                      <img src='\Image\automated.png' alt='' width={50} height={50} className='mb-4' />
                      <h3 >AUTOMATION <br/> TESTING</h3>
                      <p>Streamline your testing processes with our advanced ... </p>
                      <Link href="/services/automation"><button href="#" className="" id='servicecard2' >   Read More  <img src='\Image\next.png' alt='' width={18} height={18} /></button>  </Link>

                    </div>
                  </div>
                </div>


              </div>
              <div className=' row '>
                <div className='col-md-4' data-aos="fade-up" data-aos-delay="200">
                  <div className='card mt-4' id='servicecard'>
                    <div className='card-body text-start'>
                      <img src='\Image\software-testing.png' alt='' width={50} height={50} className='mb-4' />
                      <h3 >MANUAL <br/> TESTING</h3>
                      <p>Ensure thorough and accurate evaluation of your ...</p>
                      <Link href="/services/manual"><button href="#" className="" id='servicecard2' >   Read More  <img src='\Image\next.png' alt='' width={18} height={18} /></button>  </Link>

                    </div>
                  </div>
                </div>
                <div className='col-md-4' data-aos="fade-up" data-aos-delay="400">
                  <div className='card mt-4' id='servicecard'>
                    <div className='card-body text-start'>
                      <img src='\Image\test.png' alt='' width={50} height={50} className='mb-4' />
                      <h3 > SMOKE <br/> TESTING</h3>
                      <p>Validate the core functionality of your application with our ... </p>
                      <Link href="/services/smoke"><button href="#" className="" id='servicecard2' >   Read More  <img src='\Image\next.png' alt='' width={18} height={18} /></button>  </Link>

                    </div>
                  </div>
                </div>
                <div className='col-md-4' data-aos="fade-up" data-aos-delay="600">
                  <div className='card mt-4' id='servicecard'>
                    <div className='card-body text-start'>
                      <img src='\Image\functional.png' alt='' width={50} height={50} className='mb-4' />
                      <h3 > FUNCTIONAL<br/> TESTING</h3>
                      <p>Ensure your application’s features work as intended ... </p>
                      <Link href="/services/functional"><button href="#" className="" id='servicecard2' >   Read More  <img src='\Image\next.png' alt='' width={18} height={18} /></button>  </Link>

                    </div>
                  </div>
                </div>

              </div> */}

            {/* <div className='row'>
                <div className='col-md-4' data-aos="fade-up" data-aos-delay="200">
                  <div className='card mt-4' id='servicecard'>
                    <div className='card-body text-start'>
                      <img src='/Image/clarification.png' alt='' width={50} height={50} className='mb-4' />
                      <h3>MULESOFT <br/> CONSULTING</h3>
                      <p>Our team will suggest an optimised and budgeted...</p>
                      <Link href="/services/consulting"><button href="#" className="" id='servicecard2' >  Read More  <img src='\Image\next.png' alt='' width={18} height={18} /></button>  </Link>

                    </div>
                  </div>
                </div>
                <div className='col-md-4' data-aos="fade-up" data-aos-delay="400">
                  <div className='card mt-4' id='servicecard'>
                  <div className='card-body text-start'>
                      <img src='\Image\developement.png' alt='' width={50} height={50} className='mb-4' />
                      <h3>MULESOFT <br/> DEVELOPMENT  </h3>
                      <p>Our sturdy integration and API development techniques...</p>
                      <Link href="/services/developement"><button href="#" className="" id='servicecard2' >   Read More  <img src='\Image\next.png' alt='' width={18} height={18} /></button>  </Link>

                    </div>
                  </div>
                </div>
                <div className='col-md-4' data-aos="fade-up" data-aos-delay="600">
                  <div className='card mt-4' id='servicecard'>
                    <div className='card-body text-start'>
                      <img src='/Image/migration.png' alt='' width={50} height={50} className='mb-4' />
                      <h3>MULE-4 <br/> MIGRATION</h3>
                      <p>Our guidance ensures fast adoption of the API-led...</p>
                      <Link href="/services/migration"><button href="#" className="" id='servicecard2' >   Read More  <img src='\Image\next.png' alt='' width={18} height={18} /></button>  </Link>

                    </div>
                  </div>
                </div>
              </div> */}

            {/* <div className=' row '>
                <div className='col-md-4' data-aos="fade-up" data-aos-delay="200">
                  <div className='card mt-4' id='servicecard'>
                    <div className='card-body text-start'>
                      <img src='\Image\integration.png' alt='' width={50} height={50} className='mb-4' />
                      <h3 >MULE B2B <br/> INTEGRATION</h3>
                      <p>To enable independently designed applications to work... </p>
                      <Link href="/services/integration"><button href="#" className="" id='servicecard2' >   Read More  <img src='\Image\next.png' alt='' width={18} height={18} /></button>  </Link>

                    </div>
                  </div>
                </div>
                <div className='col-md-4' data-aos="fade-up" data-aos-delay="400">
                  <div className='card mt-4' id='servicecard'>
                    <div className='card-body text-start'>
                      <img src='\Image\support.png' alt='' width={50} height={50} className='mb-4' />
                      <h3>PRODUCTION <br/> SUPPORT</h3>
                      <p>We keep the show running with our expert assistance... </p>
                      <Link href="/services/support"><button href="#" className="" id='servicecard2' >   Read More  <img src='\Image\next.png' alt='' width={18} height={18} /></button>  </Link>

                    </div>
                  </div>
                </div>
                <div className='col-md-4' data-aos="fade-up" data-aos-delay="600">
                  <div className='card mt-4' id='servicecard'>
                    <div className='card-body text-start'>
                      <img src='\Image\testing.png' alt='' width={50} height={50} className='mb-4' />
                      <h3 >PERFORMANCE <br/> TESTING</h3>
                      <p>With our performance testing we identify performance issues... </p>
                      <Link href="/services/testing"><button href="#" className="" id='servicecard2' >   Read More  <img src='\Image\next.png' alt='' width={18} height={18} /></button>  </Link>

                    </div>
                  </div>
                </div>


              </div> */}

            {/* <div className=' row '>
                <div className='col-md-4' data-aos="fade-up" data-aos-delay="200">
                  <div className='card mt-4' id='servicecard'>
                    <div className='card-body text-start'>
                      <img src='\Image\full stack.png' alt='' width={50} height={50} className='mb-4' />
                      <h3 >FULL-STACK <br/> DEVELOPMENT</h3>
                      <p>Creating seamless web experiences, from server to...</p>
                      <Link href="/services/web-development"><button href="#" className="" id='servicecard2' >   Read More  <img src='\Image\next.png' alt='' width={18} height={18} /></button>  </Link>

                    </div>
                  </div>
                </div>
                <div className='col-md-4' data-aos="fade-up" data-aos-delay="400">
                  <div className='card mt-4' id='servicecard'>
                    <div className='card-body text-start'>
                      <img src='\Image\snaplogic.png' alt='' width={50} height={50} className='mb-4' />
                      <h3 > SNAPLOGIC <br/> PLATFORM</h3>
                      <p>Streamline your integration needs with SnapLogic's powerful... </p>
                      <Link href="/services/platform"><button href="#" className="" id='servicecard2' >   Read More  <img src='\Image\next.png' alt='' width={18} height={18} /></button>  </Link>

                    </div>
                  </div>
                </div>
                <div className='col-md-4' data-aos="fade-up" data-aos-delay="600">
                  <div className='card mt-4' id='servicecard'>
                    <div className='card-body text-start'>
                      <img src='\Image\training.png' alt='' width={50} height={50} className='mb-4' />
                      <h3 > TRAINING & <br/> CERTIFICATION</h3>
                      <p>Unlock your potential with our comprehensive training... </p>
                      <Link href="/services/certification"><button href="#" className="" id='servicecard2' >   Read More  <img src='\Image\next.png' alt='' width={18} height={18} /></button>  </Link>

                    </div>
                  </div>
                </div>

              </div> */}
              </div>
          </div>
        </div>

        {/* 2nd Module Ends */}
        {/* 3rd Module start */}
        <div
          className="col-md-12"
          id="sect"
          style={{ backgroundColor: "#f8f8f8" }}
        >
          <div className="container">
            <div className="row">
              <div
                className="col-md-5"
                id="team-section"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h4>WHO WE ARE</h4>
                <h2>Transforming Today, Shaping Tomorrow</h2>
                <p>
                  Our venture aims to develop innovative and transformative
                  technology-based products or services. We identify ourselves
                  in the market with unique ideas and solutions. We often
                  operate with a lean structure and a fast-paced culture, which
                  enables us to quickly pivot our strategies and adapt to
                  changing market conditions.
                </p>
                <div>
                      <h5>Mulesoft</h5>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="95"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <h5 className="mt-4">Q&A Testing</h5>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                    </div>
                <div>
                  <h5 className="mt-4">DATABRICKS</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <h5 className="mt-4">SNOWFLAKE</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <h5 className="mt-4">FULL STACK WEB DEVELOPEMENT</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <h5 className="mt-4">DIGITAL MARKETING</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <h5 className="mt-4">UI/UX DESIGN</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <h5 className="mt-4 ">APP DEVELOPEMENT</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-md-7" data-aos="fade-up" data-aos-delay="200">
                <img
                  src="\Image\services-single-img2.jpg"
                  alt=""
                  className=""
                  id="progresspic"
                />
              </div>
            </div>
          </div>
        </div>
        {/* 3rd Module end */}
        {/*4th Module Starts */}
        <div className="col-md-12" id="sect">
          <div className="container">
            <div className="row text-center">
              <h4>OUR PROCESS</h4>
              <h2>Our Project Development Process</h2>
              <p>We follow a robust and fast-paced development process.</p>
            </div>

            <div className="row nav nav-tabs" id="myTab" role="tablist">
              <div className="col-md-3" data-aos="fade-up">
                <div className="card mt-4 ">
                  <div
                    className="card-body text-center nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    <img
                      src="\Image\design.png"
                      alt=""
                      width={40}
                      height={40}
                      className="mb-2 mt-2"
                    />
                    <li className="nav-item" role="presentation">
                      <h3>Design</h3>
                    </li>
                  </div>
                </div>
              </div>

              <div className="col-md-3" data-aos="fade-up" data-aos-delay="200">
                <div className="card mt-4 ">
                  <div
                    className="card-body text-center nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    <img
                      src="\Image\develope.png"
                      alt=""
                      width={40}
                      height={40}
                      className="mb-2 mt-2"
                    />

                    <li className="nav-item" role="presentation">
                      <h3>Develop</h3>
                    </li>
                  </div>
                </div>
              </div>

              <div className="col-md-3" data-aos="fade-up" data-aos-delay="400">
                <div className="card mt-4">
                  <div
                    className="card-body text-center nav-link"
                    id="messages-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#messages"
                    type="button"
                    role="tab"
                    aria-controls="messages"
                    aria-selected="false"
                  >
                    <img
                      src="\Image\testing1.png"
                      alt=""
                      width={40}
                      height={40}
                      className="mb-2 mt-2"
                    />

                    <li className="nav-item" role="presentation">
                      <h3>Test</h3>
                    </li>
                  </div>
                </div>
              </div>

              <div className="col-md-3" data-aos="fade-up" data-aos-delay="600">
                <div className="card mt-4">
                  <div
                    className="card-body text-center nav-link"
                    id="settings-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#settings"
                    type="button"
                    role="tab"
                    aria-controls="settings"
                    aria-selected="false"
                  >
                    <div className="text-center">
                      <img
                        src="\Image\deployment.png"
                        alt=""
                        width={40}
                        height={40}
                        className="mb-2 mt-2"
                      />
                    </div>
                    <li className="nav-item" role="presentation">
                      <h3>Deploy</h3>
                    </li>
                  </div>
                </div>
              </div>
            </div>

            <div className="tab-content">
              <div
                className="tab-pane active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabIndex="0"
              >
                <div className="card mt-4">
                  <div className="card-body ">
                    <div className="row ">
                      <div
                        className="col-md-6"
                        id="projecttab"
                        data-aos="fade-right"
                        data-aos-delay="600"
                      >
                        <h2>Design</h2>
                        <p>
                          API design is a crucial aspect of software development
                          that involves creating a clear and consistent set of
                          rules for communication between different software
                          components. A well-designed API can help to improve
                          the usability, maintainability, and scalability of
                          software systems. It involves the identification,
                          documentation, validation, and management of
                          requirements to ensure that the final product meets
                          the desired quality and functionality.
                        </p>
                      </div>
                      <div
                        className="col-md-6"
                        data-aos="fade-left"
                        data-aos-delay="600"
                      >
                        <img
                          src="\Image\design2.png"
                          alt=""
                          width={540}
                          height={540}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabIndex="0"
              >
                <div className="card mt-4">
                  <div className="card-body ">
                    <div className="row ">
                      <div
                        className="col-md-6"
                        id="projecttab"
                        data-aos="fade-right"
                        data-aos-delay="600"
                      >
                        <h2>Develop</h2>
                        <p>
                          It is a systematic approach to building software
                          applications that involves a series of phases, each
                          with its own set of activities and goals. The software
                          is developed based on the approved design. It involves
                          building seamless connections through a comprehensive
                          development approach. From concept to creation, our
                          development process ensures your success.
                        </p>
                      </div>
                      <div
                        className="col-md-6"
                        data-aos="fade-left"
                        data-aos-delay="600"
                      >
                        <img
                          src="\Image\art-development2.png"
                          alt=""
                          width={540}
                          height={540}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane"
                id="messages"
                role="tabpanel"
                aria-labelledby="messages-tab"
                tabIndex="0"
              >
                <div className="card mt-4">
                  <div className="card-body ">
                    <div className="row ">
                      <div
                        className="col-md-6"
                        id="projecttab"
                        data-aos="fade-right"
                        data-aos-delay="600"
                      >
                        <h2>Test</h2>
                        <p>
                          Once the software has been developed, it is necessary
                          to test it to ensure that it meets the requirements
                          and is free of errors. Testing can include unit
                          testing, integration testing, system testing,
                          performance testing and acceptance testing. We ensure
                          that quality assurance is at its best, thereby
                          streamlining the Software Testing process for
                          error-free solutions.
                        </p>
                      </div>
                      <div
                        className="col-md-6"
                        data-aos="fade-left"
                        data-aos-delay="600"
                      >
                        <img
                          src="\Image\test2.png"
                          alt=""
                          width={540}
                          height={540}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane"
                id="settings"
                role="tabpanel"
                aria-labelledby="settings-tab"
                tabIndex="0"
              >
                <div className="card mt-4">
                  <div className="card-body ">
                    <div className="row ">
                      <div
                        className="col-md-6"
                        id="projecttab"
                        data-aos="fade-right"
                        data-aos-delay="600"
                      >
                        <h2>Deploy</h2>
                        <p>
                          Once the software has passed testing, it can be
                          deployed to the production environment. This involves
                          configuring the software, installing it on servers or
                          devices, and making it available to users. After the
                          software has been deployed, it is necessary to
                          maintain it. This involves fixing bugs, updating
                          software components, and adding new features as
                          required. Our deployment process gets your software up
                          and running in no time.
                        </p>
                      </div>
                      <div
                        className="col-md-6"
                        data-aos="fade-left"
                        data-aos-delay="600"
                      >
                        <img
                          src="\Image\deploy2.png"
                          alt=""
                          width={540}
                          height={540}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*4th Module Ends */}
        {/*5th Module Starts */}
        <div className="col-md-12" id="sect">
          <div className="container">
            <div className="row text-center">
              <h4>OUR FAQ'S</h4>
              <h2>Frequently Ask Questions</h2>
              <p>We follow a robust and fast-paced development process.</p>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample1"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        What is MuleSoft and how does Dwinsoft utilize it?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample1"
                    >
                      <div className="accordion-body">
                        MuleSoft is a leading integration platform that allows
                        businesses to connect and integrate disparate systems,
                        applications, and data sources. At Dwinsoft, we leverage
                        MuleSoft's capabilities to create seamless integrations
                        that enable data flow and communication between various
                        systems within your enterprise.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        What benefits does MuleSoft integration offer to
                        businesses?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample1"
                    >
                      <div className="accordion-body">
                        MuleSoft integration offers numerous benefits including
                        improved efficiency, streamlined processes, enhanced
                        data visibility, faster time-to-market for new
                        initiatives, reduced IT complexity, and increased
                        scalability to support business growth.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        How does Dwinsoft approach MuleSoft integration
                        projects?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample1"
                    >
                      <div className="accordion-body">
                        At Dwinsoft, we approach MuleSoft integration projects
                        by first understanding your business needs, existing
                        systems, and integration requirements. We then design
                        and implement tailor-made integration strategies using
                        MuleSoft's platform, ensuring seamless connectivity and
                        optimal performance.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample2"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        What industries can benefit from Dwinsoft's MuleSoft
                        integration services?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingFour"
                      data-bs-parent="#accordionFlushExample2"
                    >
                      <div className="accordion-body">
                        Dwinsoft's MuleSoft integration services are beneficial
                        for businesses across various industries including
                        healthcare, finance, retail, manufacturing,
                        telecommunications, and more. Any organization looking
                        to streamline operations, improve data accessibility,
                        and drive digital transformation can benefit from our
                        services.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFive"
                        aria-expanded="false"
                        aria-controls="flush-collapseFive"
                      >
                        Do I need technical expertise to implement MuleSoft
                        integration with Dwinsoft?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingFive"
                      data-bs-parent="#accordionFlushExample2"
                    >
                      <div className="accordion-body">
                        No, you don't need technical expertise to implement
                        MuleSoft integration with Dwinsoft. Our team of
                        certified MuleSoft experts handles the entire
                        integration process, from initial planning and design to
                        implementation, testing, and ongoing support, ensuring a
                        smooth and successful integration experience for your
                        business.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseSix"
                        aria-expanded="false"
                        aria-controls="flush-collapseSix"
                      >
                        How can I get started with Dwinsoft's MuleSoft
                        integration services?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingSix"
                      data-bs-parent="#accordionFlushExample2"
                    >
                      <div className="accordion-body">
                        Getting started with Dwinsoft's MuleSoft integration
                        services is easy. Simply reach out to us through our
                        website or contact our sales team directly. We'll
                        schedule a consultation to discuss your integration
                        needs, assess your current infrastructure, and propose a
                        customized integration solution using MuleSoft's
                        platform.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*5th Module end */}

        {/*8th Module Start */}
        <div
          className="col-md-12"
          id="sect"
          style={{ backgroundImage: "url('/Image/USA_b825b876e9.jpg')" }}
        >
          <div className="container">
            <div className="row text-center">
              <h4 style={{ color: "white" }}>OUR CLIENTS</h4>
              <h2 style={{ color: "white" }}>What Our Clients Say </h2>
            </div>
            <div className="row mt-4 ">
              <Swiper
                breakpoints={{
                  768: {
                    width: 768,
                    slidesPerView: 2,
                  },
                  1024: {
                    width: 1024,
                    slidesPerView: 2,
                  },
                }}
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={0} // Ensure no space between slides
                slidesPerView={1}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true} // Fill blanks for smooth loop
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{
                  delay: 1, // Minimal delay for continuous movement
                  disableOnInteraction: false,
                }}
                speed={3000} // Adjust speed for smooth transition
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <SwiperSlide>
                  <div className="container-lg">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="card mb-4">
                          <div
                            className="d-flex justify-content-between"
                            id="testimonial1"
                          >
                            <div>
                              <h3>John D</h3>
                              <p>CTO at Tech Innovations Inc.</p>
                            </div>
                            <div>
                              <img
                                src="\Image\testimonial.png"
                                alt=""
                                width={60}
                                height={60}
                                className="mb-2"
                              />
                            </div>
                          </div>
                          <div id="testimonial2" style={{height: "33vh"}}>
                            <p>
                              "Our integration process became seamless after
                              using APIs from dwinsoft. The documentation was
                              clear, and the support team was incredibly
                              responsive. This has reduced our development time,
                              allowing us to focus on innovation."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                  <div className="container-lg">
                    <div className="row ">
                      <div className="col-md-12">
                        <div className="card mb-4">
                          <div
                            className="d-flex justify-content-between"
                            id="testimonial1"
                          >
                            <div>
                              <h3>Emily S</h3>
                              <p>Lead Developer at Fintech Solutions</p>
                            </div>
                            <div>
                              <img
                                src="\Image\testimonial.png"
                                alt=""
                                width={60}
                                height={60}
                                className="mb-2"
                              />
                            </div>
                          </div>
                          <div id="testimonial2" style={{height: "33vh"}}>
                            <p>
                              "We switched to dwinsoft's APIs for their
                              reliability and speed. The performance
                              improvements were noticeable immediately, and our
                              clients appreciate the enhanced service
                              quality.Highly recommend these APIs."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide> */}
                <SwiperSlide>
                  <div className="container-lg">
                    <div className="row ">
                      <div className="col-md-12">
                        <div className="card mb-4">
                          <div
                            className="d-flex justify-content-between"
                            id="testimonial1"
                          >
                            <div>
                              <h3>Michael R</h3>
                              <p>Head of Product at E-commerce Experts</p>
                            </div>
                            <div>
                              <img
                                src="\Image\testimonial.png"
                                alt=""
                                width={60}
                                height={60}
                                className="mb-2"
                              />
                            </div>
                          </div>
                          <div id="testimonial2" style={{height: "33vh"}}>
                            <p>
                              "The range of APIs offered by dwinsoft is
                              outstanding. They have allowed us to expand our
                              product offerings without the headache of
                              developing from scratch. The customer support has
                              been exceptional."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>{" "}
                <SwiperSlide>
                  <div className="container-lg">
                    <div className="row ">
                      <div className="col-md-12">
                        <div className="card mb-4">
                          <div
                            className="d-flex justify-content-between"
                            id="testimonial1" 
                          >
                            <div>
                              <h3>Sarah L</h3>
                              <p>Founder & CEO of Startup Hub</p>
                            </div>
                            <div>
                              <img
                                src="\Image\testimonial.png"
                                alt=""
                                width={60}
                                height={60}
                                className="mb-2"
                              />
                            </div>
                          </div>
                          <div id="testimonial2" style={{height: "33vh"}}>
                            <p>
                              "As a startup, efficiency is crucial for us.
                              dwinsoft's APIs have been a game-changer,
                              providing robust solutions that are easy to
                              implement. Their scalability ensures that we can
                              grow without worrying about our backend systems."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        {/*8th Module End */}
        {/*9th Module start */}
        <div className="col-md-12" id="sect">
          <div className="container">
            <div className="row" id="mobilecenter">
              <div className="col-md-8">
                <h4>RECENT ARTICLES</h4>
                <h2>Read Our Latest Articles & Knowledge </h2>
              </div>
              <div
                className="col-md-4 d-flex justify-content-end align-items-center"
                id="bannerbutton"
              >
                <Link href="/blogs">
                  <button className="btn btn-secondary">All Articles</button>
                </Link>
              </div>
            </div>
            <div
              className="row"
              style={{
                background:
                  "radial-gradient(circle closest-side, rgba(76, 129, 197, 0.8), rgba(108, 164, 233, 0.3), rgba(255, 255, 255, 0.1))",
              }}
            >
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <div
                  className="card mt-4"
                  id="boxtagcard"
                  style={{ display: "flex", width: "100%" }}
                >
                  <img
                    src="https://s3devtestuser.s3.ap-south-1.amazonaws.com/dwinsoft/1711027646220-sunset-1373171_1280.jpg"
                    alt=""
                  />

                  <div className="card-body" style={{ marginRight: "20px" }}>
                    <div className="d-flex">
                      {/* <div className='col-md-6'>
                          <h4 id='boxtag' className='text-center me-2'>TECHNOLOGY</h4>
                        </div>
                        <div className='col-md-6'>
                          <h4 id='boxtag' className='text-center me-2'>TECHNOLOGY</h4>
                        </div> */}
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="col-md-4">
                        <p>Thu Mar21 2024</p>
                      </div>
                      <div className="col-md-4">
                        {/* <p>
                          <img
                            src="\Image\conversation.png"
                            alt=""
                            width={15}
                            height={15}
                          />{" "}
                          0
                        </p> */}
                      </div>
                    </div>
                    <h3>this blog is about</h3>
                    <p>this blog is about business</p>

                    <Link href="">
                      <button href="" className="" id="servicecard2">
                        {" "}
                        READ MORE{" "}
                        <img
                          src="\Image\next.png"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </button>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                <div className="card mt-4" id="boxtagcard">
                  <img
                    src="https://s3devtestuser.s3.ap-south-1.amazonaws.com/dwinsoft/1711027671441-sunset-1373171_1280.jpg"
                    alt=""
                  />

                  <div className="card-body ">
                    <div className="d-flex">
                      {/* <div className='col-md-6'>
                          <h4 id='boxtag' className='text-center me-2'>TECHNOLOGY</h4>
                        </div>
                        <div className='col-md-6'>
                          <h4 id='boxtag' className='text-center me-2'>TECHNOLOGY</h4>
                        </div> */}
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="col-md-4">
                        <p>Thu Mar 21 2024</p>
                      </div>
                      <div className="col-md-4">
                        {/* <p>
                          <img
                            src="\Image\conversation.png"
                            alt=""
                            width={15}
                            height={15}
                          />{" "}
                          0
                        </p> */}
                      </div>
                    </div>
                    <h3>This is startups</h3>
                    <p>Short description</p>
                    <Link href="">
                      <button href="" className="" id="servicecard2">
                        {" "}
                        READ MORE{" "}
                        <img
                          src="\Image\next.png"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </button>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
                <div className="card mt-4" id="boxtagcard">
                  <img
                    src="https://s3devtestuser.s3.ap-south-1.amazonaws.com/dwinsoft/1711027671441-sunset-1373171_1280.jpg"
                    alt=""
                  />

                  <div className="card-body ">
                    <div className="d-flex">
                      {/* <div className='col-md-6'>
                          <h4 id='boxtag' className='text-center me-2'>TECHNOLOGY</h4>
                        </div>
                        <div className='col-md-6'>
                          <h4 id='boxtag' className='text-center me-2'>TECHNOLOGY</h4>
                        </div> */}
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="col-md-4">
                        <p>Thu Mar 21 2024</p>
                      </div>
                      <div className="col-md-4 ">
                        {/* <p>
                          <img
                            src="\Image\conversation.png"
                            alt=""
                            width={15}
                            height={15}
                          />{" "}
                          0
                        </p> */}
                      </div>
                    </div>
                    <h3>This blog is about</h3>
                    <p>short description</p>

                    <Link href="">
                      <button href="" className="" id="servicecard2">
                        {" "}
                        READ MORE{" "}
                        <img
                          src="\Image\next.png"
                          alt=""
                          width={18}
                          height={18}
                        />
                      </button>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            {/* <ul className="pagination">
                  {data.length > postsPerPage &&
                    Array.from({ length: Math.ceil(data.length / postsPerPage) }).map((_, index) => (
                      <li key={index} className={currentPage === index + 1 ? 'active' : ''}>
                        <button onClick={() => paginate(index + 1)}>{index + 1}</button>
                      </li>
                    ))}
                </ul> */}
          </div>
        </div>
        {/*9th Module end */}
        {/*10th Module start */}
        {/* <div className="col-md-12" id="minisect">
          <div className="container">
            <Swiper
              breakpoints={{
                768: {
                  width: 768,
                  slidesPerView: 3,
                },
                1024: {
                  width: 1024,
                  slidesPerView: 4,
                },
              }}
              modules={[Navigation, Pagination, A11y, Autoplay]}
              spaceBetween={0} // Ensure no space between slides
              slidesPerView={1}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true} // Fill blanks for smooth loop
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              autoplay={{
                delay: 1, // Minimal delay for continuous movement
                disableOnInteraction: false,
              }}
              speed={3000} // Adjust speed for smooth transition
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <div className="container-lg">
                  <div className="row text-center">
                    <div className="col-md-12">
                      <img
                        src="/Image/cloudpaths.png"
                        alt=""
                        width={180}
                        height={180}
                        className="mb-2 grayscale"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container-lg">
                  <div className="row text-center">
                    <div className="col-md-12">
                      <img
                        src="/Image/tekisticLogo.png"
                        alt=""
                        width={180}
                        height={180}
                        className="mb-2 grayscale"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container-lg">
                  <div className="row text-center">
                    <div className="col-md-12">
                      <img
                        src="/Image/wiproLogo.png"
                        alt=""
                        width={180}
                        height={180}
                        className="mb-2 grayscale"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container-lg">
                  <div className="row text-center">
                    <div className="col-md-12">
                      <img
                        src="/Image/carltonLogo.png"
                        alt=""
                        width={180}
                        height={180}
                        className="mb-2 grayscale"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container-lg">
                  <div className="row text-center">
                    <div className="col-md-12">
                      <img
                        src="/Image/cloudpaths.png"
                        alt=""
                        width={180}
                        height={180}
                        className="mb-2 grayscale"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container-lg">
                  <div className="row text-center">
                    <div className="col-md-12">
                      <img
                        src="/Image/tekisticLogo.png"
                        alt=""
                        width={180}
                        height={180}
                        className="mb-2 grayscale"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container-lg">
                  <div className="row text-center">
                    <div className="col-md-12">
                      <img
                        src="/Image/wiproLogo.png"
                        alt=""
                        width={180}
                        height={180}
                        className="mb-2 grayscale"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container-lg">
                  <div className="row text-center">
                    <div className="col-md-12">
                      <img
                        src="/Image/carltonLogo.png"
                        alt=""
                        width={180}
                        height={180}
                        className="mb-2 grayscale"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div> */}
        {/*10th Module end */}
      </div>
    </Layout>
  );
}

export default Services;
