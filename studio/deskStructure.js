import S from '@sanity/desk-tool/structure-builder'

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
            .views([S.view.form()])
        ),
        S.documentListItem()
        .title('Site settings')
        .schemaType('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('sitesetttings')
            .views([S.view.form()])
        ),
        S.divider(),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])