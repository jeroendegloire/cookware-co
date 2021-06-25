import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby-plugin-modal-routing-3'
import Layout from '../components/layout'
import styled from 'styled-components'

import PortableText from '../utils/portableText'
import backIcon from '../images/back-icon.svg'
import officesLegend from '../images/map-legend--offices.svg'

const Office = styled.div`
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
`

const officeTemplate = ({ data }) => {
  const {
    officeTitle,
    officeSubtitle,
    contactMail,
    employeeInfoArray,
    countryFlag,
    officeInfoArray,
  } = data.sanityOffice

  return (
    <Layout>
      <Office back={countryFlag.asset.url} className="city-temp-wrep">
        <div className="city-temp-inner">
          <div className="temp-header-bake temp">
            <div className="container">
              <div className="temp-header-inner">
                <div className="row ">
                  <div className="col-md-12">
                    <div className="temp-title">
                      <h1>{officeTitle}</h1>
                      <h2>{officeSubtitle}</h2>
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

                      <h3>Who to contact?</h3>

                      <ul className="contact-list">
                        {employeeInfoArray.map(item => (
                          <li>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: item.employeeName,
                              }}
                            ></span>
                            <span className="function">
                              {item.imployeeFunction}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <a href={`mailto:${contactMail}`} className="button">
                        <i className="icon-mail"></i>CONTACT US
                      </a>
                    </div>
                  </div>
                  {officeInfoArray.map(item =>
                    item.length === 1 ? (
                      <div className="col-md-8 office-adderess">
                        <img
                          src={
                            'https://maps.googleapis.com/maps/api/staticmap?size=600x400&maptype=roadmap&markers=size:mid%7Ccolor:red%7C' +
                            item.location.lat +
                            ', ' +
                            item.location.lng +
                            '&key=AIzaSyD53u8vNTAPrceyNm7e0FSvwHmc5YJ4XB8'
                          }
                          alt={'Google map'}
                        />
                        <h5>{item.companyName}</h5>
                        <p className="mb20">
                          <PortableText content={item._rawCompanyInfo} />
                        </p>
                      </div>
                    ) : (
                      <div className="col-md-4">
                        <div className="office-adderess">
                          <img
                            src={
                              'https://maps.googleapis.com/maps/api/staticmap?size=600x400&maptype=roadmap&markers=size:mid%7Ccolor:red%7C' +
                              item.location.lat +
                              ', ' +
                              item.location.lng +
                              '&key=AIzaSyD53u8vNTAPrceyNm7e0FSvwHmc5YJ4XB8'
                            }
                            alt={'Google map'}
                          />
                          <h5>{item.companyName}</h5>
                          <p className="mb20">
                            <PortableText content={item._rawCompanyInfo} />
                          </p>
                        </div>
                      </div>
                    )
                  )}
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

export default officeTemplate

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
