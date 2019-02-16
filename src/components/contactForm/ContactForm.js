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
        method="post"
        data-netlify="true"
        data-netlify-recaptcha="true"
      >
        <div className="field half first">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="6" />
        </div>
        <p>
          <input type="file" name="myfile" placeholder="Upload File" />
        </p>
        <div data-netlify-recaptcha="true" />
        <ul className="actions">
          <li>
            <input type="submit" value="Send Message" className="special" />
          </li>
          <li>
            <input type="reset" value="Clear" />
          </li>
        </ul>
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
