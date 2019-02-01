import React, { Component } from 'react'
import NavbarHeader from './NavbarHeader'
import NavbarIcons from './NavbarIcons'
import NavbarLinks from './NavbarLinks'

class Navbar extends Component {
  render() {
    return (
      <nav>
        <NavbarHeader />
        <NavbarLinks />
        <NavbarIcons />
      </nav>
    )
  }
}

export default Navbar
