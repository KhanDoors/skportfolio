import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageHeader } from '../utils'
import portfolioImg from '../images/portfolio.png'

const PortfolioPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={portfolioImg}>Portfolio</PageHeader>
  </Layout>
)

export default PortfolioPage
