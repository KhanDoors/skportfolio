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
              I use{' '}
              <a
                href="https://www.youtube.com/watch?v=ADvUgeOm0E4&t=12s"
                target="_blank"
                rel="noopener noreferrer"
              >
                GIMP
              </a>{' '}
              for raster image manipulation and{' '}
              <a
                href="https://www.youtube.com/watch?v=8f011wdiW7g&list=PLqazFFzUAPc5lOQwDoZ4Dw2YSXtO7lWNv"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inkscape
              </a>{' '}
              for SVG image work.{' '}
              <a
                href="https://www.youtube.com/watch?v=ASAtZfCLqlU"
                target="_blank"
                rel="noopener noreferrer"
              >
                Adobe XD
              </a>{' '}
              is great for prototyping.
            </p>
            <img src={FrontendImage} alt="frontend" />
            <p>
              <a
                href="https://www.youtube.com/watch?v=UB1O30fR-EE&t=29s"
                target="_blank"
                rel="noopener noreferrer"
              >
                HTML
              </a>
              (of course), Bootstrap, Material-UI, I have used them all but my
              favorites are probably{' '}
              <a
                href="https://www.youtube.com/watch?v=QYZ2Pqo66Oc"
                target="_blank"
                rel="noopener noreferrer"
              >
                CSS
              </a>{' '}
              Grid and Flexbox. I think a lot of Dev's underestimate the
              importance of CSS.
            </p>
            <img src={BizLogicImage} alt="bizlogic" />
            <p>
              I use{' '}
              <a
                href="https://www.youtube.com/watch?v=OxIDLw0M-m0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>{' '}
              and{' '}
              <a
                href="https://www.youtube.com/watch?v=HsR80WPvA64&list=PLnHJACx3NwAey1IiiYmxFbXxieMYqnBKF"
                target="_blank"
                rel="noopener noreferrer"
              >
                Javascript
              </a>{' '}
              everyday, every good day that is. I plan on doing a Youtube series
              on Javascript algorithms.
            </p>
            <img src={ApiImage} alt="api" />
            <p>
              <a
                href="https://www.youtube.com/watch?v=SEMTj8w04Z8&list=PLillGF-RfqbZrjw48EXLdM4dsOhURCLZx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Graphql
              </a>{' '}
              and Apollo are taking over the JS world and I'm O.K. with that. I
              have a few projects in my portfolio page using this and I think
              they are great technologies.
            </p>
            <img src={BackendImage} alt="backend" />
            <p>
              <a
                href="https://www.youtube.com/watch?v=SEMTj8w04Z8&list=PLillGF-RfqbZrjw48EXLdM4dsOhURCLZx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Express.js
              </a>{' '}
              and{' '}
              <a
                href="https://www.youtube.com/watch?v=SEMTj8w04Z8&list=PLillGF-RfqbZrjw48EXLdM4dsOhURCLZx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Node.js
              </a>{' '}
              is what i use the most but I've been using{' '}
              <a
                href="https://www.youtube.com/watch?v=camfkdmuR8M&t=379s"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apollo
              </a>{' '}
              servers a lot lately.
            </p>
            <img src={DbsImage} alt="dbs" />
            <p>
              I love the flexibility and ease of use of{' '}
              <a
                href="https://www.youtube.com/watch?v=SIiVjgEDI7M&list=PL4RCxklHWZ9smTpR3hUdq53Su601yCPLj"
                target="_blank"
                rel="noopener noreferrer"
              >
                MongoDB
              </a>{' '}
              and{' '}
              <a
                href="https://www.youtube.com/watch?v=SIiVjgEDI7M&list=PL4RCxklHWZ9smTpR3hUdq53Su601yCPLj"
                target="_blank"
                rel="noopener noreferrer"
              >
                Firebase/Firestore
              </a>
              . I use{' '}
              <a
                href="https://www.youtube.com/watch?v=7S_tz1z_5bA"
                target="_blank"
                rel="noopener noreferrer"
              >
                MySQL
              </a>{' '}
              when I need a SQL database. I have used MongoDB in most of my
              projects but I want to focus more on SQL DB's more going forward.
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
  p:hover {
    transform: scale(1.5);
  }
  p {
    color: ${styles.colors.mainWhite};
    background: ${styles.colors.mainGrey};
    font-size: 20px;
    margin: 0.2rem;
    padding: 0.7rem;
  }
  a {
    color: ${styles.colors.mainRed};
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
