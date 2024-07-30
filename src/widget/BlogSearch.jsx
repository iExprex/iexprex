import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { blogObj } from "../utils/data";
// import { Recent } from ".";
const BlogSearch = () => {
  const [searchVal, setSearchVal] = useState("");
  const [blogs, setBlogs] = useState(blogObj);
  const [result, setResult] = useState({});
  const handleBlogSearch = (e) => {
    e.preventDefault();
    if (searchVal === "") {
      setBlogs(blogObj);
      return;
    }
    // eslint-disable-next-line
    const filterBySearch = blogs.filter((item) => {
      if (
        item.title.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase())
      ) {
        return item;
      }
    });
    setResult(filterBySearch);
  };
  console.log(result)
  return (
    <>
      <BlogSearchContainerWrapper>
        <input
          type="text"
          name="search"
          id="searchInput"
          placeholder="Search Blog here ..."
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <p onClick={handleBlogSearch}>
          <FaSearch />
        </p>

          <div className="result-box"  >
           
          </div>  
 
      </BlogSearchContainerWrapper>
    </>
  );
};

const BlogSearchContainerWrapper = styled.div`
  height: 90px;
  width: 100%;
  padding: 20px 0;
  transform: translateY(1.7rem);
  position: relative;
  input {
    width: 100%;
    height: 60px;
    font-size: 17px;
    padding: 0 12px;
    border-radius: 0.5rem;
  }
  p {
    position: absolute;
    top: 1.8rem;
    right: 1rem;
    width: 40px;
    aspect-ratio: 1/1;
    background-color: rgba(227, 65, 24, 0.8);
    border-radius: 0.5rem;
    cursor: pointer;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .result-box {
    width: 99%;
    height: 390px;
    position: absolute;
    top: 5rem;
    background: #ffffff;
    border-radius: 0 0 0.5rem 0.5rem;
    right: 0;
    z-index: 100;
  }
`;

export default BlogSearch;
