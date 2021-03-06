import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { HomeHeader, Banner, BannerButton } from '../utils'
import img from '../images/homePage.jpg'
import Flip from 'react-reveal/Flip'
import GeneralInfo from '../components/frontPageSections/generalInfo'

import { Link } from 'gatsby'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Flip duration={1500}>
        <Banner title="Syyad Khan" subtitle="Full Stack Developer">
          <Link to="/blog" style={{ textDecoration: 'none' }}>
            <BannerButton style={{ margin: '2rem auto' }}>
              Dev's Blog
            </BannerButton>
          </Link>
        </Banner>
      </Flip>
    </HomeHeader>
    <GeneralInfo />
  </Layout>
)

export default IndexPage
