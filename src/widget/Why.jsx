import React from "react";
import { FaAward } from "react-icons/fa6";
import { MdArrowRightAlt } from "react-icons/md";
import styled from "styled-components";

const Why = () => {
  return (
    <>
    <WhyIExprexContainerWrapper>
      <div className="top-article">
        <div className="head">
          <p>
          Join iExprex to embark on a transformative journey towards business success. With a proven track record of delivering innovative solutions, personalized strategies, and unparalleled support, we empower our clients to achieve their goals.
          </p>
          <br />
          <p>
          By partnering with us, you gain access to a dedicated team of experts who are committed to driving your business forward. Experience the iExprex difference and unlock your full potential for growth, sustainability, and long-term success.
            inventore laboriosam.
          </p>
          <div className="btn-primary">
            <span>Learn More</span>
            <div className="s-cir">
              <MdArrowRightAlt />
            </div>
          </div>
        </div>
        <div className="right-box">
          <div className="grid-card">
            <div className="ico">
              <FaAward className="flag" />
            </div>
            <div className="det">
              <h2>275 K+</h2>
              <p>Satisfied Clients</p>
            </div>
          </div>
          <div className="grid-card">
            <div className="ico">
              <FaAward className="flag" />
            </div>
            <div className="det">
              <h2>275 K+</h2>
              <p>Satisfied Clients</p>
            </div>
          </div>
          <div className="grid-card">
            <div className="ico">
              <FaAward className="flag" />
            </div>
            <div className="det">
              <h2>275 K+</h2>
              <p>Satisfied Clients</p>
            </div>
          </div>
          <div className="grid-card">
            <div className="ico">
              <FaAward className="flag" />
            </div>
            <div className="det">
              <h2>275 K+</h2>
              <p>Satisfied Clients</p>
            </div>
          </div>
        </div>
      </div>
    </WhyIExprexContainerWrapper>
    
    </>
  );
};

const WhyIExprexContainerWrapper = styled.section`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.952);
  border-radius: inherit;
  padding: 20px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  .top-article {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .head {
      width: 100%;
      p {
        font-size: 1.2rem;
        font-weight: 500;
        width: 75%;
        line-height: 1.4;
      }
      .btn-primary {
        width: 25%;
        background: rgb(235, 38, 3);
        box-shadow: -184px 58px 249px 45px rgba(232, 206, 245, 0.28);
        -webkit-box-shadow: -184px 58px 249px 45px rgba(232, 206, 245, 0.28);
        -moz-box-shadow: -184px 58px 249px 45px rgba(232, 206, 245, 0.28);
        padding: 8px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        font-size: 17px;
        font-weight: 700;
        border-radius: 50px;
        margin: 8px 0;
        color: #fff; 
        cursor: pointer;

        .s-cir {
          width: 30px;
          aspect-ratio: 1/1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: 50px;
          color: #000;
        }
        &:hover{
          filter: contrast(0.8);
        }
      }
    }
    .right-box {
      width: 100%;
      height: 350px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      place-items: center;
      gap: 1rem;
      .grid-card {
        width: 100%;
        height: 100%;
        background: white;
        box-shadow: -184px 58px 249px 45px rgba(232, 206, 245, 0.28);
        -webkit-box-shadow: -184px 58px 249px 45px rgba(232, 206, 245, 0.28);
        -moz-box-shadow: -184px 58px 249px 45px rgba(232, 206, 245, 0.28);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        .ico {
          width: 45%;
          height: 30%;
          display: flex;
          align-items: center;
          justify-content: center;
          .flag {
            font-size: 2rem;
            color: orangered;
          }
        }
        .det {
          h2 {
            font-size: 2.3rem;
            font-weight: 900;
            background: linear-gradient(135deg, orangered, #d50558);
            color: transparent;
            background-clip: text;
            -webkit-background-clip: text;
            -moz-background-clip: text;
          }
          p {
            font-size: 1.5rem;
            font-weight: 700;
          }
        }
      }
    }
  }
`;

export default Why;
