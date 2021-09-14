import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function Seo({ description, lang, meta, keywords, title, image }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.sanitySiteSettings.metaDescription
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title || officeTitle || factoryTitle || brandName}
            title={
              title
                ? `${title} | ${data.sanitySiteSettings.sitename}`
                : data.sanitySiteSettings.sitename
            }
            image={data.sanitySiteSettings.socialImage.asset.url}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:image`,
                content: image,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.sanitySiteSettings.sitename,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          >
            <script
              id="Cookiebot"
              src="https://consent.cookiebot.com/uc.js"
              data-cbid="334f8b27-09da-428a-bfbd-d628360aaa86"
              data-blockingmode="auto"
              type="text/javascript"
              async
            ></script>
          </Helmet>
        )
      }}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
}

export default Seo

const detailsQuery = graphql`
  query DefaultSEOQuery {
    sanitySiteSettings {
      sitename
      metaDescription
      socialImage {
        asset {
          url
        }
      }
    }
  }
`
