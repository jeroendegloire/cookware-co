import { HiHome } from 'react-icons/hi'

export default {
    name: 'frontpage',
    type: 'document',
    title: 'Frontpage',
    icon: HiHome,
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
      {
        name: 'ourOffices',
        title: 'Offices',
        type: 'ourOffices'
      },
      {
        name: 'ourFactories',
        title: 'Factories',
        type: 'ourFactories'
      },
      {
        name: 'ourBrands',
        title: 'Brands',
        type: 'ourBrands'
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