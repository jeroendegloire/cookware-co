import React from 'react'
import Fade from 'react-reveal/Fade'
import { Parallax } from 'react-scroll-parallax'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'

import factories from '../../images/factories.svg'
import forkknife from '../../images/fork-knife.svg'
import map from '../../images/world-map-optimized.svg'

const Factories = styled.section`
  .waw-sec-title {
    background-image: url(${map});
    background-repeat: no-repeat;
    background-position: center;
    padding: 30px 0;
  }
`

const Li = styled.li`
  .city-fac:before {
    background-image: url(${props => props.back});
  }
`

const FactoriesCom = () => {
  const {
    sanityFrontpage: {
      ourFactories: { ourFactoriesTitle, factoriesItems },
    },
  } = useStaticQuery(query)

  return (
    <Factories className="waw-factories-bake">
      <Parallax className="fork-knife" x={[50, 10]} tagOuter="figure">
        <img alt="cook-ware" src={forkknife} />
      </Parallax>
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
                          src={factories}
                          alt="Icon General management"
                          className="waw-sec-icon"
                        />
                        <h2
                          dangerouslySetInnerHTML={{
                            __html: ourFactoriesTitle,
                          }}
                        ></h2>
                      </div>
                    </div>
                    {factoriesItems.map(world => (
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
                                    aria-label="Go to factory"
                                    to={item.reference.slug.current}
                                  >
                                    <button className="light-gray city-fac">
                                      Visit <br />
                                      Factory
                                      <br />
                                      {item.countryName}
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
    </Factories>
  )
}

export default FactoriesCom

export const query = graphql`
  query FactorySectionQuery {
    sanityFrontpage {
      ourFactories {
        ourFactoriesTitle
        factoriesItems {
          regionName
          regionItems {
            reference {
              ... on SanityFactory {
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
