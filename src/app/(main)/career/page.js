"use client";

import Layout from '@/app/modules/layouts/common/page';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useMemo, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import axios from 'axios';

function Career() {
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

  // Animation

  const [data, setData] = useState([]);
  const [cat, setCat] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseAuthor = await axios.post('http://testbackend.dwinsoft.in/blogs/authentication', {
          email: "dwinsoftAdmin@gmail.com",
          password: "FhU4avm3+!S5MeV"
        });
        const newToken = responseAuthor.data.token;
        console.log('Token:', newToken);
        // Set up headers with the access token
        const headers = {
          Authorization: `Bearer ${newToken}`,
        };
        // Make the API call
        const response = await axios.get('http://testbackend.dwinsoft.in/blogs/user/blog/list', { headers });
        const category_response = await axios.get('http://testbackend.dwinsoft.in/blogs/user/category/list', { headers });
        // Update state with the data from the response

        setCat(category_response.data);
        setData(response.data);
      } catch (error) {
        console.error('API Error:', error);
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
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (

    <Layout>
      <div className='career-page container-fluid'>
        {/* 1st Module Starts */}
        <div className='row' >

          <div className='col-md-12 full-length-bg' id='bannersection' style={{ position: "relative", overflow: "hidden" }}>
            <div className="image-overlay" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundImage: "url('/Image/career5.jpg')", backgroundSize: "cover", backgroundPosition: "center", zIndex: -1 }}></div>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6 '>

                  <div id='bannerhead'>
                    <h1 style={{ color: 'white' }}>Career - Dwinsoft </h1>
                  </div>

                </div>
                <div className='col-md-6 text-end'>
                  <div className='bannertext'><h6><Link href="/"><button href="#" className="" id='allbanner' >  Home /</button></Link>Career</h6></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 1st Module ends */}
        {/* 2nd Module Starts */}
        <div className='col-md-12 ' id='sect'>
          <div className='container'>
            <div className='row text-center'>
              <h4 >JOIN OUR BIG FAMILY</h4>
              <h2 >Join Our Big Family</h2>
              <p>Our venture aims to develop innovative and transformative technology-based products or services. We identify ourselves in the market with unique ideas and solutions.
                We often operate with a lean structure and a fast-paced culture, which enables us to quickly pivot our strategies and adapt to changing market conditions.</p>
            </div>
            <div className='row' data-aos="fade-up" data-aos-delay="200">
              <div className='card' id='careerform'>
                <div className='card-body d-flex justify-content-between gap-3' >
                  <div>
                    <div className='careertitle'>Developement</div>
                    <div className='careerpost'>Mulesoft Developer</div>
                  </div>
                  <div>
                    <div className='careertitle'>Location</div>
                    <div className='careerarea'>Salem,TN</div>
                  </div>
                  <div>

                    <Link href="/contact"><button className='btn btn-secondary mt-3' id='careerapply'>Apply Now</button></Link>

                  </div>
                </div>
              </div>
            </div>
            <div className='row mt-4' data-aos="fade-up" data-aos-delay="400">
              <div className='card' id='careerform'>
                <div className='card-body d-flex justify-content-between gap-3' >
                  <div>
                    <div className='careertitle'>Developement</div>
                    <div className='careerpost'>Frontend Developer</div>
                  </div>
                  <div>
                    <div className='careertitle'>Location</div>
                    <div className='careerarea'>Salem,TN</div>
                  </div>
                  <div>
                    <Link href="/contact"><button className='btn btn-secondary mt-3' id='careerapply'>Apply Now</button></Link>

                  </div>
                </div>
              </div>
            </div>
            <div className='row mt-4' data-aos="fade-up" data-aos-delay="600">
              <div className='card' id='careerform'>
                <div className='card-body d-flex justify-content-between gap-3' >
                  <div>
                    <div className='careertitle'>Developement</div>
                    <div className='careerpost'>Full-stack Developer</div>
                  </div>
                  <div>
                    <div className='careertitle'>Location</div>
                    <div className='careerarea'>Salem,TN</div>
                  </div>
                  <div>
                    <Link href="/contact"><button className='btn btn-secondary mt-3' id='careerapply'>Apply Now</button></Link>

                  </div>
                </div>
              </div>
            </div>

            

          </div>
        </div>
        {/* 2nd Module end */}
        {/* 3rd Module Starts */}
        <div className='col-md-12 ' id='sect'>
          <div className='container'>
            <div className='row text-center'>
              <h4 >WHO WE ARE</h4>
              <h2 >Transforming Today, Shaping Tomorrow</h2>
              <p>We are a vibrant and growing company that values creativity, innovation, and teamwork. We are always looking for talented individuals who share our passion for excellence and our commitment to making a positive impact in the world.</p>
              <div>
                <Link href="/contact"><button className='btn btn-secondary mt-3'>Get A Free Quote</button></Link>


              </div>
            </div>
          </div>
        </div>
        {/* 3rd Module end */}

        {/*4th Module Start */}
        <div className='col-md-12' id='sect' style={{ backgroundImage: "url('/Image/USA_b825b876e9.jpg')" }}>
          <div className='container'>

            <div className='row text-center'>
              <h4 style={{ color: 'white' }}>OUR CLIENTS</h4>
              <h2 style={{ color: 'white' }}>What Our Clients Say </h2>
            </div>
            <div className='row mt-4 '>
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
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                autoplay={{
                  delay: 1, // Minimal delay for continuous movement
                  disableOnInteraction: false,
                }}
                speed={3000} // Adjust speed for smooth transition
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                data-aos="fade-up" data-aos-delay="400"
              >
                <SwiperSlide>
                  <div className="container-lg">
                    <div className="row">
                      <div className='col-md-12'>
                        <div className='card mb-4'>


                          <div className='d-flex justify-content-between' id='testimonial1'>
                            <div >
                              <h3>John D</h3>
                              <p>CTO at Tech Innovations Inc.</p>
                            </div>
                            <div >
                              <img src='\Image\testimonial.png' alt='' width={60} height={60} className='mb-2' />
                            </div>
                          </div>
                          <div id='testimonial2' style={{height: "33vh"}}>
                            <p>"Our integration process became seamless after using APIs from dwinsoft. The documentation was clear, and the support team was incredibly responsive. This has reduced our development time, allowing us to focus on innovation."</p>
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                  <div className="container-lg">
                    <div className="row ">
                      <div className='col-md-12'>
                        <div className='card mb-4'>


                          <div className='d-flex justify-content-between' id='testimonial1'>
                            <div >
                              <h3>Emily S</h3>
                              <p>Lead Developer at Fintech Solutions</p>
                            </div>
                            <div >
                              <img src='\Image\testimonial.png' alt='' width={60} height={60} className='mb-2' />
                            </div>
                          </div>
                          <div id='testimonial2' style={{height: "33vh"}}>
                            <p>"We switched to dwinsoft's APIs for their reliability and speed. The performance improvements were noticeable immediately, and our clients appreciate the enhanced service quality.Highly recommend these APIs."</p>
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>
                </SwiperSlide> */}
                <SwiperSlide>
                  <div className="container-lg">
                    <div className="row ">
                      <div className='col-md-12'>
                        <div className='card mb-4'>


                          <div className='d-flex justify-content-between' id='testimonial1'>
                            <div >
                              <h3>Michael R</h3>
                              <p>Head of Product at E-commerce Experts</p>
                            </div>
                            <div >
                              <img src='\Image\testimonial.png' alt='' width={60} height={60} className='mb-2' />
                            </div>
                          </div>
                          <div id='testimonial2' style={{height: "33vh"}}>
                            <p>"The range of APIs offered by dwinsoft is outstanding. They have allowed us to expand our product offerings without the headache of developing from scratch. The customer support has been exceptional."</p>
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>
                </SwiperSlide> <SwiperSlide>
                  <div className="container-lg">
                    <div className="row ">
                      <div className='col-md-12'>
                        <div className='card mb-4'>


                          <div className='d-flex justify-content-between' id='testimonial1'>
                            <div >
                              <h3>Sarah L</h3>
                              <p>Founder & CEO of Startup Hub</p>
                            </div>
                            <div >
                              <img src='\Image\testimonial.png' alt='' width={60} height={60} className='mb-2' />
                            </div>
                          </div>
                          <div id='testimonial2' style={{height: "33vh"}}>
                            <p>"As a startup, efficiency is crucial for us. dwinsoft's APIs have been a game-changer, providing robust solutions that are easy to implement. Their scalability ensures that we can grow without worrying about our backend systems."</p>
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
        {/*4th Module End */}
        {/*5th Module start */}
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
                    {blogs.slice(0, 3).map((blog, index) => (
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
                      <div className="card mt-4" id="boxtagcard" style={{display: "flex", width: "100%"}}>
                        <img src="https://s3devtestuser.s3.ap-south-1.amazonaws.com/dwinsoft/1711027646220-sunset-1373171_1280.jpg" alt="" />

                        <div className="card-body" style={{marginRight: "20px"}}>
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
                  </div>
                  <div className='col-md-4' data-aos="fade-up" data-aos-delay="400">
                  <div className='card mt-4' id='boxtagcard'>
                    <img src='https://s3devtestuser.s3.ap-south-1.amazonaws.com/dwinsoft/1711027671441-sunset-1373171_1280.jpg' alt='' />

                    <div className='card-body '>
                      <div className='d-flex'>
                        <div className='col-md-6'>
                          <h4 id='boxtag' className='text-center me-2'>TECHNOLOGY</h4>
                        </div>
                        <div className='col-md-6'>
                          <h4 id='boxtag' className='text-center me-2'>TECHNOLOGY</h4>
                        </div>

                      </div>
                      <div className='d-flex justify-content-between'>
                        <div className='col-md-4'>
                          <p>Thu Mar 21 2024</p>
                        </div>
                        <div className='col-md-4'>
                          <p>
                            <img src='\Image\conversation.png' alt='' width={15} height={15} /> 0</p>
                        </div>

                      </div>
                      <h3 >This is startups</h3>
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
                  <div className='col-md-4' data-aos="fade-up" data-aos-delay="600">
                  <div className='card mt-4' id='boxtagcard'>
                    <img src='https://s3devtestuser.s3.ap-south-1.amazonaws.com/dwinsoft/1711027671441-sunset-1373171_1280.jpg' alt='' />

                    <div className='card-body '>
                      <div className='d-flex'>
                        <div className='col-md-6'>
                          <h4 id='boxtag' className='text-center me-2'>TECHNOLOGY</h4>
                        </div>
                        <div className='col-md-6'>
                          <h4 id='boxtag' className='text-center me-2'>TECHNOLOGY</h4>
                        </div>

                      </div>
                      <div className='d-flex justify-content-between'>
                        <div className='col-md-4'>
                          <p>Thu Mar 21 2024</p>
                        </div>
                        <div className='col-md-4 '>
                          <p>
                            <img src='\Image\conversation.png' alt='' width={15} height={15} /> 0</p>
                        </div>

                      </div>
                      <h3 >This blog is about</h3>
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
        {/*5th Module end */}
        {/*6th Module start */}
        {/* <div className='col-md-12' id='minisect'>
          <div className='container'>
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
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              autoplay={{
                delay: 1, // Minimal delay for continuous movement
                disableOnInteraction: false,
              }}
              speed={3000} // Adjust speed for smooth transition
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              <SwiperSlide>
                <div className="container-lg">
                  <div className="row text-center">
                    <div className='col-md-12'>
                      <img src='/Image/cloudpaths.png' alt='' width={180} height={180} className='mb-2 grayscale' />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container-lg">
                  <div className="row text-center">
                    <div className='col-md-12'>
                      <img src='/Image/tekisticLogo.png' alt='' width={180} height={180} className='mb-2 grayscale' />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container-lg">
                  <div className="row text-center">
                    <div className='col-md-12'>
                      <img src='/Image/wiproLogo.png' alt='' width={180} height={180} className='mb-2 grayscale' />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container-lg">
                  <div className="row text-center">
                    <div className='col-md-12'>
                      <img src='/Image/carltonLogo.png' alt='' width={180} height={180} className='mb-2 grayscale' />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container-lg">
                  <div className="row text-center">
                    <div className='col-md-12'>
                      <img src='/Image/cloudpaths.png' alt='' width={180} height={180} className='mb-2 grayscale' />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container-lg">
                  <div className="row text-center">
                    <div className='col-md-12'>
                      <img src='/Image/tekisticLogo.png' alt='' width={180} height={180} className='mb-2 grayscale' />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container-lg">
                  <div className="row text-center">
                    <div className='col-md-12'>
                      <img src='/Image/wiproLogo.png' alt='' width={180} height={180} className='mb-2 grayscale' />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container-lg">
                  <div className="row text-center">
                    <div className='col-md-12'>
                      <img src='/Image/carltonLogo.png' alt='' width={180} height={180} className='mb-2 grayscale' />
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
  )
}

export default Career