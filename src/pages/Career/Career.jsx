import React from "react";
import styled from "styled-components";
import {
  FaBullhorn,
  FaGithub,
  FaLaptopCode,
  FaMapMarker,
  FaMoneyBillWave,
  FaSlack,
  FaSquare,
} from "react-icons/fa";
import lImg from "../../assets/talent.png";
import { MdDesignServices, MdSupportAgent } from "react-icons/md";
import logoImg from "../../assets/i-logo.png";
import bannerImg from '../../assets/curve.png';
import { NewsLetter } from "../../widget";

const Career = () => {
  return (
    <>
      <CareerContainerWrapper>
        <CareerHeaderWrapper>
          <LeftContent>
            <div className="first">
              <h1>
                Got Talent? <br /> Meet Opportunity
              </h1>
              <div className="pro">
                <span>Company Review | </span>
                <span>Salaries | </span>
                <span>Interview | </span>
                <span>Jobs</span>
              </div>

              <div className="mid">
                <p>Popular Jobs :</p>
                <div className="job-ls">
                  <span>Frontend Developer</span>
                  <span>Graphic Designer</span>
                  <span>Digital Marketer</span>
                </div>
              </div>
              <div className="btn">More Jobs Here</div>
            </div>

            <div className="trust">
              <p>Trusted by leading brands and startups</p>
              <div className="brand-ls">
                <div className="brand-box">
                  <FaSquare />
                </div>
                <div className="brand-box">
                  <FaSlack />
                </div>
                <div className="brand-box">
                  <FaGithub />
                </div>
              </div>
            </div>
          </LeftContent>
          <RightContent>
            <div className="banner">
              <img src={bannerImg} alt="" />
            </div>
            <div className="img-wrapper">
              <img src={lImg} alt="l-img" />
            </div>
          </RightContent>
        </CareerHeaderWrapper>
        <CareerForContainerWrapper className="flex-box-col">
          <FeatureWrapper className="flex-box">
            <div className="for-box">
              <h2>For Employers</h2>
              <p>
                Are you an employer looking forward to recruit the best, qualify
                and passionate workers? List requirements and let's do the magic
                for you.
              </p>
              <div className="btn">Post Jobs Here</div>
            </div>
            <div className="for-box">
              <h2>For Students</h2>
              <p>
                Are you a student with talent, looking for opportunities? Upload
                CV to meet your ever wanted career and also upgrade your skills
              </p>
              <div className="btn">Upload CV Find Job</div>
            </div>
          </FeatureWrapper>
          <div className="head">
            <h1>
              Popular <span>Category</span>
            </h1>
          </div>
          <PopularCategoryWrapper>
            <PopularCardWrapper>
              <div className="ico-wrap">
                <FaLaptopCode />
              </div>
              <div className="abt-job">
                <h3>Development</h3>
                <div className="job-len">
                  <span>16 Jobs</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae, est beatae! Vero odio nostrum at?
                  </p>
                </div>
              </div>
            </PopularCardWrapper>
            <PopularCardWrapper>
              <div className="ico-wrap">
                <FaBullhorn />
              </div>
              <div className="abt-job">
                <h3>Marketing & Sales</h3>
                <div className="job-len">
                  <span>16 Jobs</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 rgb(255, 174, 0)est beatae! Vero odio nostrum at?
                  </p>
                </div>
              </div>
            </PopularCardWrapper>
            <PopularCardWrapper>
              <div className="ico-wrap">
                <MdSupportAgent />
              </div>
              <div className="abt-job">
                <h3>Customer Service</h3>
                <div className="job-len">
                  <span>16 Jobs</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae, est beatae! Vero odio nostrum at?
                  </p>
                </div>
              </div>
            </PopularCardWrapper>
            <PopularCardWrapper>
              <div className="ico-wrap">
                <MdDesignServices />
              </div>
              <div className="abt-job">
                <h3>Design & Creative</h3>
                <div className="job-len">
                  <span>16 Jobs</span>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae, est beatae! Vero odio nostrum at?
                  </p>
                </div>
              </div>
            </PopularCardWrapper>
          </PopularCategoryWrapper>
        </CareerForContainerWrapper>
        <CareerJobListeningWrapper>
          <ListeningHeaderWrapper>
            <h1>
              Latest <span>Jobs</span>
            </h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <JobListAreaWrapper>
              <JobCardWrapper>
                <div className="layer">
                  <AboutBrand>
                    <BrandAndJobWrapper>
                      <BrandLogoWrap>
                        <img src={logoImg} alt="brand-logo" />
                      </BrandLogoWrap>
                      <AboutJob>
                        <p>Development</p>
                        <h2>Junior Frontend Developer</h2>
                      </AboutJob>
                    </BrandAndJobWrapper>
                    <LocAndSalaryWrapper>
                      <LocWrapper>
                        <FaMapMarker />
                        <h4>Accra, Ghana</h4>
                      </LocWrapper>
                      <SalaryWrapper>
                        <FaMoneyBillWave />
                        <h4>$90 -$150</h4>
                      </SalaryWrapper>
                    </LocAndSalaryWrapper>
                    <div className="from">
                      <p>
                        By; <strong>iExprex</strong>
                      </p>
                      <div className="time">
                        <strong>Full Time</strong>
                      </div>
                    </div>
                  </AboutBrand>
                </div>
              </JobCardWrapper>
              <JobCardWrapper>
                <div className="layer">
                  <AboutBrand>
                    <BrandAndJobWrapper>
                      <BrandLogoWrap>
                        <img src={logoImg} alt="brand-logo" />
                      </BrandLogoWrap>
                      <AboutJob>
                        <p>Development</p>
                        <h2>Junior Frontend Developer</h2>
                      </AboutJob>
                    </BrandAndJobWrapper>
                    <LocAndSalaryWrapper>
                      <LocWrapper>
                        <FaMapMarker />
                        <h4>Accra, Ghana</h4>
                      </LocWrapper>
                      <SalaryWrapper>
                        <FaMoneyBillWave />
                        <h4>$90 -$150</h4>
                      </SalaryWrapper>
                    </LocAndSalaryWrapper>
                    <div className="from">
                      <p>
                        By; <strong>iExprex</strong>
                      </p>
                      <div className="time">
                        <strong>Full Time</strong>
                      </div>
                    </div>
                  </AboutBrand>
                </div>
              </JobCardWrapper>
              <JobCardWrapper>
                <div className="layer">
                  <AboutBrand>
                    <BrandAndJobWrapper>
                      <BrandLogoWrap>
                        <img src={logoImg} alt="brand-logo" />
                      </BrandLogoWrap>
                      <AboutJob>
                        <p>Development</p>
                        <h2>Junior Frontend Developer</h2>
                      </AboutJob>
                    </BrandAndJobWrapper>
                    <LocAndSalaryWrapper>
                      <LocWrapper>
                        <FaMapMarker />
                        <h4>Accra, Ghana</h4>
                      </LocWrapper>
                      <SalaryWrapper>
                        <FaMoneyBillWave />
                        <h4>$90 -$150</h4>
                      </SalaryWrapper>
                    </LocAndSalaryWrapper>
                    <div className="from">
                      <p>
                        By; <strong>iExprex</strong>
                      </p>
                      <div className="time">
                        <strong>Full Time</strong>
                      </div>
                    </div>
                  </AboutBrand>
                </div>
              </JobCardWrapper>
              <JobCardWrapper>
                <div className="layer">
                  <AboutBrand>
                    <BrandAndJobWrapper>
                      <BrandLogoWrap>
                        <img src={logoImg} alt="brand-logo" />
                      </BrandLogoWrap>
                      <AboutJob>
                        <p>Development</p>
                        <h2>Junior Frontend Developer</h2>
                      </AboutJob>
                    </BrandAndJobWrapper>
                    <LocAndSalaryWrapper>
                      <LocWrapper>
                        <FaMapMarker />
                        <h4>Accra, Ghana</h4>
                      </LocWrapper>
                      <SalaryWrapper>
                        <FaMoneyBillWave />
                        <h4>$90 -$150</h4>
                      </SalaryWrapper>
                    </LocAndSalaryWrapper>
                    <div className="from">
                      <p>
                        By; <strong>iExprex</strong>
                      </p>
                      <div className="time">
                        <strong>Full Time</strong>
                      </div>
                    </div>
                  </AboutBrand>
                </div>
              </JobCardWrapper>
              <JobCardWrapper>
                <div className="layer">
                  <AboutBrand>
                    <BrandAndJobWrapper>
                      <BrandLogoWrap>
                        <img src={logoImg} alt="brand-logo" />
                      </BrandLogoWrap>
                      <AboutJob>
                        <p>Development</p>
                        <h2>Junior Frontend Developer</h2>
                      </AboutJob>
                    </BrandAndJobWrapper>
                    <LocAndSalaryWrapper>
                      <LocWrapper>
                        <FaMapMarker />
                        <h4>Accra, Ghana</h4>
                      </LocWrapper>
                      <SalaryWrapper>
                        <FaMoneyBillWave />
                        <h4>$90 -$150</h4>
                      </SalaryWrapper>
                    </LocAndSalaryWrapper>
                    <div className="from">
                      <p>
                        By; <strong>iExprex</strong>
                      </p>
                      <div className="time">
                        <strong>Full Time</strong>
                      </div>
                    </div>
                  </AboutBrand>
                </div>
              </JobCardWrapper>
              <JobCardWrapper>
                <div className="layer">
                  <AboutBrand>
                    <BrandAndJobWrapper>
                      <BrandLogoWrap>
                        <img src={logoImg} alt="brand-logo" />
                      </BrandLogoWrap>
                      <AboutJob>
                        <p>Development</p>
                        <h2>Junior Frontend Developer</h2>
                      </AboutJob>
                    </BrandAndJobWrapper>
                    <LocAndSalaryWrapper>
                      <LocWrapper>
                        <FaMapMarker />
                        <h4>Accra, Ghana</h4>
                      </LocWrapper>
                      <SalaryWrapper>
                        <FaMoneyBillWave />
                        <h4>$90 -$150</h4>
                      </SalaryWrapper>
                    </LocAndSalaryWrapper>
                    <div className="from">
                      <p>
                        By; <strong>iExprex</strong>
                      </p>
                      <div className="time">
                        <strong>Full Time</strong>
                      </div>
                    </div>
                  </AboutBrand>
                </div>
              </JobCardWrapper>
            </JobListAreaWrapper>
          </ListeningHeaderWrapper>
        </CareerJobListeningWrapper>
      </CareerContainerWrapper>
      <NewsLetter />
    </>
  );
};

const CareerContainerWrapper = styled.section`
  width: 100%;
  min-height: min-content;
  background: whitesmoke;
  padding: 20px 1rem;
  overflow-x: hidden;
`;

const CareerHeaderWrapper = styled.header`
  width: 100%;
  height: 100vh;
  padding: 30px 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  @media screen and (max-width: 430px) {
    flex-direction: column;
  }
`;

const LeftContent = styled.article`
  width: 50%;
  height: 80%;
  padding: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  .first {
    h1 {
      color: orangered;
      font-size: 2.5rem;
      font-weight: 900;
    }
    .mid {
      padding: 8px 0;
      p {
        color: var(--hero-color);
      }

      .job-ls {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100%;
        span {
          color: var(--para-color);
          font-size: 15px;
          padding-top: 5px;
        }
      }
    }
  }

  .pro {
    padding: 8px 0;
    span {
      padding: 0 3px;
      color: var(--para-color);
    }
  }

  .btn {
    background: var(--text-color);
    border-radius: 0.5rem;
    color: rgb(255, 81, 0);
    width: 60%;
    margin: 10px 0;
  }

  .trust {
    p {
      color: var(--hero-color);
    }
    .brand-ls {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      .brand-box {
        width: 40px;
        height: 40px;
        border-radius: 0.3rem;
        background: orangered;
        box-shadow: var(--box-shadow);
        color: white;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        margin-top: 10px;
      }
    }
  }

  @media screen and (max-width: 430px) {
    width: 100%;
  }
`;

const RightContent = styled(LeftContent)`
  align-items: flex-end;
  justify-content: center;
  position: relative;
  .banner{
    width: 100%;
    position: absolute;
    top: -2rem;
    right: -120px;
    z-index: 100;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    -webkit-text-stroke: 20px;
    img{
      width: 50%;
    }
  }
  .img-wrapper {
    width: 95%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    transform: translateX(8.5rem);
    img {
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (max-width: 430px) {
    display: none;
  }
`;

const CareerForContainerWrapper = styled.section`
  width: 100%;
  height: min-content;
  background: white;
  padding: 30px 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  .head {
    width: 100%;
    padding: 10px 0;
    transform: translateY(2rem);
  }
  @media screen and (max-width: 430px) {
    height: 100%;
  }
`;

const FeatureWrapper = styled.article`
  width: 100%;
  height: 210px;
  gap: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .for-box {
    width: 90%;
    height: 98%;
    background: rgb(255, 255, 255);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 5%);
    border-radius: 1pc;
    padding: 5px 15px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    p {
      width: 80%;
      font-size: 18px;
      padding: 10px 0;
    }
    .btn {
      width: 35%;
      border-radius: 50px;
      padding: 8px 0;
    }
  }
  @media screen and (max-width: 430px) {
    flex-direction: column;
    height: 100%;
    width: 100%;
    .for-box {
      width: 100%;
      height: max-content;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      .btn {
        width: 60%;
      }
    }
  }
`;

const PopularCategoryWrapper = styled.div`
  width: 100%;
  height: 55%;
  margin-top: 2%;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  gap: 1rem;
  padding: 10px;
  @media screen and (max-width: 430px) {
    height: max-content;
    grid-template-columns: 1fr;
  }
`;

const PopularCardWrapper = styled.div`
  width: 100%;
  height: 95%;
  background: white;
  box-shadow: 0 0.5rem 1rem rgba(255, 0, 17, 0.082);
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 8px;
  overflow: hidden;

  .ico-wrap {
    width: 70px;
    height: 70px;
    border-radius: 50px;
    background: rgb(232, 84, 3);
    box-shadow: var(--box-shadow);
    color: white;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .abt-job {
    padding: 10px 0;
    h3 {
      text-transform: capitalize;
    }

    .job-len {
      padding: 8px 0;
      p {
        color: var(--para-color);
        font-size: 17px;
        padding: 10px 0;
      }
      span {
        color: orangered;
        font-weight: 600;
      }
    }
  }

  @media screen and (max-width: 430px) {
    width: 100%;
    height: 100%;
  }
`;

const CareerJobListeningWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: var(--white-smoke);
  padding: 30px 1.2rem;
  @media screen and (max-width: 430px) {
    height: 100%;
    padding: 10px 1rem;
  }
`;
const ListeningHeaderWrapper = styled.header`
  width: 100%;
  margin: 0 auto;
  h2 {
    color: var(--hero-color);
  }
  p {
    width: 25%;
  }
  @media screen and (max-width: 430px) {
    p {
      width: 80%;
    }
  }
`;
const JobListAreaWrapper = styled.article`
  width: 100%;
  height: 70vh;
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  gap: 1rem;
  @media screen and (max-width: 430px) {
    height: 100%;
    grid-template-columns: 1fr;
  }
`;

const JobCardWrapper = styled.div`
  width: 100%;
  height: 230px;
  background-position: center;
  background-image: linear-gradient(
      rgba(201, 11, 11, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url(${lImg});
  background-size: cover;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 0 10px rgb(0, 0, 0, 5%);
  align-items: center;
  position: relative;
  .layer {
    padding: 10px;
    position: absolute;
    width: 100%;
    height: 100%;
    /* background: red; */
    border-radius: inherit;
    background: rgba(237, 72, 12, 0.3);
    backdrop-filter: blur(8px);
  }
`;
const AboutBrand = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
  .from {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      color: white;
    }
    strong {
      width: 50%;
      font-size: 1.3rem;
      font-weight: 900;
      color: #f2f2f8;
    }
    .time {
      width: 50%;
      padding: 6px;
      border-radius: 50px;
      text-align: center;
      strong {
        width: 50%;
        font-size: 1.3rem;
        font-weight: 900;
        color: #f2f2f8;
      }
    }
  }
`;
const BrandAndJobWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;
const BrandLogoWrap = styled.div`
  width: 76px;
  height: 74px;
  border-radius: 1rem;
  background: white;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-0.2rem);
  img {
    width: 100%;
    border-radius: inherit;
  }
`;
const AboutJob = styled.div`
  width: 80%;
  h2 {
    font-size: 24px;
    font-weight: 900;
    color: #fff;
  }
  p {
    width: 100%;
    font-size: 17px;
    font-weight: 700;
    color: aliceblue;
  }
`;

const LocAndSalaryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  width: 70%;
  margin-left: 1rem;
  transform: translate(1.2rem, -1rem);
  @media screen and (max-width: 430px) {
    width: 90%;
  }
`;
const LocWrapper = styled.div`
  width: 90%;
  color: #f2f2f8;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0.2rem;
  gap: 8px;
  @media screen and (max-width: 430px) {
    padding: 10px;
  }
`;
const SalaryWrapper = styled(LocWrapper)``;
export default Career;
