export default {
    name: 'history',
    type: 'object',
    title: 'History',
    fields: [
        {
            name: 'historyTitle',
            type: 'string',
            title: 'History title'
        },
        {
            name: 'historyArray',
            type: 'array',
            title: 'History array',
            of: [{
                type: 'historyItem'
            }]
        }
    ],
}