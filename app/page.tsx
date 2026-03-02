import Navbar from "./components/navbar";

export default function Dashboard() {
 
    return(
      <div className="min-h-screen bg-zinc-50 dark:bg-black">
        <Navbar />
        <main className="mx-auto max-w-7xl px-6 py-8">
          <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
            Welcome to Dashboard
          </h2>
        </main>

        <article> An webpage  which made authentication easy. All the basics you need to make authentication valid</article>
      </div>
    )
}
