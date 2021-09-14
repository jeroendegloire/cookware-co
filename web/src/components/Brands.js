import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Parallax } from 'react-scroll-parallax'
import { GatsbyImage } from 'gatsby-plugin-image'
import Fade from 'react-reveal/Fade'
import { useStaticQuery, graphql, Link } from 'gatsby'

import wok from '../images/wok.svg'
import wok2 from '../images/wok-2.svg'

const Brands = styled.section`
  padding: 65px 0px 100px 0px;

  .waw-title h2 {
    color: #676260;
    font-size: 64px;
    position: relative;
    font-family: Montserrat;
    font-weight: 700;

    &:after {
      position: absolute;
      content: '';
      bottom: -7px;
      left: 13px;
      width: 90px;
      height: 3px;
      background: #676260;
    }
  }

  .brands-wrapper {
    margin-top: 5rem;

    > div {
      margin-bottom: 30px;
    }
  }

  .brands-box {
    margin-top: 50px;

    .brands-box-image {
      background: #fff;
      border-radius: 30px;
      display: flex;
      width: 100%;
      height: 300px;
      justify-content: center;
      align-items: center;

      box-shadow: 6px 6px 25px -9px rgba(0, 0, 0, 0.6);
      padding: 1.5rem;

      ${breakpoint('md')`
        height: 160px;
      `}

      img {
        height: 200px;
        width: auto;

        ${breakpoint('md')`
          height: 120px;
      `}
      }
    }

    p {
      color: #676260;
      font-family: HelveticaNeueRoman;
      text-align: justify;
      font-size: 10px;
      line-height: 15px;
      margin: 20px 0px 0px 0px;
      margin-bottom: 0.5rem;
    }

    > a {
      color: #7c8c42;
      font-size: 13px;
      letter-spacing: 2px;
      font-family: 'HelveticaNeueRoman';

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

const BrandsCom = () => {
  const {
    sanityFrontpage: {
      ourBrands: { ourBrandsTitle, brandsItems },
    },
  } = useStaticQuery(query)

  return (
    <Brands className="page-section our-brands-wrep" id="brands">
      <Parallax className="wok" x={[-40, 10]} tagOuter="figure">
        <img alt="wok" src={wok} />
      </Parallax>

      <Parallax className="wok-2" x={[80, 50]} tagOuter="figure">
        <img alt="wok2" src={wok2} />
      </Parallax>

      <div className="our-brands-inner">
        <div className="container">
          <div className="our-brands-bake">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-9">
                <div className="brands-box-wrep">
                  <div className="waw-title">
                    <h2>{ourBrandsTitle}</h2>
                  </div>

                  <div className="brands-wrapper row">
                    {brandsItems.map(item => (
                      <div className="col-lg-4 col-sm-6">
                        <Fade>
                          <Link
                            aria-label="Go to brand"
                            to={item.reference.slug.current}
                          >
                            <GatsbyImage
                              image={item.image.asset.gatsbyImageData}
                            />
                          </Link>
                        </Fade>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Brands>
  )
}

export default BrandsCom

export const query = graphql`
  query BrandSectionQuery {
    sanityFrontpage {
      ourBrands {
        ourBrandsTitle
        brandsItems {
          image {
            asset {
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
            }
          }
          reference {
            slug {
              current
            }
          }
        }
      }
    }
  }
`
