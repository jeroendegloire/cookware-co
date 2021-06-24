export default {
    name: 'contactUs',
    type: 'object',
    title: 'Contact us',
    fields: [
        {
            name: 'contectUsTitle',
            type: 'string',
            title: 'Contact us title'
        },
        {
            name: 'info',
            type: 'string',
            title: 'Info text'
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email',
            validation: (Rule) =>
                Rule.regex(
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    {
                        name: "email", // Error message is "Does not match email-pattern"
                        invert: false, // Boolean to allow any value that does NOT match pattern
                    }
                ),
        }
    ],
}