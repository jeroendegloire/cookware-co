export default {
    name: 'brandItem',
    type: 'object',
    title: 'Brand item',
    fields: [
        {
            name: 'image',
            type: 'image',
            title: 'Teaser image'
        },
        {
            name: 'reference',
            type: 'reference',
            title: 'Link',
            to: [{type: 'brand'}]
        },
    ],
}