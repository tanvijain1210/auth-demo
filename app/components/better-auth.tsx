export default function BetterAuth() {
  return (
    <div>
      <h2 className="font-serif text-2xl font-bold mb-10">
        Better Auth – Setup Overview
      </h2>

      <div className="grid md:grid-cols-2 gap-12 text-sm leading-relaxed">

        {/* FRONTEND COLUMN */}
        <div>
          <h3 className="font-serif text-lg font-bold mb-6 text-[#0d0d0d]">
            Frontend Steps
          </h3>

          <div className="space-y-8 text-[#6b6560]">

            <div>
              <h4 className="font-semibold text-[#0d0d0d] mb-2">
                Step 1: Create Navbar
              </h4>
              <p>
                Added navigation links (Home, Better Auth) to allow users
                to move between sections of the application.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#0d0d0d] mb-2">
                Step 2: Build Basic Home Layout
              </h4>
              <p>
                Designed the hero section and structured the homepage
                to prepare space for authentication-related content.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#0d0d0d] mb-2">
                Step 3: Create Route for Better Auth
              </h4>
              <p>
                Created <code className="bg-[#f5f2eb] px-1 rounded">app/better-auth/page.tsx</code>
                so the Better Auth setup has its own dedicated route.
              </p>
              <p className="mt-2">
                In Next.js App Router, folders define routes. Without this,
                the <strong>/better-auth</strong> URL would not exist.
              </p>
            </div>

          </div>
        </div>

        {/* BACKEND COLUMN */}
        <div>
          <h3 className="font-serif text-lg font-bold mb-6 text-[#0d0d0d]">
            Backend Steps
          </h3>

          <div className="space-y-8 text-[#6b6560]">

            <div>
              <h4 className="font-semibold text-[#0d0d0d] mb-2">
                Step 1: Install Better Auth
              </h4>
              <p>
                Installed the Better Auth package to manage authentication,
                user sessions, and OAuth integrations securely.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#0d0d0d] mb-2">
                Step 2: Create Configuration File
              </h4>

              <p>
                Created an authentication configuration file (e.g., <code className="bg-[#f5f2eb] px-1 rounded">auth.ts</code>)
                to define how authentication behaves in the system.
              </p>

              <p className="mt-2">
                This file specifies:
              </p>

              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Which credential method is enabled (email/password)</li>
                <li>Which social providers are active (Google, GitHub, etc.)</li>
                <li>Secret keys stored in environment variables</li>
                <li>Session strategy (JWT or database sessions)</li>
              </ul>

              <p className="mt-3">
                Without this configuration, Better Auth does not know
                how users should log in or how sessions should be managed.
              </p>

              <div className="bg-[#f5f2eb] p-4 rounded border text-xs font-mono mt-4">
{`// auth.ts

import { betterAuth } from "better-auth";

export const auth = betterAuth({
  secret: process.env.AUTH_SECRET,

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
});
`}
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* STATUS NOTE */}
      <div className="mt-16 p-6 border border-[#d6d0c8] bg-[#f5f2eb] text-sm text-[#6b6560]">
        <strong className="text-[#0d0d0d]">Current Status:</strong>
        <p className="mt-2">
          Authentication UI and configuration setup are complete.
          Frontend is not yet connected to backend auth endpoints,
          and real login/signup flow is not implemented yet.
        </p>
      </div>

    </div>
  );
}