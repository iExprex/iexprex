import React from "react";
import styled from "styled-components";
import { blogObj } from "../utils/data";

const SingleBlog = () => {
  return (
    <>
      {blogObj &&
        blogObj.map((blog) => (
          <RecentPostCard key={blog.id}>
            <div className="circle">
              {blog.ico}
              <p>{blog.category}</p>
            </div>
            <div className="con">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
            </div>
            <div className="p-img">
              <img src={blog.imgUrl} alt="" />
              <div className="slideUp">
                <div className="first">
                  <div className="cir">
                    <img src={blog.imgUrl} alt="" />
                  </div>
                  <samp>{blog.createdAt}</samp>
                </div>
                <div className="mid">
                  <h4>{blog.title}</h4>
                  <p>{blog.description} <br /> <span>Read More</span></p>
                </div>
                <div className="lst">
                    Blogger: <small>{blog.author}  @iExprex</small>
                </div>
              </div>
            </div>
          </RecentPostCard>
        ))}
    </>
  );
};

const RecentPostCard = styled.div`
  width: 100%;
  height: max-content;
  background: white;
  box-shadow: 73px -6px 82px 42px rgba(232, 206, 245, 0.28);
  -webkit-box-shadow: 73px -6px 82px 42px rgba(232, 206, 245, 0.28);
  -moz-box-shadow: 73px -6px 82px 42px rgba(232, 206, 245, 0.28);
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
  transition: transform 1s ease-in;
  overflow-y: hidden;

  .circle {
    align-self: flex-start;
    display: flex;
    width: 100%;
    height: 45px;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border-radius: 50px;
    background: rgb(234, 68, 7);
    color: #fff;
    font-size: 1rem;
    font-weight: 900;
  }

  .con {
    h3 {
      font-size: 1.4rem;
      line-height: 1.2;
      padding: 10px 0;
      color: #000;
      transition: all 1s ease-in;
      &:hover {
        color: rgb(255, 115, 0);
      }
    }
    p {
      font-size: 17px;
      line-height: 1.4;
      width: 93%;
      padding: 5px 0;
    }
  }

  .p-img {
    width: 100%;
    padding: 3px;
    position: relative;
    img {
      width: 100%;
      border-radius: 1rem;
    }
  }

  .slideUp {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: rgba(19, 1, 24, 0.986);
    box-shadow: 73px -6px 82px 42px rgba(223, 119, 236, 0.034);
    border-radius: 1rem;
    color: #fff;
    opacity: 1;
    visibility: visible;
    padding: 8px;
    transform: translateY(15rem);

    .first {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .cir {
        background: white;
        width: 40px;
        aspect-ratio: 1/1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 50px;

        img {
          width: 100%;
        }

        samp{
            font-weight: 900;
            font-size: small;
        }
      }
    }
    .mid {
        padding: 10px 0;
      h4 {
        font-size: 21px;
        line-height: 1.3;
      }
      p{
        line-height: 1.4;
        span{
          font-size: 15px;
          color: blueviolet;
        }
      }
    }
    .lst{
      transform: translateY(-1rem);
        small{
            font-weight: 700;
            color: rgb(255, 85, 0);
        }
    }
  }

  &:hover {
    transform: translateY(1px);
    .slideUp {
      transform: translateY(-0.2rem);
      transition-delay: 800ms;
      opacity: 1;
      visibility: visible;
    }
  }
`;

export default SingleBlog;
