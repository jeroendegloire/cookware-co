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
            title: 'Brand name'
        },
        {
            name: 'logo',
            type: 'image',
            title: 'Logo'
        },
        {
            name: 'text',
            type: 'array', 
            of: [{type: 'block'}],
            title: 'Text'
        },
        {
            name: 'link',
            type: 'string',
            title: 'Website url'
        },
        {
            name: 'sidebar_image',
            type: 'image',
            title: 'Sidebar image'
        },
        {
            name: 'imagesArray',
            type: 'array',
            title: 'Images',
            of: [{
                type: 'image'
            }]
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'brandName',
              maxLength: 200, // will be ignored if slugify is set
              slugify: input => input
                                   .toLowerCase()
                                   .replace(/\s+/g, '-')
                                   .slice(0, 200)
            }
          }
    ],
}