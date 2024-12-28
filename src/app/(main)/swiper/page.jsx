// // SwipersClient.jsx
// "use client";
// import React, { useState } from 'react';
// import Layout from '@/app/modules/layouts/common/page';
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y ,Autoplay } from "swiper";

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/components/navigation/navigation.min.css';
// import 'swiper/components/pagination/pagination.min.css';
// import 'swiper/components/scrollbar/scrollbar.min.css';
// SwiperCore.use([Navigation, Pagination,Autoplay]);

// function SwipersClient() {

//   return (
//          <div>
//     <Layout>
     
//     <Swiper
//       // install Swiper modules
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={50}
//       slidesPerView={3}
//       navigation={{ // Navigation controls
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       }}
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       autoplay={{ delay: 3000 }} 
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...    <div className="swiper-button-prev"></div>
//       <div className="swiper-button-next"></div>
//     </Swiper>

//     </Layout>
//     </div>
   
//   );
// }

// export default SwipersClient;
import React from 'react'

const Swiper = () => {
  return (
    <div>page</div>
  )
}

export default Swiper