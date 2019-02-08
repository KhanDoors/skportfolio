import React, { Component } from 'react'
import { Section, Title, SectionButton } from '../../utils'

class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="quick look at what i'm into" title="My Tech" />
        <SectionButton>Contact</SectionButton>
      </Section>
    )
  }
}

export default QuickInfo
