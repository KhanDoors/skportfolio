import React, { Component } from 'react'
import { Section, Title, SectionButton } from '../../utils'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { styles } from '../../utils'

class PortfolioInfo extends Component {
  render() {
    return (
      <Section>
        <Title title="Portfolio" message="A Few of My Favorites" />
        <PortfolioInfoWrapper>
          <h4 className="text">
            I chose these projects in order to demonstrate different skills. I
            was told that 4 - 6 projects were better than everything you ever
            did, so I have just a few displayed. I have several projects under
            construction and will be mixing this page up shortly.
          </h4>
          <Link to="/contact/" style={{ textDecoration: 'none' }}>
            <SectionButton style={{ margin: '2rem auto' }}>
              My Contact Page
            </SectionButton>
          </Link>
        </PortfolioInfoWrapper>
      </Section>
    )
  }
}

const PortfolioInfoWrapper = styled.div`
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

export default PortfolioInfo
