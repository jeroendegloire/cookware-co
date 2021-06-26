import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby-plugin-modal-routing-3'
import Layout from '../components/layout'
import styled from 'styled-components'

import China from '../images/cb-icon-7.png'
import backIcon from '../images/back-icon.svg'
import factoriesLegend from '../images/map-legend--factories.svg'
import PortableText from '../utils/portableText'

const Office = styled.div`
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
`

const factoryTemplate = ({ data }) => {
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

  return (
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
                        <i className="icon-mail"></i>CONTACT US
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
          state={{
            noScroll: true,
          }}
        >
          <img src={backIcon} className="back-icon" alt="" />
        </Link>
      </Office>
    </Layout>
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

export default factoryTemplate
