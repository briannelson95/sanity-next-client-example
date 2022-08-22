import Navbar from "../components/Navbar"
import { homepage } from "../lib/queries"
import { client } from "../lib/sanity"

export default function Home({ data }) {
  const pageData = data.pageData[0]
  // console.log(data.navigation[0].navigation[0].title)
  const navData = [
    {title: data.navigation[0].navigation[0].title}, 
    {title: data.navigation[0].navigation[1].title}, 
    {title: data.navigation[0].navigation[2].title}
  ]
  const nav = data.navigation[0]
  for (let i in nav) {
   console.log(i + ": "+ nav[i])
  }
  return (
    <main>
      <Navbar navigation={navData} />
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
