import React from 'react'
import styled from 'styled-components'
import { styles } from '../utils'

const Banner = ({ title, subtitle, children }) => {
  return (
    <BannerWrapper>
      <h1 className="title">{title}</h1>
      <h3 className="subtitle">{subtitle}</h3>
      {children}
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div``

export default Banner
