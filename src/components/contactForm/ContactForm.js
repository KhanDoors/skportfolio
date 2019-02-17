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
      <FormWrapper>
        <form action="https://formspree.io/syyadkhan@yahoo.com" method="POST">
          {/* name */}
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="What's your Name?"
            />
          </div>

          {/* email */}
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              placeholder="Enter Email Please"
            />
          </div>

          {/* description */}
          <div className="form-group">
            <textarea
              name="description"
              id="description"
              className="form-control"
              rows="5"
              placeholder="Tell Me Something Good"
            />
          </div>

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </FormWrapper>
    </Section>
  )
}

const FormWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${styles.colors.mainWhite};
  .btn {
    height: 2rem;
    width: 5rem;
    padding: 0.5rem;
    margin: 0.5rem;
    background: ${styles.colors.mainGrey};
    color: ${styles.colors.mainRed};
    :hover {
      background: ${styles.colors.mainGreen};
    }
  }
  .form-group input,
  textarea {
    width: 18rem;
    padding: 0.5rem;
    margin: 0.5rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`

export default ContactForm
