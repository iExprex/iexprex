import React from 'react'
import styled from 'styled-components'
import bgImg from '../assets/blog77.jpg';
const Services = () => {
  return (
    <ServicesContainerWrapper>
      <ServicesHederContainerWrapper></ServicesHederContainerWrapper>
    </ServicesContainerWrapper>
  )
}

const ServicesContainerWrapper = styled.section`
    width: 100%;
    height: 100%;
    background: rgba(137, 43, 226, 0.283);
    border-radius: inherit;
`
const ServicesHederContainerWrapper = styled.header`
 width: 100%;
 height: 100vh;
 background-image: url(${bgImg});
 background-position: center;
 background-size: cover;
`

export default Services