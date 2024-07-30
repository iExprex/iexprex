import React from 'react'
import { FaDiscord, FaGithub, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import styled from 'styled-components'

const Brands = () => {
  return (
    <TopBrandsContainerWrapper>
     <div className="brand-box">
      <FaGithub className='ico'/>
     </div>
     <div className="brand-box">
      <FaTwitterSquare className='ico'/>
     </div>
     <div className="brand-box">
      <FaLinkedin className='ico'/>
     </div>
     <div className="brand-box">
      <FaDiscord className='ico'/>
     </div>

    </TopBrandsContainerWrapper>
  )
}

const TopBrandsContainerWrapper = styled.section`
    width: 70px;
    height: min-content;
    padding: 25px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.3rem;
    

    .brand-box{
        width: 160px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 1s ease-in;
        .ico{
            font-size: 2rem;
            color: rgb(255, 123, 0);

            &:hover{
                color: orangered;
            }
        }
    }
`
export default Brands