import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { styles, Section } from '../../utils'
import Img from 'gatsby-image'

const SINGLE_IMAGE = graphql`
  {
    img1: file(relativePath: { eq: "homeGallery/docker.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "homeGallery/Express.JS-nodejs.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "homeGallery/graphql.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img4: file(relativePath: { eq: "homeGallery/gatsby.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img5: file(relativePath: { eq: "homeGallery/htmlcss.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img6: file(relativePath: { eq: "homeGallery/gimp.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img7: file(relativePath: { eq: "homeGallery/adobe-xd.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img8: file(relativePath: { eq: "homeGallery/javascript.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img9: file(relativePath: { eq: "homeGallery/mongo.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img10: file(relativePath: { eq: "homeGallery/react1.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Gallery = () => {
  return (
    <StaticQuery
      query={SINGLE_IMAGE}
      render={data => {
        const img1 = data.img1.childImageSharp.fluid
        const img2 = data.img2.childImageSharp.fluid
        const img3 = data.img3.childImageSharp.fluid
        const img4 = data.img4.childImageSharp.fluid
        const img5 = data.img5.childImageSharp.fluid
        const img6 = data.img6.childImageSharp.fluid
        const img7 = data.img7.childImageSharp.fluid
        const img8 = data.img8.childImageSharp.fluid
        const img9 = data.img9.childImageSharp.fluid
        const img10 = data.img10.childImageSharp.fluid
        return (
          <Section>
            <GalleryWrapper>
              <div className="item item-1">
                <Img fluid={img1} />
              </div>
              <div className="item item-2">
                <Img fluid={img2} />
              </div>
              <div className="item item-3">
                <Img fluid={img3} />
              </div>
              <div className="item item-4">
                <Img fluid={img4} />
              </div>
              <div className="item item-5">
                <Img fluid={img5} />
              </div>
              <div className="item item-6">
                <Img fluid={img6} />
              </div>
              <div className="item item-7">
                <Img fluid={img7} />
              </div>
              <div className="item item-8">
                <Img fluid={img8} />
              </div>
              <div className="item item-9">
                <Img fluid={img9} />
              </div>
              <div className="item item-10">
                <Img fluid={img10} />
              </div>
            </GalleryWrapper>
          </Section>
        )
      }}
    />
  )
}

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;
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

export default Gallery
