export default {
    name: 'keyFigure',
    type: 'object',
    title: 'Key figure',
    fields: [
        {
            name: 'icon',
            type: 'image'
        },
        {
            name: 'prefix',
            type: 'string',
            title: 'Prefix'
        },
        {
            name: 'value',
            type: 'string',
            title: 'Value'
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
        }
    ],
    preview: {
        select: {
          title: 'value',
          media: 'icon'
        }
      }
}