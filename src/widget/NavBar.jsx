import React, { useState } from "react";
import styled from "styled-components";
import logoImg from "../assets/i-logo.png";
import { useNavigate } from "react-router-dom";
import { Auth } from "../pages";
const NavBar = ({setIsProduct, setIsHome, setIsAbout}) => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  return (
    <>
     <NavBarContainerWrapper>
      <LogoContainerWrapper>
        <img src={logoImg} alt="" />
      </LogoContainerWrapper>
      <MenuContainerWrapper>
        <NavLinksContainer>
          <li
            onClick={() => {
              navigate(`/`);
              setIsHome(true);
              setIsProduct(false);
              setIsAbout(false);
              setIsAuth(false);
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              navigate(`/products`);
              setIsProduct(true);
              setIsHome(false);
              setIsAbout(false);
              setIsAuth(false);
            }}
          >
            Products
          </li>
          <li
            onClick={() => {
              navigate(`/iexprex-blog`);
              setIsAuth(false);
            }}
          >
            iExperex Blog
          </li>
          <li
            onClick={() => {
              navigate(`/about-us`);
              setIsAbout(true);
              setIsProduct(false);
              setIsHome(false);
              setIsAuth(false);
            }}
          >
           Company
          </li>
        </NavLinksContainer>
        <ActionBtnWrapper onClick={() => {setIsAuth(!isAuth)}}>
          <span>Register</span>
        </ActionBtnWrapper>
      </MenuContainerWrapper>
    </NavBarContainerWrapper>
    {isAuth && <Auth />}
    </>
  );
};

const NavBarContainerWrapper = styled.nav`
  width: 93%;
  height: 80px;
  background: rgba(255, 255, 255, 0.3);
  background-image: linear-gradient(125deg, rgba(255, 0, 149, 0.2), rgba(255, 69, 0, 0.3));
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  box-shadow: 73px -6px 60px 42px rgba(232, 206, 245, 0.28);
  -webkit-box-shadow: 73px -6px 60px 42px rgba(232, 206, 245, 0.28);
  -moz-box-shadow: 73px -6px 60px 42px rgba(232, 206, 245, 0.28);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px auto;
  padding: 8px 10px;
`;

const LogoContainerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  cursor: pointer;
  width: fit-content;
  img {
    width: 90px;
  }
`;

const MenuContainerWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    padding: 0 18px;
    font-size: 1.15rem;
    font-weight: 900;
    color: rgb(0,0,0);
    cursor: pointer;
  }
`;
const ActionBtnWrapper = styled.div`
  background: orangered;
  border-radius: 10px;
  cursor: pointer;
  padding: 10px 15px;
  width: 20%;
  text-align: center;
  color: white;
  box-shadow: 0 1rem 10px rgba(193, 20, 20, 0.116);
  transform: scaleX(9px);
  transition: all 2s ease-in-out;

  span{
    font-size: 1.15rem;
    font-weight: 900;
  }

  &:hover {
    box-shadow: none;
    transform: translateZ(-1rem);
  }
`;

export default NavBar;
