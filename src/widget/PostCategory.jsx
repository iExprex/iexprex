import React from "react";
import styled from "styled-components";
import { blogObj } from "../utils/data";
import { MdDashboard } from "react-icons/md";

const PostCategory = () => {
  return (
    <PostCategoryContainerWrapper>
       <div className="menu">
        <h2>Category</h2>
        <div className="ico">
        <MdDashboard className="m-ico"/>
        </div>
       </div>
      {blogObj &&
        blogObj.map((blog) => (
          <div className="cat-card" key={blog.id}>
            <span>{blog.ico}</span>
            <p>{blog.category}</p>
          </div>
        ))}
    </PostCategoryContainerWrapper>
  );
};

const PostCategoryContainerWrapper = styled.article`
  width: 100%;
  height: max-content;
  background: white;
  border-radius: 0.5rem;
  padding: 10px 1rem;
  margin: 3px 0;
 .menu{
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    h2{
        color: rgb(103, 36, 95);
        font-size: 1.8rem;
    font-weight: 900;
    }
    .ico{
        width: 40px;
        background: red;
        aspect-ratio: 1/1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.8rem;
        font-weight: 900;
        border-radius: .5rem;
        margin-right: 8px;
        padding: 3px;

        .m-ico{
            color: white;
        }
    }
 }
  .cat-card{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    height: 65px;
    background: rgb(232, 62, 15);
    color: #fff;
    cursor: pointer;
    border-radius: .5rem;
    margin: 9px 0;
    padding: 8px;
    font-size: 1.3rem;
    font-weight: 700;
  }
`;

export default PostCategory;
