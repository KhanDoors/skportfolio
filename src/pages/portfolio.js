import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageHeader, Banner, SectionButton } from '../utils'
import portfolioImg from '../images/portfolio.jpeg'
import Portfolio from '../components/Portfolio/Portfolio'
import { Link } from 'gatsby'

const PortfolioPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={portfolioImg}>
      <Banner title="my passion" subtitle="I love this stuff" />
    </PageHeader>
    <Link to="/contact/" style={{ textDecoration: 'none' }}>
      <SectionButton style={{ margin: '2rem auto' }}>Say Hello</SectionButton>
    </Link>
    <Portfolio />
  </Layout>
)

export default PortfolioPage
