import React from 'react'
import { NewsLetter, PostElement, Posts, Recent } from '../../widget'
import styled from 'styled-components'

const Blogs = () => {
  return (
    <>
     <AvailableBlogsContainer>
      <Posts />
      <PostElement />
     </AvailableBlogsContainer>
     <Recent />
     <NewsLetter />
    </>
  )
}

const AvailableBlogsContainer = styled.section`
  width: 100%;
  height: 100%;
  background: #f1f1f1;
  padding: 30px 2.5rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  position: relative; 
`

export default Blogs