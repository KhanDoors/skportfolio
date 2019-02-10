import React from 'react'
import Project from './Project'
import { StaticQuery, graphql } from 'gatsby'
import { Section, Title, SectionButton } from '../../utils'
import styled from 'styled-components'
import { Link } from 'gatsby'

const PROJECTS = graphql`
  {
    items: allContentfulPortfolio {
      edges {
        node {
          title
          category
          siteSlug
          githubSlug
          id
          img {
            fixed(width: 150, height: 150) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`

const Portfolio = () => {
  return (
    <Section>
      <Title title="My Projects" message="A few of my favorites" />
      <ProjectList>
        <StaticQuery
          query={PROJECTS}
          render={data => {
            const projects = data.items.edges
            return projects.map(item => {
              return <Project key={item.node.id} project={item.node} />
            })
          }}
        />
      </ProjectList>
    </Section>
  )
}

const ProjectList = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;
  @media (min-width: 576px) {
    grid-template-columns: 95%;
  }
  @media (min-width: 776px) {
    grid-template-columns: 80%;
    justify-content: center;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`

export default Portfolio
