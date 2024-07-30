import React, { useState } from "react";
import Layout from "../../layout/Layout";
import { Company, NewsLetter, Recent } from "../../widget";

const About = ({ isHome, isProduct, isAbout }) => {
  const [why, setWhy] = useState(true);
  const [services, setServices] = useState(false);
  const [team, setTeam] = useState(false);
  return (
    <>
      <Layout isHome={isHome} isProduct={isProduct} isAbout={isAbout} setWhy={setWhy} setServices={setServices} setTeam={setTeam} />
      <Company
        why={why}
        setWhy={setWhy}
        services={services}
        setServices={setServices}
        team={team}
        setTeam={setTeam}
      />
      <Recent />
      <NewsLetter />
    </>
  );
};

export default About;
