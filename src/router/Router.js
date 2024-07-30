import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { About, Blogs, Career, Home, Products } from "../pages";
import { Footer, NavBar } from "../widget";

const Router = () => {
  const [isHome, setIsHome] = useState(true);
  const [isProduct, setIsProduct] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  return (
    <>
      <NavBar
        setIsHome={setIsHome}
        setIsProduct={setIsProduct}
        setIsAbout={setIsAbout}
      />
      <Routes>
        <Route
          path="/"
          index
          element={
            <Home isHome={isHome} isProduct={isProduct} isAbout={isAbout} />
          }
        />
        <Route
          path="/products"
          element={
            <Products isHome={isHome} isProduct={isProduct} isAbout={isAbout} />
          }
        />
        <Route path="/iexprex-blog" element={<Blogs />} />
        <Route
          path="/about-us"
          element={
            <About isHome={isHome} isProduct={isProduct} isAbout={isAbout} />
          }
        />
        <Route path="/career" element={<Career />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
