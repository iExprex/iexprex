import React from 'react'
import styled from 'styled-components'
import Why from './Why'
import Services from './Services'
import Team from './Team'

const Company = ({why, services, team,}) => {
  return (
    <CompanyContainerWrapper>
     {why && <div className="head">
        <h1>Why You Should Join <br /> <span>Our Space</span></h1>
     </div>}
     {services && <div className="head">
        <h1>iExprex.pro<br /> <span>Services</span></h1>
     </div>}
    { team &&<div className="head">
        <h1>Meet Our <br /><span>Best Experienced</span> Team</h1>
     </div>}
     <SwitchableContainerWrapper>
       {why && <Why />}
       {services && <Services />}
       {team && <Team />}
     </SwitchableContainerWrapper>
    </CompanyContainerWrapper>
  )
}

const CompanyContainerWrapper = styled.section`
    width: 100%;
    min-height: 100vh;
    background: white;
    padding: 40px 2.2rem;
`

const SwitchableContainerWrapper = styled.article`
  width: 100%;
  height: 80vh;
  border-radius: .5rem;
  margin: 0 auto;
  /* background: red; */
`

export default Company