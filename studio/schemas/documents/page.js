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
            title: 'Title',
            validation: Rule => Rule.required()
        },
        {
            name: 'image',
            type: 'image',
            title: 'Hero image',
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                  type: 'block',
                },
            ],
            validation: Rule => Rule.required()
        },
        {
            name: 'ctaArray',
            type: 'ctaArray',
            title: 'CTA Buttons'
        },
        {
            title: 'Path',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 200, // will be ignored if slugify is set
              slugify: input => input
                                   .toLowerCase()
                                   .replace(/\s+/g, '-')
                                   .slice(0, 200)
            },
            validation: Rule => Rule.required()
        },
    ],
}