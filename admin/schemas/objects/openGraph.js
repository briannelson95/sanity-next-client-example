export default {
    name: 'openGraph',
    title: 'Open Graph SEO',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Heads up! This will override the page title',
            validation: Rule => Rule.max(60).warning('Should be under 60 characters')
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.max(155).warning('Should be under 155 characters')
        },
        {
            name: 'keywords',
            title: 'Keywords',
            type: 'array',
            of: [
                {name: 'tag', type: 'string'}
            ]
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            description: 'Facebook recommends 1200x630 (will be auto resized)'
        }
    ],
}