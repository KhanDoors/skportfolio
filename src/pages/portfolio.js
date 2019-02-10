import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageHeader, Banner } from '../utils'
import portfolioImg from '../images/portfolio.png'
import Portfolio from '../components/Portfolio/Portfolio'

const PortfolioPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={portfolioImg}>
      <Banner title="my projects" subtitle="Here is what I like to do" />
    </PageHeader>
    <Portfolio />
  </Layout>
)

export default PortfolioPage
