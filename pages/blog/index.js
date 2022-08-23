import Navbar from "../../components/Navbar";
import { blogPage } from "../../lib/queries"
import { client } from "../../lib/sanity";
import Image from "next/future/image";
import { urlFor } from "../../lib/modules";
import Link from "next/link";


export default function Blog({ data }) {
    const pageData = data.pageData[0];
    const blogs = data.allPosts;
    console.log(blogs)

    let navData = []
    const nav = data.navigation[0].navigation
    for (let i in nav) {
        navData.push({title: nav[i].title, href: nav[i].slug.current})
    }

    return(
        <main>
            <Navbar navigation={navData} />
            <h1 className="text-2xl font-bold">{pageData.title}</h1>
            <section>
                {blogs.map((item, index) => (
                    <Link key={index} href={`blog/${item.slug.current}`}>
                        <div className="border">
                            <Image src={urlFor(item.mainImage).url()} alt={item.mainImage.alt} width={160} height={90} />
                            {item.title}
                        </div>  
                    </Link>
                ))}
            </section>
        </main>
    )
}

export async function getStaticProps() {
    const data = await client.fetch(blogPage)

    return {
        props: {
            data
        }
    }
}