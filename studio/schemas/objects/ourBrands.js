export default {
    name: 'ourBrands',
    type: 'object',
    title: 'Our brands',
    fields: [
        {
            name: 'ourBrandsTitle',
            type: 'string',
            title: 'Our brands title',
            validation: Rule => Rule.required()
        },
        {
            name: 'brandsItems',
            type: 'array',
            title: 'Brands',
            of: [{
                type: 'brandItem'
            }],
            validation: Rule => Rule.required()
        }
    ],
}