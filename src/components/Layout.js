import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./Navbar"
import Hero from "./Hero"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="main-container">
      <Hero>
        <Navbar siteTitle="Ana Laura Blanco" />
      </Hero>
      {children}
      {/* <footer
        style={{
          marginTop: `2rem`,  
        }}
      >
        © {new Date().getFullYear()} {data.site.siteMetadata?.title}
      </footer> */}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
