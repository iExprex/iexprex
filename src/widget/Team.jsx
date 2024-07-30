import React from "react";
import styled from "styled-components";
import memAvatar from "../assets/avatar9.jpg";
const Team = () => {
  return (
    <TeamContainerWrapper>
      <div className="team-card">
        <div className="img-card">
          <img src={memAvatar} alt="" />
        </div>
        <div className="mem-info">
          <h2>Cliff Barry</h2>
          <div className="data">
            <h4>Quick-Go Editor Manager</h4> 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error iure eaque ea.</p>
            <small>Connect on LinkedIn</small>
          </div>
        </div>
      </div>
      <div className="team-card">
        <div className="img-card">
          <img src={memAvatar} alt="" />
        </div>
        <div className="mem-info">
          <h2>Cliff Barry</h2>
          <div className="data">
            <h4>Quick-Go Editor Manager</h4> 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error iure eaque ea.</p>
            <small>Connect on LinkedIn</small>
          </div>
        </div>
      </div>
      <div className="team-card">
        <div className="img-card">
          <img src={memAvatar} alt="" />
        </div>
        <div className="mem-info">
          <h2>Cliff Barry</h2>
          <div className="data">
            <h4>Quick-Go Editor Manager</h4> 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error iure eaque ea.</p>
            <small>Connect on LinkedIn</small>
          </div>
        </div>
      </div>
      <div className="team-card">
        <div className="img-card">
          <img src={memAvatar} alt="" />
        </div>
        <div className="mem-info">
          <h2>Cliff Barry</h2>
          <div className="data">
            <h4>Quick-Go Editor Manager</h4> 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error iure eaque ea.</p>
            <small>Connect On LinkedIn</small>
          </div>
        </div>
      </div>
    </TeamContainerWrapper>
  );
};
const TeamContainerWrapper = styled.section`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  gap: 1rem;
  padding: 5px;
  .team-card {
    width: 100%;
    height: 95%;
    background: linear-gradient(
      125deg,
      rgba(95, 27, 3, 0.3),
      rgba(86, 3, 102, 0.6)
    );
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    transform-style: preserve-3d;
    transform: perspective(1000px);
    transition: transform 800ms ease-in-out;
    .img-card {
      width: 96%;
      height: 280px;
      background: rgba(255, 246, 246, 0.3);
      border-radius: 10px;
      align-self: unsafe;
      margin: 8px 0;
      img {
        width: 100%;
        border-radius: inherit;
      }
    }
    .mem-info {
      height: calc(100% - 280px);
      width: 98%;
      background: rgba(255, 0, 0, 0.2);
      border-radius: 8px 8px 1rem 1rem;
      box-shadow: -184px 58px 249px 45px rgba(232, 206, 245, 0.28);
      -webkit-box-shadow: -184px 58px 249px 45px rgba(232, 206, 245, 0.28);
      -moz-box-shadow: -184px 58px 249px 45px rgba(232, 206, 245, 0.28);
      transform: translateY(-0.2rem);
      padding: 8px;
      h2{
        color: #fdfdfd;
        font-weight: 900;
        font-size: 1.4rem;
      }
      .data{
        h4{
          font-size: 1.2rem;
          font-weight: 600;
          color: rgb(10, 1, 18);
        } 
        p{
          font-size: 18px;
          color: rgb(10, 1, 18);
        }
        small{
         
          font-size: 17px;
          font-weight: 600;
        }
      }
    }
    &:hover {
      transform: translateY(-1rem) scale(0.98);
    }
  }
`;

export default Team;
