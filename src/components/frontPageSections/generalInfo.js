import React, { Component } from 'react'
import { Section, Title } from '../../utils'
import styled from 'styled-components'

import { styles } from '../../utils'

class GeneralInfo extends Component {
  render() {
    return (
      <Section>
        <Title
          title="About Me"
          message="This site will be under construction for a long time to come, hopefully"
        />
        <GeneralInfoWrapper>
          <h4 className="text">
            Throughout this site you will see what I hope is an honest portrayal
            of who I am as a developer. The tech that I am familiar with, the
            projects I have built and the passion I have for this work. I have
            many more projects to display. I hope to contribute to the blog as
            frequently as I can. I want to use the Stack page to teach what I
            know about those techs. I have plans for a Youtube channel, more to
            come on that. Generally I want to take writing code as far as I
            possibly can.
          </h4>
        </GeneralInfoWrapper>
      </Section>
    )
  }
}

const GeneralInfoWrapper = styled.div`
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

export default GeneralInfo
