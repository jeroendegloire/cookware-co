import { MdSettings } from 'react-icons/md'

export default {
    name: 'siteSettings',
    type: 'document',
    title: 'Site settings',
    icon: MdSettings,
    fields: [
        {
            name: 'sitename',
            type: 'string',
            title: 'Site name',
            validation: Rule => Rule.required()

        },
        {
            name: 'logoSite',
            type: 'image',
            title: 'Site logo',
            validation: Rule => Rule.required()
        },
        {
            name: 'menu',
            type: 'array',
            title: 'Main navigation',
            of: [{
                type: 'menuLink'
            }],
            validation: Rule => Rule.required()
        },
        {
            name: 'logoFooter',
            type: 'image',
            title: 'Footer image',
            validation: Rule => Rule.required()
        },
        {
            name: 'metaDescription',
            type: 'text',
            title: 'Meta description',
            validation: Rule => Rule.required()
        },
        {
            name: 'socialImage',
            type: 'image',
            title: 'Social image',
            validation: Rule => Rule.required()
        },
    
    ],
    preview: {
        prepare() {
            return {
              title: "Site settings",
            }
          }
      }
}