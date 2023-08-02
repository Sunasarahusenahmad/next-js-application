"use client";

import React from "react";
import Footer from "../components/Footer";
import FetchShimmerFlag from "../components/FetchShimmerFlag";
import Navbar from "../components/Navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <FetchShimmerFlag />
      <Footer />
    </>
  );
};

export default page;
