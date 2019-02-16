import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageHeader, Banner } from '../utils'
import aboutImg from '../images/aboutPage.jpg'
import QuickInfo from '../components/HomePageComponents/QuickInfo'
import Gallery from '../components/HomePageComponents/Gallery'

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={aboutImg}>
      <Banner
        title="My Tech Stack"
        subtitle="here is the rundown on how I develop my stack"
      />
    </PageHeader>
    <QuickInfo />
    <Gallery />
  </Layout>
)

export default AboutPage
