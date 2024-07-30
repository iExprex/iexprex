import React from "react";
import styled from "styled-components";
import featImg from '../assets/feat.png'
const FeaturedPost = () => {
  return (
    <FeaturedPostContainerWrapper>
      <h2>Featured Posts</h2>
      <div className="feat">
        <h4>Business Line of Credit</h4>
      </div>
      <div className="feat">
        <h4>Business Line of Credit</h4>
      </div>
      <div className="feat">
        <h4>Business Line of Credit</h4>
      </div>
      <div className="feat">
        <h4>Business Line of Credit</h4>
      </div>
    </FeaturedPostContainerWrapper>
  );
};

const FeaturedPostContainerWrapper = styled.article`
  width: 100%;
  height: 55%;
  background: #ffffffe8;
  border-radius: 0.5rem;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: .8rem;
  h2 {
    align-self: flex-start;
    color: black;
    font-size: 2rem;
    font-weight: 900;
  }

  .feat {
    background: linear-gradient(165deg,rgba(18, 1, 44, 0.902),rgba(0, 0, 0, 0.929)),url(${featImg});
    background-position: center;
    background-size: cover;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    height: 95px;
    display: flex;
    align-items: center;
    justify-content: center;
    h4{
        font-size: 1.5rem;
        font-weight: 900;
        color: white;
    }
  }
`;

export default FeaturedPost;
