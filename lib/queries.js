export const homepage = `{
    "pageData": *[_type == "page" && title == "Homepage"],
    "navigation": *[_type == "siteSettings"]{
        navigation[]->{
            title,
            slug
        }
    }
}`

export const blogPage = `{
    "pageData": *[_type == "page" && title == "Blog Page"],
    "allPosts": *[_type == "post"] | order(_createdAt desc) {
        title,
        mainImage,
        excerpt,
        slug
    },
    "navigation": *[_type == "siteSettings"]{
        navigation[]->{
            title,
            slug
        }
    }
}`

export const singleBlog = `{
    "pageData": *[_type == "post" && slug.current == $slug][0],
    "navigation": *[_type == "siteSettings"]{
        navigation[]->{
            title,
            slug
        }
    }
}`

export const contactPage = `{
    "pageData": *[_type == "page" && title == "Contact"],
    "contactInfo": *[_type == "siteSettings"] {
        email,
        phone
    },
    "navigation": *[_type == "siteSettings"]{
        navigation[]->{
            title,
            slug
        }
    }
}`

export const portfolioPage = `{
    "pageData": *[_type == "page" && title == "Portfolio"],
    "navigation": *[_type == "siteSettings"]{
        navigation[]->{
            title,
            slug
        }
    }
}`