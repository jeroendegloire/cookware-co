export default {
    name: 'cta',
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
            name: 'reference',
            type: 'reference',
            title: 'Link',
            to: [{type: 'factory'}, {type: 'office'}]
        },
    ],
}