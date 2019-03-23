import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { HomeHeader, Banner, BannerButton, Section } from '../utils'
import img from '../images/blog.jpg'
import styled from 'styled-components'

const Blog = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title="Khandoor Blog" subtitle="My Developer Journey">
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <BannerButton style={{ margin: '2rem auto' }}>The Stack</BannerButton>
        </Link>
      </Banner>
    </HomeHeader>
    <Section>
      <BlogWrapper>
        <h1>I find it all Amazing</h1>
        {data.allMarkdownRemark.edges.map(post => (
          <div key={post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <small>
              Post by {post.node.frontmatter.author} on{' '}
              {post.node.frontmatter.date}
            </small>
            <Link to={post.node.frontmatter.path}>Read more</Link>
            <hr />
          </div>
        ))}
      </BlogWrapper>
    </Section>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`
const BlogWrapper = styled.div`
  display: block;
  .item {
    position: relative;
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

export default Blog
