import { HiShoppingCart } from "react-icons/hi"

export default {
    name: 'products',
    title: 'Products',
    type: 'document',
    icon: HiShoppingCart,
    fields: [
        {
            name: 'name',
            title: 'Product Name',
            type: 'string',
            validation: Rule => Rule.required(),
        },
        {
            name: 'image',
            type: 'mainImage',
            validation: Rule => Rule.required(),
        },
        {
            name: 'productLink',
            title: 'Link to Product',
            type: 'url',
            validation: Rule => Rule.required(),
            description: "Insert the Link to your product from Etsy."
        },
        {
            name: 'description',
            type: 'blockContent',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: "name",
                maxLength: 96
            }
        },
        {
            name: 'type',
            title: 'Product Type',
            type: 'string',
            options: {
                list: [
                    {title: 'Ring', value: 'Ring'},
                    {title: 'Misc', value: 'Misc'},
                ]
            },
        },
    ],
}