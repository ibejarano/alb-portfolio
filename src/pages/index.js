import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"

import "bootstrap/dist/css/bootstrap.min.css"
import "../style/main.scss"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero>
      <h1 className="hero-title">Hola! Aqui podria ir un mejor titulo</h1>
      <h1 className="hero-title__secondary">O con algun fondo transparente</h1>
      <button className="cta-btn cta-btn--hero">Clickeame</button>
    </Hero>
  </Layout>
)

export default IndexPage
