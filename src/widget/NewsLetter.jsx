import React from 'react'
import { FaEnvelopeOpen } from 'react-icons/fa'
import styled from 'styled-components'

const NewsLetter = () => {
  return (
    <NewsLetterContainerWrapper>
     <NewsLetterAreaWrapper>
        <div className="left">
          <div className="ico-box">
            <FaEnvelopeOpen />
          </div>
          <h1>Keep Up With <span>The Latest</span></h1>
          <h4>Join Our NewsLetter To Stay Up To Date On Features And Release</h4>
          <div className="agree">
            <p>Stay in the loop with our latest features and releases! Subscribe to our newsletter for exclusive updates and valuable insights, ensuring you're always informed and ahead of the curve. Join us today!</p>
          </div>
        </div>
        <div className="right">
          <h3>Stay Up To Date</h3>
          <div className="form-box">
            <div className="input-form">
              <input type="email" name="email" id="emailId" placeholder='Example@gmail.com' />  
            </div>
            <div className="check">
              <p>By clicking submit you agree to our <span>terms of service</span></p>
            </div>
            <div className="btn btn-primary">
              <span>Submit</span>
            </div>
          </div>
        </div>
     </NewsLetterAreaWrapper>
    </NewsLetterContainerWrapper>
  )
}

// junijay23@gmail.com

const NewsLetterContainerWrapper = styled.section`
 width: 100%;
 height: 95vh;
 display: flex;
 align-items: center;
 justify-content: center;
 box-shadow: 73px -6px 82px 42px rgba(232, 206, 245, 0.28);
  -webkit-box-shadow: 73px -6px 82px 42px rgba(232, 206, 245, 0.28);
  -moz-box-shadow: 73px -6px 82px 42px rgba(232, 206, 245, 0.28);
  overflow-x: hidden;
  background: rgba(255, 0, 0, 0.002);
`
const NewsLetterAreaWrapper = styled.article`
 width: 95%;
 height: 80%;
 background: white;
 border-radius: 1rem;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 0 10px;
 .left{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    .ico-box{
      width: 50px;
      aspect-ratio: 1/1;
      display: flex;
      align-items: center;
      justify-content: center;
      background: orangered;
      color: white;
      border-radius: 10px;
    }

    h1{
      padding: 12px 0;
    }

    h4{
      font-size: 20px;
      font-weight: 900;
    }

    .agree{
      padding: 8px 0;
      p{
        font-weight: 600;
        font-size: 17px;
        width: 85%;
        color: #525050;
      }
    }
 }
 .right{
   width: 100%;
   height: 100%;
   display: flex;
   align-items: flex-start;
   justify-content: center;
   flex-direction: column;
   gap: 1rem;

  h3{
    font-size: 1.4rem;
    font-weight: 900;
    padding-left: 5rem;
  }
   .form-box{
    width: 100%;
    transform: translateX(5rem);
    .input-form{
      width: 65%;
      height: 55px;
      box-shadow: 0 -10px .5rem 30px rgba(14, 1, 117, 0.062);
      border-radius: .5rem;
      margin-bottom: 15px;
      input{
        width: 100%;
        height: 100%;
        padding: 0 12px;
        font-size: 17px;
        border-radius: inherit;
      }
    }
    .check{
      span{
        color: orangered;
        cursor: pointer;
      }
      p{
        font-size: 20px;
        padding-top: 16px;
      }
    }
    .btn{
        border-radius: 10px;
        width: 20%;
        margin: 1rem 0;
        background: white;
        border: 1px solid orangered;
        color: #000;
      }
   }
 }
`

export default NewsLetter