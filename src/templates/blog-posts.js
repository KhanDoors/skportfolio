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
        </BlogPostWrapper>
        <hr />
        <h4>Author {post.frontmatter.author}</h4>
        <Link to="/blog" style={{ textDecoration: 'none' }}>
          <BannerButton style={{ margin: '2rem auto', background: '#554747' }}>
            Back to Blog
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
  h4 {
    color: ${styles.colors.mainRed};
  }
  h3 {
    color: ${styles.colors.mainBlack};
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
