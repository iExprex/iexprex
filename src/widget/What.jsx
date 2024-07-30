import React from 'react'
import styled from 'styled-components'
import curveImg from '../assets/curve.png'
import { FaAward } from 'react-icons/fa'
import { FaRegClock } from 'react-icons/fa6'
const What = () => {
  return (
    <WhatContainerWrapper>
      <WhatArticleContainer>
        <div className="imgBox">
          <img src={curveImg} alt="" />
        </div>
        <article>
          <h1>Clients Get Exceptional Works From i<strong>Experex</strong> Always. </h1>
          <div className="cap">
           <p>Experience excellence with every project. Choose us for exceptional work that delivers results. Let's elevate your success together!</p>
          </div>
          <div className="btn">
            Explore 
            </div>
        </article>
        <article>
         <div className="short-box">
           <div className="ico-d">
           <FaAward className='ico' />
           </div>
           <h4>Top Quality Works </h4>
           <span>High quality products management. </span>
         </div>
         <div className="short-box">
           <div className="ico-d">
           <FaRegClock className='ico' />
           </div>
           <h4>24 Hour Active </h4>
           <span>24 Hour active chat your need.</span>
         </div>
        </article>
      </WhatArticleContainer>
    </WhatContainerWrapper>
  )
}

const WhatContainerWrapper = styled.section`
    width: 100%;
    height: 100vh;
    background: rgba(236, 230, 230, 0.256);
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
`
const WhatArticleContainer = styled.article`
  width: 95%;
  height: 95%;
  background: rgba(255, 81, 0, 0.904);
  box-shadow: -184px 58px 249px 45px rgba(232,206,245,0.28);
-webkit-box-shadow: -184px 58px 249px 45px rgba(232,206,245,0.28);
-moz-box-shadow: -184px 58px 249px 45px rgba(232,206,245,0.28);
  /* box-shadow: 0 45px 30px rgba(0, 0, 0, 0.477); */
  border-radius: 1rem;
  color: azure;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;
  position: relative;


  .imgBox{
    position: absolute;
    top: 1rem;
    right: -18rem;
    z-index: 100;
    img{
      width: 50%;
    }
  }

  article{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 18px;

    h1{
        font-size: 2.5rem;
        font-weight: 900;
        width: 90%;
        padding-top: 4rem;
        align-self: flex-start;
    }
    .cap{
      p{
      width: 80%;
      font-size: 18px;
      padding-bottom: 12px;
    }

    }
    .btn{
      transform: translateX(-11.8rem);

      &:hover{
        background: white;
      }
    }

    .short-box{
      background: rgba(255, 255, 255, 0.973);
      box-shadow: 0 1rem 10px rgba(0, 0, 0, 0.306);
      border-radius: 10px;
      width: 300px;
      height: 40%;
      margin: 10px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      transform: translateX(2rem);
      
      gap: 1rem;

      .ico{
        font-size: 2rem;
      }

      h4{
        color: rgb(1, 1, 13);
        font-size: 1.5rem;
      }

      span{
        font-size: 18px;
        color: #333;
      }

      .ico-d{
        width: 80px;
        aspect-ratio: 1/1;
        display: flex;
        align-items: center;
        justify-content: center;
        background: red;
        border-radius: 50px;
      }
    }
  }
`
export default What