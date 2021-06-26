export default {
    name: 'keyFigure',
    type: 'object',
    title: 'Key figure',
    fields: [
        {
            name: 'icon',
            type: 'image',
            options: {
                accept: 'image/svg+xml,.svg'
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'intro',
            type: 'string',
            title: 'Intro'
        },
        {
            name: 'prefix',
            type: 'string',
            title: 'Prefix'
        },
        {
            name: 'value',
            type: 'number',
            title: 'Value',
            validation: Rule => Rule.required()
        },
        {
            name: 'suffix',
            type: 'string',
            title: 'Suffix'
        },
        {
            name: 'infoText',
            type: 'string',
            title: 'Info text'
        },
    ],
    preview: {
        select: {
          title: 'value',
          media: 'icon'
        }
      }
}