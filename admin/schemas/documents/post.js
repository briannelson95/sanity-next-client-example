import { HiOutlinePencilAlt } from "react-icons/hi";

export default {
    name: "post",
    title: "Posts",
    icon: HiOutlinePencilAlt,
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            validation: Rule => Rule.required(),
            options: {
                source: "title",
                maxLength: 96
            }
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        },
        {
            name: "excerpt",
            description:
                "Write a short pararaph of this post (For SEO Purposes)",
            title: "Excerpt",
            rows: 5,
            type: "text",
            validation: Rule =>
                Rule.max(160).error(
                "SEO descriptions are usually better when its below 160"
            )
        },
        {
            name: "body",
            title: "Body",
            type: "blockContent",
        },
        {
            name: "mainImage",
            title: "Main image",
            type: "image",
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alternative text",
                    description: "Important for SEO and accessiblity.",
                    options: {
                        isHighlighted: true
                    }
                }
            ],
            options: {
                hotspot: true
            }
        },
    ],

    preview: {
        select: {
            title: "title",
            media: "mainImage"
        },
    }
};