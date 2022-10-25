import Navbar from "../components/Navbar"
import { homepage } from "../lib/queries"
import { client } from "../lib/sanity"

export default function Home({ data }) {
  // const pageData = data.pageData[0]
  // console.log(data.navigation[0].navigation[0].title)
  
  // let navData = []
  // const nav = data.navigation[0].navigation
  // for (let i in nav) {
  //   navData.push({title: nav[i].title, href: nav[i].slug.current})
  // }

  return (
    <main>
      {/* <Navbar navigation={navData} /> */}
      <h1 className="text-2xl font-bold">Ross Rings</h1>
    </main>
  )
}

export async function getServerSideProps() {
  const data = await client.fetch(homepage)
  // console.log(data)

  return {
    props: {
      data
    }
  }
}
