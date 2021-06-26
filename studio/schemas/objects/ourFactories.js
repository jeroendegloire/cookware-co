export default {
    name: 'ourFactories',
    type: 'object',
    title: 'Our factories',
    fields: [
        {
            name: 'ourFactoriesTitle',
            type: 'string',
            title: 'Our factories title',
            validation: Rule => Rule.required()
        },
        {
            name: 'factoriesItems',
            type: 'array',
            title: 'Factories',
            of: [{
                type: 'region'
            }],
            validation: Rule => Rule.required()
        }
    ],
}