export default {
    name: 'frontpage',
    type: 'document',
    title: 'Frontpage',
    fields: [
      {
        name: 'hero',
        title: 'Hero section',
        type: 'homeScreen'
      },
      {
        name: 'whoAreWe',
        title: 'Who are we',
        type: 'whoAreWe'
      },
      {
        name: 'keyFigures',
        title: 'Key figures',
        type: 'keyFigures'
      },
      {
        name: 'history',
        title: 'History',
        type: 'history'
      },
      {
        name: 'contactUs',
        title: 'Contact us',
        type: 'contactUs'
      },
    ],
    preview: {
        prepare() {
            return {
              title: "Frontpage",
            }
          }
      }

}