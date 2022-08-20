export default {
    widgets: [
        {
            name: 'project-info',
            layout: {
                width: 'small',
                height: 'small'
            }
        },
        {
            name: 'document-list',
            options: {
                title: 'Last Edited Post',
                order: '_updatedAt desc',
                types: ['post']
            },
            layout: {
                width: 'medium',
                height: 'small'
            }
        }
    ]
}