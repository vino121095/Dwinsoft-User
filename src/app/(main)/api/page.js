"use client";

import Layout from '@/app/modules/layouts/common/page';
import React, { useState, useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import Link from 'next/link';
import axios from "axios";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function ServiceDetail() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Adjust as needed

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get('https://dwinsoftadmin.boonnet.co/api/docs');
        setData(response.data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchApi();
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);

  // Calculate the items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Render pagination controls
  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <nav>
        <ul className="pagination justify-content-center">
          {pageNumbers.map(number => (
            <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
              <button onClick={() => handlePageChange(number)} className="page-link">
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  return (
    <Layout>
      <div className='api-page container-fluid'>
        {/* 1st Module Starts */}
        <div className='row'>
          <div className='col-md-12 full-length-bg' id='bannersection' style={{ position: "relative", overflow: "hidden" }}>
            <div className="image-overlay" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundImage: "url('/Image/api6.jpg')", backgroundSize: "cover", backgroundPosition: "center", zIndex: -1 }}></div>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6'>
                  <div id='bannerhead'>
                    <h1 style={{ color: 'white' }}>API - Dwinsoft </h1>
                  </div>
                </div>
                <div className='col-md-6 text-end'>
                  <div className='bannertext'>
                    <h6>
                      <Link href="/">
                        <button className="" id='allbanner'> Home /</button>
                      </Link>API
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 1st Module ends */}
        {/* 2nd Module Starts */}
        <div className='col-md-12' id='sect' style={{ backgroundImage: "url('/Image/services-bg-2.png')" }}>
          <div className='container'>
            <div className='row text-center'>
              <h4>API's</h4>
              <h2>Integration's Made Easier</h2>
              <p>Our solutions are simple, robust and are aesthetically designed to keep the customer engaged to
                deliver consistent growth for your business. </p>
            </div>

            {/* Cards */}
            {currentItems.map((item, index) => (
              <div key={item.id || index} className='card mt-4'>
                <div className='row'>
                  {index % 2 === 0 ? (
                    <>
                      <div className='col-md-4' style={{
                        backgroundImage: `url(${item.bannerImage || '/Image/placeholder.jpg'})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        minHeight: '200px'
                      }}>
                      </div>
                      <div className='col-md-8' id='apicard'>
                        <h3 className="mt-4" id="apihead">{item.title}</h3>
                        <p id="apipara">{item.short_desc}</p>
                        <Link href={`/api/${item.api_id}`}>
                          <button className="" id='servicecard2'>
                            Read More <img src='/Image/next.png' alt='' width={18} height={18} />
                          </button>
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className='col-md-8' id='apicard'>
                        <h3 className="mt-4" id="apihead">{item.title}</h3>
                        <p id="apipara">{item.short_desc}</p>
                        <Link href={`/api/${item.api_id}`}>
                          <button className="" id='servicecard2'>
                            Read More <img src='/Image/next.png' alt='' width={18} height={18} />
                          </button>
                        </Link>
                      </div>
                      <div className='col-md-4' style={{
                        backgroundImage: `url(${item.bannerImage || '/Image/placeholder.jpg'})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        minHeight: '200px'
                      }}>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}

            {/* Pagination */}
            {renderPagination()}
          </div>
        </div>
        {/* 2nd Module Ends */}
      </div>
    </Layout>
  );
}

export default ServiceDetail;
