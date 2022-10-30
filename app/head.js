// this replaces next/head component
async function getPost(slug) {
    const res = await fetch('...');
    return res.json();
  }
  
  export default async function Head({ params }) {
    const post = await getPost(params.slug);
  
    return (
      <>
        <title>{post.title}</title>
      </>
    )
  }