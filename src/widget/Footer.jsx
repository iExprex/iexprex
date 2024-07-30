import React from "react";
import styled from "styled-components";
import dwnImg from "../assets/i-logo.png";
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <FooterContainerWrapper>
      <FooterListContainer>
        <ListWrapper>
          <div className="f-img">
            <img src={dwnImg} alt="" />
          </div>
          <h1>iExprex</h1>
          <h5>Certified In Documenting, Design And Development.</h5>
          <div className="cap">
            <p>
             A multi-faceted agency based in Ghana, offering a diverse portfolio of tailored products, also cater to the needs of businesses through solutions such as design, development, and office productivity enhancements.
            </p>
          </div>
          <div className="socials">
            <div className="ico-box">
              <FaGithub />
            </div>
            <div className="ico-box">
              <FaTwitter />
            </div>
            <div className="ico-box">
              <FaLinkedin />
            </div>
            <div className="ico-box">
              <FaDiscord />
            </div>
          </div>
        </ListWrapper>
        <ListWrapper>
          <h2>Product</h2>
          <li>iExprex Quick-Go Builder</li>
          <li>iExprex Quick-Go Editor</li>
          <li>iExprex Quick-Go Manager</li>
          <li>iExprex Quick-Go Earning</li>
          <li>iExprex Quick-Go Traveler</li>
        </ListWrapper>
        <ListWrapper>
          <h2>Support</h2>
          <li>Help Centre</li>
          <li>FAQ's</li>
          <li>NewsLetter</li>
          <li>iExprex Blog</li>
          <li>iExperex Community</li>
        </ListWrapper>
        <ListWrapper>
          <h2>Legal Info</h2>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Career Policy</li>
          <li>Cookies</li>
          <li>Ads Policy</li>
        </ListWrapper>
      </FooterListContainer>
      <div className="copy">
        <p>All Copyrights Reserved | iExperex.pro &copy; 2024 </p>
      </div>
    </FooterContainerWrapper>
  );
};

const FooterContainerWrapper = styled.footer`
  width: 100%;
  height: 80vh;
  background: linear-gradient(
    165deg,
    rgba(215, 92, 10, 0.817),
    rgb(122, 3, 82)
  );
  padding: 15px 0;
  .copy {
    width: 100%;
    background: white;
    height: 60px;
    padding: 15px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3px;
    p {
      font-size: 18px;
      font-weight: 900;
    }
  }
`;

const FooterListContainer = styled.article`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.961);
  border-radius: 0.5rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  gap: 1rem;
  padding: 10px;
`;

const ListWrapper = styled.div`
  width: 100%;
  height: 80%;
  color: white;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 0.3rem;

  .f-img {
    width: 50px;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 0.5rem;
    img {
      width: 100%;
    }
  }

  h5 {
    font-size: 17px;
    color: orangered;
    line-height: 1.4;
  }

  .cap {
    p {
      font-size: 16px;
    }
  }

  h2 {
    font-size: 2rem;
    font-weight: 900;
    color: transparent;
    background: linear-gradient(rgb(150, 30, 224), rgb(235, 33, 19));
    background-clip: text;
    text-align: center;
  }

  li {
    padding: 8px 0;
    font-size: 18px;
    font-weight: 900;
    cursor: pointer;
  }

  .socials {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    .ico-box {
      width: 45px;
      aspect-ratio: 1/1;
      background: rgb(234, 71, 1);
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 1s ease-in;
      font-size: 1.4rem;
      &:hover {
        background: rgb(166, 3, 93);
        color: white;
      }
    }
  }
`;

export default Footer;
