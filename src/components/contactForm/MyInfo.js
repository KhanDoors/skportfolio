import React, { Component } from 'react'
import { Section, Title, SectionButton } from '../../utils'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { styles } from '../../utils'
import Slide from 'react-reveal/Slide'

class MyInfo extends Component {
  render() {
    return (
      <Section>
        <Slide right duration={2500}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <SectionButton style={{ margin: '2rem auto' }}>Home</SectionButton>
          </Link>
          <Title
            message="Call, Email or use the below form to send me a Message"
            title="Let's Talk About it"
          />
          <MyInfoWrapper>
            <p className="text">Cell Phone: 571-420-9488</p>
            <p className="text">Email Address: SyyadKhan@yahoo.com</p>
          </MyInfoWrapper>
        </Slide>
        <Slide left duration={2500}>
          <FormWrapper>
            <form
              action="https://formspree.io/syyadkhan@yahoo.com"
              method="POST"
            >
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
        </Slide>
      </Section>
    )
  }
}

const FormWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${styles.colors.mainBurg};
  .btn {
    height: 2rem;
    width: 18rem;
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

const MyInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  p {
    line-height: 2rem;
    color: ${styles.colors.mainBlack};
    word-spacing: 0.2rem;
    font-size: 25px;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`

export default MyInfo
