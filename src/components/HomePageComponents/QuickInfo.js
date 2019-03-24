import React, { Component } from 'react'
import { Section, Title, SectionButton } from '../../utils'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { styles } from '../../utils'

class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title title="My Stack" message="a quick look at the tech i'm into" />
        <QuickInfoWrapper>
          <p className="text">
            So I was told that I have too many techs listed. My initial thought
            was to remove some and comply. So I tried to remove some and thought
            they were all so important that instead of removing them why not
            explain them? So let me try to do that below. Here is a link to my{' '}
            <a
              href="https://khandoor-dev-library.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Developer Library
            </a>{' '}
            where i keep a lot of lessons on the different techs . Please
            checkout my Portfolio page to see what I build using these AMAZING
            tools!
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
  a {
    color: ${styles.colors.mainRed};
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`

export default QuickInfo
