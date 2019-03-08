import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageHeader, Banner } from '../utils'
import aboutImg from '../images/aboutPage.jpg'
import QuickInfo from '../components/HomePageComponents/QuickInfo'
import Gallery from '../components/HomePageComponents/Gallery'
import PyramidStack from '../components/pyramidStack/PyramidStack'
import Rotate from 'react-reveal/Rotate'

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={aboutImg}>
      <Rotate duration={1500}>
        <Banner
          title="My Tech Stack"
          subtitle="here is the rundown on how I develop my stack"
        />
      </Rotate>
    </PageHeader>
    <Gallery />
    <QuickInfo />
    <PyramidStack />
  </Layout>
)

export default AboutPage
