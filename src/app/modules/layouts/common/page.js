import React from "react";
import Footer from "../footer/page";
import Navbar from "../nav/page";

const Layout = ({ children }) => {
  return (
    <div className="landing_bg font-graphik ">
      <div className="font-graphik">
        <Navbar />
        <div className="m-auto"></div>
        {children}
        <div className="w-full mt-8">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
