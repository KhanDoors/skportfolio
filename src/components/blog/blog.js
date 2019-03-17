import React, { Component } from 'react'
import { Section, Title } from '../../utils'
import styled from 'styled-components'
import { styles } from '../../utils'

class Blog extends Component {
  render() {
    return (
      <Section>
        <Title
          title="My Developer Blog"
          message="Insights I want to share about this Incredible Journey"
        />
        <BlogWrapper>
          <p className="text">
            This is the tech I am most familiar with. Please checkout my
            Portfolio page to see what I build using these AMAZING tools!
          </p>
        </BlogWrapper>
      </Section>
    )
  }
}

const BlogWrapper = styled.div`
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

export default Blog
