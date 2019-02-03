import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { HomeHeader, Banner } from '../utils'
import img from '../images/homePage.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title="Syyad Khan" subtitle="Full Stack Developer" />
    </HomeHeader>
  </Layout>
)

export default IndexPage
