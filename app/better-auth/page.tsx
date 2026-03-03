import Navbar from "../components/navbar";
import BetterAuth from "../components/better-auth";

export default function BetterAuthPage() {
  return (
    <div className="min-h-screen bg-[#f5f2eb] text-[#0d0d0d]">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <section className="bg-white border border-[#d6d0c8] p-8 shadow-sm rounded-sm">
          <BetterAuth />
        </section>
      </main>
    </div>
  );
}