import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby-plugin-modal-routing-3'
import Layout from '../components/layout'
import { GatsbyImage } from 'gatsby-plugin-image'

import backIcon from '../images/back-icon.svg'
import PortableText from '../utils/portableText'

export default ({ data, pageContext }) => {
  const {
    brandName,
    logo,
    sidebar_image,
    _rawText,
    link,
    imagesArray,
  } = data.sanityBrand

  return (
    <Layout>
      <div className="brand-popup row">
        <div className="col-md-6">
          <GatsbyImage image={sidebar_image.asset.gatsbyImageData} />
        </div>
        <div className="col-md-6">
          <div className="logo-wrapper">
            <img alt={brandName} src={logo.asset.url} />
          </div>
          <div className="text-wrapper">
            <p>
              <PortableText content={_rawText} />
            </p>
          </div>

          <a
            className="link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>&#8250;&#8250;</span> VISIT WEBSITE
          </a>

          <div className="image-row-wrapper">
            {imagesArray.map(item => (
              <div className="image-wrapper">
                <GatsbyImage image={item.asset.gatsbyImageData} />
              </div>
            ))}
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

          {pageContext.previous ? (
            <Link
              className="link-previous"
              to={`/${pageContext.previous.slug.current}`}
              asModal
            >
              ← Go to {pageContext.previous.brandName}
            </Link>
          ) : (
            ''
          )}

          {pageContext.next ? (
            <Link
              className="link-next"
              to={`/${pageContext.next.slug.current}`}
              asModal
            >
              Go to {pageContext.next.brandName} →
            </Link>
          ) : (
            ''
          )}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    sanityBrand(slug: { current: { eq: $slug } }) {
      brandName
      logo {
        asset {
          url
        }
      }
      link
      _rawText(resolveReferences: { maxDepth: 10 })
      sidebar_image {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
      imagesArray {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
    }
  }
`
