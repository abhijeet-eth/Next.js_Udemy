import Link from "next/link";

function ClientsPage() {
  const clients = [
    {
      id: "max",
      name: "Maximilian",
    },
    {
      id: "manu",
      name: "Manuel",
    },
    {
      id: "mama",
      name: "Mama Thakur",
    },
  ];
  return (
    <>
      <h1>The clients Page</h1>
      <ul>
        {/* <li>
          <Link href="/clients/max">Maximilian</Link>
        </li>
        <li>
          <Link href="/clients/manu">Manuel</Link>
        </li> */}

        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ClientsPage;
