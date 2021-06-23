import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby-plugin-modal-routing-3'
import Layout from '../components/layout'
import styled from 'styled-components'
import Iframe from 'react-iframe'

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

export default ({ data }) => {
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
                            {item.employeeName}
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
                        <Iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.0457963047115!2d3.652422215753267!3d51.05224217956287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c371efab35a105%3A0x98b1c48f802897c7!2sAntoon%20Catriestraat%2012%2C%209031%20Gent!5e0!3m2!1sen!2sbe!4v1568618880104!5m2!1sen!2sbe"
                          width="100%"
                          height="195"
                          frameborder="0"
                          style="border:0;"
                          allowfullscreen=""
                        />
                        <h5>{item.companyName}</h5>
                        <p className="mb20">
                          <PortableText
                            content={item.companyInfo._rawChildren}
                          />
                        </p>
                      </div>
                    ) : (
                      <div className="col-md-4">
                        <div className="office-adderess">
                          <Iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2455.528402592662!2d4.298503651640245!3d52.015470879622356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b41059cafd47%3A0x517df0d502e6fa26!2sKlopperman%2016%2C%202292%20JD%20Wateringen%2C%20Nederland!5e0!3m2!1snl!2sbe!4v1591600070657!5m2!1snl!2sbe"
                            width="100%"
                            height="195"
                            frameborder="0"
                            style="border:0;"
                            allowfullscreen=""
                          />
                          <h5>{item.companyName}</h5>
                          <p className="mb20">
                            <PortableText
                              content={item.companyInfo._rawChildren}
                            />
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
        companyInfo {
          _rawChildren(resolveReferences: { maxDepth: 10 })
        }
      }
      employeeInfoArray {
        employeeName
        imployeeFunction
      }
    }
  }
`
