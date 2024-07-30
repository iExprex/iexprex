import React from "react";
import {
  FaCode,
  FaExchangeAlt,
  FaRegEye,
  FaRegFolder,
} from "react-icons/fa";
import styled from "styled-components";

import { FaBrush, FaDroplet } from "react-icons/fa6";

const Products = () => {
  return (
    <ProductsContainerWrapper>
     <h1>Products <span>Listing</span></h1>
      <ProductsListingContainerWrapper>
        <ProductCardContainerWrapper className="one">
          <div className="top">
            <div className="proImg">
              <FaCode />
            </div>
            <FaRegEye />
          </div>
          <div className="mid">
            <h2>
              i<span>Exprex</span> <br /> Quick-Go Builder
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium nam nihil corporis perspiciatis fugiat tenetur
              similique eveniet. Placeat error optio cumque odit ratione itaque
              repellendus?
            </p>
          </div>
          <div className="last">
            <h4>Builder Category</h4>
            <samp>
              <FaDroplet/> Portfolio Builder
            </samp>
            <samp>
              <FaDroplet className='drop'/> E-Commerce Builder
            </samp>
            <samp>
              <FaDroplet className='drop'/> Blog Builder
            </samp>
            <samp>
              <FaDroplet className='drop'/> Inventory Builder
            </samp>
          </div>
        </ProductCardContainerWrapper>
        <ProductCardContainerWrapper className="two">
          <div className="top">
            <div className="proImg">
              <FaBrush style={{ color: "#000" }} />
            </div>
            <FaRegEye />
          </div>
          <div className="mid">
            <h2>
              i<span>Exprex</span> <br /> Quick-Go Editor
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium nam nihil corporis perspiciatis fugiat tenetur
              similique eveniet. Placeat error optio cumque odit ratione itaque
              repellendus?
            </p>
          </div>
          <div className="last">
            <h4>Editor Category</h4>
            <samp>
              <FaDroplet className='drop'/> BrandKit
            </samp>
            <samp>
              <FaDroplet className='drop'/> UI/UX Design
            </samp>
            <samp>
              <FaDroplet className='drop'/> Graphic Design
            </samp>
            <samp>
              <FaDroplet className='drop'/> Photograph
            </samp>
          </div>
        </ProductCardContainerWrapper>
        <ProductCardContainerWrapper className="four">
          <div className="top">
            <div className="proImg">
              <FaExchangeAlt style={{ color: "#000" }} />
            </div>
            <FaRegEye />
          </div>
          <div className="mid">
            <h2>
              i<span>Exprex</span> <br /> Quick-Go Earning
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium nam nihil corporis perspiciatis fugiat tenetur
              similique eveniet. Placeat error optio cumque odit ratione itaque
              repellendus?
            </p>
          </div>
          <div className="last">
            <h4>Earning Category</h4>
            <samp>
              <FaDroplet className='drop'/>
              Affiliate Marketing
            </samp>
            <samp>
              <FaDroplet className='drop'/>
              NFTs Exchange
            </samp>
            <samp>
              <FaDroplet className='drop'/>
              Kriptou Swap
            </samp>
            <samp>
              <FaDroplet className='drop'/>
              Web3 Airdrop
            </samp>
          </div>
        </ProductCardContainerWrapper>
        <ProductCardContainerWrapper className="three">
          <div className="top">
            <div className="proImg">
              <FaRegFolder style={{ color: "#000" }} />
            </div>
            <FaRegEye />
          </div>
          <div className="mid">
            <h2>
              i<span>Exprex</span> <br /> Quick-Go Manager
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium nam nihil corporis perspiciatis fugiat tenetur
              similique eveniet. Placeat error optio cumque odit ratione itaque
              repellendus?
            </p>
          </div>
          <div className="last">
            <h4>Manager Category</h4>
            <samp>
              <FaDroplet className='drop'/> iExprex Cloud
            </samp>
            <samp>
              <FaDroplet className='drop'/> iExprex Marketing Manager
            </samp>
            <samp>
              <FaDroplet className='drop'/> iExprex Travel Manager
            </samp>
            <samp>
              <FaDroplet className='drop'/> iExprex Lifestyle
            </samp>
          </div>
        </ProductCardContainerWrapper>
      </ProductsListingContainerWrapper>
    </ProductsContainerWrapper>
  );
};

const ProductsContainerWrapper = styled.section`
  width: 100%;
  height: 100%;
  background: white;
  padding: 30px 0;
  h1{
    padding-left: 2rem;
  }
`;
const ProductsListingContainerWrapper = styled.article`
  width: 96%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  gap: 0.7rem;
  margin: 0 auto;
  .one {
    background: whitesmoke;
    color: black;
  }
  .two {
    background: rgb(1, 26, 14);
    color: white;
  }
  .three {
    background: rgb(17, 8, 35);
    color: white;
  }
  .four {
    background: rgba(26, 4, 30, 0.902);
    color: rgb(255, 255, 255);
  }
`;

const ProductCardContainerWrapper = styled.article`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 1rem 0.5rem rgba(13, 13, 12, 0.281),
    0 40px 35px rgba(12, 3, 1, 0.071);
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: transform 1s ease-in;

  .top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .proImg {
      width: 40px;
      aspect-ratio: 1/1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3px;
      background: white;
      border-radius: 50px;
      font-size: 1.3rem;
    }
  }

  .mid {
    h2 {
      font-weight: 900;
      span {
        color: transparent;
        background: linear-gradient(135deg, orangered, #d50558);
        background-clip: text;
      }
    }

    p {
      width: 80%;
    }
  }

  .last {
    align-self: flex-start;
    display: flex;
    flex-direction: column;

    h4 {
      font-weight: 900;
      font-size: 18px;
      color: transparent;
      background: linear-gradient(135deg, orangered, #d50558);
      background-clip: text;
      padding: 5px;
    }

    .drop{
        padding-right: 5px;
    }
  }

  &:hover {
    transform: scale(0.97);
  }
`;

export default Products;
