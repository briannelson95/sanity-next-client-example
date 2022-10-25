import { HiAdjustments } from "react-icons/hi"

export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    icon: HiAdjustments,
    __experimental_actions: [
        /*"create", "delete",*/ "update", "publish"
    ],
    fields: [
        {
            name: 'title',
            title: 'Site Title',
            type: 'string'
        },
        {
            name: 'contact',
            title: 'Contact Info',
            type: 'object',
            fields: [
                {
                    name: 'email',
                    title: 'Main Email',
                    type: 'string',
                    validation: (Rule) =>
                        Rule.regex(
                            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                            {
                                name: 'Email',
                                invert: false
                            }
                        )
                },
                {
                    name: 'phone',
                    title: 'Main Phone Number',
                    type: 'string',
                    validation: (Rule) =>
                        Rule.regex(
                            /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                            {
                                name: 'Phone',
                                invert: false
                            }
                        )
                },
                {
                    name: 'socials',
                    title: 'Social Media',
                    type: 'array',
                    of: [
                        {name: 'facebook', title: 'Facebook URL', type: 'url'},
                        {name: 'instagram', title: 'Instagram URL', type: 'url'},
                        {name: 'twitter', title: 'Twitter URL', type: 'url'},
                    ]
                }
            ]
        },
        {
            name: 'navigation',
            title: 'Navigation Menu',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: 'page'}
                    ]
                }
            ]
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'openGraph'
        }
    ],
}