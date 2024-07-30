import React from 'react'
import styled from 'styled-components'
import { blogObj } from '../utils/data'
import { FaCalendarDay } from 'react-icons/fa6'

const AllPost = () => {
  return (
    <AllPostContainerWrapper>
      {blogObj && blogObj.map((blog) => (
        <PostCardContainerWrapper key={blog.id}>
        <LeftWrapper>
         <h2>{blog.title}</h2>
         <div className="desc">
            <p>{blog.description}</p>
            <samp>By; {blog.author}</samp>
         </div>
         <div className="space">
         <div className="meta">
            {blog.ico}
            <h4>{blog.category}</h4>
         </div>
         <div className="meta">
            <FaCalendarDay />
            <h4>{blog.createdAt}</h4>
         </div>
         </div>
        </LeftWrapper>
        <RightWrapper>
         <img src={blog.imgUrl} alt="" />
        </RightWrapper>
      </PostCardContainerWrapper>
      ))}
    </AllPostContainerWrapper>
  )
}

const AllPostContainerWrapper = styled.section`
 width: 70%;
 height: max-content;
 padding: 20px 0;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 gap: 10px;
 overflow-y: hidden;
`

const PostCardContainerWrapper = styled.article`
 width: 100%;
 height: 320px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 gap: .5rem;
 background: white;
 border-radius: 10px;
 margin: 12px 0;
 padding: 8px;
 &:hover{
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.03);
 }
`

const LeftWrapper = styled.div`
 width: 100%;
 height: 100%;
 background: white;
 border-radius: 1rem;
 padding: 5px;
 cursor: pointer;

 h2{
    color: rgb(103, 36, 95);
    font-size: 1.8rem;
    font-weight: 900;
    width: 90%;
    transition: all 800ms ease-out;

    &:hover{
        color: rgb(232, 62, 15);
    }
 }
 .desc{
    padding: 12px 0;
    p{
        font-size: 20px;
        width: 90%;
    }
    samp{
        font-size: 18px;
        font-weight: 900;
        color: rgb(103, 36, 95);
    }
 }
 .space{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    .meta{
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgb(232, 62, 15);
    border-radius: 10px;
    color: white;
    cursor: pointer;
    width: max-content;
    padding: 8px 12px;
    font-size: 17px;
    font-weight: 900;
    h4{
        font-weight: 900;
    }
    &:hover{
        filter: contrast(0.8);
    }
 }
 }
`

const RightWrapper = styled(LeftWrapper)`
display: flex;
align-items: center;
justify-content: center;
background: rgb(103, 36, 95);
width: 80%;
height: 95%;
  img{
    width: 100%;
    height: fit-content;
    border-radius: inherit;
    object-fit: fill;
  }
`
export default AllPost