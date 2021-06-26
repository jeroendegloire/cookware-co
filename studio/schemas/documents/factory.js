import { GiFactory } from 'react-icons/gi'

export default {
    name: 'factory',
    type: 'document',
    title: 'Factories',
    icon: GiFactory,
    fields: [
        {
            name: 'factoryTitle',
            type: 'string',
            title: 'Title',
            validation: Rule => Rule.required()
        },
        {
            name: 'factorySubtitle',
            type: 'string',
            title: 'Subtitle'
        },
        {
            name: 'countryFlag',
            type: 'image',
            title: 'Country flag'
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
            title: 'Contact mail',
            validation: (Rule) =>
                Rule.regex(
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    {
                        name: "email", // Error message is "Does not match email-pattern"
                        invert: false, // Boolean to allow any value that does NOT match pattern
                    }
                ),
        },
        {
            title: 'Location',
            name: 'location',
            type: 'geopoint',
            validation: Rule => Rule.required()
        },
        {
            name: 'contactInfo',
            type: 'array',
            title: 'Contact info',
            of: [{
                type: 'block' // address, zipcode, country, VAT number, bank name, IBAN, BIC
            }]
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
            }],
            validation: Rule => Rule.required()
        },
        {
            name: 'link',
            type: 'url',
            title: 'Website url'
        },
        {
            title: 'Path',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'factoryTitle',
              maxLength: 200, // will be ignored if slugify is set
              slugify: input => `factory/${input
                                   .toLowerCase()
                                   .replace(/\s+/g, '-')
                                   .slice(0, 200)}`
            },
            validation: Rule => Rule.required()
        }
    ],
}