import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

const Hero = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "ana-background.png" }) {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
            )
          }
        }
      }
    `
  )

  const image = getImage(placeholderImage)
  const bgImage = convertToBgImage(image)

  return (
    <BackgroundImage Tag="section" {...bgImage} preserveStackingContext>
      <div style={{ minHeight: 1000, minWidth: 1000 }}>
        {/* <GatsbyImage image={image} alt={"testimage"} /> */}
      </div>
    </BackgroundImage>
  )
}

export default Hero
