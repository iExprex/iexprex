import React from 'react'
import styled from 'styled-components'
import { BlogSearch, Category, FeaturedPost } from '.'

const PostElement = () => {
  return (
    <PostElementContainerWrapper>
      <BlogSearch />
      <Category />
      <FeaturedPost />
    </PostElementContainerWrapper>
  )
}

const PostElementContainerWrapper = styled.article`
 width: 26%;
 height: 60%;
 border-radius: .5rem;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 gap: 1rem;
 position: absolute;
 top: 4rem;
 right: 2rem;
`

export default PostElement