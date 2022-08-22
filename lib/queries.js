export const homepage = `{
    "pageData": *[_type == "page" && title == "Homepage"],
    "navigation": *[_type == "siteSettings"]{
        
    }
}`

export const blogPage = `{
    "pageData": *[_type == "page" && title == "Blog Page"],
    "allPosts": *[_type == "post"] | order(_createdAt desc) {
        title,
        
    }
}`

export const singleBlog = `
    *[_type == "post" && slug.current == $slug][0]
`

export const contactPage = `{
    "pageData": *[_type == "page" && title == "Contact"],
    "contactInfo": *[_type == "siteSettings"] {
        email,
        phone
    }
}`