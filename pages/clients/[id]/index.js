import { useRouter } from "next/router";

function ClientProjectPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <h1>The project of a given Client</h1>
    </>
  );
}

export default ClientProjectPage;
