export default {
    name: 'factory',
    type: 'document',
    title: 'Factories',
    fields: [
        {
            name: 'factoryTitle',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'factorySubtitle',
            type: 'string',
            title: 'Subtitle'
        },
        {
            name: 'employeeInfoArray',
            type: 'array',
            title: 'Who to contact',
            of: [{
                type: 'employeeInfo'
            }]
        },
        {
            name: 'contactMail',
            type: 'string',
            title: 'Contact mail'
        },
        {
            title: 'Location',
            name: 'location',
            type: 'geopoint'
        },
        {
            name: 'logo',
            type: 'image',
            title: 'Logo'
        },
        {
            name: 'companyInfo',
            type: 'array',
            title: 'Factory info',
            of: [{
                type: 'block' // address, zipcode, country, VAT number, bank name, IBAN, BIC
            }]
        },
        {
            name: 'link',
            type: 'string',
            title: 'Website url'
        },
        {
            title: 'Path',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'factoryTitle',
              maxLength: 200, // will be ignored if slugify is set
              slugify: input => input
                                   .toLowerCase()
                                   .replace(/\s+/g, '-')
                                   .slice(0, 200)
            }
        }
    ],
}