export default function BetterAuth() {
  return (
    <div className="w-full">

      {/* HEADER */}
      <div className="mb-16">
        <h1 className="font-serif text-4xl md:text-5xl font-black mb-4">
          Better Auth Setup
        </h1>
        <p className="text-[#6b6560] max-w-3xl">
          Step-by-step breakdown of how authentication is structured
          across the frontend and backend layers of the application.
        </p>
      </div>

      {/* CONTENT GRID */}
      <div className="grid lg:grid-cols-2 gap-20">

        {/* FRONTEND SECTION */}
        <div>
          <h2 className="text-2xl font-serif font-bold mb-8 border-b border-[#d6d0c8] pb-3">
            Frontend
          </h2>

          <div className="space-y-12 text-[#6b6560] text-sm leading-relaxed">

            <div>
              <p className="uppercase text-xs tracking-widest text-[#c9490b] mb-2">
                Step 1
              </p>
              <h3 className="text-lg font-semibold text-[#0d0d0d] mb-2">
                Create Navbar
              </h3>
              <p>
                Added navigation links for Home and Better Auth to allow
                structured routing between sections.
              </p>
            </div>

            <div>
              <p className="uppercase text-xs tracking-widest text-[#c9490b] mb-2">
                Step 2
              </p>
              <h3 className="text-lg font-semibold text-[#0d0d0d] mb-2">
                Build Home Layout
              </h3>
              <p>
                Designed the homepage structure with hero and content sections
                to prepare space for authentication-related flows.
              </p>
            </div>

            <div>
              <p className="uppercase text-xs tracking-widest text-[#c9490b] mb-2">
                Step 3
              </p>
              <h3 className="text-lg font-semibold text-[#0d0d0d] mb-2">
                Create Dedicated Route
              </h3>
              <p>
                Created <code className="bg-[#f5f2eb] px-2 py-1 rounded">app/better-auth/page.tsx</code>
                to expose the configuration page at <strong>/better-auth</strong>.
              </p>
              <p className="mt-2">
                In the App Router, folders define URLs. No folder means no route.
              </p>
            </div>

          </div>
        </div>

        {/* BACKEND SECTION */}
        <div>
          <h2 className="text-2xl font-serif font-bold mb-8 border-b border-[#d6d0c8] pb-3">
            Backend
          </h2>

          <div className="space-y-12 text-[#6b6560] text-sm leading-relaxed">

            <div>
              <p className="uppercase text-xs tracking-widest text-[#c9490b] mb-2">
                Step 1
              </p>
              <h3 className="text-lg font-semibold text-[#0d0d0d] mb-2">
                Install Better Auth & Configure Environment
              </h3>
              <p>
                Installed the authentication library and defined required
                environment variables in <code className="bg-[#f5f2eb] px-2 py-1 rounded">.env</code>.
              </p>

              <div className="bg-[#f5f2eb] p-6 rounded border mt-4 text-xs font-mono">
{`BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=your-super-secret-key

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret`}
              </div>

              <p className="mt-4">
                These variables define the base URL, session signing secret,
                and OAuth provider credentials.
              </p>
            </div>

            <div>
              <p className="uppercase text-xs tracking-widest text-[#c9490b] mb-2">
                Step 2
              </p>
              <h3 className="text-lg font-semibold text-[#0d0d0d] mb-2">
                Create Authentication Configuration File
              </h3>

              <p>
                Created <code className="bg-[#f5f2eb] px-2 py-1 rounded">auth.ts</code>
                to define how authentication behaves.
              </p>

              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Enable email/password login</li>
                <li>Enable selected social providers</li>
                <li>Attach environment secrets</li>
                <li>Define session strategy (JWT or database)</li>
              </ul>

              <div className="bg-[#f5f2eb] p-6 rounded border mt-6 text-xs font-mono">
{`import { betterAuth } from "better-auth";

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },

  session: {
    strategy: "jwt",
  }
});`}
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* STATUS */}
      <div className="mt-24 border-t border-[#d6d0c8] pt-10 text-sm text-[#6b6560]">
        <strong className="text-[#0d0d0d]">Current Status:</strong>
        <p className="mt-3">
          UI structure and authentication configuration are complete.
          Frontend is not yet connected to backend auth endpoints,
          and login/signup flow has not been implemented.
        </p>
      </div>

    </div>
  );
}