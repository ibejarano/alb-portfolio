import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from '../components/hero'
import Sections from '../components/sections'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Sections />
  </Layout>
)

export default IndexPage


