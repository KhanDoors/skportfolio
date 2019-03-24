import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {
  HomeHeader,
  Banner,
  BannerButton,
  Section,
  Title,
  styles,
} from '../utils'
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
      <Title title="Developer News" message="I find this all Amazing!!" />
      <BlogWrapper>
        <p>
          I love writing and always wanted to be a journalist, here is my
          chance.
        </p>
        {data.allMarkdownRemark.edges.map(post => (
          <div className="blog" key={post.node.id}>
            <h1>
              {post.node.frontmatter.title}

              <Link to={post.node.frontmatter.path}> - Read more </Link>
            </h1>
            <h4>{post.node.frontmatter.date}</h4>
            <h3>Author {post.node.frontmatter.author}</h3>
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
  width: 90%;
  margin: 2rem auto;
  display: block;
  .blog {
    background: ${styles.colors.mainGreen};
    margin: 0.5rem;
    padding: 0.5rem;
  }
  p {
    margin: 0.5rem;
    padding: 0.5rem;
  }
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

export default Blog
