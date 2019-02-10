import React from 'react'
import styled from 'styled-components'
import { styles } from '../../utils'
import Img from 'gatsby-image'

const Project = ({ project }) => {
  const { title, category, siteSlug, githubSlug, id } = project
  const { description } = project.description
  const { fixed } = project.img

  return (
    <ProjectWrapper>
      <Img fixed={fixed} className="img" />
      <div className="text">
        <h3 className="title">{title}</h3>
        <h5>{description}</h5>
        <div className="slug">
          <div>
            <h4 className="siteSlug">
              {' '}
              <a
                href={siteSlug}
                key={id}
                target="_blank"
                rel="noopener noreferrer"
              >
                Website Link
              </a>
            </h4>
          </div>

          <div>
            <h4 className="githubSlug">
              {' '}
              <a
                href={githubSlug}
                key={id}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Page
              </a>
            </h4>
          </div>
        </div>
        <div className="project-content">
          <h5 className="category">{category}</h5>
        </div>
      </div>
    </ProjectWrapper>
  )
}

const ProjectWrapper = styled.div`
  background: ${styles.colors.mainWhite};
  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 1rem;
  }
  .img {
    border-radius: 0.5rem;
  }
  .project-content {
    display: flex;
    justify-content: space-between;
  }
  .title {
    color: ${styles.colors.mainBurg};
    margin-top: 0.5rem;
  }
  .category {
    color: ${styles.colors.mainRed};
    margin-top: 0.5rem;
    font-size: 1rem;
    text-transform: uppercase;
  }
  .slug {
    word-spacing: 0.2rem;
    text-transform: lowercase;
  }
`

export default Project
