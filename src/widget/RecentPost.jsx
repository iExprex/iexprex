import React from 'react'
import styled from 'styled-components'
import SingleBlog from './SingleBlog'

const RecentPost = () => {

  return (
   <RecentPostContainerWrapper>
     <h1>Recent <span>Post</span></h1>
    <RecentPostArticleWrapper>
      <SingleBlog />
    </RecentPostArticleWrapper>
   </RecentPostContainerWrapper>
  )
}

const RecentPostContainerWrapper = styled.section`
 width: 100%;
 height: 100vh;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;

 h1{
  align-self: flex-start;
  padding-left: 2rem;
 }
`

const RecentPostArticleWrapper = styled.article`
  width: 95%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  gap: 1rem;
`


export default RecentPost