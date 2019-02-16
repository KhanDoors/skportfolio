import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageHeader, Banner } from '../utils'
import contactImg from '../images/contact.jpeg'
import ContactForm from '../components/contactForm/ContactForm'

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={contactImg}>
      <Banner title="contact page" subtitle="Let's get Together" />
    </PageHeader>
    <ContactForm />
  </Layout>
)

export default ContactPage
