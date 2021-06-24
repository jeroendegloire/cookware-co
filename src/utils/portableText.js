import React from 'react'
import PropTypes from 'prop-types'
import BlockContent from '@sanity/block-content-to-react'

const PortableText = ({ content }) => {
  const serializers = {
    types: {},
  }

  return (
    <>
      <BlockContent blocks={content} serializers={serializers} />
    </>
  )
}

export default PortableText

PortableText.propTypes = {
  content: PropTypes.object.isRequired,
}
