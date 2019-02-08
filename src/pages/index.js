import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { HomeHeader, Banner, BannerButton } from '../utils'
import img from '../images/homePage.jpg'
import QuickInfo from '../components/HomePageComponents/QuickInfo'
import { Link } from 'gatsby'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title="Syyad Khan" subtitle="Full Stack Developer">
        <Link to="/portfolio" style={{ textDecoration: 'none' }}>
          <BannerButton style={{ margin: '2rem auto' }}>Portfolio</BannerButton>
        </Link>
      </Banner>
    </HomeHeader>
    <QuickInfo />
  </Layout>
)

export default IndexPage
