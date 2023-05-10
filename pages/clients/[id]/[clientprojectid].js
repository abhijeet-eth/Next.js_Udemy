import { useRouter } from "next/router";

function SelectedClientProjectPage() {
    const router = useRouter()
    console.log(router.query)
    return (
    <>
      <h1>The project page for a Specific Project for a Selected Client</h1>
    </>
  );
}

export default SelectedClientProjectPage;
