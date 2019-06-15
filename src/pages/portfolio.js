import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageHeader, Banner } from '../utils'
import portfolioImg from '../images/robotImage.jpg'
import Portfolio from '../components/Portfolio/Portfolio'
import Zoom from 'react-reveal/Zoom'
import PortfolioInfo from '../components/Portfolio/portfolioInfo'

const PortfolioPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={portfolioImg}>
      <Zoom duration={1500}>
        <Banner title="my passion" subtitle="I love this stuff" />
      </Zoom>
    </PageHeader>
    <PortfolioInfo />
    <Portfolio />
  </Layout>
)

export default PortfolioPage
