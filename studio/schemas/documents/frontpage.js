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
        type: 'homeScreen',
        validation: Rule => Rule.required()
      },
      {
        name: 'whoAreWe',
        title: 'Who are we',
        type: 'whoAreWe',
        validation: Rule => Rule.required()
      },
      {
        name: 'keyFigures',
        title: 'Key figures',
        type: 'keyFigures',
        validation: Rule => Rule.required()
      },
      {
        name: 'history',
        title: 'History',
        type: 'history',
        validation: Rule => Rule.required()
      },
      {
        name: 'contactUs',
        title: 'Contact us',
        type: 'contactUs',
        validation: Rule => Rule.required()
      },
      {
        name: 'ourOffices',
        title: 'Offices',
        type: 'ourOffices',
        validation: Rule => Rule.required()
      },
      {
        name: 'ourFactories',
        title: 'Factories',
        type: 'ourFactories',
        validation: Rule => Rule.required()
      },
      {
        name: 'ourBrands',
        title: 'Brands',
        type: 'ourBrands',
        validation: Rule => Rule.required()
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