import React from "react";
import styled from "styled-components";

const CTA = () => {
  return (
    <CTAContainerWrapper>
      <CTAContentContainerWrapper>
        <ImgContainerWrapper>
        <dotlottie-player src="https://lottie.host/5f235d26-11d5-4b57-b124-a21068c2a532/YXibFXDff4.json" background="transparent" speed="1" style={{width: "330px", height: "300px"}} loop autoplay></dotlottie-player>
        </ImgContainerWrapper>
        <ArticleContainerWrapper>
         <h1>Developers Option; Reduce Your Workload With iExprex Builder's Support, Quality User Interface, Mobile Friendly, and Progressives Web Apps With Well-Structured Source Files.</h1>
         <div className="btn">
          Speedup Development
         </div>
        </ArticleContainerWrapper>
      </CTAContentContainerWrapper>
    </CTAContainerWrapper>
  );
};

const CTAContainerWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CTAContentContainerWrapper = styled.article`
  width: 95%;
  height: 80%;
  background: rgba(21, 21, 21, 0.224);
  background: rgba(255, 81, 0, 0.904);
  box-shadow: -184px 58px 249px 45px rgba(232, 206, 245, 0.28);
  -webkit-box-shadow: -184px 58px 249px 45px rgba(232, 206, 245, 0.28);
  -moz-box-shadow: -184px 58px 249px 45px rgba(232, 206, 245, 0.28);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const ImgContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 8px;
  background: white;
  img{
    width: 60%;
  }
`;

const ArticleContainerWrapper = styled(ImgContainerWrapper)`
  background: transparent;

  h1{
    color: white;
    line-height: 1.4;
  }
  .btn{
    align-self: flex-start;
    border-radius: .5rem;

    &:hover{
      background: white;
      color: #000;
    }
  }
`;

export default CTA;
