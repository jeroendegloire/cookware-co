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
            name: 'countryName',
            type: 'string',
            title: 'Country name'
        },
        {
            name: 'link',
            type: 'string',
            title: 'Link',
        },
    ],
}