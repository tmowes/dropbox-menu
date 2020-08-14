import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
  --primary: #0d2f81;
  --secondary: orange;
  --tertiary: #fff;
  --quaternary: #000;
  --blue: #0061ff;
  --border: #bdc4c9;
}
  html {
    font-size: 62.5%;
    min-height: 100%;
    background:  var(--primary);
    transition: background-color .2s ease-out;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *, button, input, textarea {
    border: 0;
    outline: 0;
    background: none;
    font-size: 1.6rem;
    font-family: Roboto,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    color: var(--tertiary);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: color .2s ease-out;
  }
  button {
    cursor: pointer;
  }
  button, a {
    text-decoration: none;
  }
  ul, li {
    list-style: none;
  }
`
