import * as React from "react"
import { Link } from "gatsby"

const ALink = (props) => {
  const { children, href, type="inside", ...xProps } = props
  switch (type) {
    case "outside":
      return (
        <a
          href={href}
          target="_blank"
          {...xProps}
        >
          {children}
        </a>
      )
    case "inside" :
      return (
        <Link
          to={href}
          {...xProps}
        >
          {children}
        </Link>
      )
  }
}

export default ALink