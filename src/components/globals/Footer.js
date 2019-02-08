import React, { Component } from 'react'
import styled from 'styled-components'
import { styles } from '../../utils'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import logo123 from '../../images/logo123.png'

class Footer extends Component {
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
      <FooterWrapper>
        <div className="title">
          <img src={logo123} alt="the logo" />
        </div>
        <div className="icons">
          {this.state.icons.map(item => (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <p className="copyright">copyright: 2019 KhanDoor Media</p>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  background: ${styles.colors.mainGrey};
  .icons {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .icon {
    color: #f11010;
    font-size: 2rem;
    ${styles.transition({})};
    &:hover {
      color: ${styles.colors.mainWhite};
    }
  }
  .copyright {
    color: ${styles.colors.mainRed};
    text-transform: capitalize;
    text-align: center;
    margin: 1rem 0;
  }
  .title {
    text-align: center;
    padding: 0.3rem 1rem;
    margin: 0 auto 2rem auto;
  }
`

export default Footer
