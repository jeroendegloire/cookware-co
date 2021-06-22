export default {
    name: 'ourOffices',
    type: 'object',
    title: 'Our offices',
    fields: [
        {
            name: 'ourOfficesTitle',
            type: 'string',
            title: 'Our offices title'
        },
        {
            name: 'regionArray',
            type: 'array',
            title: 'Region array',
            of: [{
                type: 'string'
            }]
        },
        {
            name: 'officeArray',
            type: 'array',
            title: 'Office array',
            of: [{
                type: 'string'
            }]
        }
    ],
}