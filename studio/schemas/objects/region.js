export default {
    name: 'region',
    type: 'object',
    title: 'Region',
    fields: [
        {
            name: 'regionName',
            type: 'string',
            title: 'Region name',
            validation: Rule => Rule.required()
        },
        {
            name: 'regionItems',
            type: 'array',
            title: 'Call to actions',
            of: [{
                type: 'cta'
            }],
            validation: Rule => Rule.required()
        },
    ],
}