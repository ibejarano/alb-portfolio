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
      <Navbar siteTitle="Ana Laura Blanco" />
      <Hero>
        <h1 className="hero-title">Hola! Aqui podria ir un mejor titulo</h1>
        <h1 className="hero-title__secondary">O con algun fondo transparente</h1>
      </Hero>
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
