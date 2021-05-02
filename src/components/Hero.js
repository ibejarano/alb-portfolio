import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

const Hero = ({ children }) => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "ana-background.png" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    `
  )

  const image = getImage(placeholderImage)
  const bgImage = convertToBgImage(image)

  return (
    <BackgroundImage
      id="hero"
      Tag="section"
      {...bgImage}
      preserveStackingContext
    >
      {children}
    </BackgroundImage>
  )
}

export default Hero
