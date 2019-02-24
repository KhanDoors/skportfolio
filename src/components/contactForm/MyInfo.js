import React, { Component } from 'react'
import { Section, Title, SectionButton } from '../../utils'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { styles } from '../../utils'

class MyInfo extends Component {
  render() {
    return (
      <Section>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <SectionButton style={{ margin: '2rem auto' }}>Home</SectionButton>
        </Link>
        <Title
          message="Call, Message or send an email"
          title="Let's Talk About it"
        />
        <MyInfoWrapper>
          <p className="text">Cell Phone: 571-420-9488</p>
          <p className="text">Email Address: SyyadKhan@yahoo.com</p>
        </MyInfoWrapper>
      </Section>
    )
  }
}

const MyInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
    font-size: 20px;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`

export default MyInfo
