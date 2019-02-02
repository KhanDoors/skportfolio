import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageHeader } from '../utils'
import aboutImg from '../images/aboutPage.jpeg'

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={aboutImg}>Hello from About Page</PageHeader>
  </Layout>
)

export default AboutPage
