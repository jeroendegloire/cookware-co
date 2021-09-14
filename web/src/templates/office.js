import React, { useState, useEffect } from 'react'
import { graphql, navigate, PageRenderer, Link } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import Modal from 'react-modal'

import PortableText from '../utils/portableText'
import backIcon from '../images/back-icon.svg'
import officesLegend from '../images/map-legend--offices.svg'

const Office = styled.div`
  background-color: #fff;
  .temp:before {
    background-image: url(${props => props.back});
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
    background: #7c8c42;
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
  .button svg {
    width: 37px;
  }
`

Modal.setAppElement(`#___gatsby`)

const OfficeTemplate = ({ data }) => {
  const {
    officeTitle,
    officeSubtitle,
    contactMail,
    employeeInfoArray,
    countryFlag,
    officeInfoArray,
  } = data.sanityOffice

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
          <Office back={countryFlag.asset.url} className="city-temp-wrep">
            <div className="city-temp-inner">
              <div className="temp-header-bake temp">
                <div className="container">
                  <div className="temp-header-inner">
                    <div className="row ">
                      <div className="col-md-12">
                        <div className="temp-title">
                          <h1
                            dangerouslySetInnerHTML={{
                              __html: officeTitle,
                            }}
                          ></h1>
                          <h2
                            dangerouslySetInnerHTML={{
                              __html: officeSubtitle,
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
                    <div className="row pt100">
                      <div className="col-md-4">
                        <div className="office-address-bake">
                          <div className="office-icon">
                            <img src={officesLegend} alt="" />
                            <span>Sales office</span>
                          </div>
                          {employeeInfoArray && contactMail && (
                            <>
                              {employeeInfoArray && (
                                <>
                                  <h3>Who to contact?</h3>
                                  <ul className="contact-list">
                                    {employeeInfoArray.map(item => (
                                      <li>
                                        <span
                                          dangerouslySetInnerHTML={{
                                            __html: item.employeeName,
                                          }}
                                        ></span>
                                        <span
                                          dangerouslySetInnerHTML={{
                                            __html: item.imployeeFunction,
                                          }}
                                          className="function"
                                        ></span>
                                      </li>
                                    ))}
                                  </ul>
                                </>
                              )}

                              {contactMail && (
                                <a
                                  href={`mailto:${contactMail}`}
                                  className="button"
                                >
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
                              )}
                            </>
                          )}
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="container">
                          <div className="row">
                            {officeInfoArray.map(item => (
                              <div className="col-12 col-md-6 office-adderess">
                                <a
                                  href={
                                    'https://maps.google.com/?q=' +
                                    item.location.lat +
                                    ',' +
                                    item.location.lng
                                  }
                                  title="Link to google maps"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <img
                                    src={
                                      'https://maps.googleapis.com/maps/api/staticmap?size=600x400&maptype=roadmap&markers=size:mid%7Ccolor:red%7C' +
                                      item.location.lat +
                                      ', ' +
                                      item.location.lng +
                                      '&key=AIzaSyD53u8vNTAPrceyNm7e0FSvwHmc5YJ4XB8'
                                    }
                                    alt={'Google map'}
                                    width="600"
                                    height="400"
                                  />
                                </a>
                                <h5>{item.companyName}</h5>
                                <p className="mb20">
                                  <PortableText
                                    content={item._rawCompanyInfo}
                                  />
                                </p>
                              </div>
                            ))}
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

export default OfficeTemplate

export const query = graphql`
  query($slug: String!) {
    sanityOffice(slug: { current: { eq: $slug } }) {
      officeTitle
      officeSubtitle
      contactMail
      countryFlag {
        asset {
          url
        }
      }
      officeInfoArray {
        companyName
        location {
          lat
          lng
        }
        _rawCompanyInfo(resolveReferences: { maxDepth: 10 })
      }
      employeeInfoArray {
        employeeName
        imployeeFunction
      }
    }
  }
`
