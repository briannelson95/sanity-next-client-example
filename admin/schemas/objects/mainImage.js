export default {
    name: 'mainImage',
    title: 'Main Image',
    type: 'image',
    options: {
        hotspot: true
    },
    fields: [
        {
            name: 'alt',
            type: 'string',
            description: 'Alternative text for SEO and accessibility.',
            validation: Rule => Rule.error('You have to add alternative text.').required()
        },
    ],
}