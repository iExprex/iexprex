import React from 'react'
import Layout from '../../layout/Layout'
import { CTA, Listing, NewsLetter } from '../../widget'

const Products = ({isHome, isProduct, isAbout}) => {
  return (
     <>
      <Layout isHome={isHome} isProduct={isProduct} isAbout={isAbout} />
      <Listing />
      <CTA />
      <NewsLetter />
     </>
  )
}


export default Products