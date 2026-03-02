import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 selection:bg-indigo-100 dark:selection:bg-indigo-900/30">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-zinc-950 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-400 opacity-20 blur-[100px]"></div>
      </div>

      <Navbar />

      <main className="mx-auto max-w-5xl px-6 pt-24 pb-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 px-3 py-1 text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-8">
          <span>✨ Authentication made simple</span>
        </div>

        {/* Hero Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-6">
          The Ultimate <span className="text-indigo-600 dark:text-indigo-400">Auth Demo</span>
        </h1>

        {/* Description */}
        <p className="mx-auto max-w-2xl text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10">
          A webpage built to make authentication easy and accessible. 
          Everything you need to understand, implement, and validate 
          modern security flows in your next project.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="rounded-xl bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-500 hover:scale-105 active:scale-95">
            Get Started
          </button>
          <button className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent px-8 py-4 text-sm font-semibold text-zinc-900 dark:text-white transition-all hover:bg-zinc-50 dark:hover:bg-zinc-900">
            View Documentation
          </button>
        </div>

        {/* Featured Snippet (Article) */}
        <div className="mt-24 grid gap-8 md:grid-cols-3">
          {[
            { title: "Secure", desc: "Industry standard encryption." },
            { title: "Fast", desc: "Optimized for Next.js 15." },
            { title: "Simple", desc: "Built with Better-Auth." }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm text-left">
              <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}