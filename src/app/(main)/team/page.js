"use client";

import Layout from '@/app/modules/layouts/common/page';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useMemo, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Team() {

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
      <div className='team-page container-fluid'>
        {/* 1st Module Starts */}
        <div className='row' >

          <div className='col-md-12 full-length-bg' id='bannersection' style={{ position: "relative", overflow: "hidden" }}>
            <div className="image-overlay" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundImage: "url('/Image/team.jpg')", backgroundSize: "cover", backgroundPosition: "center", zIndex: -1 }}></div>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6 '>

                  <div id='bannerhead'>
                    <h1 style={{ color: 'white' }}>Team - Dwinsoft </h1>
                  </div>

                </div>
                <div className='col-md-6 text-end'>
                  <div className='bannertext'><h6><Link href="/"><button href="#" className="" id='allbanner' >  Home /</button></Link>Team</h6></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 1st Module ends */}
        {/*4th Module Starts */}
        <div className='col-md-12' id='sect'>
          <div className='container'>

            <div className='row text-center'>
              <h4>OUR TEAM</h4>
              <h2>Our Leadership Team</h2>

            </div>
            <div className='row '>
              <div className='col-md-3' data-aos="fade-up" data-aos-delay="200">
                <div className='card mt-4'>
                  <img src='\Image\t_270x350_3.jpg' alt='' />
                  <div className='card-body text-center'>

                    <h3>Mark Heffner</h3>
                    <h6>CEO & FOUNDER</h6>
                  </div>
                </div>
              </div>
              <div className='col-md-3' data-aos="fade-up" data-aos-delay="400">
                <div className='card mt-4'>
                  <img src='\Image\t_270x350_4.jpg' alt='' />
                  <div className='card-body text-center'>

                    <h3>Mark Heffner</h3>
                    <h6>CEO & FOUNDER</h6>
                  </div>
                </div>
              </div>
              <div className='col-md-3' data-aos="fade-up" data-aos-delay="600">
                <div className='card mt-4'>
                  <img src='\Image\t_270x350_3.jpg' alt='' />
                  <div className='card-body text-center'>


                    <h3>Mark Heffner</h3>
                    <h6>CEO & FOUNDER</h6>
                  </div>
                </div>
              </div>
              <div className='col-md-3' data-aos="fade-up" data-aos-delay="800">
                <div className='card mt-4'>
                  <img src='\Image\t_270x350_4.jpg' alt='' />
                  <div className='card-body text-center'>


                    <h3>Mark Heffner</h3>
                    <h6>CEO & FOUNDER</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className='row '>
              <div className='col-md-3' data-aos="fade-up" data-aos-delay="200">
                <div className='card mt-4'>
                  <img src='\Image\t_270x350_3.jpg' alt='' />
                  <div className='card-body text-center'>

                    <h3>Mark Heffner</h3>
                    <h6>CEO & FOUNDER</h6>
                  </div>
                </div>
              </div>
              <div className='col-md-3' data-aos="fade-up" data-aos-delay="400">
                <div className='card mt-4'>
                  <img src='\Image\t_270x350_4.jpg' alt='' />
                  <div className='card-body text-center'>

                    <h3>Mark Heffner</h3>
                    <h6>CEO & FOUNDER</h6>
                  </div>
                </div>
              </div>
              <div className='col-md-3' data-aos="fade-up" data-aos-delay="600">
                <div className='card mt-4'>
                  <img src='\Image\t_270x350_3.jpg' alt='' />
                  <div className='card-body text-center'>


                    <h3>Mark Heffner</h3>
                    <h6>CEO & FOUNDER</h6>
                  </div>
                </div>
              </div>
              <div className='col-md-3' data-aos="fade-up" data-aos-delay="800">
                <div className='card mt-4'>
                  <img src='\Image\t_270x350_4.jpg' alt='' />
                  <div className='card-body text-center'>


                    <h3>Mark Heffner</h3>
                    <h6>CEO & FOUNDER</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*4th Module Ends */}




      </div>
    </Layout>

  )
}

export default Team