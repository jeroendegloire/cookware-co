export default {
    name: 'ourOffices',
    type: 'object',
    title: 'Our offices',
    fields: [
        {
            name: 'ourOfficesTitle',
            type: 'string',
            title: 'Our offices title',
            validation: Rule => Rule.required()
        },
        {
            name: 'officeItems',
            type: 'array',
            title: 'Offices',
            of: [{
                type: 'region'
            }],
            validation: Rule => Rule.required()
        }
    ],
}