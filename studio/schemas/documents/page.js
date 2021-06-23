export default {
    name: 'page',
    type: 'document',
    title: 'Page',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [{
                type: 'block' // address, zipcode, country, VAT number, bank name, IBAN, BIC
            }]
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 200, // will be ignored if slugify is set
              slugify: input => input
                                   .toLowerCase()
                                   .replace(/\s+/g, '-')
                                   .slice(0, 200)
            }
          }
    ],
}