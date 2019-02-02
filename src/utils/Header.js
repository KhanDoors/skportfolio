import React from 'react'
import styled from 'styled-components'

const HomeHeader = ({ img, children }) => {
  return <IndexHeader img={img}>{children}</IndexHeader>
}

const IndexHeader = styled.header`
  min-height: calc(100vh - 77px);
  background: url(${props => props.img}) fixed no-repeat;
`

export { HomeHeader }
