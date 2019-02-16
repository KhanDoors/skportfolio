import React from 'react'
import { Section, Title } from '../../utils'
import styled from 'styled-components'
import { styles } from '../../utils'

const ContactForm = () => {
  return (
    <Section>
      <Title
        message="Call, Message or send an email"
        title="Let's Talk About it"
      />
      <form action="https://formspree.io/syyadkhan@yahoo.com" method="POST">
        {/* name */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            placeholder="john smith"
          />
        </div>

        {/* email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            id="email"
            placeholder="email@email.com"
          />
        </div>

        {/* description */}
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            className="form-control"
            rows="5"
            placeholder="your description here....."
          />
        </div>

        <button
          type="submit"
          className="btn btn-yellow btn-block text-capitalize mt-5"
        >
          Submit
        </button>
      </form>
    </Section>
  )
}

export default ContactForm
