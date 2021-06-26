export default {
    name: 'menuLink',
    type: 'object',
    title: 'Link',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Link title',
            validation: Rule => Rule.required()
        },
        {
            name: 'url',
            type: 'string',
            title: 'Link URL',
            validation: Rule => Rule.required()
        },
    ],
}