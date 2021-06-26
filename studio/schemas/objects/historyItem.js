export default {
    name: 'historyItem',
    type: 'object',
    title: 'History item',
    fields: [
        {
            name: 'year',
            type: 'number',
            title: 'Year',
            validation: Rule => Rule.required()
        },
        {
            name: 'info',
            type: 'string',
            title: 'Info',
            validation: Rule => Rule.required()
        }
    ],
}