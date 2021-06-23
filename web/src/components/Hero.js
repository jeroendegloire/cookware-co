import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'

const HeroSection = styled.section`
  position: relative;
  height: 700px;
  z-index: 0;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  .gatsby-image-wrapper {
    height: 700px;

    img {
      object-fit: cover;
    }
  }

  .container {
    padding: 150px 0px 130px;
    position: absolute;
    inset: 0px;
    z-index: 1;
    height: 700px;
    font-family: Montserrat;
    font-weight: 700;

    h1 {
      transform: translateY(-1.5rem);
      opacity: 0.5;
      position: relative;
      font-size: 56px;
      font-weight: 700;
      line-height: 60px;
      color: #fff;
      margin-bottom: 30px;

      ${breakpoint('md')`
        font-size: 82px;
        line-height: 84px;
      `}
    }

    img {
      transform: translateY(-1.5rem);
      opacity: 0.5;
      position: relative;
      max-width: 200px;
    }
  }
`

const Hero = () => {
  const {
    sanityFrontpage: { hero },
  } = useStaticQuery(query)

  return (
    <HeroSection id="hero">
      <GatsbyImage image={hero.background_image.asset.gatsbyImageData} />

      <div className="container">
        <div className="col-md-11 col-lg-8">
          <h1 className="animate-pop-in">{hero.slogan}</h1>
          <img
            className="animate-pop-in"
            src={hero.logo.asset.url}
            alt="Slogan: House of innovation."
          />
        </div>
      </div>
    </HeroSection>
  )
}

export default Hero

export const query = graphql`
  query HeroQuery {
    sanityFrontpage {
      id
      hero {
        slogan
        background_image {
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
        logo {
          asset {
            url
          }
        }
      }
    }
  }
`
