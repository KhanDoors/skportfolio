import React from 'react'
import UiuxImage from '../../images/pyramid/uiux.png'
import FrontendImage from '../../images/pyramid/frontend.png'
import ApiImage from '../../images/pyramid/api.png'
import BackendImage from '../../images/pyramid/backend.png'
import BizLogicImage from '../../images/pyramid/bizlogic.png'
import DbsImage from '../../images/pyramid/dbs.png'
import { styles, Section } from '../../utils'
import styled from 'styled-components'
import Roll from 'react-reveal/Roll'

const PyramidStack = () => {
  return (
    <Section>
      <Roll duration={2000}>
        <PyramidWrapper>
          <div className="stackpiece">
            <img src={UiuxImage} alt="uiux" />
            <p>
              I use GIMP for raster image manipulation and Inkscape for SVG
              image work. Adobe XD is great for prototyping.
            </p>
            <img src={FrontendImage} alt="frontend" />
            <p>
              HTML(of course) Bootstrap, Material-UI, I have used them all but
              my favorites are probably CSS Grid and Flexbox.
            </p>
            <img src={BizLogicImage} alt="bizlogic" />
            <p>I use React and Javascript everyday, every good day that is.</p>
            <img src={ApiImage} alt="api" />
            <p>
              GraphQL and Apollo are taking over the JS world and I'm O.K. with
              that.
            </p>
            <img src={BackendImage} alt="backend" />
            <p>
              Express.js is what i use the most but I've been using Apollo
              servers a lot lately.
            </p>
            <img src={DbsImage} alt="dbs" />
            <p>
              I love the flexibility and ease of use of MongoDB and
              FireBase/Firestore. I use MySQL when I need a SQL database.
            </p>
          </div>
        </PyramidWrapper>
      </Roll>
    </Section>
  )
}

const PyramidWrapper = styled.div`
  width: 100%;
  margin: 1rem auto;
  .stackpiece {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  p {
    color: ${styles.colors.mainBlack};
    font-size: 17px;
  }
  @media (min-width: 576px) {
    grid-template-columns: 95%;
  }
  @media (min-width: 776px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`

export default PyramidStack
