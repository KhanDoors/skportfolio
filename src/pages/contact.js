import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageHeader, Banner } from '../utils'
import contactImg from '../images/contact.jpeg'
import Spin from 'react-reveal/Spin'

import MyInfo from '../components/contactForm/MyInfo'

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={contactImg}>
      <Spin duration={1500}>
        <Banner title="contact page" subtitle="Let's get Together" />
      </Spin>
    </PageHeader>
    <MyInfo />
  </Layout>
)

export default ContactPage
