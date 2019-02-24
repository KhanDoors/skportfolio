import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageHeader, Banner } from '../utils'
import contactImg from '../images/contact.jpeg'

import MyInfo from '../components/contactForm/MyInfo'

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={contactImg}>
      <Banner title="contact page" subtitle="Let's get Together" />
    </PageHeader>
    <MyInfo />
  </Layout>
)

export default ContactPage
