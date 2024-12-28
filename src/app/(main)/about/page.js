"use client";

import Layout from "@/app/modules/layouts/common/page";
import React from "react";
import Link from "next/link";
// import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function About() {
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

  // Tab
  const [activeTab, setActiveTab] = useState("home");

  const changeImage = (tab) => {
    setActiveTab(tab);
  };

  // Tab

  // Progress Bar

  useEffect(() => {
    const section = document.querySelector("#team-section");
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

    // const section = document.querySelector('#team-section');
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
      <div className="about-page container-fluid">
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
                backgroundImage: "url('/Image/aboutus.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: -1,
              }}
            ></div>

            <div className="container">
              <div className="row">
                <div className="col-md-6 ">
                  <div id="bannerhead">
                    <h1 style={{ color: "white" }}>About Us </h1>
                  </div>
                </div>
                <div className="col-md-6 text-end">
                  <div className="bannertext">
                    <h6>
                      {" "}
                      <Link href="/">
                        <button href="#" className="" id="allbanner">
                          {" "}
                          Home /
                        </button>
                      </Link>
                      About Us
                    </h6>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* 1st Module ends */}
        {/* 2nd Module start */}
        <div className="col-md-12" id="sect">
          <div className="container">
            <div className="row">
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="">
                <img
                  src="\Image\about-us-2.png.webp"
                  alt=""
                  className="mb-4"
                  id="aboutpic"
                />
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="row text-start">
                  <h4>WHO WE ARE</h4>
                  <h2>Transforming Today, Shaping Tomorrow</h2>
                  <h7>
                    Dwinsoft delivers high quality, reliable, and cost-effective
                    IT services to customers globally.
                  </h7>
                  <p id="aboutaligntext">
                    Our venture aims to develop innovative and transformative
                    technology-based products or services. We identify ourselves
                    in the market with unique ideas and solutions. We often
                    operate with a lean structure and a fast-paced culture,
                    which enables us to quickly pivot our strategies and adapt
                    to changing market conditions.
                  </p>
                  <div>
                    <Link href="/contact">
                      {" "}
                      <button className="btn btn-secondary">Contact Us</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd Module end */}
        {/* 3rd Module start */}
        <div className="col-md-12" id="sect">
          <div className="container">
            <div className=" row ">
              <div
                className="col-md-4 "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="d-flex gap-4">
                  <div>
                    <img
                      src="\Image\innovation.png"
                      alt=""
                      width={160}
                      height={160}
                      className="mt-3"
                    />
                  </div>
                  <div>
                    <h3>Innovative and Creative Environment</h3>
                    <p>
                      We foster an innovative and creative environment that
                      encourages our employees to think outside the box and
                      bring new ideas to the table...{" "}
                    </p>
                    <Link href="/services">
                      <button href="#" className="" id="servicecard2">
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
              <div
                className="col-md-4 "
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="d-flex gap-4">
                  <div>
                    <img
                      src="\Image\technology.png"
                      alt=""
                      width={160}
                      height={160}
                      className="mt-3"
                    />
                  </div>
                  <div>
                    <h3>Advanced Cutting-Edge Technology</h3>
                    <p>
                      We are committed to using the latest and most advanced
                      technology in our work space, which means that you will
                      have access to all...{" "}
                    </p>
                    <Link href="/services">
                      <button href="#" className="" id="servicecard2">
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
              <div
                className="col-md-4 "
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="d-flex gap-4">
                  <div>
                    <img
                      src="\Image\badge.png"
                      alt=""
                      width={160}
                      height={160}
                      className="mt-3"
                    />
                  </div>
                  <div>
                    <h3>Professional Growth Opportunities</h3>
                    <p>
                      We value the growth and development of our employees and
                      provide opportunities for them to expand their skills and
                      knowledge...{" "}
                    </p>
                    <Link href="/services">
                      <button href="#" className="" id="servicecard2">
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
          </div>
        </div>
        {/* 3rd Module end */}
        {/* 4th Module start */}
        <div
          className="col-md-12"
          id="sect"
          style={{ backgroundImage: "url('/Image/about-page-skill-bg_2.jpg')" }}
        >
          <div className="container">
            <div className="row">
              <div
                id="team-section"
                className="col-md-5"
                data-aos="fade-up"
                data-aos-delay=""
              >
                <div className="card mt-4">
                  <div className="card-body text-start mb-4">
                    <h4>OUR TEAM</h4>
                    <h2>
                      Success of a business depends on the quality of its people
                    </h2>
                    <p>
                      Stronger Together: Harnessing the power of Teamwork to
                      achieve Success and drive Innovation. Collaboration makes
                      novelty possible.
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
                      <h5 className="mt-4">FULL STACK WEB DEVELOPMENT</h5>
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
                      <h5 className="mt-4 ">APP DEVELOPMENT</h5>
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
                </div>
              </div>

              <div className="col-md-7" data-aos="fade-up" data-aos-delay="400">
                <img
                  src="\Image\happiness-about_3.jpg"
                  alt=""
                  className=""
                  id="progresspic"
                />
              </div>
            </div>
          </div>
        </div>
        {/* 4th Module end */}
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
            <div className="col-md-12" id="minisect">
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
                            src="/Image/Salesforce-p.png"
                            alt=""
                            width={80}
                            height={80}
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
                            src="/Image/mulesoft-p.png"
                            alt=""
                            width={80}
                            height={80}
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
                            src="/Image/wordpress.png"
                            alt=""
                            width={120}
                            height={120}
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
                            src="/Image/sql.png"
                            alt=""
                            width={100}
                            height={100}
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
                            src="/Image/react.png"
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
                            src="/Image/reactnative.png"
                            alt=""
                            width={140}
                            height={140}
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
                            src="/Image/js.png"
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
                            src="/Image/node.png"
                            alt=""
                            width={130}
                            height={130}
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
                            src="/Image/Databricks.png"
                            alt=""
                            width={140}
                            height={140}
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
                            src="/Image/Snowflake.png"
                            alt=""
                            width={120}
                            height={120}
                            className="mb-2 grayscale"
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
        {/*5th Module End */}
        {/*6th Module Starts */}
        {/* <div className="col-md-12" id="sect">
          <div className="container">
            <div className="row text-center">
              <h4>OUR TEAM</h4>
              <h2>Our Leadership Team</h2>
            </div>
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
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <SwiperSlide>
                <div className="container-lg">
                  <div className="row text-center">
                    <div className="col-md-12">
                      <div className="card mt-4">
                        <img src="\Image\t_270x350_3.jpg" alt="" />
                        <div className="card-body text-center">
                          <h3>Mark Heffner</h3>
                          <h6>CEO & FOUNDER</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container-lg">
                  <div className="row text-center">
                    <div className="col-md-12">
                      <div className="card mt-4">
                        <img src="\Image\t_270x350_4.jpg" alt="" />
                        <div className="card-body text-center">
                          <h3>Mark Heffner</h3>
                          <h6>CEO & FOUNDER</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container-lg">
                  <div className="row text-center">
                    <div className="col-md-12">
                      <div className="card mt-4">
                        <img src="\Image\t_270x350_3.jpg" alt="" />
                        <div className="card-body text-center">
                          <h3>Mark Heffner</h3>
                          <h6>CEO & FOUNDER</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container-lg">
                  <div className="row text-center">
                    <div className="col-md-12">
                      <div className="card mt-4">
                        <img src="\Image\t_270x350_4.jpg" alt="" />
                        <div className="card-body text-center">
                          <h3>Mark Heffner</h3>
                          <h6>CEO & FOUNDER</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="container-lg">
                  <div className="row text-center">
                    <div className="col-md-12">
                      <div className="card mt-4">
                        <img src="\Image\t_270x350_1.jpg" alt="" />
                        <div className="card-body text-center">
                          <h3>Mark Heffner</h3>
                          <h6>CEO & FOUNDER</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container-lg">
                  <div className="row text-center">
                    <div className="col-md-12">
                      <div className="card mt-4">
                        <img src="\Image\t_270x350_2.jpg" alt="" />
                        <div className="card-body text-center">
                          <h3>Mark Heffner</h3>
                          <h6>CEO & FOUNDER</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container-lg">
                  <div className="row text-center">
                    <div className="col-md-12">
                      <div className="card mt-4">
                        <img src="\Image\t_270x350_1.jpg" alt="" />
                        <div className="card-body text-center">
                          <h3>Mark Heffner</h3>
                          <h6>CEO & FOUNDER</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container-lg">
                  <div className="row text-center">
                    <div className="col-md-12">
                      <div className="card mt-4">
                        <img src="\Image\t_270x350_2.jpg" alt="" />
                        <div className="card-body text-center">
                          <h3>Mark Heffner</h3>
                          <h6>CEO & FOUNDER</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div> */}
        {/*6th Module Ends */}
        {/*7th Module start */}
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
        {/*7th Module end */}
      </div>
    </Layout>
  );
}

export default About;
