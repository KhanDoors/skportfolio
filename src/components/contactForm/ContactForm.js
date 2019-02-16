import React from 'react'
import { Section, Title } from '../../utils'
import styled from 'styled-components'
import { styles } from '../../utils'

const ContactForm = () => (
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
        data-netlify-recaptcha="true"
      >
        <p>
          <label>
            <input type="text" name="name" placeholder="Your Name:" />
          </label>
        </p>
        <p>
          <label>
            <input type="email" name="email" placeholder="Your Email:" />
          </label>
        </p>

        <p>
          <label>
            <textarea name="message" rows="7" placeholder="Message:" />
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

const FormWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  input,
  textarea,
  p {
    padding: 0.4em 0.2em;
    font-size: 1rem;
    width: 17rem;
  }
  .contactForm button {
    height: 1.5rem;
    color: red;
    cursor: pointer;
    width: 7rem;
    background: ${styles.colors.mainGrey};
    :hover {
      background: ${styles.colors.mainGreen};
    }
  }
  .contactForm {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: 2rem;
    color: ${styles.colors.mainWhite};
    word-spacing: 0.2rem;
    padding: 0.5rem;
    background: ${styles.colors.mainBurg};
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`

export default ContactForm
