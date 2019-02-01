import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './layout.css'
import Navbar from '../components/globals/navbar'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
