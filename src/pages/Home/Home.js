import React from 'react'
import {CTA, NewsLetter, Products, Recent, Review, What} from '../../widget'
import Layout from '../../layout/Layout'
const Home = ({isHome, isProduct, isAbout}) => {
  return (
    <>
     <Layout isHome={isHome} isProduct={isProduct} isAbout={isAbout} />
     <Review />
     <What />
     <Products />
     <Recent />
     <CTA />
     <NewsLetter />
    </>
  )
}

export default Home