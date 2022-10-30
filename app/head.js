// this replaces next/head component

// fetches the data to use in the Head
async function getPost(slug) {
  // const res = await fetch('...');
  // return res.json();
}

// the component itself
export default async function Head({ params }) {
  // const post = await getPost(params.slug);

  return (
    <>
      {/* <title>{post.title}</title> */}
    </>
  )
}