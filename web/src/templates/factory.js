import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import { graphql, navigate, PageRenderer, Link } from 'gatsby'
import Modal from 'react-modal'

import China from '../images/cb-icon-7.png'
import backIcon from '../images/back-icon.svg'
import factoriesLegend from '../images/map-legend--factories.svg'
import PortableText from '../utils/portableText'

const Office = styled.div`
  background-color: #fff;

  .temp:before {
    background-image: url(${China});
  }

  .back-icon {
    width: 50px;
    cursor: pointer;
  }

  .temp-header-bake {
    position: relative;
  }

  .temp-header-bake:after {
    content: '';
    background: #b9b8ab;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    top: -100px;
    width: 125%;
    transform: rotate(-2deg);
    margin-left: -100px;
    margin-right: -100px;
  }

  .logo-ms {
    margin-bottom: 3rem;
  }
  .button svg {
    width: 37px;
  }
`

Modal.setAppElement(`#___gatsby`)

const FactoryTemplate = ({ data }) => {
  const {
    factoryTitle,
    factorySubtitle,
    logo,
    employeeInfoArray,
    contactMail,
    link,
    _rawCompanyInfo,
    _rawContactInfo,
    location,
  } = data.sanityFactory

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
        contentLabel="Modal" // TODO
        closeTimeoutMS={modalCloseTimeout}
      >
        <Layout>
          <Office className="city-temp-wrep">
            <div className="city-temp-wrep">
              <div className="city-temp-inner">
                <div className="temp-header-bake temp">
                  <div className="container">
                    <div className="temp-header-inner">
                      <div className="row ">
                        <div className="col-md-12">
                          <div className="temp-title">
                            <h1
                              dangerouslySetInnerHTML={{
                                __html: factoryTitle,
                              }}
                            ></h1>
                            <h2
                              dangerouslySetInnerHTML={{
                                __html: factorySubtitle,
                              }}
                            ></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="temp-content-main">
                  <div className="container">
                    <div className="temp-content-inner pb100">
                      <div className="row office-adderess">
                        <div className="col-md-5">
                          <div className="office-address-bake pt50">
                            <div className="office-icon pt60">
                              <img src={factoriesLegend} alt="" />
                              <span>Factory</span>
                            </div>
                          </div>

                          <h3>Who to contact?</h3>

                          <ul className="contact-list">
                            {employeeInfoArray.map(item => (
                              <li>
                                {item.employeeName}
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: item.imployeeFunctione,
                                  }}
                                  className="function"
                                ></span>
                              </li>
                            ))}
                          </ul>

                          <a href={`mailto:${contactMail}`} className="button">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 44.19 18.83"
                            >
                              <title>Asset 2</title>
                              <g id="Layer_2" data-name="Layer 2">
                                <g id="Layer_1-2" data-name="Layer 1">
                                  <path
                                    d="M42.94,0H16.58a1.32,1.32,0,0,0-1.24,1.38V17.45a1.32,1.32,0,0,0,1.24,1.38H43a1.32,1.32,0,0,0,1.24-1.38V1.38A1.32,1.32,0,0,0,42.94,0ZM41.27,1.05,29.94,10.39a.28.28,0,0,1-.18.06.27.27,0,0,1-.17-.06L18.26,1.05Zm-25,16.1V1.38a.31.31,0,0,1,.3-.33.26.26,0,0,1,.18.07l8.66,7.13Zm.79.63,9.12-8.89L29,11.23a1.14,1.14,0,0,0,1.47,0l2.84-2.34,9.12,8.89Zm26.18-.63-9.14-8.9,8.66-7.13a.23.23,0,0,1,.17-.07.32.32,0,0,1,.31.33Z"
                                    fill="#fff"
                                  />
                                  <path
                                    d="M12.84,4.29H.33c-.18,0-.33.21-.33.47s.15.47.33.47H12.84c.18,0,.33-.21.33-.47S13,4.29,12.84,4.29Z"
                                    fill="#fff"
                                  />
                                  <path
                                    d="M12.84,8.27h-10c-.18,0-.33.21-.33.47s.15.47.33.47h10c.18,0,.33-.21.33-.47S13,8.27,12.84,8.27Z"
                                    fill="#fff"
                                  />
                                  <path
                                    d="M12.84,12.25H1.38c-.18,0-.33.21-.33.47s.15.47.33.47H12.84c.18,0,.33-.21.33-.47S13,12.25,12.84,12.25Z"
                                    fill="#fff"
                                  />
                                </g>
                              </g>
                            </svg>
                            <br />
                            CONTACT US
                          </a>
                        </div>
                        <div className="col-md-7">
                          <img
                            className="logo-ms"
                            src={logo.asset.url}
                            alt="Anotech"
                          />
                          <p>
                            <PortableText content={_rawCompanyInfo} />
                          </p>

                          <a
                            className="link"
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span>&#8250;&#8250;</span> MORE INFO
                          </a>

                          <div className="row">
                            <div className="col-lg-6">
                              <img
                                className={'mb-3'}
                                alt={'Google Map'}
                                src={
                                  'https://maps.googleapis.com/maps/api/staticmap?size=600x400&maptype=roadmap&markers=size:mid%7Ccolor:red%7C' +
                                  location.lat +
                                  ', ' +
                                  location.lng +
                                  '&key=AIzaSyD53u8vNTAPrceyNm7e0FSvwHmc5YJ4XB8'
                                }
                              />
                            </div>
                            <div className="col-lg-6">
                              <p>
                                <PortableText content={_rawContactInfo} />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link
              className="button-back"
              to="/"
              onClick={e => {
                e.preventDefault()
                closeModal()
              }}
            >
              <img src={backIcon} className="back-icon" alt="" />
            </Link>
          </Office>
        </Layout>
      </Modal>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    sanityFactory(slug: { current: { eq: $slug } }) {
      factoryTitle
      factorySubtitle
      logo {
        asset {
          url
        }
      }
      location {
        lat
        lng
      }
      employeeInfoArray {
        employeeName
        imployeeFunction
      }
      contactMail
      _rawCompanyInfo(resolveReferences: { maxDepth: 10 })
      _rawContactInfo(resolveReferences: { maxDepth: 10 })
      link
    }
  }
`

export default FactoryTemplate
