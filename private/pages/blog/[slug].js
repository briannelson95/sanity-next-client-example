import Navbar from "../../components/Navbar";
import { singleBlog } from "../../lib/queries"
import { client } from "../../lib/sanity"

export default function Blogs({ data }) {
    const pageData = data.pageData;

    let navData = []
    const nav = data.navigation[0].navigation
    for (let i in nav) {
        navData.push({title: nav[i].title, href: `../${nav[i].slug.current}`})
    }

    return(
        <main>
            <Navbar navigation={navData} />
            {pageData.title}
        </main>
    )
}

export const getServerSideProps = async function (context) {
    const { slug = "" } = context.query
    const data = await client.fetch(singleBlog, { slug })

    return {
        props: {
            data
        }
    }
}