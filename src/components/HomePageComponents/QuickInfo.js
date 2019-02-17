import React, { Component } from 'react'
import { Section, Title, SectionButton } from '../../utils'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { styles } from '../../utils'

class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="a quick look at the tech i'm into" title="My Stack" />
        <QuickInfoWrapper>
          <p className="text">
            This is the tech I am most familiar with. Please checkout my
            Portfolio page to see what I build using these AMAZING tools!
          </p>
          <Link to="/portfolio/" style={{ textDecoration: 'none' }}>
            <SectionButton style={{ margin: '2rem auto' }}>
              portfolio
            </SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
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

export default QuickInfo
