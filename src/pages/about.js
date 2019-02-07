import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageHeader, Banner } from '../utils'
import aboutImg from '../images/aboutPage.jpeg'

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={aboutImg}>
      <Banner
        title="My Tech Stack"
        subtitle="here is the rundown on how I develop my stack"
      />
    </PageHeader>
  </Layout>
)

export default AboutPage
