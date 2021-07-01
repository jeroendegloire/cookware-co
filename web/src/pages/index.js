/* eslint-disable */
import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { ParallaxProvider } from 'react-scroll-parallax'

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
        <SEO
          title="Home"
          description={data.sanitySiteSettings.metaDescription}
        />
        {data.sanitySiteSettings.socialImage.asset.url && (
          <SEO image={data.sanitySiteSettings.socialImage.asset.url} />
        )}
        <Header />
        <ParallaxProvider scrollAxis="vertical">
          <Main />
        </ParallaxProvider>
        <Footer />
      </Layout>
      <script
        id="CookieDeclaration"
        src="https://consent.cookiebot.com/334f8b27-09da-428a-bfbd-d628360aaa86/cd.js"
        type="text/javascript"
        async
      ></script>
    </ThemeProvider>
  )
}

export default IndexPage

export const query = graphql`
  query HomePageQuery {
    sanitySiteSettings {
      metaDescription
      socialImage {
        asset {
          url
        }
      }
    }
  }
`
