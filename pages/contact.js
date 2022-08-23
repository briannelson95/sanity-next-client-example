import Navbar from "../components/Navbar";
import { contactPage } from "../lib/queries"
import { client } from "../lib/sanity"

export default function Page({ data }) {
    const pageData = data.pageData[0];
    const contactInfo = data.contactInfo[0]

    let navData = []
    const nav = data.navigation[0].navigation
    for (let i in nav) {
        navData.push({title: nav[i].title, href: nav[i].slug.current})
    }

    return(
        <main>
            <Navbar navigation={navData} />
            <h1 className="text-2xl font-bold">{pageData.title}</h1> <br />
            {contactInfo.email} <br />
            {contactInfo.phone} <br />
        </main>
    )
}

export async function getStaticProps() {
    const data = await client.fetch(contactPage)

    return {
        props: {
            data
        }
    }
}