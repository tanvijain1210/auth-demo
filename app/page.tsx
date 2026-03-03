import Navbar from "./components/navbar";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f5f2eb] text-[#0d0d0d]">
      <Navbar />

      <header className="border-b border-[#d6d0c8] px-6 py-20 text-center">
        <h1 className="text-5xl font-serif font-black mb-6">
          Authentication
        </h1>
        <p className="text-[#6b6560]">
          Learn how to configure Better Auth step by step.
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">

        <Link href="/better-auth">
          <div className="cursor-pointer border border-[#d6d0c8] bg-white p-10 hover:shadow-md transition">
            <h3 className="font-serif text-xl font-bold mb-2">
              Better Auth
            </h3>
            <p className="text-sm text-[#6b6560]">
              Configure credentials, providers, and session handling.
            </p>
          </div>
        </Link>

      </main>
    </div>
  );
}