// page.js is required to render any page to public

// getData replaces the getStaticProps
// getStaticProps is no longer supported
// for data that needs to be revalidated { next: { revalidate: 10 } }
// for dynamic data that needs to be fresh on every fetch  { cache: 'no-store' }
async function getData() {
    const res = await fetch('https://vvys9c1a.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22page%22%20%26%26%20title%20%3D%3D%20%22Homepage%22%5D%5B0%5D', { next: { revalidate: 3600 } })
    console.log(res)
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