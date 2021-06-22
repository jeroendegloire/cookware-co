export default {
    name: 'keyFigures',
    type: 'object',
    title: 'Key figures',
    fields: [
        {
            name: 'keyFiguresTitle',
            type: 'string',
            title: 'Key figures title'
        },
        {
            name: 'keyFiguresArray',
            type: 'array',
            title: 'Key figures array',
            of: [{
                    type: 'keyFigure'
                }]
        }
    ],
}