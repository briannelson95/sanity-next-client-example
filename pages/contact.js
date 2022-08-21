import { contactPage } from "../lib/queries"
import { client } from "../lib/sanity"

export default function Page({ data }) {
    const pageData = data.pageData[0];
    const contactInfo = data.contactInfo[0]
    return(
        <main>
            {pageData.title} <br />
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