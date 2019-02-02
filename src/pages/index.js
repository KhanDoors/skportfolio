import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { HomeHeader } from '../utils'
import img from '../images/nyc.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>HomeHeader</HomeHeader>
  </Layout>
)

export default IndexPage
