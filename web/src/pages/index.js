import React from 'react'
import Layout from '../components/layout'
import { ParallaxProvider } from 'react-scroll-parallax'
import { graphql } from 'gatsby'

import 'react-router-modal/css/react-router-modal.css'

import '../../node_modules/bootstrap-scss/bootstrap-grid.scss'
import '../sass/custom.scss'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import SEO from '../components/SEO'
import { ThemeProvider } from 'styled-components'

const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
}

const IndexPage = ({ data }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Home" />
        <Header />
        <ParallaxProvider scrollAxis="vertical">
          <Main data={data.sanityFrontpage} />
        </ParallaxProvider>
        <Footer />
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    sanityFrontpage {
      id
      hero {
        slogan
        background_image {
          asset {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        logo {
          asset {
            localFile {
              publicURL
            }
          }
        }
      }
    }
  }
`
