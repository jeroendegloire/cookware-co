export default {
    name: 'siteSettings',
    type: 'document',
    title: 'Site settings',
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
}