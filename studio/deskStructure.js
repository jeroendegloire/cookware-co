import S from '@sanity/desk-tool/structure-builder'
import resolveProductionUrl from './resolveProductionUrl'
import SocialPreview from 'part:social-preview/component'
import SeoPane from 'sanity-plugin-seo-pane'
import Iframe from 'sanity-plugin-iframe-pane'


const hiddenDocTypes = listItem =>
  !['frontpage', 'siteSettings'].includes(
    listItem.getId()
  )

export default () =>
  S.list()
    .title('Base')
    .items([
      S.documentListItem()
        .title('Frontpage')
        .schemaType('frontpage')
        .child(
          S.document()
            .schemaType('frontpage')
            .documentId('frontpage')
<<<<<<< HEAD
            .views([S.view.form(), S.view.component(SocialPreview()).title('Social'), S.view
=======
            .views([S.view.form(), S.view
>>>>>>> 9efa001a732d25e6cc9a256d7a5ee4a9139a0138
            .component(Iframe)
            .options({
              url: (doc) => resolveProductionUrl(doc),
            })
            .title('Preview'), 
        ])
        ),
        S.documentListItem()
        .title('Site settings')
        .schemaType('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .views([S.view.form()])
        ),
        S.divider(),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])