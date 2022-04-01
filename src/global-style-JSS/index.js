import { css } from "@emotion/react"

import reset from "./reset.js"
import font from "./font.style.js"
import setting from "./setting.js"

let theme = {
  colors: {
    primary: "#02A1A5",
    secondary: "#7BDCD5",
    tertiary: "#5B737C",
    accent: "#304855",
    text: "#fff",
    gradiant: ``
  },
  breakpoint: {
    "xs": `@media (max-width: 400px)`,
    "sm": `@media (max-width: 640px)`,
    "md": `@media (max-width: 768px)`,
    "lg": `@media (max-width: 1024px)`,
    "xl": `@media (max-width: 1280px)`,
    "xxl": `@media (max-width: 1536px)`
  }
}
theme.colors.gradiant = `linear-gradient(0.25turn,${theme.colors.secondary},${theme.colors.primary})`

let GlobalStyle = css`
  ${reset}
  ${font}
  ${setting}
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    background-color: ${theme.colors.secondary};
    color: white;
  }


  body {
    padding: 0;
    font-family: iransans, roboto-regular, 'Courier New', Courier, monospace;
    background-image: url("/body-background.jpg");
    background-repeat: no-repeat;
    background-size: cover;

    font-size: 1.8rem;
    line-height: 2em;

    ${theme.breakpoint.lg} {
      font-size: 1.6rem;
    }

    ${theme.breakpoint.md} {
      font-size: 1.4rem;
    }

    ${theme.breakpoint.sm} {
      font-size: 1.2rem;
    }
  }

  h1 {
    background-image: ${theme.colors.gradiant};
    background-clip: text;
    color: transparent;
    padding: 2px;
  }
`

export { GlobalStyle, theme }
