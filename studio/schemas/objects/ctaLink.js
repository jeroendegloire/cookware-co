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
            name: 'prefix',
            type: 'string',
            title: 'Prefix',
            description: 'Value above link text'
        },
        {
            name: 'text',
            type: 'string',
            title: 'Text',
            validation: Rule => Rule.required()
        },
        {
            name: 'suffix',
            type: 'string',
            title: 'Suffix',
            description: 'Value below link text'
        },
        {
            name: 'link',
            type: 'string',
            title: 'Link',
            validation: Rule => Rule.required()
        },
        {
            type: 'boolean',
            name: 'new_window',
            title: 'Open in new tab/window',
        },
    ],
    preview: {
        select: {
          title: 'text',
          media: 'icon'
        }
      }
}