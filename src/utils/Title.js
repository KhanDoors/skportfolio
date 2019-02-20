import React from 'react'
import styled from 'styled-components'
import { styles } from '../utils'

const Title = ({ title, message }) => {
  return (
    <TitleWrapper>
      <h3 className="message">{message}</h3>
      <h1 className="title">{title}</h1>
      <div className="underline" />
    </TitleWrapper>
  )
}

Title.defualtProps = {
  message: 'our message',
  title: 'our title',
}

const TitleWrapper = styled.div`
  text-align: center;
  .message {
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: '.3rem' })}
    font-size:2rem;
    color: ${styles.colors.mainGrey};
  }
  .title {
    ${styles.letterSpacing({ spacing: '.3rem' })};
    font-size: 2rem;
    text-transform: uppercase;
    color: ${styles.colors.mainRed};
  }
  .underline {
    width: 5rem;
    height: 0.2rem;
    background: ${styles.colors.mainBurg};
    margin: 0.5rem auto;
  }
`

export default Title
