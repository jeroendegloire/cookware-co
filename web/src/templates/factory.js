import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby-plugin-modal-routing-3'
import Layout from '../components/layout'
import styled from 'styled-components'
import Iframe from 'react-iframe'

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

export default ({ data }) => {
  const {
    factoryTitle,
    factorySubtitle,
    logo,
    employeeInfoArray,
    contactMail,
    link,
    _rawCompanyInfo,
    _rawContactInfo,
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
                        <h1>{factoryTitle}</h1>
                        <h2>{factorySubtitle}</h2>
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
                            <span className="function">
                              {item.imployeeFunction}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.7081223891414!2d113.09610131495923!3d22.552603985193123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34022482cb41dad7%3A0xf1cfd277ea095f58!2s28%20Jin&#39;ou%20Rd%2C%20Jianghai%20Qu%2C%20Jiangmen%20Shi%2C%20Guangdong%20Sheng%2C%20China%2C%20529020!5e0!3m2!1sen!2sbe!4v1568619611456!5m2!1sen!2sbe"
                        width="100%"
                        height="250"
                        frameborder="0"
                        style="border:0;"
                        allowfullscreen=""
                      />

                      <p>
                        <PortableText content={_rawContactInfo} />
                      </p>

                      <div className="mt1rem"></div>
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

                      <a href={`mailto:${contactMail}`} className="button">
                        <i className="icon-mail"></i>CONTACT US
                      </a>
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
