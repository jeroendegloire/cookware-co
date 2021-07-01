const path = require('path')

//create office page
exports.createPages = ({ graphql, actions }) => {
  const tempateOffice = path.resolve('./src/templates/office.js')
  const templateFactory = path.resolve('./src/templates/factory.js')
  const templateBrand = path.resolve('./src/templates/brand.js')
  const templatePages = path.resolve('./src/templates/pages.js')

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
      pages: sanityFrontpage {
        ourBrands {
          brandsItems {
            reference {
              slug {
                current
              }
              brandName
            }
          }
        }
      }
    }
  `).then(result => {
    const resultBrand = result.data.pages.ourBrands.brandsItems

    resultBrand.forEach((page, index) => {
      //get the index
      // let index = resultBrand.map(item => {
      //   for (let i = 0; i < item.length; i++) {
      //     console.info(item._id)
      //   }
      // })

      console.info(`Creating page for: "${page.reference.brandName}"...`)

      const slug = page.reference.slug.current

      actions.createPage({
        path: slug,
        component: templateBrand,
        context: {
          id: page._id,
          slug,
          previous: index === 0 ? null : resultBrand[index - 1],
          next:
            index === resultBrand.length - 1 ? null : resultBrand[index + 1],
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

  const pages = graphql(`
    {
      pages: allSanityPage {
        nodes {
          slug {
            current
          }
          _id
          title
        }
      }
    }
  `).then(result => {
    result.data.pages.nodes.forEach(page => {
      console.info(`Creating page for: "${page.title}"...`)

      const slug = page.slug.current

      actions.createPage({
        path: slug,
        component: templatePages,
        context: {
          id: page._id,
          slug,
        },
      })
    })
  })

  return Promise.all([office, brand, factory, pages])
}
