import Navbar from "../../components/Navbar";
import { blogPage } from "../../lib/queries"
import { client } from "../../lib/sanity"

export default function Blog({ data }) {
    const pageData = data.pageData[0];
    const blogs = data.allPosts;
    console.log(blogs)

    let navData = []
    const nav = data.navigation[0].navigation
    for (let i in nav) {
        navData.push({title: nav[i].title, href: nav[i].slug.current})
    }

    return(
        <main>
            <Navbar navigation={navData} />
            {pageData.title}
            <section>
                {blogs.map((item, index) => (
                    <div key={index}>{item.title}</div>
                ))}
            </section>
        </main>
    )
}

export async function getStaticProps() {
    const data = await client.fetch(blogPage)

    return {
        props: {
            data
        }
    }
}