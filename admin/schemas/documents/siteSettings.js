import { HiAdjustments } from "react-icons/hi"

export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    icon: HiAdjustments,
    __experimental_actions: [
        /*"create", /*"delete",*/ "update", "publish"
    ],
    fields: [
        {
            name: 'title',
            title: 'Site Title',
            type: 'string'
        },
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
            name: 'seo',
            title: 'SEO',
            type: 'openGraph'
        }
    ],
}