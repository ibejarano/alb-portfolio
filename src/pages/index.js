import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Sections from "../components/sections"
import SectionsOption from "../components/sections-option"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Sections />
    <SectionsOption />
  </Layout>
)

export default IndexPage
