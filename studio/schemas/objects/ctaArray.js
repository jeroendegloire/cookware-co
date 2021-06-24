export default {
    name: 'ctaArray',
    type: 'object',
    title: "CTA's",
    fields: [
        {
            name: 'links',
            type: 'array',
            title: 'Links',
            of: [
                { type: 'ctaLink' }
            ]
        },
    ],
    preview: {
        prepare() {
            return {
              title: "CTA links",
            }
          }
      }
}