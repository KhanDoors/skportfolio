import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { HomeHeader } from '../utils'
import img from '../images/homePage.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>Syyad Khan</HomeHeader>
  </Layout>
)

export default IndexPage
