// page.js is required to render any page to public

// getData replaces the getStaticProps
// getStaticProps is no longer supported
// for data that needs to be revalidated { next: { revalidate: 10 } }
// for dynamic data that needs to be fresh on every fetch  { cache: 'no-store' }
async function getData() {
    const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/${process.envNEXT_PUBLIC_SANITY_DATASET}/?query=*[0]`, { next: { revalidate: 3600 } })

    return res.json()
}

// we can call as many get/fetch functions as we want
async function getSpecificData() {
    const res = await fetch('https://api.example.com/...', { cache: 'no-store' })

    return res.json()
}

export default async function Page() {
    // this is where we call the data fetch
    console.log(getData())


    return <h1>Hello world</h1>;
}