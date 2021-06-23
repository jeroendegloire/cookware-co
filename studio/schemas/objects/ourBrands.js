export default {
    name: 'ourBrands',
    type: 'object',
    title: 'Our brands',
    fields: [
        {
            name: 'ourBrandsTitle',
            type: 'string',
            title: 'Our brands title'
        },
        {
            name: 'brandsItems',
            type: 'array',
            title: 'Brands',
            of: [{
                type: 'brandItem'
            }]
        }
    ],
}