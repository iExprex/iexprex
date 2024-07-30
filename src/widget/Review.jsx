import React from 'react'
import styled from 'styled-components'
import checkImg from '../assets/check.png';
const Review = () => {
  return (
    <ReviewContainerWrapper>
      <ReviewArticleContainerWrapper>
       <article className='left-container'>
         <img src={checkImg} alt="" />
       </article>
       <article className="right-container">
        <div className="cap">
           <h1>Problem Solving, <span>Shaping Entities, </span>And <span>Strategic Earnings.</span> </h1>
           <p>We offer a comprehensive range of services</p>
        </div>
        <div className="text">
          <p>
           Focused on problem-solving, entity shaping, and strategic earning. Our expertise lies in providing innovative solutions to challenges, shaping entities for growth and success, and implementing strategic initiatives to drive sustainable and profitable earnings for our clients
          </p>
        </div>
        <div className="btn">
          Detail
        </div>
       </article>
      </ReviewArticleContainerWrapper>
    </ReviewContainerWrapper>
  )
}

const ReviewContainerWrapper = styled.section`
    width: 100%;
    height: 100vh;
    background: white;
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ReviewArticleContainerWrapper = styled.article`
  width: 95%;
  height: 95%;
  background: rgba(255, 255, 255, 0.865);
  border-radius: 10px;
  filter: blur(0.6);
  box-shadow: 0 10px 20px rgba(2, 0, 8, 0.201);
  display: flex;
  align-items: center;
  justify-content: baseline;
  gap: 1rem;
  article{
    width: 100%;
    height: 100%;
    /* background: blue; */
    display: flex;
    align-items: center;
    justify-content: center ;
    flex-direction: column;

    img{
      width: 70%;
      margin: 0 auto;
    }

    .cap{
      h1{
        font-size: 2.5rem;
        font-weight: 900;
        width: 85%;
        span{
          background: linear-gradient(135deg, orangered, #d50558);;
          color: transparent;
          background-clip: text;
        }
      }
      p{
        color: #333;
        font-size: 16px;
        font-weight: 500;
        width: 70%;
        padding-top: 3px;
      }
    }
    .text{
      p{
        font-size: 18px;
        font-weight: 700;
        width: 75%;
        padding-top: 8px;

      }
    }
    .btn{
      border-radius: 10px;
      width: 20%;
      align-self: flex-start;
    }
  }
`

export default Review