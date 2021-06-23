import { HiOfficeBuilding } from 'react-icons/hi'

export default {
    name: 'office',
    type: 'document',
    title: 'Offices',
    icon: HiOfficeBuilding,
    fields: [
        {
            name: 'officeTitle',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'officeSubtitle',
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
            name: 'officeInfoArray',
            type: 'array',
            title: 'Office info array',
            of: [{
                type: 'officeInfo'
            }]
        },
        {
            title: 'Path',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'officeTitle',
              maxLength: 200, // will be ignored if slugify is set
              slugify: input => input
                                   .toLowerCase()
                                   .replace(/\s+/g, '-')
                                   .slice(0, 200)
            }
        }
    ],
}