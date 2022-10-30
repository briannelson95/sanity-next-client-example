import Navbar from "../components/Navbar";
import { allPages } from "../lib/queries";
import { client } from "../lib/sanity";

export default function Page({ data }) {
    const pageData = data.pageData;

    let navData = []
    const nav = data.navigation[0].navigation
    for (let i in nav) {
        navData.push({title: nav[i].title, href: `../${nav[i].slug.current}`})
    }

    return(
        <main>
            <Navbar navigation={navData} />
            <h1 className="text-2xl font-bold">{pageData.title}</h1>
        </main>
    )
}

export const getServerSideProps = async function (context) {
    const { slug = "" } = context.query
    const data = await client.fetch(allPages, { slug })

    return {
        props: {
            data
        }
    }
}