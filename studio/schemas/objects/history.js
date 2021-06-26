export default {
    name: 'history',
    type: 'object',
    title: 'History',
    fields: [
        {
            name: 'historyTitle',
            type: 'string',
            title: 'History title',
            validation: Rule => Rule.required()
        },
        {
            name: 'historyArray',
            type: 'array',
            title: 'History array',
            of: [{
                type: 'historyItem'
            }],
            validation: Rule => Rule.required().max(8)
        }
    ],
}