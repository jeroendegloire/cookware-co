export default {
    name: 'factory',
    type: 'document',
    title: 'Factory',
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