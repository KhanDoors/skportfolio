import React from 'react'
import { Section, Title } from '../../utils'
import styled from 'styled-components'
import { styles } from '../../utils'

const ContactForm = () => {
  return (
    <Section>
      <Title
        message="Call, email, message or upload a file"
        title="Lets talk about it"
      />
      <FormWrapper>
        <form
          className="contactForm"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>

          <p>
            <label>
              Message: <textarea name="message" rows="7" />
            </label>
          </p>
          <p>
            <input type="file" name="myfile" placeholder="Upload File" />
          </p>
          <div data-netlify-recaptcha="true" />
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </FormWrapper>
    </Section>
  )
}

const FormWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .contactForm {
    display: block;
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`

export default ContactForm
