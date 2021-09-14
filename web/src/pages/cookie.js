import React from 'react'
import { Link } from 'gatsby-plugin-modal-routing-3'
import styled from 'styled-components'

import '../../node_modules/bootstrap-scss/bootstrap-grid.scss'

import backIcon from '../images/back-icon.svg'

import Layout from '../components/layout'
import Seo from '../components/Seo'

const PagesWrapper = styled.div`
  background: #d6d6cd;

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
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .city-name a {
    display: inline-block;
    line-height: 1rem;
    min-width: 120px;
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
    padding: 0.7rem 1rem;

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

  .marker1 {
    left: calc(29% - 25px);
    top: calc(29% - 30px);
  }

  .marker2 {
    left: calc(47% - 25px);
    top: calc(23.5% - 30px);
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
    margin-top: 4rem;
    margin-bottom: 0;
    right: 0;

    img {
      width: 80px;
    }
  }

  .page-vacancies {
    p {
      margin: 1em;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      text-align: center;
      font-family: 'Montserrat';
      color: #676260;
    }
  }
`

const cookiePage = ({ data }) => {
  return (
    <Layout>
      <script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="334f8b27-09da-428a-bfbd-d628360aaa86"
        data-blockingmode="auto"
        type="text/javascript"
        async
      ></script>
      <Seo title="Cookie declaration" />

      <PagesWrapper>
        <div className="container page-vacancies">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9 ">
              <h1 class="mb-8">Cookie declaration</h1>
              <script
                id="CookieDeclaration"
                src="https://consent.cookiebot.com/334f8b27-09da-428a-bfbd-d628360aaa86/cd.js"
                type="text/javascript"
                async
              ></script>
            </div>
          </div>

          <Link
            className="button-back"
            to="/"
            state={{
              noScroll: true,
            }}
          >
            <img src={backIcon} className="back-icon" alt="" />
          </Link>
        </div>
      </PagesWrapper>
    </Layout>
  )
}

export default cookiePage
