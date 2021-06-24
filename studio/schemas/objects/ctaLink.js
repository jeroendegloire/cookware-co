export default {
    name: 'ctaLink',
    type: 'object',
    title: 'CTA',
    fields: [
        {
            name: 'icon',
            type: 'image',
            title: 'Country icon',
            options: {
                accept: 'image/svg+xml,.svg'
            }
        },
        {
            name: 'text',
            type: 'string',
            title: 'Text'
        },
        {
            name: 'link',
            type: 'string',
            title: 'Link',
        },
    ],
    preview: {
        select: {
          title: 'text',
          media: 'icon'
        }
      }
}