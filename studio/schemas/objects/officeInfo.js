export default {
    name: 'officeInfo',
    type: 'object',
    title: 'Office info',
    fields: [
        //{
        //    name: 'googleMapsIntegration',
        //    type: 'googleMap',
        //    title: 'google map'
        //},
        {
            name: 'companyName',
            type: 'string',
            title: 'Company name'
        },
        {
            name: 'companyInfoArray',
            type: 'array',
            title: 'Company info array',
            of: [{
                type: 'string' // address, zipcode, country, VAT number, bank name, IBAN, BIC
            }]
        }
    ],
}