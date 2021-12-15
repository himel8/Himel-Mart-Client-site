import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Announcement from "../Announcement/Announcement";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Newslater from "../Newslater/Newslater";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Banner />
      <Categories />
      <Products />
      <Newslater />
      <Footer />
    </div>
  );
};

export default Home;
