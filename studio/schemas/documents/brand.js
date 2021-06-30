import { HiColorSwatch } from 'react-icons/hi'

export default {
    name: 'brand',
    type: 'document',
    title: 'Brands',
    icon: HiColorSwatch,
    fields: [
        {
            name: 'brandName',
            type: 'string',
            title: 'Brand name',
            validation: Rule => Rule.required()
        },
        {
            name: 'logo',
            type: 'image',
            title: 'Logo',
        },
        {
            name: 'text',
            type: 'array', 
            of: [{type: 'block'}],
            title: 'Text',
            validation: Rule => Rule.required()
        },
        {
            name: 'link',
            type: 'url',
            title: 'Website url'
        },
        {
            name: 'sidebar_image',
            type: 'image',
            title: 'Sidebar image',
            validation: Rule => Rule.required()
        },
        {
            name: 'imagesArray',
            type: 'array',
            title: 'Images',
            of: [{
                type: 'image',
            }]
        },
        {
            title: 'Path',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'brandName',
              maxLength: 200, // will be ignored if slugify is set
              slugify: input => `brand/${input
                                   .toLowerCase()
                                   .replace(/\s+/g, '-')
                                   .slice(0, 200)}`
            },
            validation: Rule => Rule.required()
          },
    ],
}