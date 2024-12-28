"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


// import 'bootstrap/dist/js/bootstrap.bundle.min';
import("bootstrap");

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const pathname = usePathname();

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const toggleSearchHandler = () => {
    setSearchVisible(!searchVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

 

  return (
    <div className={`sticky-top ${sticky ? "sticky" : ""}`}>
      <nav
        className={`navbar navbar-expand-lg ${
          scrolled ? "bg-white blurred" : "bg-transparent"
        }`}
      >
        <div className="container-fluid">
          {/* Left Side */}
          <div className="col-md-9" id="menuleft">
            <div
              className="d-flex align-items-center justify-content-between"
              id="menufit"
            >
              <div className="d-flex" id="headerin">
                <div className="logo">
                  <Link href="/" legacyBehavior>
                    <a>
                      <img
                        src={
                          scrolled
                            ? "/Image/dwinsoftLogo_dark.png"
                            : "/Image/dwinsoftNewLogo.png"
                        }
                        alt=""
                        width={150}
                        height={35}
                        className="mb-4"
                      />
                    </a>
                  </Link>
                </div>
                <div
                  className={`collapse navbar-collapse ${
                    navbarOpen ? "show" : ""
                  }`}
                  id="navbarSupportedContent"
                >
                  <ul
                    className={`navbar-nav me-auto mb-2 mb-lg-0 ${
                      scrolled ? "scrolled" : ""
                    }`}
                  >
                    <li className="nav-item">
                      <Link href="/about" legacyBehavior>
                        <a
                          className={
                            pathname === "/about"
                              ? "selected nav-link"
                              : "nav-link"
                          }
                          id="topmenu"
                        >
                          About
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item dropdown megamenu">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                       
                      >
                        Services
                      </a>
                      <div
                        className="dropdown-menu drop-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <div className="row row-dropdown drop-navbar">
                          <div className="col-md-4 menu-item flex-menu-item">
                            <h6
                              className="dropdown-header drop-header dropdown-item dropdown-toggle"
                              id="topmenu2"
                            >
                              Mulesoft
                            </h6>

                            <div className="dropdown-content1">
                              <a
                                href="/services/consulting"
                                className="dropdown-item"
                              >
                                Mulesoft Consulting
                              </a>
                              <a
                                href="/services/developement"
                                className="dropdown-item"
                              >
                                Mulesoft Development
                              </a>
                              <a
                                href="/services/migration"
                                className="dropdown-item"
                              >
                                Mule-4 Migration
                              </a>
                              <a
                                href="/services/integration"
                                className="dropdown-item"
                              >
                                Mule B2B Integration
                              </a>
                              <a
                                href="/services/support"
                                className="dropdown-item"
                              >
                                Production Support
                              </a>
                              {/* <Link href="/services/consulting" legacyBehavior>
                                <a
                                  className={
                                    pathname === "/services/consulting"
                                      ? "selected dropdown-item"
                                      : "dropdown-item"
                                  }
                                  id="submenu"
                                >
                                  Mulesoft Consulting
                                </a>
                              </Link>
                              <Link
                                href="/services/developement"
                                legacyBehavior
                              >
                                <a
                                  className={
                                    pathname === "/services/developement"
                                      ? "selected dropdown-item"
                                      : "dropdown-item"
                                  }
                                  id="submenu"
                                >
                                  Mulesoft Development
                                </a>
                              </Link>
                              <Link href="/services/migration" legacyBehavior>
                                <a
                                  className={
                                    pathname === "/services/migration"
                                      ? "selected dropdown-item"
                                      : "dropdown-item"
                                  }
                                  id="submenu"
                                >
                                  Mule-4 Migration
                                </a>
                              </Link>
                              <Link href="/services/integration" legacyBehavior>
                                <a
                                  className={
                                    pathname === "/services/integration"
                                      ? "selected dropdown-item"
                                      : "dropdown-item"
                                  }
                                  id="submenu"
                                >
                                  Mule B2B Integration
                                </a>
                              </Link>
                              <Link href="/services/support" legacyBehavior>
                                <a
                                  className={
                                    pathname === "/services/support"
                                      ? "selected dropdown-item"
                                      : "dropdown-item"
                                  }
                                  id="submenu"
                                >
                                  Production Support
                                </a>
                              </Link> */}
                            </div>
                          </div>

                          <div className="col-md-4 menu-item flex-menu-item">
                            <h6
                              className="dropdown-header drop-header dropdown-item dropdown-toggle"
                              id="topmenu2"
                            >
                              QA Testing
                            </h6>

                            <div className="dropdown-content2">
                              <a
                                href="/services/testing"
                                className="dropdown-item"
                              >
                                Integration Testing
                              </a>
                              <a
                                href="/services/performance"
                                className="dropdown-item"
                              >
                                Performance Testing
                              </a>
                              <a
                                href="/services/security"
                                className="dropdown-item"
                              >
                                Security Testing
                              </a>
                              <a
                                href="/services/automation"
                                className="dropdown-item"
                              >
                                Automation Testing
                              </a>
                              <a
                                href="/services/manual"
                                className="dropdown-item"
                              >
                                Manual Testing
                              </a>
                              {/* <Link href="/services/testing" legacyBehavior>
                                <a
                                  className={
                                    pathname === "/services/testing"
                                      ? "selected dropdown-item"
                                      : "dropdown-item"
                                  }
                                  id="submenu"
                                >
                                  Integration Testing
                                </a>
                              </Link>
                              <Link href="/services/performance" legacyBehavior>
                                <a
                                  className={
                                    pathname === "/services/performance"
                                      ? "selected dropdown-item"
                                      : "dropdown-item"
                                  }
                                  id="submenu"
                                >
                                  Performance Testing
                                </a>
                              </Link>
                              <Link href="/services/security" legacyBehavior>
                                <a
                                  className={
                                    pathname === "/services/security"
                                      ? "selected dropdown-item"
                                      : "dropdown-item"
                                  }
                                  id="submenu"
                                >
                                  Security Testing
                                </a>
                              </Link>
                              <Link href="/services/automation" legacyBehavior>
                                <a
                                  className={
                                    pathname === "/services/automation"
                                      ? "selected dropdown-item"
                                      : "dropdown-item"
                                  }
                                  id="submenu"
                                >
                                  Automation Testing
                                </a>
                              </Link>
                              <Link href="/services/manual" legacyBehavior>
                                <a
                                  className={
                                    pathname === "/services/manual"
                                      ? "selected dropdown-item"
                                      : "dropdown-item"
                                  }
                                  id="submenu"
                                >
                                  Manual Testing
                                </a>
                              </Link> */}
                            </div>
                          </div>

                          <div className="col-md-4 menu-item-2">
                            {/* <h6
                              className="dropdown-header drop-header dropdown-item"
                              id="topmenu2"
                            >
                              Other Services
                            </h6> */}
                            {/* <div className="dropdown-content"> */}
                            <a
                              href="/services/full-stack"
                              className="dropdown-header drop-header dropdown-item"
                              id="topmenu2"
                            >
                              Full-Stack Development
                            </a>
                            <a
                              href="/services/app"
                              className="dropdown-header drop-header dropdown-item"
                              id="topmenu2"
                            >
                              App Development
                            </a>
                            <a
                              href="/services/certification"
                              className="dropdown-header drop-header dropdown-item"
                              id="topmenu2"
                            >
                              Training & Certification
                            </a>
                            {/* </div> */}
                            {/* <Link href="/services/full-stack" legacyBehavior>
                              <a
                                className={
                                  pathname === "/services/full-stack"
                                    ? "selected dropdown-item"
                                    : "dropdown-item"
                                }
                                id="topmenu1"
                              >
                                Full-Stack Development
                              </a>
                            </Link>
                            <Link href="/services/app" legacyBehavior>
                              <a
                                className={
                                  pathname === "/services/app"
                                    ? "selected dropdown-item"
                                    : "dropdown-item"
                                }
                                id="topmenu1"
                              >
                                App Development
                              </a>
                            </Link>
                            <Link href="/services/certification" legacyBehavior>
                              <a
                                className={
                                  pathname === "/services/certification"
                                    ? "selected dropdown-item"
                                    : "dropdown-item"
                                }
                                id="topmenu1"
                              >
                                Training & Certification
                              </a>
                            </Link> */}
                          </div>
                        </div>
                        {/* </div> */}
                      </div>
                    </li>

                    <li className="nav-item">
                      <Link href="/api" legacyBehavior>
                        <a
                          className={
                            pathname === "/api"
                              ? "selected nav-link"
                              : "nav-link"
                          }
                          id="topmenu"
                        >
                          API
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/blogs" legacyBehavior>
                        <a
                          className={
                            pathname === "/blogs"
                              ? "selected nav-link"
                              : "nav-link"
                          }
                          id="topmenu"
                        >
                          Blog
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/career" legacyBehavior>
                        <a
                          className={
                            pathname === "/career"
                              ? "selected nav-link"
                              : "nav-link"
                          }
                          id="topmenu"
                        >
                          Careers
                        </a>
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                      <Link href="/contact" legacyBehavior>
                        <a
                          className={
                            pathname === "/contact"
                              ? "selected nav-link"
                              : "nav-link"
                          }
                          id="topmenu"
                        >
                          Contact
                        </a>
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>

              <div className="d-none d-lg-flex"></div>
              <button
                className="navbar-toggler"
                type="button"
                onClick={navbarToggleHandler}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
          {/* Right Side */}
          <div className="col-md-3" id="menuright">
            <div
              className="d-flex justify-content-around"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div>
                <button
                  className="btn btn-outline-success"
                  type="button"
                  onClick={toggleSearchHandler}
                  aria-expanded={searchVisible ? "true" : "false"}
                  aria-controls="searchInput"
                >
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#a1a1a1"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg> */}
                </button>
              </div>
              <div style={{display: "flex"}}>
                {/* <h3 style={{ color: '#7f7f7f' }} data-aos="fade-up" data-aos-delay="200">Our team of highly certified professionals is dedicated to presenting you with the most innovative solutions</h3> */}
                {/* <img
                  src="https://nexturn.com/wp-content/uploads/2024/04/Salesforce_Partner_Badge_RGB39.png"
                  alt=""
                  style={{ height: "50px" }}
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvjHS7C4OlKqUOGHiZgX4lxCK9E9Hkmf9WIQ&s"
                  alt=""
                  style={{ height: "50px", marginLeft: "10px", borderRadius: "5px" }}
                /> */}
              </div>
              <div>
                <Link href="/contact" legacyBehavior>
                  <a className="btn btn-light" id="quote">
                    {/* Get A Free Quote */}
                    Connect With Us
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`collapse ${searchVisible ? "show" : ""} offset-3 col-md-6`}
        id="searchInput"
      >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          id="menusearch"
        />
      </div>
    </div>
  );
};

export default Navbar;

// "use client";
// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// const Navbar = () => {
//   const [navbarOpen, setNavbarOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [sticky, setSticky] = useState(false);
//   const pathname = usePathname(); // Get the current path to highlight the menu item

//   const navbarToggleHandler = () => {
//     setNavbarOpen(!navbarOpen);
//   };

//   const handleStickyNavbar = () => {
//     if (window.scrollY >= 80) {
//       setSticky(true);
//     } else {
//       setSticky(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleStickyNavbar);
//     return () => {
//       window.removeEventListener('scroll', handleStickyNavbar);
//     };
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 50;
//       if (isScrolled !== scrolled) {
//         setScrolled(isScrolled);
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [scrolled]);

//   return (
//     <div className={`sticky-top ${sticky ? 'sticky' : ''}`}>

//       <nav className={`navbar navbar-expand-lg ${scrolled ? 'bg-white' : 'bg-transparent'}`} style={{ color: scrolled ? 'red' : 'inherit' }}>
//         <div className="container-fluid">

//           <div className="col-md-9" id="menuleft">
//             <div className="d-flex align-items-center justify-content-between" id="menufit">
//               <div className="d-flex" id="headerin">
//                 <div className="logo">
//                   <Link href="/" legacyBehavior>
//                     <a>
//                       <img src={scrolled ? '/Image/dwinsoftLogo_dark.png' : '/Image/dwinsoftLogo_dark1.png'} alt='' width={190} height={35} className='mb-4' />
//                     </a>
//                   </Link>
//                 </div>
//                 <div className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
//                   <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${scrolled ? 'scrolled' : ''}`}>
//                     <li className="nav-item">
//                       <Link href="/about" legacyBehavior>
//                         <a className={pathname === '/about' ? 'selected nav-link' : 'nav-link'} id="topmenu">About</a>
//                       </Link>
//                     </li>
//                     <li className="nav-item">
//                       <Link href="/services" legacyBehavior>
//                         <a className={pathname === '/services' ? 'selected nav-link' : 'nav-link'} id="topmenu">Service</a>
//                       </Link>
//                     </li>
//                     <li className="nav-item">
//                       <Link href="/services/service-detail" legacyBehavior>
//                         <a className={pathname === '/services/service-detail' ? 'selected nav-link' : 'nav-link'} id="topmenu">Mulesoft</a>
//                       </Link>
//                     </li>
//                     <li className="nav-item">
//                       <Link href="/api" legacyBehavior>
//                         <a className={pathname === '/api' ? 'selected nav-link' : 'nav-link'} id="topmenu">API</a>
//                       </Link>
//                     </li>
//                     <li className="nav-item">
//                       <Link href="/team" legacyBehavior>
//                         <a className={pathname === '/team' ? 'selected nav-link' : 'nav-link'} id="topmenu">Team</a>
//                       </Link>
//                     </li>
//                     <li className="nav-item">
//                       <Link href="/blogs" legacyBehavior>
//                         <a className={pathname === '/blogs' ? 'selected nav-link' : 'nav-link'} id="topmenu">Blog</a>
//                       </Link>
//                     </li>
//                     <li className="nav-item">
//                       <Link href="/career" legacyBehavior>
//                         <a className={pathname === '/career' ? 'selected nav-link' : 'nav-link'} id="topmenu">Careers</a>
//                       </Link>
//                     </li>
//                     <li className="nav-item">
//                       <Link href="/contact" legacyBehavior>
//                         <a className={pathname === '/contact' ? 'selected nav-link' : 'nav-link'} id="topmenu">Contact</a>
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               <div className="d-none d-lg-flex">
//                 <button className="btn btn-outline-success" type="button" data-bs-toggle="collapse" data-bs-target="#searchInput" aria-expanded="false" aria-controls="searchInput">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#a1a1a1" className="bi bi-search" viewBox="0 0 16 16">
//                     <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
//                   </svg>
//                 </button>
//               </div>
//               <button className="navbar-toggler" type="button" onClick={navbarToggleHandler}>
//                 <span className="navbar-toggler-icon"></span>
//               </button>
//             </div>
//           </div>

//           <div className="col-md-3" id="menuright">
//             <div className="d-flex justify-content-around">
//               <div>
//                 <div className="phonetext">Have Any Questions?</div>
//                 <div className="phone-number">+91 948-932-0805</div>
//               </div>
//               <div>
//                 <Link href="/contact" legacyBehavior>
//                   <a className="btn btn-light" id="quote">Free Quote</a>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//       <div className="collapse offset-3 col-md-6" id="searchInput">
//         <input
//           className="form-control me-2"
//           type="search"
//           placeholder="Search"
//           aria-label="Search"
//           id="menusearch"
//         />
//       </div>
//     </div>
//   );
// };

// export default Navbar;
