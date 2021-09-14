/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import './src/sass/reset.scss'

// This only works if in the modal page you add a
// Link to the homepage.
export const onPrefetchPathname = ({ loadPage }) => {
  if (window.indexPageData === undefined) {
    loadPage('/').then(result => {
      window.indexPageData = result
      // If we load the modal page directly we need to
      // re-render by changing the state. Otherwise
      // the initial result is null for some reason.
      if (window.setIndexPageData) window.setIndexPageData()
    })
  }
}
