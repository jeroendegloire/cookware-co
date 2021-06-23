const path = require('path')

//create office page
exports.createPages = async ({ graphql, actions }) => {
  const tempate = path.resolve('./src/templates/office.js')

  const { data } = await graphql(`
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
  `)

  data.pages.nodes.forEach(page => {
    console.info(`Creating page for: "${page.officeTitle}"...`)

    const slug = page.slug.current

    actions.createPage({
      path: slug,
      component: tempate,
      context: {
        id: page._id,
        slug,
      },
    })
  })
}

//create factory page
exports.createPages = async ({ graphql, actions }) => {
  const tempate = path.resolve('./src/templates/factory.js')

  const { data } = await graphql(`
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
  `)

  data.pages.nodes.forEach(page => {
    console.info(`Creating page for: "${page.factoryTitle}"...`)

    const slug = page.slug.current

    actions.createPage({
      path: slug,
      component: tempate,
      context: {
        id: page._id,
        slug,
      },
    })
  })
}
