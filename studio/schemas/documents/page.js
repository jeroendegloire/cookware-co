import { HiDocumentAdd } from 'react-icons/hi'

export default {
    name: 'page',
    type: 'document',
    title: 'Pages',
    icon: HiDocumentAdd,
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Hero image'
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                  type: 'block',
                },
                {
                    type: 'ctaLink',
                },
                {
                    type: 'ctaArray',
                }
              ]
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 200, // will be ignored if slugify is set
              slugify: input => input
                                   .toLowerCase()
                                   .replace(/\s+/g, '-')
                                   .slice(0, 200)
            }
          }
    ],
}