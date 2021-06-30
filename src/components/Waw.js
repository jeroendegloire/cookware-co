import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { graphql, useStaticQuery } from 'gatsby'
import Fade from 'react-reveal/Fade'
import { GatsbyImage } from 'gatsby-plugin-image'

const Waw = styled.section`
  h2,
  h3,
  h4 {
    font-family: Montserrat;
    font-weight: 700;
  }

  h2 {
    position: relative;

    font-size: 64px;

    color: #676260;
  }

  h3 {
    font-size: 36px;
    line-height: 34px;
    color: #7c8c42;
  }

  .waw-title h2:after {
    position: absolute;
    content: '';
    bottom: -7px;
    left: 0;
    width: 90px;
    height: 3px;
    background: #676260;
  }

  .waw-inner {
    background: #d6d6cd;
    padding: 50px 0 220px;
    position: relative;

    position: relative;
  }

  .waw-content-wrep {
    padding: 40px 0px;

    .gatsby-image-wrapper {
      height: 100%;
    }
  }

  .waw-content-left {
    margin-bottom: 50px;

    ${breakpoint('lg')`
      padding-right: 20px;
    `}

    p {
      margin-bottom: 40px;
    }
  }

  .waw-content-right {
    ${breakpoint('lg')`
      padding-left: 20px;
    `}

    p {
      margin: 40px 0;
    }
  }

  .waw-content p {
    color: #676260;
    font-size: 14px;
    font-weight: 700;
    text-align: justify;
    line-height: 16px;
    letter-spacing: 2.3px;
  }

  .cookware-box {
    h3 {
      font-size: 22px;
      line-height: 26px;
      color: #fff;
    }
  }

  .cm-before:before {
    position: absolute;
    content: ' ';
    border: solid transparent;
    border-width: 25px;
    border-color: rgba(136, 183, 213, 0);
    z-index: 5;
    top: 20%;
    left: -50px;
    border-right-color: #7c8c42;
    border-right-width: 25px;
  }

  .cm-after::after {
    position: absolute;
    content: ' ';
    border: solid transparent;
    border-width: 25px;
    border-color: rgba(136, 183, 213, 0);
    z-index: 5;
    bottom: 20%;
    right: -50px;
    border-left-color: #7c8c42;
    border-left-width: 25px;
  }

  .cw-box-content {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    background: #7c8c42;
    position: relative;
    padding: 10px;
  }
`

const WawCom = () => {
  const {
    sanityFrontpage: {
      whoAreWe: {
        title,
        subtitle,
        first_tagline,
        firstParagraph,
        second_tagline,
        secondParagraph,
        image1,
        image2,
        image3,
        image4,
      },
    },
  } = useStaticQuery(query)

  return (
    <Waw className="page-section waw-wrep" id="waw">
      <div className="waw-inner">
        <div className="container">
          <Fade className="waw-bake">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="waw-title">
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: title,
                    }}
                  ></h2>
                </div>
                <div className="row waw-content-wrep">
                  <div className="col-lg-6 waw-content-left">
                    <div className="waw-content-inner">
                      <div className="waw-content">
                        <p
                          dangerouslySetInnerHTML={{
                            __html: firstParagraph,
                          }}
                        ></p>
                        <GatsbyImage image={image1.asset.gatsbyImageData} />
                        <div className="cookware-box">
                          <div className="row no-gutters">
                            <div className="col-md-6 col-sm-6 col-6">
                              <GatsbyImage
                                image={image2.asset.gatsbyImageData}
                              />
                            </div>
                            <div className="col--6 col-sm-6 col-6">
                              <div className="cw-box-content cm-before">
                                <h3
                                  dangerouslySetInnerHTML={{
                                    __html: first_tagline,
                                  }}
                                ></h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 waw-content-right">
                    <div className="waw-content">
                      <div className="waw-content-inner">
                        <h3
                          dangerouslySetInnerHTML={{
                            __html: subtitle,
                          }}
                        ></h3>
                        <div className="mt30 mb20"></div>
                        <p className="mt40">{secondParagraph}</p>
                        <div className="cookware-box">
                          <div className="row no-gutters">
                            <div className="col-md-6 col-sm-6 col-6">
                              <div className="cw-box-content cm-after">
                                <h3
                                  dangerouslySetInnerHTML={{
                                    __html: second_tagline,
                                  }}
                                ></h3>
                              </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-6">
                              <GatsbyImage
                                image={image3.asset.gatsbyImageData}
                              />
                            </div>
                          </div>
                          <div className="row no-gutters">
                            <div className="col-md-6 col-sm-6 col-6">
                              <GatsbyImage
                                maxWidth="192"
                                maxHeight="176"
                                image={image4.asset.gatsbyImageData}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
      {/* )}
      /> */}
    </Waw>
  )
}

export default WawCom

export const query = graphql`
  query WhoWeAreQuery {
    sanityFrontpage {
      whoAreWe {
        title
        subtitle
        second_tagline
        secondParagraph
        first_tagline
        firstParagraph
        image1 {
          asset {
            gatsbyImageData(placeholder: BLURRED, width: 700, height: 315)
          }
        }
        image2 {
          asset {
            gatsbyImageData(placeholder: BLURRED, width: 350, height: 320)
          }
        }
        image3 {
          asset {
            gatsbyImageData(placeholder: BLURRED, width: 350, height: 320)
          }
        }
        image4 {
          asset {
            gatsbyImageData(placeholder: BLURRED, width: 350, height: 320)
          }
        }
      }
    }
  }
`
