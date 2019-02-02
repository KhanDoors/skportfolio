import React, { Component } from 'react'
import styled from 'styled-components'
import { styles } from '../../../utils'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

class NavbarIcons extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaGithub className="icon github-icon" />,
        path: 'https://github.com/KhanDoors',
      },
      {
        id: 2,
        icon: <FaLinkedin className="icon linkedin-icon" />,
        path: 'https://www.linkedin.com/in/syyad-khan-69865a55/',
      },
    ],
  }

  render() {
    return (
      <IconWrapper>
        {this.state.icons.map(item => {
          return (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`
  .icon {
    font-size: 1.5rem;
    cursor: pointer;
    ${styles.transFunction()};
  }
  .github-icon {
    color: #333;
  }
  .linkedin-icon {
    color: #477794;
  }
  .icon:hover {
    color: ${styles.colors.mainGreen};
  }
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 10rem;
    justify-content: space-around;
  }
`

export default NavbarIcons
