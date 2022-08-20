import { homepage } from "../lib/queries"
import { client } from "../lib/sanity"

export default function Home({ data }) {
  console.log(data)
  return (
    <>
      <h1 className="text-2xl font-bold">{data.title}</h1>
      Hello world
    </>
  )
}

export async function getStaticProps() {
  const data = await client.fetch(homepage)

  return {
    props: {
      data
    }
  }
}
