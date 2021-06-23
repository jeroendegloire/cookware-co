const path = require('path')

//create office page
exports.createPages = ({ graphql, actions }) => {
  const tempateOffice = path.resolve('./src/templates/office.js')
  const templateFactory = path.resolve('./src/templates/factory.js')
  const templateBrand = path.resolve('./src/templates/brand.js')

  const office = graphql(`
    {
      pages: allSanityOffice {
        nodes {
          slug {
            current
          }
          _id
          officeTitle
        }
      }
    }
  `).then(result => {
    result.data.pages.nodes.forEach(page => {
      console.info(`Creating page for: "${page.officeTitle}"...`)

      const slug = page.slug.current

      actions.createPage({
        path: slug,
        component: tempateOffice,
        context: {
          id: page._id,
          slug,
        },
      })
    })
  })

  const brand = graphql(`
    {
      pages: allSanityBrand {
        edges {
          node {
            slug {
              current
            }
            _id
            brandName
          }
          next {
            slug {
              current
            }
            brandName
          }
          previous {
            slug {
              current
            }
            brandName
          }
        }
      }
    }
  `).then(result => {
    result.data.pages.edges.forEach(({ node, next, previous }) => {
      console.info(`Creating page for: "${node.brandName}"...`)

      const slug = node.slug.current

      actions.createPage({
        path: slug,
        component: templateBrand,
        context: {
          id: node._id,
          slug,
          previous,
          next,
        },
      })
    })
  })

  const factory = graphql(`
    {
      pages: allSanityFactory {
        nodes {
          slug {
            current
          }
          _id
          factoryTitle
        }
      }
    }
  `).then(result => {
    result.data.pages.nodes.forEach(page => {
      console.info(`Creating page for: "${page.factoryTitle}"...`)

      const slug = page.slug.current

      actions.createPage({
        path: slug,
        component: templateFactory,
        context: {
          id: page._id,
          slug,
        },
      })
    })
  })

  return Promise.all([office, brand, factory])
}
