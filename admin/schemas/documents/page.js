export default {
    name: 'page',
    title: 'Pages',
    type: 'document',
    __experimental_actions:[
        "create", /*"delete",*/ "update", "publish"
    ],
    fields: [
        {
            name: 'title',
            title: 'Page Title',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Featured Image',
            type: 'mainImage'
        },
        {
            name: 'content',
            title: 'Main Content',
            type: 'simpleBlockContent'
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'openGraph',
            description: 'Use this to set custom SEO meta-data for each page. Heads up! This will override site settings.'
        }
    ],
}