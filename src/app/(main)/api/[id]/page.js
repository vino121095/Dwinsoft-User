"use client";
import Layout from "@/app/modules/layouts/common/page";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import parse from "html-react-parser";

function ApiDetail({ params }) {
  const id = params.id;
  const [data, setData] = useState({});
  const [api, setApi] = useState([]);

  useEffect(() => {
    const fetchApiDetail = async () => {
      try {
        const response = await axios.get(`https://dwinsoftadmin.boonnet.co/api/docs/${id}`);
        setData(response.data); // Set the specific blog data
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    const fetchApi = async () => {
      try {
        const response = await axios.get('https://dwinsoftadmin.boonnet.co/api/docs');
        setApi(response.data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchApiDetail();
    fetchApi();
  }, [id]);

  return (
    <Layout>
      <div className="api-page container-fluid">
        {/* 1st Module Starts */}
        <div className="row">

          <div className='col-md-12 full-length-bg' id='bannersection' style={{ position: "relative", overflow: "hidden" }}>
            <div className="image-overlay" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundImage: "url('/Image/api6.jpg')", backgroundSize: "cover", backgroundPosition: "center", zIndex: -1 }}></div>

            <div className="container">
              <div className="row">
                <div className="col-md-6 ">
                  <div id="bannerhead">
                    <h1 style={{ color: "white" }}>API Details - Dwinsoft </h1>
                  </div>
                </div>
                <div className="col-md-6 text-end">
                  <div className="bannertext">
                    <h6>
                      <Link href="/">
                        <button href="#" className="" id="allbanner">
                          {" "}
                          Home /{" "}
                        </button>
                      </Link>
                      API Details
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 1st Module ends */}
        {/* 2nd Module Starts */}

        <div className="col-md-12">
          <div className="container">
            <div className="row">
              <div className="col-md-12" id="sect">
                <div className="">
                  <img src={data.bannerImage} alt={data.title}/>

                  <div className="" id="blogcard">
                    <div>{parse(data.description || "")}</div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>

        {/* 2nd Module ends */}
      </div>
    </Layout>
  );
}

export default ApiDetail;
