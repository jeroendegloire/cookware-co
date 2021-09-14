import React, { useState, useEffect } from 'react'
import { graphql, navigate, PageRenderer, Link } from 'gatsby'

import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import Modal from 'react-modal'

import '../../node_modules/bootstrap-scss/bootstrap-grid.scss'

import logoSlogan from '../images/logo--slogan.svg'
import backIcon from '../images/back-icon.svg'
import Layout from '../components/layout'

const NotFound = styled.div`
  background: #d6d6cd;
  min-height: 100vh;

  .hero {
    height: 400px;
    position: relative;

    .gatsby-image-wrapper {
      height: 100%;
    }

    :after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
    }

    .logo {
      max-width: 100%;
      width: 320px;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      left: 50%;
      z-index: 1;
    }
  }

  p {
    text-align: center;
    font-family: 'HelveticaNeueRoman';
    font-size: 14px;
    line-height: 16px;
    color: #676260;
  }

  h1 {
    text-align: center;
    font-size: 53px;
    font-weight: 700;
    font-family: Montserrat;
    line-height: 64px;
    color: #676260;
    margin-top: 3rem;
    margin-bottom: 3rem;
    position: relative;

    &:after {
      position: absolute;
      content: '';
      bottom: -7px;
      left: 43%;
      width: 90px;
      height: 3px;
      background: #676260;
    }
  }

  .city-name-wrep {
    margin: 4rem 0;
  }

  .city-name-inner {
    text-align: center;
  }

  .city-name a {
    display: inline-block;
    line-height: 1rem;
    width: 115px;
    text-align: center;
    color: #fff;
    font-size: 10px;
    font-family: 'Montserrat';
    font-weight: 700;
    letter-spacing: 2px;
    border-radius: 40px;
    position: relative;
    margin: 10px 15px;
    text-transform: uppercase;
    padding-top: 1rem;
    padding-bottom: 1rem;

    &:before {
      content: '';
      position: absolute;
      background-repeat: no-repeat;
      background-size: cover;
      width: 22px;
      height: 22px;
      border: 1px solid #fff;
      border-radius: 30px;
      left: -6px;
      top: -5px;
    }
  }

  .light-gray {
    background: #b9b8ab;
  }

  .dark-perot {
    background: #7c8c42;
    color: white !important;
  }

  .button-back {
    position: relative;
    bottom: 4rem;
    text-align: center;
    display: block;
    margin-top: 7rem;
    margin-bottom: 0;
    right: 0;

    img {
      width: 80px;
    }
  }
`

Modal.setAppElement(`#___gatsby`)

const NotFoundPage = ({ data }) => {
  // PageRenderer stuff.
  const building = typeof window === 'undefined'
  const [indexPageData, setIndexPageData] = useState(
    !building && window.indexPageData
  )
  useEffect(() => {
    window.setIndexPageData = () => {
      setIndexPageData(window.indexPageData)
    }
  }, [])

  // Modal stuff.
  const [modalOpen, setModalOpen] = useState(true)
  const modalCloseTimeout = 300
  const closeModal = () => {
    setModalOpen(false)
    setTimeout(() => navigate(`/`), modalCloseTimeout)
  }

  return (
    <div>
      <PageRenderer
        key={'/'}
        location={{ pathname: '/' }}
        pageResources={indexPageData}
        path="/"
      />
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        contentLabel="Brand"
        closeTimeoutMS={modalCloseTimeout}
      >
        <Layout>
          <NotFound>
            <div className="hero">
              <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />

              <img
                className="logo"
                src={logoSlogan}
                alt="Slogan: House of innovation."
              />
            </div>
            <div className="container page-vacancies">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9 ">
                  <h1>NOT FOUND</h1>
                  <p>
                    You just hit a route that doesn&#39;t exist... the sadness.
                  </p>
                </div>
              </div>
              <Link className="button-back" to="/">
                <img src={backIcon} className="back-icon" alt="" />
              </Link>
            </div>
          </NotFound>
        </Layout>
      </Modal>
    </div>
  )
}

export default NotFoundPage

export const query = graphql`
  {
    file(relativePath: { eq: "hero_vacancies.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
