"use client";
import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import Layout from "./modules/layouts/common/page";
import Privacy from "./(main)/privacy-policy/page";

import Link from "next/link";

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
/* Import Swiper styles */
import "swiper/swiper-bundle.css";


import axios from "axios";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://dwinsoftadmin.boonnet.co/api/blog');
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
    fetchBlogs();
  }, []);

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

      // let incrementTime = (duration / endNumber) * 1000;

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === endNumber) clearInterval(timer);
      });

      return () => clearInterval(timer);
    }, [end, duration]);

    return <h8>{count}</h8>;
  };

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

  // Tab
  const [activeTab, setActiveTab] = useState("home");

  const changeImage = (tab) => {
    setActiveTab(tab);
  };

  // Tab


  // Text changing
  const [showReality, setShowReality] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowReality((prev) => !prev);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showReality]);

  return (
    <main className="">
      <div className="home">
        <div id="next1" className="header-logo">
          <img
            // src="/Image/dwinsoftLogo_dark1.png"
            src="/Image/dwinsoftLogo_dark.png"
            // src="/Image/dwinsoftlogo.png"
            alt=""
            width={250}
            id="logotop"
          />
          <div>

          </div>
        </div>
        <div
          className="d-flex column justify-content-center align-items-center text-center"
          id="next"
        >
          <h5 id="bannerh1">
            Transforming Visions Into
            <br />Digital{" "}
            {showReality ? (
              <span style={{ color: "#2e7de0" }}>Realities</span>
            ) : (
              <span style={{ color: "#2e7de0" }}>Solutions</span>
            )}
          </h5>
        </div>



        <Layout>

          <div className="Homepage" style={{ overflow: "hidden" }}>
            {/* 1st Module Starts */}

            <div className="row">
              <div
                className="content full-length-bg"
                id="sect1"
                style={{ backgroundImage: "url('/Image/services-bg-2.png')" }}
              >
                <div className="container">
                  <div className="row" id="newbannersection">

                    {/* <video autoPlay muted loop className="background-video">
                      <source
                        src="/video/banner1.mp4"
                        type="video/mp4"
                      />
                    </video> */}



                    <Swiper
                      breakpoints={{
                        768: {
                          width: 768,
                          slidesPerView: 1,
                        },
                        1024: {
                          width: 1024,
                          slidesPerView: 1,
                        },
                      }}
                      modules={[Navigation, Pagination, A11y, Autoplay]}
                      spaceBetween={500} // Ensure no space between slides
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
                        delay: 3000, // Minimal delay for continuous movement
                        disableOnInteraction: false,
                      }}
                      speed={2000} // Adjust speed for smooth transition
                      onSwiper={(swiper) => console.log(swiper)}
                      onSlideChange={() => console.log("slide change")}
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <SwiperSlide>
                        <div className="row ">
                          <div className="col-md-6 ">
                            <div className="">
                              <div>
                                <h1
                                  style={{ color: "#212529" }}
                                  data-aos="fade-up"
                                  data-aos-delay="200"
                                >
                                  Integration and Growth with MuleSoft{" "}
                                </h1>
                              </div>
                              <div>
                                {/* <h3 style={{ color: '#7f7f7f' }} data-aos="fade-up" data-aos-delay="200">Our team of highly certified professionals is dedicated to presenting you with the most innovative solutions</h3> */}
                                <img
                                  src="/Image/mulesoft-p.png"
                                  alt=""
                                  style={{ height: "70px" }}
                                />
                                <img
                                  src="/Image/Salesforce-p.png"
                                  alt=""
                                  style={{ height: "70px", marginLeft: "10px" }}
                                />
                              </div>
                              <div>
                                <Link href="/services">
                                  <button
                                    className="btn btn-secondary mt-4 mb-4"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                  >
                                    Get Started{" "}
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 ">
                            <img
                              src="https://content3.jdmagicbox.com/comp/salem/p2/0427px427.x427.181216034508.l9p2/catalogue/jaikaal-labs-sankaridrug-salem-software-companies-60ox8v8h58.jpg"
                              alt=""
                              id="bannerpad"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className=" row">
                          <div className="col-md-6">
                            <div className="">
                              <div>
                                <h1
                                  style={{ color: "#212529" }}
                                  data-aos="fade-up"
                                  data-aos-delay="200"
                                >
                                  We exceed expectations.{" "}
                                </h1>
                              </div>
                              <div>
                                <h3
                                  style={{
                                    color: "#7f7f7f",
                                    paddingLeft: "5px",
                                    paddingRight: "5px",
                                  }}
                                  data-aos="fade-up"
                                  data-aos-delay="200"
                                >
                                  Our commitment to excellence ensures that
                                  every project delivers beyond what you
                                  imagined possible.
                                </h3>
                              </div>
                              <div>
                                <Link href="/services">
                                  <button
                                    className="btn btn-secondary mt-4 mb-4"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                  >
                                    Get Started{" "}
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 ">
                            <img
                              src="/Image/homebanner1.jpg"
                              alt=""
                              id="bannerpad"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="row ">
                          <div className="col-md-6 ">
                            <div className="">
                              <div>
                                <h1
                                  style={{ color: "#212529" }}
                                  data-aos="fade-up"
                                  data-aos-delay="200"
                                >
                                  Innovation for Your Future.{" "}
                                </h1>
                              </div>
                              <div>
                                <h3
                                  style={{
                                    color: "#7f7f7f",
                                    paddingLeft: "10px",
                                    paddingRight: "10px",
                                  }}
                                  data-aos="fade-up"
                                  data-aos-delay="200"
                                >
                                  Our team of highly certified professionals is
                                  dedicated to presenting you with the most
                                  innovative solutions
                                </h3>
                              </div>
                              <div>
                                <Link href="/services">
                                  <button
                                    className="btn btn-secondary mt-4 mb-4"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                  >
                                    Get Started{" "}
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 ">
                            <img
                              src="/Image/homebanner2.jpg"
                              alt=""
                              id="bannerpad"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="row ">
                          <div className="col-md-6 ">
                            <div className="">
                              <div>
                                <h1
                                  style={{ color: "#212529" }}
                                  data-aos="fade-up"
                                  data-aos-delay="200"
                                >
                                  Vision with Technology.
                                </h1>
                              </div>
                              <div>
                                <h3
                                  style={{
                                    color: "#7f7f7f",
                                    paddingLeft: "5px",
                                    paddingRight: "5px",
                                  }}
                                  data-aos="fade-up"
                                  data-aos-delay="200"
                                >
                                  Our solutions that are tailored to your unique
                                  needs and designed to help you achieve your
                                  goals.
                                </h3>
                              </div>
                              <div>
                                <Link href="/services">
                                  <button
                                    className="btn btn-secondary mt-4 mb-4"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                  >
                                    Get Started{" "}
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 ">
                            <img
                              src="/Image/homebanner3.jpg"
                              alt=""
                              id="bannerpad"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>

                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
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
              {/* <div className='col-md-12 homeset' id='sect'> */}

              <div className="container">
                <div className="row text-center">
                  <h4>WHAT WE DO</h4>
                  <h2>We Make Things Possible</h2>

                  <p>
                    Our solutions are simple, robust and are aesthetically
                    designed to keep the customer engaged to deliver consistent
                    growth for your business.{" "}
                  </p>
                </div>

                {/* <div className="blur" style={{
                    background: "radial-gradient(circle closest-side, rgba(76, 129, 197, 0.8), rgba(108, 164, 233, 0.3), rgba(255, 255, 255, 0.1))", 
                }}> */}

                <div
                  style={{
                    background:
                      "radial-gradient(circle closest-side, rgba(76, 129, 197, 0.8), rgba(108, 164, 233, 0.3), rgba(255, 255, 255, 0.1))",
                  }}
                >
                  <div className="row">
                    {/* <div
                      className="col-md-4"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
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
                            <p>
                              Our expert consultants offer strategic MuleSoft
                              ...
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
                    </div> */}
                    <div
                      className="col-md-4"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
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
                            <p>
                              Our expert consultants offer strategic MuleSoft
                              ...
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
                    <div
                      className="col-md-4"
                      data-aos="fade-up"
                      data-aos-delay="600"
                    >
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
                              Transform your ideas into reality with our
                              full-stack ...{" "}
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
                    {/* <div
                      className="col-md-4"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
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
                            <p>
                              Our expert consultants offer strategic MuleSoft
                              ...
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
                    </div> */}
                    {/* <div
                      className="col-md-4"
                      data-aos="fade-up"
                      data-aos-delay="600"
                    >
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
                              Transition smoothly to Mule 4 with our
                              comprehensive ...
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
                    </div> */}
                  </div>

                  <div className=" row ">
                    <div
                      className="col-md-4"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
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
                            <p>
                              Enhance your business collaborations with our ...{" "}
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
                    <div
                      className="col-md-4"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
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
                              Ensure continuous operations with our dedicated
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
                    {/* <div
                      className="col-md-4"
                      data-aos="fade-up"
                      data-aos-delay="600"
                    >
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
                              Transform your ideas into reality with our
                              full-stack ...{" "}
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
                    </div> */}
                    <div
                      className="col-md-4"
                      data-aos="fade-up"
                      data-aos-delay="600"
                    >
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
                              Transition smoothly to Mule 4 with our
                              comprehensive ...
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


                  <div className="row">
                    <div
                      className="col-md-12 mt-4"
                      style={{ textAlign: "center" }}
                    >
                      <div>
                        <Link href="/services">
                          <button
                            className="btn btn-secondary mt-4 mb-4"
                            data-aos="fade-up"
                            data-aos-delay="200"
                          >
                            View More{" "}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 2nd Module Ends */}

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
              <div className="container" style={{ overflowX: "hidden" }}>
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

                  <div
                    className="col-md-3"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
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

                  <div
                    className="col-md-3"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
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

                  <div
                    className="col-md-3"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
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
                              API design is a crucial aspect of software
                              development that involves creating a clear and
                              consistent set of rules for communication between
                              different software components. A well-designed API
                              can help to improve the usability,
                              maintainability, and scalability of software
                              systems. It involves the identification,
                              documentation, validation, and management of
                              requirements to ensure that the final product
                              meets the desired quality and functionality.
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
                              applications that involves a series of phases,
                              each with its own set of activities and goals. The
                              software is developed based on the approved
                              design. It involves building seamless connections
                              through a comprehensive development approach. From
                              concept to creation, our development process
                              ensures your success.
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
                              Once the software has been developed, it is
                              necessary to test it to ensure that it meets the
                              requirements and is free of errors. Testing can
                              include unit testing, integration testing, system
                              testing, performance testing and acceptance
                              testing. We ensure that quality assurance is at
                              its best, thereby streamlining the Software
                              Testing process for error-free solutions.
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
                              deployed to the production environment. This
                              involves configuring the software, installing it
                              on servers or devices, and making it available to
                              users. After the software has been deployed, it is
                              necessary to maintain it. This involves fixing
                              bugs, updating software components, and adding new
                              features as required. Our deployment process gets
                              your software up and running in no time.
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
            <div className="col-md-12 " id="sect">
              {/* <div className='container' id='sect2' style={{ backgroundImage: "url('/Image/wave1.jpg')" }}> */}
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
            {/*5th Module Ends */}

            {/*7th Module Starts */}
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
            {/*7th Module Ends */}
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
                              <div id="testimonial2" style={{ height: "33vh" }}>
                                <p>
                                  "Our integration process became seamless after
                                  using APIs from dwinsoft. The documentation
                                  was clear, and the support team was incredibly
                                  responsive. This has reduced our development
                                  time, allowing us to focus on innovation."
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

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
                              <div id="testimonial2" style={{ height: "33vh" }}>
                                <p>
                                  "The range of APIs offered by dwinsoft is
                                  outstanding. They have allowed us to expand
                                  our product offerings without the headache of
                                  developing from scratch. The customer support
                                  has been exceptional."
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
                              <div id="testimonial2" style={{ height: "33vh" }}>
                                <p>
                                  "As a startup, efficiency is crucial for us.
                                  dwinsoft's APIs have been a game-changer,
                                  providing robust solutions that are easy to
                                  implement. Their scalability ensures that we
                                  can grow without worrying about our backend
                                  systems."
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
                      <button className="btn btn-secondary">
                        All Articles
                      </button>
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

                  <div className="row">
                    {blogs.map((blog, index) => (
                      <div
                        className="col-md-4"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        key={blog.id}
                      >
                        <div className="card mt-4" id="boxtagcard" style={{ display: "flex", width: "100%" }}>
                          <img
                            src={blog.banner_image_url || "/Image/blog-i.jpg"}
                            alt={blog.title}
                            style={{ width: "100%", height: "200px", objectFit: "cover" }}
                          />
                          <div className="card-body" style={{ marginRight: "20px" }}>
                            <div className="d-flex justify-content-between">
                              <div className="col-md-4">
                                <p>{new Date(blog.createdAt).toDateString()}</p>
                              </div>
                            </div>
                            <h3>{blog.title}</h3>
                            <p>{blog.short_desc}</p>
                            <Link href={`/blogs/${blog.id}`}>
                              <button className="" id="servicecard2">
                                READ MORE
                                <img
                                  src="/Image/next.png"
                                  alt="Next"
                                  width={18}
                                  height={18}
                                />
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* <div
                    className="col-md-4"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div
                      className="card mt-4"
                      id="boxtagcard"
                      style={{ display: "flex", width: "100%" }}
                    >
                      <img
                        src="\Image\blog-i.jpg"
                        alt=""
                      />

                      <div
                        className="card-body"
                        style={{ marginRight: "20px" }}
                      >
                        <div className="d-flex">
                          <div className='col-md-6'>
                          <h4 id='boxtag' className='text-center me-2'>TECHNOLOGY</h4>
                        </div>
                        <div className='col-md-6'>
                          <h4 id='boxtag' className='text-center me-2'>TECHNOLOGY</h4>
                        </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="col-md-4">
                            <p>Thu Mar21 2024</p>
                          </div>
                          <div className="col-md-4">
                            <p>
                              <img
                                src="\Image\conversation.png"
                                alt=""
                                width={15}
                                height={15}
                              />{" "}
                              0
                            </p>
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
                  </div> */}
                  {/* <div
                    className="col-md-4"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="card mt-4" id="boxtagcard">
                      <img
                        src="\Image\blog-i.jpg"
                        alt=""
                      />

                      <div className="card-body ">
                        <div className="d-flex">
                          <div className='col-md-6'>
                          <h4 id='boxtag' className='text-center me-2'>TECHNOLOGY</h4>
                        </div>
                        <div className='col-md-6'>
                          <h4 id='boxtag' className='text-center me-2'>TECHNOLOGY</h4>
                        </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="col-md-4">
                            <p>Thu Mar 21 2024</p>
                          </div>
                          <div className="col-md-4">
                            <p>
                              <img
                                src="\Image\conversation.png"
                                alt=""
                                width={15}
                                height={15}
                              />{" "}
                              0
                            </p>
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
                  </div> */}
                  {/* <div
                    className="col-md-4"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <div className="card mt-4" id="boxtagcard">
                      <img
                        src="\Image\blog-i.jpg"
                        alt=""
                      />

                      <div className="card-body ">
                        <div className="d-flex">
                          <div className='col-md-6'>
                          <h4 id='boxtag' className='text-center me-2'>TECHNOLOGY</h4>
                        </div>
                        <div className='col-md-6'>
                          <h4 id='boxtag' className='text-center me-2'>TECHNOLOGY</h4>
                        </div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="col-md-4">
                            <p>Thu Mar 21 2024</p>
                          </div>
                          <div className="col-md-4 ">
                            <p>
                              <img
                                src="\Image\conversation.png"
                                alt=""
                                width={15}
                                height={15}
                              />{" "}
                              0
                            </p>
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
                  </div> */}
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
      </div>
    </main>
  );
}

