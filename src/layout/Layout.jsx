import React from "react";
import NavigationBar from "../component/navigation/NavigationBar";
import Footer from "../component/footer/Footer";
import FeaturesSection from "../component/feature/FeatureSection";

const Layout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
      <div className="flex flex-col gap-4 ">
        <FeaturesSection />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
