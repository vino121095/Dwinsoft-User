"use client";

import Layout from '@/app/modules/layouts/common/page'
import React, { useState, useRef, useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import Link from 'next/link';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import axios from "axios";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function ServiceDetail() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  // Fetch blogs and categories
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://dwinsoftadmin.boonnet.co/api/blog');
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://dwinsoftadmin.boonnet.co/api/categories/list');
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchBlogs();
    fetchCategories();
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Layout>
      <div className='about-page container-fluid'>
        {/* 1st Module Starts */}
        <div className='row'>
          <div className='col-md-12 full-length-bg' id='bannersection' style={{ position: "relative", overflow: "hidden" }}>
            <div className="image-overlay" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundImage: "url('/Image/blog1.jpg')", backgroundSize: "cover", backgroundPosition: "center", zIndex: -1 }}></div>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6 '>
                  <div id='bannerhead'>
                    <h1 style={{ color: 'white' }}>Blogs</h1>
                  </div>
                </div>
                <div className='col-md-6 text-end'>
                  <div className='bannertext'>
                    <h6>
                      <Link href="/"><button className="" id='allbanner'>Home /</button></Link>Blog
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 1st Module ends */}

        {/* 2nd Module Starts */}
        <div className='col-md-12'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-9' id='sect'>
                <div className='row'>
                  {currentPosts.map((post) => (
                    <div className='col-md-4' data-aos="fade-up" data-aos-delay="200">
                      <Link href={`/blogs/${post.id}`}>
                        <div className='card mt-4' id='boxtagcard'>
                        <img src={post.banner_image_url} alt={post.title} id='blog_image' style={{ height: '200px', objectFit: 'cover' }} />
                          <div className='card-body' id='newblogcard'>
                            <div className='d-flex justify-content-between'>
                              <div className='col-md-6'>
                                <p id='calender'>{new Date(post.createdAt).toDateString()}</p>
                              </div>
                            </div>
                            <h3 id='bloghead'>{post.title}</h3>
                            <p id='blogpara'>{post.short_desc}</p>
                            <button className="blogread" id='servicecard2'>READ MORE <img src='/Image/next.png' alt='' width={18} height={18} /></button>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
                {/* Pagination */}
                <ul className="pagination">
                  {blogs.length > postsPerPage &&
                    Array.from({ length: Math.ceil(blogs.length / postsPerPage) }).map((_, index) => (
                      <li key={index} className={currentPage === index + 1 ? 'active' : ''}>
                        <button onClick={() => paginate(index + 1)}>{index + 1}</button>
                      </li>
                    ))}
                </ul>
              </div>

              {/* Sidebar */}
              <div className='col-md-3 sidebar' id='sect'>
                <div className='row mb-4'>
                  <div className="signup_form">
                    <form action="#" className="subscribe mb-4">
                      <input type="text" className="subscribe__input2" placeholder="Search" />
                      <button type="button" className="subscribe__btn">Search</button>
                    </form>
                  </div>
                  <h3>Categories</h3>
                  <ul style={{ listStyleType: 'none' }}>
                    {categories.slice(0, 4).map(category => (
                      <li key={category.id}><h5>{category.category_name}</h5></li>
                    ))}
                  </ul>
                </div>
                <div className='row mb-4'>
                  <h3>Recent Posts</h3>
                  {blogs.slice(0, 4).map((item) => (
                    <Link href={`/blogs/${item.id}`} key={item.id}>
                      <div className='d-flex gap-4'>
                        <div>
                          <img src={item.banner_image_url} alt={item.title} width={100} height={50} id='recentpic' />
                        </div>
                        <div>
                          <h5 className='recent_post_title'>{item.title}</h5>
                          <h6 className='recent_post_subtitle'>{new Date(item.createdAt).toDateString()}</h6>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ServiceDetail;
