import { homepage } from "../lib/queries"
import { client } from "../lib/sanity"

export default function Home({ data }) {
  const pageData = data[0]
  return (
    <main>
      <h1 className="text-2xl font-bold">{pageData.title}</h1>
    </main>
  )
}

export async function getStaticProps() {
  const data = await client.fetch(homepage)
  // console.log(data)

  return {
    props: {
      data
    }
  }
}
