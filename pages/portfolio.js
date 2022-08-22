import Navbar from "../components/Navbar";
import { portfolioPage } from "../lib/queries"
import { client } from "../lib/sanity"

export default function Page({ data }) {
    const pageData = data.pageData[0];

    let navData = []
    const nav = data.navigation[0].navigation
    for (let i in nav) {
        navData.push({title: nav[i].title, href: nav[i].slug.current})
    }

    return(
        <main>
            <Navbar navigation={navData} />
            {pageData.title}
        </main>
    )
}

export async function getStaticProps() {
    const data = await client.fetch(portfolioPage)

    return {
        props: {
            data
        }
    }
}