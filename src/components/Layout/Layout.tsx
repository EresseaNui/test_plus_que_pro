import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer/Footer";

export interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  displayNavbar?: boolean;
  displayFooter?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, displayNavbar = true, displayFooter = true}) => {
  return (
    <div>

        {displayNavbar && <Navbar />}
      
        <div>{children}</div>
        {displayFooter && <Footer />}
    </div>
  );
};

export default Layout;