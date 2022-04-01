
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import 'src/global-style-CSS/index.scss'

const Layout = ({ children }) => {

  return (
    <>
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
    </>
  )
}


export default Layout
