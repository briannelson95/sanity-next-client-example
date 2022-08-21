import { singleBlog } from "../../lib/queries"
import { client } from "../../lib/sanity"

export default function Blogs({ data }) {
    return(
        <main>
            {data.title}
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