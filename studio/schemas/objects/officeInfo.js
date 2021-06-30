export default {
    name: 'officeInfo',
    type: 'object',
    title: 'Office info',
    fields: [
        {
            name: 'companyName',
            type: 'string',
            title: 'Company name',
        },
        {
            title: 'Location',
            name: 'location',
            type: 'geopoint'
        },
        {
            name: 'companyInfo',
            type: 'array',
            title: 'Company info',
            of: [{
                type: 'block' // address, zipcode, country, VAT number, bank name, IBAN, BIC
            }],
            validation: Rule => Rule.required()
        }
    ],
}