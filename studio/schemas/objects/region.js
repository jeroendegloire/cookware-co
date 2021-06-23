export default {
    name: 'region',
    type: 'object',
    title: 'Region',
    fields: [
        {
            name: 'regionName',
            type: 'string',
            title: 'Region name'
        },
        {
            name: 'regionItems',
            type: 'array',
            title: 'Call to actions',
            of: [{
                type: 'cta'
            }]
        },
    ],
}