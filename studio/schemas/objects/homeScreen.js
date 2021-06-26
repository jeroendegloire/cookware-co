export default {
    name: 'homeScreen',
    type: 'object',
    title: 'Hero section',
    fields: [
        {
            name: 'background_image',
            type: 'image',
            title: 'Background image',
            validation: Rule => Rule.required()
        },
        {
            name: 'logo',
            type: 'image',
            title: 'Logo'
        },
        {
            name: 'slogan',
            type: 'string',
            title: 'Slogan',
            validation: Rule => Rule.required()
        }
    ],
}