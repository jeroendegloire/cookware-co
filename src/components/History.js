import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { graphql, StaticQuery } from 'gatsby'
import { Parallax } from 'react-scroll-parallax'
import Fade from 'react-reveal/Fade'

import timelineEven from '../images/timeline--even.png'
import timelineOdd from '../images/timeline--odd.png'
import timelineArrow from '../images/timeline--arrow.svg'
import pot2 from '../images/pot-2.svg'
import fork from '../images/fork.svg'

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
    padding: 50px 0 150px;
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
  .timeline-title {
    font-size: 38px;
    text-align: center;
    text-transform: uppercase;
    margin-top: 70px;
    margin-bottom: 100px;
  }
  ul.timeline-content {
    padding-bottom: 4rem;
    ${breakpoint('lg')`
      display: flex;
      padding-bottom: 0;`};
    position: relative;
    &:before {
      content: '';
      position: absolute;
      left: calc(50% - 2px);
      top: 0;
      bottom: 0;
      right: calc(50% - 2px);
      height: 100%;
      background: #7c8c42;
      ${breakpoint('lg')`
      top: 50%;
      height: 3px;
      left: -50px;
      right: -25px;
      `};
    }
    &:after {
      content: '';
      background: url(${timelineArrow}) no-repeat right;
      position: absolute;
      background-size: cover;
      bottom: 0;
      right: 46.9%;
      transform: rotate(90deg) translate(50%);
      width: 29px;
      height: 33px;
      ${breakpoint('lg')`
      right: -30px;
      top: 50%;
      transform: translateY(-45%);`};
    }
    li {
      position: relative;
      width: calc(60% - 14px);
      ${breakpoint('lg')`
        left: -2.5%;
        flex: 1;
      `};
      .tc-item {
        position: relative;
      }
    }
    li:nth-of-type(odd) {
      width: 100%;
        ${breakpoint('lg')`
          background: url(${timelineOdd}) no-repeat center;
          background-size: 65px;
        `};
        
        &:before {
          ${breakpoint('lg')`
          display: block;
          content: '';
          width: 1px;
          height: 85px;
          background: #676260;
          left: 50%;
          position: absolute;
          bottom: calc(50% + 20px);`};
        }
        &:after {
          content: '';
          position: absolute;
          height: 65px;
          width: 65px;
          background: black;
          left: 50%;
          transform: translate(-50%, -50%);
          top: 50%;
          background: url(${timelineOdd}) center center no-repeat;
          background-size: 65px;
        }
        
        .tc-item {
          padding-right: 60%;
          ${breakpoint('lg')`
          padding-bottom: 250px;
          padding-right: 0;
          `};
        }
      }
    }
    li:nth-of-type(even) {
      background: url(${timelineEven}) left center no-repeat; 
      background-size: 65px;
      margin-left: calc(50% - 33px);
      ${breakpoint('lg')`
      background: url(${timelineEven}) no-repeat center;
      background-size: 65px;
      margin-left: 0;
      `};
      &:after {
        ${breakpoint('lg')`
        display: block;
        content: '';
        width: 1px;
        height: 60px;
        background: #676260;
        left: 50%;
        position: absolute;
        top: calc(50% + 20px);`};
      }
      .tc-item {
        text-align: right;
        padding-left: 100px;
        ${breakpoint('lg')`
        margin-top: 360px;
        text-align: left;
        padding-left: 0;f
        `};
      }
    }
  }
  .tc-item {
    span {
      font-family: 'Montserrat';
      font-size: 35px;
      color: #7c8c42;
    }
    > div {
      font-size: 13px;
      color: #676260;
      font-family: 'Montserrat';
      font-weight: Bold;
      display: block;
      text-transform: uppercase;
      hyphens: manual;
      max-width: 100%;
      ${breakpoint('lg')`
      background: #d6d6cd;
      `};
      padding-bottom: 10%;
    }
  }
`

const HistoryCom = () => (
  <Waw className="page-section waw-wrep" id="waw">
    <Parallax className="pot-2" x={[-80, -20]} y={[80, 100]} tagOuter="figure">
      <img alt="pot2" src={pot2} />
    </Parallax>

    <StaticQuery
      query={graphql`
        query HistoryQuery {
          sanityFrontpage {
            history {
              historyTitle
              historyArray {
                year
                info
              }
            }
          }
          sanityFrontpage {
            history {
              historyTitle
              historyArray {
                year
                info
              }
            }
          }
        }
      `}
      render={data => (
        <div className="waw-inner">
          <div className="tm-wrep">
            <div className="container">
              <Fade className="timeline-wrep">
                <div className="timeline-bake">
                  <div className="row justify-content-center">
                    <div className="2 col-lg-10">
                      <h2
                        className="timeline-title"
                        dangerouslySetInnerHTML={{
                          __html: data.sanityFrontpage.history.historyTitle,
                        }}
                      ></h2>
                      <div className="timeline-content-wrep">
                        <div className="timeline-content-inner">
                          <ul className="timeline-content">
                            {data.sanityFrontpage.history.historyArray.map(
                              item => (
                                <li>
                                  <div className="tc-item">
                                    <span>{item.year}</span>
                                    <div
                                      dangerouslySetInnerHTML={{
                                        __html: item.info,
                                      }}
                                    ></div>
                                  </div>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      )}
    />
    <Parallax className="fork" x={[80, -30]} y={[50, 10]} tagOuter="figure">
      <img alt="fork" src={fork} />
    </Parallax>
  </Waw>
)

export default HistoryCom
