import css from 'styled-jsx-container/css'

const color = 'red'

export const foo = css`
  div {
    color: ${color};
  }
`

const props = { color: 'red ' }

export default css`
  div {
    font-size: 3em;
    color: ${props.color};
  }
  p {
    color: ${this.props.color};
  }
`
