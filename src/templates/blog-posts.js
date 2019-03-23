import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Banner, BannerButton, Section, styles } from '../utils'
import styled from 'styled-components'

const Template = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Banner title={post.frontmatter.title} subtitle={post.frontmatter.date} />
      <Section>
        <BlogPostWrapper>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr />
          <h4> Author {post.frontmatter.author}</h4>
        </BlogPostWrapper>
        <Link to="/blog" style={{ textDecoration: 'none' }}>
          <BannerButton style={{ margin: '2rem auto', background: '#554747' }}>
            Blog Page
          </BannerButton>
        </Link>
      </Section>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`

const BlogPostWrapper = styled.div`
  display: block;
  background: ${styles.colors.mainWhite};
  margin: 0.5rem;
  padding: 2rem;
  word-spacing: 2px;
  line-height: 30px;
  h4 {
    font-size: 1em;
    color: ${styles.colors.mainBurg};
    text-align: center;
    margin: 0.5rem;
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(5, 1fr);
  }
`

export default Template
