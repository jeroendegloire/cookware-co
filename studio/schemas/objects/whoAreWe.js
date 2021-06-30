export default {
    name: 'whoAreWe',
    type: 'object',
    title: 'Who are we',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: Rule => Rule.required()
        },
        {
            name: 'subtitle',
            type: 'string',
            title: 'Subtitle',
            validation: Rule => Rule.required()
        },
        {
            name: 'firstParagraph',
            type: 'text',
            title: 'First paragraph',
            validation: Rule => Rule.required()
        },
        {
            name: 'image1',
            type: 'image',
            title: 'Top image',
            validation: Rule => Rule.required()
        },
        {
            name: 'first_tagline',
            type: 'string',
            title: 'First tagline',
            validation: Rule => Rule.required()
        },
        {
            name: 'image2',
            type: 'image',
            title: 'First tagline image',
            validation: Rule => Rule.required()
        },
        {
            name: 'secondParagraph',
            type: 'text',
            title: 'Second paragraph',
            validation: Rule => Rule.required()
        },
        {
            name: 'second_tagline',
            type: 'string',
            title: 'Second tagline',
            validation: Rule => Rule.required()
        },
        {
            name: 'image3',
            type: 'image',
            title: 'Second tagline image',
            validation: Rule => Rule.required()
        },
        {
            name: 'image4',
            type: 'image',
            title: 'Bottom image',
            validation: Rule => Rule.required()
        }
    ],
}