import { useRouter } from "next/router";

function ClientProjectPage() {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    router.push("/clients/max/projecta");
  }

  return (
    <>
      <h1>The project of a given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </>
  );
}

export default ClientProjectPage;
