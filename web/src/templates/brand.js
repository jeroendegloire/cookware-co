import React, { useState, useEffect } from 'react'
import { graphql, navigate, PageRenderer, Link } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage } from 'gatsby-plugin-image'
import Modal from 'react-modal'

import backIcon from '../images/back-icon.svg'
import PortableText from '../utils/portableText'
import Seo from '../components/Seo'

Modal.setAppElement(`#___gatsby`)

const BrandTemplate = ({ data, pageContext }) => {
  const {
    brandName,
    logo,
    sidebar_image,
    _rawText,
    link,
    imagesArray,
  } = data.sanityBrand

  // PageRenderer stuff.
  const building = typeof window === 'undefined'
  const [indexPageData, setIndexPageData] = useState(
    !building && window.indexPageData
  )
  useEffect(() => {
    window.setIndexPageData = () => {
      setIndexPageData(window.indexPageData)
    }
  }, [])

  // Modal stuff.
  const [modalOpen, setModalOpen] = useState(true)
  const modalCloseTimeout = 300
  const closeModal = () => {
    setModalOpen(false)
    setTimeout(() => navigate(`/`), modalCloseTimeout)
  }

  return (
    <div>
      <PageRenderer
        key={'/'}
        location={{ pathname: '/' }}
        pageResources={indexPageData}
        path="/"
      />
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        contentLabel="Brand"
        closeTimeoutMS={modalCloseTimeout}
      >
        <Layout>
          <Seo title={brandName} />
          <div className="brand-popup row">
            {sidebar_image.asset.gatsbyImageData && (
              <div className="col-md-6">
                <GatsbyImage image={sidebar_image.asset.gatsbyImageData} />
              </div>
            )}

            <div className="col-md-6">
              {logo.asset.url && (
                <div className="logo-wrapper">
                  <img alt={brandName} src={logo.asset.url} />
                </div>
              )}

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
                onClick={e => {
                  e.preventDefault()
                  closeModal()
                }}
              >
                <img src={backIcon} className="back-icon" alt="" />
              </Link>

              {pageContext.previous ? (
                <Link
                  className="link-previous"
                  to={`/${pageContext.previous.reference.slug.current}`}
                >
                  ← Go to {pageContext.previous.reference.brandName}
                </Link>
              ) : (
                ''
              )}

              {pageContext.next ? (
                <Link
                  className="link-next"
                  to={`/${pageContext.next.reference.slug.current}`}
                >
                  Go to {pageContext.next.reference.brandName} →
                </Link>
              ) : (
                ''
              )}
            </div>
          </div>
        </Layout>
      </Modal>
    </div>
  )
}

export default BrandTemplate

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
