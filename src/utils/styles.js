export const colors = {
  mainWhite: `#F0E3C0`,
  mainBlack: `#262626`,
  mainBurg: `#780D26`,
  mainRed: `#f11010`,
  mainGrey: `#554747`,
  mainGreen: `#009D57`,
}
export const textSlanted = `font-family:'Verdana', cursive;`

export const transDefault = 'transition:all 0.5s ease-in-out'
export const transFunction = (
  property = 'all',
  time = '0.5s',
  type = 'linear'
) => {
  return `transition:${property} ${time} ${type}`
}
export const transObject = ({
  property = 'all',
  time = '0.5s',
  type = 'ease-in-out',
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const transition = ({
  property = 'all',
  time = '0.5s',
  type = 'ease-in-out',
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const border = ({
  width = '0.15rem',
  type = 'solid',
  color = 'white',
}) => {
  return `border:${width} ${type} ${color}`
}

export const letterSpacing = ({ spacing = '0.1rem' }) => {
  return `letter-spacing:${spacing}`
}
