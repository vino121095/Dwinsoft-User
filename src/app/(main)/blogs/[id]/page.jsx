"use client";
import React, { useState, useEffect } from "react";
import Layout from "@/app/modules/layouts/common/page";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import parse from "html-react-parser"; // Import the html-react-parser library

function BlogsDetail({ params }) {
  const id = params.id;
  const [data, setData] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await axios.get(`https://dwinsoftadmin.boonnet.co/api/blog/${id}`);
        setData(response.data); // Set the specific blog data
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

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

    fetchBlogDetail();
    fetchBlogs();
    fetchCategories();
  }, [id]); // Pass the 'id' to useEffect as a dependency

  return (
    <Layout>
      <div className="blogdetail-page container-fluid">
        <div className="row">
          <div className='col-md-12 full-length-bg' id='bannersection' style={{ position: "relative", overflow: "hidden" }}>
            <div className="image-overlay" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundImage: "url('/Image/blog1.jpg')", backgroundSize: "cover", backgroundPosition: "center", zIndex: -1 }}></div>
            <div className="container">
              <div className="row">
                <div className="col-md-6 ">
                  <div id="bannerhead">
                    <h1 style={{ color: "white" }}>Blog Detail</h1>
                  </div>
                </div>
                <div className="col-md-6 text-end">
                  <div className="bannertext">
                    <h6>
                      <Link href="/">
                        <button className="" id="allbanner">Home /</button>
                      </Link>
                      Blog
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="container">
            <div className="row">
              <div className="col-md-9" id="sect">
                <div>
                  <img src={data.banner_image_url} alt={data.title} id="blogsize" />
                  <div className="card" id="blogcard">
                    <div className="card-body">
                      <div className="col-md-3">
                        <h4 id="boxtag2" className="text-center me-2">{data.category}</h4>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="col-md-8 d-flex gap-4">
                          <p>
                            <img src="\Image\calendar.png" alt="" width={15} height={10} />
                            {new Date(data.createdAt).toDateString()}
                          </p>
                        </div>
                      </div>
                      <h2>{data.title}</h2>
                      <p>{data.short_desc}</p>
                      <div>{parse(data.description || "")}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3" id="sect">
                <div className="row mb-4">
                  <div className="signup_form" style={{ marginLeft: "20px" }}>
                    <form action="#" className="subscribe mb-4">
                      <input type="text" className="subscribe__input2" placeholder="Search" />
                      <button type="button" className="subscribe__btn">Search</button>
                    </form>
                  </div>
                  <h3 style={{ marginLeft: "20px" }}>Categories</h3>
                  <ul style={{ listStyleType: "none", marginLeft: "20px" }}>
                    {categories.slice(0, 4).map(category => (
                      <li key={category.id}>
                        <h5>{category.category_name}</h5>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="row mb-4" style={{ marginLeft: "10px" }}>
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

export default BlogsDetail;
