const { format } = require('date-fns')

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createOfficePages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityOffice(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges.forEach((edge, index) => {
    const { id, slug = {}, publishedAt } = edge.node
    const dateSegment = format(publishedAt, 'YYYY/MM')
    const path = `/office/${id}/`

    reporter.info(`Creating office page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/office.js'),
      context: { id },
    })
  })
}

async function createFactoryPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityFactory(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges.forEach((edge, index) => {
    const { id, slug = {}, publishedAt } = edge.node
    const dateSegment = format(publishedAt, 'YYYY/MM')
    const path = `/factory/${id}/`

    reporter.info(`Creating factory page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/factory.js'),
      context: { id },
    })
  })
}

async function createBrandPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityBrand(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges.forEach((edge, index) => {
    const { id, slug = {}, publishedAt } = edge.node
    const dateSegment = format(publishedAt, 'YYYY/MM')
    const path = `/brand/${id}/`

    reporter.info(`Creating brand page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/brand.js'),
      context: { id },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createOfficePages(graphql, actions, reporter)
  await createFactoryPages(graphql, actions, reporter)
  await createBrandPages(graphql, actions, reporter)
}
