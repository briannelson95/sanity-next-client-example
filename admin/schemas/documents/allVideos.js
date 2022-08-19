export default {
    name: 'allVideos',
    title: 'All Videos',
    type: 'document',
    __experimental_actions: [
        /*"create", /*"delete",*/ "update", "publish"
    ],
    fields: [
        {
            name: 'videoList',
            title: 'Video List',
            type: 'video'
        },
    ],
}