import { useRouter } from "next/router";

function BlogPostsPage() {
    const router = useRouter()
    console.log(router.query)

    return (
    <>
      <h1>tHE BLOg PosTS</h1>
    </>
  );
}

export default BlogPostsPage;
