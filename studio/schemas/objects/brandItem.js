export default {
    name: 'brandItem',
    type: 'object',
    title: 'Brand item',
    fields: [
        {
            name: 'image',
            type: 'image',
            title: 'Teaser image',
            validation: Rule => Rule.required()
        },
        {
            name: 'reference',
            type: 'reference',
            title: 'Link',
            to: [{type: 'brand'}],
        },
    ],
    preview: {
        select: {
          title: 'reference.brandName',
          media: 'image'
        }
      }
}