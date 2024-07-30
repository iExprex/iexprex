import React from "react";
import { Hero } from "../widget";

const Layout = ({
  isHome,
  isProduct,
  isAbout,
  setWhy,
  setServices,
  setTeam,
  children,
}) => {
  return (
    <>
      <Hero
        isHome={isHome}
        isProduct={isProduct}
        isAbout={isAbout}
        setWhy={setWhy}
        setServices={setServices}
        setTeam={setTeam}
      />
      {children}
    </>
  );
};

export default Layout;
