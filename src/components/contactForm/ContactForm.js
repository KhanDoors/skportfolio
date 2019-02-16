import React from 'react'
// import { Section, Title } from '../../utils'
// import styled from 'styled-components'
// import { styles } from '../../utils'

{
  /* <Section>
    <Title
      message="Call, email, message or upload a file"
      title="Lets talk about it"
    />
    <FormWrapper>
      
    </FormWrapper>
  </Section> */
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/contact/', {
      method: 'POST',
    })
      .then(() => console.log('success'))
      .catch(error => alert(error))
  }

  render() {
    return (
      <div>
        <form
          name="contact-recaptcha"
          method="post"
          data-netlify="true"
          data-netlify-recaptcha="true"
          onSubmit={this.handleSubmit}
        >
          <p>
            <label>
              Your name:
              <br />
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your email:
              <br />
              <input type="email" name="email" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message:
              <br />
              <textarea name="message" onChange={this.handleChange} />
            </label>
          </p>
          <div data-netlify-recaptcha="true" />
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    )
  }
}

// const FormWrapper = styled.div`
//   width: 90%;
//   margin: 2rem auto;
//   input,
//   textarea,
//   p {
//     padding: 0.4em 0.2em;
//     font-size: 1rem;
//     width: 17rem;
//   }
//   .contactForm button {
//     height: 1.5rem;
//     color: red;
//     cursor: pointer;
//     width: 7rem;
//     background: ${styles.colors.mainGrey};
//     :hover {
//       background: ${styles.colors.mainGreen};
//     }
//   }
//   .contactForm {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//     line-height: 2rem;
//     color: ${styles.colors.mainWhite};
//     word-spacing: 0.2rem;
//     padding: 0.5rem;
//     background: ${styles.colors.mainBurg};
//   }
//   @media (min-width: 768px) {
//     width: 70%;
//   }
//   @media (min-width: 992px) {
//     width: 60%;
//   }
// `

export default ContactForm
