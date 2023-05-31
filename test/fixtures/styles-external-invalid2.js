import css from 'styled-jsx-container/css'

const color = 'red'

export const foo = css`
  div {
    color: ${color};
  }
`

export default css`
  div {
    font-size: 3em;
  }
  p {
    color: ${props.color};
  }
`
