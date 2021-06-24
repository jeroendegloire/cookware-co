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
            title: 'Site name'
        },
        {
            name: 'logoSite',
            type: 'image',
            title: 'Site logo'
        },
        {
            name: 'menu',
            type: 'array',
            title: 'Main navigation',
            of: [{
                type: 'menuLink'
            }]
        },
        {
            name: 'logoFooter',
            type: 'image',
            title: 'Footer image'
        },
        {
            name: 'metaDescription',
            type: 'text',
            title: 'Meta description'
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