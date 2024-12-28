"use client";

import Layout from "@/app/modules/layouts/common/page";
import React, { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Link from "next/link";
// import Image from 'next/image';

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import axios from "axios";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function ServiceDetail() {
  // Animation
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);

  const Counter = ({ end, duration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const endNumber = parseInt(end);
      if (start === endNumber) return;

      let incrementTime = (duration / endNumber) * 1000;

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === endNumber) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }, [end, duration]);

    return <h8>{count}</h8>;
  };


  // Animation

  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseAuthor = await axios.post(
          "http://localhost:8081/blogs/authentication",
          {
            email: "dwinsoftAdmin@gmail.com",
            password: "Blueiscolor4.",
          }
        );

        const newToken = responseAuthor.data.token;

        // Set up headers with the access token
        const headers = {
          Authorization: `Bearer ${newToken}`,
        };
        console.log(headers);

        // Make the API call

        const list_response = await axios.get(
          "http://localhost:8081/api/service-details/list/admin",
          // "http://testbackend.dwinsoft.in/blogs/user/blog/list",
          { headers }
        );
        console.log(list_response);
        setList(list_response.data);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  console.log(list);

  return (
    <Layout>
      <div className="service-detail container-fluid">
        {/* 1st Module Starts */}
        <div className="row">
          {/* <div className='col-md-12 full-length-bg' id='bannersection'  style={{ backgroundImage: "url('/Image/header-page-bg.jpg')" }}> */}
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
                    <h1 style={{ color: "white" }}>Integration Testing</h1>
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
                      Services Details
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
          className="col-md-12"
          id="sect"
          style={{ backgroundImage: "url('/Image/services-bg-2.png')" }}
        >
          <div
            className="container"
            style={{
              background:
                "radial-gradient(circle closest-side, rgba(76, 129, 197, 0.8), rgba(108, 164, 233, 0.3), rgba(255, 255, 255, 0.1))",
            }}
          >
            {/* <div className='col-md-12 text-center'> */}
            <div className="row ">
              <div className="col-md-3" data-aos="fade-up" data-aos-delay="">
                <h4>SERVICES</h4>
                <h2>Integration Testing</h2>
              </div>
              <div className="col-md-9" data-aos="fade-up" data-aos-delay="200">
                <p>
                our Integration Testing Services are designed to ensure the highest quality and reliability of your integration solutions. We employ a comprehensive testing approach that includes functional, performance, and security testing of your APIs and integrations, verifying that all components work together seamlessly. Our experienced QA team utilizes industry-leading tools and methodologies to identify and resolve issues early in the development process, ensuring that your integration solutions meet business requirements and perform optimally in real-world scenarios. With our rigorous testing practices, we help you deliver robust, error-free integrations that enhance your business operations and improve user satisfaction.

                </p>
              </div>
            </div>
            {/* </div> */}
            <div className="row">
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
            {/* <div className="row">
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
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
              </div>
            </div>

            <div className=" row ">
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
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
              </div>
            </div>

            <div className=" row ">
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <div className="card mt-4" id="servicecard">
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
                    <p>Reach your audience on any device with our custom ...</p>
                    <Link href="/services/app">
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
                    <Link href="/services/certification">
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
                    <Link href="/services/testing">
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
            </div>

            <div className=" row ">
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <div className="card mt-4" id="servicecard">
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
                      Maximize the efficiency of your applications with our ...{" "}
                    </p>
                    <Link href="/services/performance">
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
                      Protect your applications from potential threats with our
                      ...{" "}
                    </p>
                    <Link href="/services/security">
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
                    <Link href="/services/automation">
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
            </div>

            <div className=" row ">
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <div className="card mt-4" id="servicecard">
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
                    <Link href="/services/manual">
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
                    <Link href="/services/smoke">
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
                    <Link href="/services/functional">
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
            </div> */}
          </div>
        </div>
        {/* 2nd Module Ends */}
        {/*3rd Module Starts */}
        <div className="col-md-12" id="sect">
          <div
            className="container"
            id="sect2"
            style={{
              backgroundImage: "url('/Image/img1.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className=" row " id="coverborder">
              {/* <div className=''> */}
              <div className="col-md-6 ">
                <h4 style={{ color: "white" }}>
                  Why Do You Need a Business Application?
                </h4>
                <h2 style={{ color: "white" }}>
                  Let's Build Your Application!
                </h2>
              </div>
              <div
                className="col-md-6 d-flex justify-content-end align-items-center"
                id="bannerbutton"
              >
                <Link href="/contact">
                  <button className="btn btn-light">Contact Us </button>
                </Link>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        {/*3rd Module Ends */}
        {/*4th Module Starts */}
        <div
          className="col-md-12"
          id="sect"
          style={{
            backgroundImage: "url('/Image/bg1.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
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
        {/*5th Module Start */}
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
        <div className="col-md-12" id="minisect">
              <div className="container">
                <div className="row">
                  <div
                    className="col-md-3 text-center mt-4"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <img
                      src="/Image/happy.png"
                      alt=""
                      width={50}
                      height={50}
                      className="mb-2"
                    />
                    <div className="d-flex justify-content-center">
                      <Counter end={15} duration={2} />
                      <div>
                        <h2 id="symbol">+</h2>
                      </div>
                    </div>
                    <h6>Happy Clients</h6>
                  </div>
                  <div
                    className="col-md-3 text-center mt-4"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <img
                      src="/Image/group.png"
                      alt=""
                      width={50}
                      height={50}
                      className="mb-2"
                    />
                    <div className="d-flex justify-content-center">
                      <Counter end={30} duration={3} />
                      <div>
                        <h2 id="symbol">+</h2>
                      </div>
                    </div>
                    <h6>Tech Specialist</h6>
                  </div>
                  <div
                    className="col-md-3 text-center mt-4"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <img
                      src="/Image/start-up.png"
                      alt=""
                      width={50}
                      height={50}
                      className="mb-2"
                    />
                    <div className="d-flex justify-content-center">
                      <Counter end={20} duration={2.5} />
                      <div>
                        <h2 id="symbol">+</h2>
                      </div>
                    </div>
                    <h6>Projects Delivered</h6>
                  </div>
                  <div
                    className="col-md-3 text-center mt-4"
                    data-aos="fade-up"
                    data-aos-delay="800"
                  >
                    <img
                      src="/Image/trophy.png"
                      alt=""
                      width={50}
                      height={50}
                      className="mb-2"
                    />
                    <div className="d-flex justify-content-center">
                      <Counter end={5} duration={1.5} />
                      <div>
                        <h2 id="symbol">+</h2>
                      </div>
                    </div>
                    <h6>Years of Experience</h6>
                  </div>
                </div>
              </div>
            </div>
        {/*5th Module End */}
        {/*6th Module start */}
        {/* <div className="col-md-12" id="">
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
        {/*6th Module end */}
      </div>
    </Layout>
  );
}

export default ServiceDetail;
