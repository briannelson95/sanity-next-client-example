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
    ],
}