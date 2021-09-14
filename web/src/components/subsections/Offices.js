import React from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'

import offices from '../../images/offices.svg'

import map from '../../images/world-map-optimized.svg'

const Offices = styled.section`
  .waw-sec-title {
    background-image: url(${map});
    background-repeat: no-repeat;
    background-position: center;
    padding: 30px 0;
  }
`

const Li = styled.li`
  .city:before {
    background-image: url(${props => props.back});
  }
`

const OfficesComponents = () => {
  const {
    sanityFrontpage: {
      ourOffices: { ourOfficesTitle, officeItems },
    },
  } = useStaticQuery(query)

  return (
    <Offices className="waw-offices-bake" id="of">
      <Fade>
        <div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-9">
                <div className="waw-sec-content-main center">
                  <div className="row no-gutters justify-content-center">
                    <div className="col-12">
                      <div className="waw-sec-title">
                        <img
                          src={offices}
                          alt="Icon General management"
                          className="waw-sec-icon"
                        />
                        <h2
                          dangerouslySetInnerHTML={{
                            __html: ourOfficesTitle,
                          }}
                        ></h2>
                      </div>
                    </div>
                    {officeItems.map(world => (
                      <div className="col-md-6 col-lg-4 col-sm-6 col-12">
                        <div className="w-c-box-main">
                          <div className="w-c-box">
                            <h3
                              dangerouslySetInnerHTML={{
                                __html: world.regionName,
                              }}
                            ></h3>
                            <ul className="city-name">
                              {world.regionItems.map(item => (
                                <Li back={item.icon.asset.url}>
                                  <Link
                                    aria-label="Go to office"
                                    to={item.reference.slug.current}
                                  >
                                    <button className="dark-perot city">
                                      Visit
                                      <br />
                                      {item.countryName}
                                      <br />
                                      Office
                                    </button>
                                  </Link>
                                </Li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </Offices>
  )
}

export default OfficesComponents

export const query = graphql`
  query OfficeSectionQuery {
    sanityFrontpage {
      ourOffices {
        ourOfficesTitle
        officeItems {
          regionName
          regionItems {
            reference {
              ... on SanityOffice {
                slug {
                  current
                }
              }
            }
            icon {
              asset {
                url
              }
            }
            countryName
          }
        }
      }
    }
  }
`
