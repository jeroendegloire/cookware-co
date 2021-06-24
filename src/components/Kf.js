import React, { useState } from 'react'
import styled from 'styled-components'
import CountUp from 'react-countup'
import { Parallax } from 'react-scroll-parallax'
import Fade from 'react-reveal/Fade'
import VisibilitySensor from 'react-visibility-sensor'
import { graphql, useStaticQuery } from 'gatsby'

import pan from '../images/pan.svg'
import pot from '../images/pot.svg'

const Kf_wrapper = styled.section`
  position: relative;
  padding: 60px 0px 200px;
  sup {
    font-size: 21px;
  }

  &:before {
    content: '';
    display: block;
    background: white;
    height: 100%;
    position: absolute;
    top: -100px;
    width: 125%;
    -webkit-transform: rotate(-3deg);
    transform: rotate(-3deg);
  }

  .kf-title > h2 {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 53px;
    color: #676260;
    text-align: center;
    margin-bottom: 20px;
  }

  .kf-box {
    text-align: center;
    margin-top: 50px;

    > img {
      width: 126px;
      height: 126px;
    }

    > h3 {
      color: #676260;
      font-size: 35px;
      font-family: Montserrat;
      font-weight: 700;
      margin: 10px 0px;
    }

    .more-then {
      color: #414042;
      font-family: Montserrat;
      font-size: 12px;
      letter-spacing: 2px;
      display: block;
      margin-top: 15px;
    }

    > span:last-child {
      color: #7c8c42;
      font-family: Montserrat;
      font-size: 16px;
      letter-spacing: 2px;
    }
  }
`

export default () => {
  const [state, setState] = useState({ didViewCountUp: false })

  const onVisibilityChange = isVisible => {
    if (isVisible) {
      setState({ didViewCountUp: true })
    }
  }

  const {
    sanityFrontpage: {
      keyFigures: { keyFiguresTitle, keyFiguresArray },
    },
  } = useStaticQuery(query)

  return (
    <Kf_wrapper className="page-section" id="kf">
      <Parallax className="pan" x={[-80, -20]} y={[0, 60]} tagOuter="figure">
        <img src={pan} />
      </Parallax>

      <Parallax className="pot" x={[120, 20]} y={[0, 60]} tagOuter="figure">
        <img src={pot} />
      </Parallax>

      <Fade>
        <div className="container">
          <div className="kf-title-bake">
            <div className="kf-title">
              <h2
                dangerouslySetInnerHTML={{
                  __html: keyFiguresTitle,
                }}
              ></h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="row justify-content-center">
                  {keyFiguresArray.map(item => (
                    <div className="col-md-4 col-6">
                      <div className="kf-box-inner">
                        <div className="kf-box">
                          <img src={item.icon.asset.url} alt="Turnover" />
                          <span className="more-then">MORE THAN</span>
                          <VisibilitySensor
                            onChange={onVisibilityChange}
                            offset={{
                              top: 10,
                            }}
                            delayedCall
                          >
                            <h3>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: item.prefix,
                                }}
                              ></span>
                              <CountUp
                                duration={3}
                                end={state.didViewCountUp ? item.value : 0}
                              />
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: item.suffix,
                                }}
                              ></span>
                            </h3>
                          </VisibilitySensor>

                          <span
                            dangerouslySetInnerHTML={{
                              __html: item.infoText,
                            }}
                          ></span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </Kf_wrapper>
  )
}

export const query = graphql`
  query KFQuery {
    sanityFrontpage {
      keyFigures {
        keyFiguresTitle
        keyFiguresArray {
          value
          suffix
          prefix
          infoText
          icon {
            asset {
              url
            }
          }
        }
      }
    }
  }
`
