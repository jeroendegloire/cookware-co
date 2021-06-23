export default {
    name: 'office',
    type: 'document',
    title: 'Office',
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