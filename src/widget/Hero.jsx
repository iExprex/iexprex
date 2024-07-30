import React from "react";
import styled from "styled-components";
import curveImg from "../assets/curve.png";
import Brands from "./Brands";
import { MdArrowDropUp } from "react-icons/md";

const Hero = ({ isHome, isProduct, isAbout, setWhy, setServices, setTeam }) => {
  return (
    <>
      {isHome && (
        <HeroContainerWrapper>
          <LeftContainer>
            <div className="meta">
              <h1>
                i<span>Exprex</span>
              </h1>
              <h3>Certified In Documenting, Design & Development </h3>
            </div>
            <h2>
              We <span>structure</span>, secure{" "}
              <span>and deliver projects</span> In low time!
            </h2>
            <div className="t">
              <p>
              iExprex specializes in efficiently structuring, securing, and delivering projects within a short timeframe. With a focus on streamlined processes and effective project management, we aim to provide quick and reliable solutions that meet client needs, ensuring timely execution and delivery of projects.
              </p>
            </div>
            <div className="btn btn-primary">Get Started</div>
            <Brands className="brand" />
          </LeftContainer>
          <RightContainer>
            <div className="ser-box">
              <div className="box">
                <div className="first">
                  <img src={curveImg} alt="" />
                </div>
                <div className="last">
                  <h3>Documenting</h3>
                  <p>
                   With thorough documentation, we analyze and understand the client's requirements and objectives. 
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="first">
                  <img src={curveImg} alt="" />
                </div>
                <div className="last">
                  <h3>Design</h3>
                  <p>
                   Design phase, iExprex editor will create a visually appealing and user-friendly interface.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="first">
                  <img src={curveImg} alt="" />
                </div>
                <div className="last">
                  <h3>Development</h3>
                  <p>
                    Let iExprex skilled professionals brings the design to life, incorporating robust functionality.
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="first">
                  <img src={curveImg} alt="" />
                </div>
                <div className="last">
                  <h3>Security</h3>
                  <p>
                   We implement stringent measures to safeguard the project from potential threats.
                  </p>
                </div>
              </div>
            </div>
          </RightContainer>
        </HeroContainerWrapper>
      )}
      {isProduct && (
        <ProductsHeroContainerWrapper>
          <LeftContainer>
            <dotlottie-player
              src="https://lottie.host/475651f7-00c1-4985-a94a-a736570cbfee/BIsXmnddcx.json"
              background="transparent"
              speed="1"
              style={{ width: "380px", height: "340px" }}
              loop
              autoplay
            ></dotlottie-player>
          </LeftContainer>
          <RightContainer>
            <div className="pro-cap">
              <h1>
                Control Your <span>Business Future</span> Easily With{" "}
                <span>iExprex Awesome</span> Products.
              </h1>
              <h3>Quick-Go; Unleash Business Growth</h3>
              <p>
              Empower your business by partnering with iExprex. Take control of your future with our innovative solutions and strategic support. Let's shape success together
              </p>
            </div>
            <div className="btn">Explore Products</div>
            <div className="trust">
              <h1>
                <MdArrowDropUp className="drop" /> <span>10K+</span> Users
              </h1>
              <h5>Already Connected Month Ago</h5>
            </div>
          </RightContainer>
        </ProductsHeroContainerWrapper>
      )}
      {isAbout && (
        <AboutHeroContainerWrapper>
          <AboutContentTopRowContainerWrapper>
            <div className="top-row-card moc">
              <dotlottie-player
                src="https://lottie.host/df7193a3-a5b9-4626-b2a4-bc445f977e96/68ls7fYNhE.json"
                background="transparent"
                speed="1"
                style={{ width: "360px", height: "280px" }}
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <div className="top-row-card">
              <h1>
                About <br />i<span>Exprex.pro</span>
              </h1>
              <p>
              iExprex is a multi-faceted agency based in Ghana, offering a range of services including travel advisory, software development, and digital marketing. With a diverse portfolio of tailored products, they cater to the needs of businesses through solutions such as design, strategic investment, and office productivity enhancements.
              </p>
              <div
                className="btn"
                onClick={() => {
                  setWhy(true);
                  setServices(false);
                  setTeam(false);
                }}
              >
                Learn More
              </div>
            </div>
          </AboutContentTopRowContainerWrapper>
          <AboutContentBottomRowContainerWrapper>
            <div className="bottom-row-card">
              <h1>
                iExprex.pro <br />
                <span>Services</span>
              </h1>
              <p>
              iExprex offers a diverse portfolio of services including strategic consulting, problem-solving solutions, entity shaping, and revenue optimization to help businesses achieve sustainable growth and success in their respective industries.
              </p>
              <div
                className="btn"
                onClick={() => {
                  setWhy(false);
                  setServices(true);
                  setTeam(false);
                }}
              >
                Learn More
              </div>
            </div>
            <div className="bottom-row-card">
              <h1>
                Meet <br /> i<span>Exprex Team</span>
              </h1>
              <p>
              Meet the dynamic iExprex team – where creativity, expertise, and dedication converge to shape your success story. Let's innovate, collaborate, and achieve greatness together
              </p>
              <div
                className="btn"
                onClick={() => {
                  setWhy(false);
                  setServices(false);
                  setTeam(true);
                }}
              >
                Learn More
              </div>
            </div>
          </AboutContentBottomRowContainerWrapper>
        </AboutHeroContainerWrapper>
      )}
    </>
  );
};

const HeroContainerWrapper = styled.section`
  width: 100%;
  height: calc(100vh - 7rem);
  padding: 0 2.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  gap: 1rem;
`;

const LeftContainer = styled.div`
  width: 100%;
  height: 80%;
  padding: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  .meta {
    h1 {
      font-size: 3rem;
      font-weight: 900;
      color: #000;
      text-transform: lowercase;
      span {
        text-transform: capitalize;
        color: transparent;
        background: linear-gradient(135deg, orangered, #d50558);
        background-clip: text;
      }
    }
  }

  .t {
    p {
      font-size: 17px;
      font-weight: 600;
      width: 85%;
      padding: 7px 0;
    }
  }

  h2 {
    font-size: 2.3rem;
    font-weight: 900;
    color: #0f0f0f;
    padding-top: 12px;
    text-transform: capitalize;
    width: 85%;
    span {
      text-transform: capitalize;
      color: transparent;
      background: linear-gradient(135deg, orangered, #d50558);
      background-clip: text;
      line-height: 1.5;
    }
  }

  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
  }
`;

const RightContainer = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  .ser-box {
    background: transparent;
    border-radius: 1rem;
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    align-self: flex-end;

    .box {
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      background-image: linear-gradient(135deg, rgba(234, 71, 12, 0.352), rgba(201, 6, 84, 0.247));
      border-radius: 10px;
      width: 97%;
      height: 110px;
      margin: 3px 0;
      display: flex;
      align-items: center;
      justify-content: baseline;
      cursor: pointer;
      transition: transform 1s ease-in-out;

      .first {
        width: 68px;
        aspect-ratio: 1/1;
        border-radius: 50px;
        background: white;
        margin-left: 5px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 90%;
          border-radius: inherit;
        }
      }

      .last {
        width: 80%;
        color: #000;
        padding-left: 8px;
        h3 {
          font-size: 18px;
          font-weight: 900;
          color: red;
        }
        p {
          font-size: 16px;
          font-weight: 500;
          line-height: 1.6;
        }
      }

      &:hover {
        transform: scale(0.98);
      }
    }
  }
  .pro-cap {
    h3 {
      font-weight: 900;
      font-size: 1.5rem;
      color: #910ba8;
    }
    p {
      width: 85%;
      font-size: 18px;
      padding: 8px 0;
    }
  }
  .btn {
    align-self: flex-start;
    border-radius: 0.5rem;
  }
  .trust {
    align-self: flex-start;
    padding: 15px 0;
    color: #333;
    font-size: 17px;
    h5 {
      padding-left: 1rem;
    }
    .drop {
      color: #910ba8;
    }
  }
`;

//Products styles
const ProductsHeroContainerWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  width: calc(100% - 7rem);
  height: 100%;
  margin: 0 auto;
  padding: 30px 0;
`;

//About Styles
const AboutHeroContainerWrapper = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  place-items: center;
  width: calc(100% - 1.5rem);
  height: 100vh;
  margin: 1rem auto;
  padding: 30px 0;
  background: #fff;
`;
const AboutContentTopRowContainerWrapper = styled.article`
  width: 98%;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 8px;
  .moc {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
  }
  .top-row-card {
    width: 98%;
    height: 100%;
    background: #ffffff;
    border-radius: 1rem;
    box-shadow: -184px 58px 249px 45px rgba(232, 206, 245, 0.28);
    -webkit-box-shadow: -184px 58px 249px 45px rgba(232, 206, 245, 0.28);
    -moz-box-shadow: -184px 58px 249px 45px rgba(232, 206, 245, 0.28);
    padding: 10px;
    h1 {
      line-height: 1;
    }
    p {
      font-size: 18px;
      width: 85%;
      padding-bottom: 4px;
    }
    .btn {
      border-radius: 0.5rem;
      padding: 5px 0;
      background: white;
      border: 1px solid orangered;
      box-shadow: none;
      color: rgb(0, 0, 0);
    }
  }
`;
const AboutContentBottomRowContainerWrapper = styled.article`
  width: 98%;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 8px;
  .bottom-row-card {
    width: 98%;
    height: 97%;
    background: white;
    border-radius: 1rem;
    box-shadow: -184px 58px 249px 45px rgba(232, 206, 245, 0.28);
    -webkit-box-shadow: -184px 58px 249px 45px rgba(232, 206, 245, 0.28);
    -moz-box-shadow: -184px 58px 249px 45px rgba(232, 206, 245, 0.28);
    padding: 10px;
    h1 {
      line-height: 1;
    }
    p {
      font-size: 18px;
      width: 85%;
      padding-bottom: 4px;
    }
    .btn {
      border-radius: 0.5rem;
      padding: 5px 0;
      box-shadow: none;
    }
  }
`;

export default Hero;
