export default {
    name: 'portfolio',
    title: 'Portfolio',
    type: 'document',
    __experimental_actions:[
        /*"create", /*"delete",*/ "update", "publish"
    ],
    fields: [
        {
            name: 'publishOnce',
            type: 'boolean',
            hidden: true
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            // readOnly: ({ document }) => !document?.publishedOnce,
            description: "Do not change this title."
        },
        {
            name: 'allVideos',
            title: 'All Videos',
            type: 'video',
            description: 'This is where you add YouTube links to your videos. You can drag and drop to rearrange the order. '
        }
    ],
}