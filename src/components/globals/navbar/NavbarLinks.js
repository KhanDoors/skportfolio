import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { styles } from '../../../utils'

class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: '/',
        name: 'home',
      },
      {
        id: 1,
        path: '/blog/',
        name: 'blog',
      },
      {
        id: 2,
        path: '/about/',
        name: 'stack',
      },
      {
        id: 3,
        path: '/portfolio/',
        name: 'portfolio',
      },
      {
        id: 4,
        path: '/contact/',
        name: 'contact',
      },
    ],
  }

  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <Link to={item.path} className="nav-link">
                {item.name}
              </Link>
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: ${styles.colors.mainRed};
    font-weight: 700;
    font-size: 1.2rem;
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainRed};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  height: ${props => (props.open ? '190px' : '0px')};
  overflow: hidden;
  ${styles.transObject({ time: '1s' })};
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;
    .nav-link:hover {
      background: white;
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  }
`

export default NavbarLinks
