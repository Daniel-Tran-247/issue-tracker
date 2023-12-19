import Pagination from "./components/Pagination";

export default function Home({searchParams}: {searchParams: { page: string}}) {
  const page = parseInt(searchParams.page);

  return (
    <main>
      <h1 className="font-bold text-2xl">Hello world</h1>
      <Pagination itemCount={100} pageSize={10} currentPage={page} />
    </main>
  )
}
