import React from "react";
import { FaTripadvisor } from "react-icons/fa";
import { FaMoneyBill1Wave, FaUsersGear } from "react-icons/fa6";
import {  MdAnalytics, MdBrush, MdCategory, MdDashboard, MdDeveloperBoard, MdOutlineStar, MdSupportAgent } from "react-icons/md";
import styled from "styled-components";

const Listing = () => {
  return (
    <ListingContainerWrapper>
      <ListAreaContainer>
        <div className="base">
        <h1>Top <br /> Listing</h1>
        </div>
        <ListCard>
         <div className="top">
            <div className="img-box">
              <div className="cr"><MdSupportAgent /></div>
              <MdOutlineStar />
            </div>
         </div>
         <div className="mid">
            <h1>i<span>Exprex</span></h1>
           <h2>Quick-Go Advisor</h2>
            <p>Providing expert advice and guidance on travel arrangements, ensuring memorable and hassle-free travel experiences tailored to your preferences and needs.</p>
         </div>
         <div className="last">
            <div className="small">
            <MdDashboard  className="i-ico" />
            <span>372 | Projects</span>
            </div>
            <div className="small">
            <MdCategory className="i-ico"/>
            <span>Web3 | dApp | Mobile & Desktop Softwares</span>
            </div>
         </div>
        </ListCard>
        <ListCard>
         <div className="top">
            <div className="img-box">
              <div className="cr"><MdDeveloperBoard /></div>
              <MdOutlineStar />
            </div>
         </div>
         <div className="mid">
            <h1>i<span>Exprex</span></h1>
           <h2>Quick-Go Builder</h2>
            <p> Crafting robust and user-friendly websites and applications to drive digital presence and performance, ensuring seamless user experiences and interactions.</p>
         </div>
         <div className="last">
            <div className="small">
            <MdDashboard  className="i-ico" />
            <span>372 | Projects</span>
            </div>
            <div className="small">
            <MdCategory className="i-ico"/>
            <span>Web3 | dApp | Mobile & Desktop Softwares</span>
            </div>
         </div>
        </ListCard>
        <ListCard>
         <div className="top">
            <div className="img-box">
              <div className="cr"><MdBrush /></div>
              <MdOutlineStar />
            </div>
         </div>
         <div className="mid">
            <h1>i<span>Exprex</span></h1>
           <h2>Quick-Go Editor</h2>
            <p>Dedicated to creating visually engaging content and designs that resonate with your target audience, enhancing your brand's image and messaging.</p>
         </div>
         <div className="last">
            <div className="small">
            <MdDashboard  className="i-ico" />
            <span>372 | Projects</span>
            </div>
            <div className="small">
            <MdCategory className="i-ico"/>
            <span>Web3 | dApp | Mobile & Desktop Softwares</span>
            </div>
         </div>
        </ListCard>
        <ListCard>
         <div className="top">
            <div className="img-box">
              <div className="cr"><FaMoneyBill1Wave /></div>
              <MdOutlineStar />
            </div>
         </div>
         <div className="mid">
            <h1>i<span>Exprex</span></h1>
           <h2>Quick-Go Earning</h2>
            <p>Offering tailored strategies and insights on affiliate marketing and investment opportunities to maximize earnings and achieve financial goals through expert guidance.</p>
         </div>
         <div className="last">
            <div className="small">
            <MdDashboard  className="i-ico" />
            <span>372 | Projects</span>
            </div>
            <div className="small">
            <MdCategory className="i-ico"/>
            <span>Web3 | dApp | Mobile & Desktop Softwares</span>
            </div>
         </div>
        </ListCard>
        <ListCard>
         <div className="top">
            <div className="img-box">
              <div className="cr"><FaUsersGear /></div>
              <MdOutlineStar />
            </div>
         </div>
         <div className="mid">
            <h1>i<span>Exprex</span></h1>
           <h2>Quick-Go Manager</h2>
            <p>Efficiently streamlining office operations and workflows to boost productivity, optimize resources, and achieve organizational goals effectively and effortlessly.</p>
         </div>
         <div className="last">
            <div className="small">
            <MdDashboard  className="i-ico" />
            <span>372 | Projects</span>
            </div>
            <div className="small">
            <MdCategory className="i-ico"/>
            <span>Web3 | dApp | Mobile & Desktop Softwares</span>
            </div>
         </div>
        </ListCard>
        <ListCard>
         <div className="top">
            <div className="img-box">
              <div className="cr"><MdAnalytics /></div>
              <MdOutlineStar />
            </div>
         </div>
         <div className="mid">
            <h1>i<span>Exprex</span></h1>
           <h2>Quick-Go Marketer</h2>
            <p>Creating strategic digital marketing campaigns to enhance brand visibility, drive customer engagement, and achieve marketing objectives for business growth and success.</p>
         </div>
         <div className="last">
            <div className="small">
            <MdDashboard  className="i-ico" />
            <span>372 | Projects</span>
            </div>
            <div className="small">
            <MdCategory className="i-ico"/>
            <span>Web3 | dApp | Mobile & Desktop Softwares</span>
            </div>
         </div>
        </ListCard>
        <ListCard>
         <div className="top">
            <div className="img-box">
              <div className="cr"><FaTripadvisor /></div>
              <MdOutlineStar />
            </div>
         </div>
         <div className="mid">
            <h1>i<span>Exprex</span></h1>
           <h2>Quick-Go Traveler</h2>
            <p>Providing expert advice and guidance on travel arrangements, ensuring memorable and hassle-free travel experiences tailored to your preferences and needs.</p>
         </div>
         <div className="last">
            <div className="small">
            <MdDashboard  className="i-ico" />
            <span>372 | Projects</span>
            </div>
            <div className="small">
            <MdCategory className="i-ico"/>
            <span>Web3 | dApp | Mobile & Desktop Softwares</span>
            </div>
         </div>
        </ListCard>
      </ListAreaContainer>
    </ListingContainerWrapper>
  );
};

const ListingContainerWrapper = styled.section`
  background: white;
  box-shadow: 0 1rem .5rem rgba(35, 5, 155, 0.027);
  width: 95%;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const ListAreaContainer = styled.article`
  width: 100%;
  height: max-content;
  background: #f1f1f1;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  gap: 1rem;
  padding: 10px;

  .base{
    width: 100%;
    height: 100%;
    background: linear-gradient(136deg,rgba(38, 1, 62, 0.922),rgba(194, 31, 2, 0.963));
    border-radius: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    h1{
        display: flex;
        align-items: center;
    }
  }
`;

const ListCard = styled.div`
  width: 100%;
  height: 340px;
  background: #fff;
  border-radius: .5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.103);
  padding: 10px;
  cursor: pointer;
  transition: transform 800ms ease-in;

  .top{
     width: 100%;
     .img-box{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .cr{
            width: 40px;
            aspect-ratio: 1/1;
            background: orangered;
            border-radius: 50px;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
        }
     }
  }

  .mid{
    h1{
        line-height: 1.3px;
    }
    h2{
        font-weight: 900;
    }
  }

  .last{
    display: block;
    .small{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
        padding: 5px 0;
        .i-ico{
            color: red;
        }
        span{
            font-size: 14px;
        }
    }
  }

  &:hover{
    transform: scale(0.98);
  }
`

export default Listing;
