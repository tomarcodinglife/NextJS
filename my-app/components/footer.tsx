"use client";

import Link from "next/link";
// ─── Inline SVG Social Icons ──────────────────────────────────────────────────

const TwitterSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GithubSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const YoutubeSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const FOOTER_LINKS = [
  {
    heading: "Products",
    links: [
      { label: "Analytics", href: "/products/analytics" },
      { label: "Automation", href: "/products/automation" },
      { label: "Integrations", href: "/products/integrations" },
      { label: "Security", href: "/products/security" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "For Startups", href: "/solutions/startups" },
      { label: "For Enterprise", href: "/solutions/enterprise" },
      { label: "For Agencies", href: "/solutions/agencies" },
      { label: "For Developers", href: "/solutions/developers" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Press Kit", href: "/press" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Licenses", href: "/licenses" },
    ],
  },
];

const SOCIAL_LINKS = [
  { icon: TwitterSVG, href: "https://twitter.com", label: "Twitter" },
  { icon: GithubSVG, href: "https://github.com", label: "GitHub" },
  { icon: LinkedinSVG, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: YoutubeSVG, href: "https://youtube.com", label: "YouTube" },
];

// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-neutral-950">
      {/* Top glow line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Top section: Brand + Links */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          {/* Brand col */}
          <div className="col-span-2">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500 text-white font-bold text-sm">
                C
              </div>
              <span className="text-sm font-bold text-white">Cyser</span>
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-neutral-400 max-w-xs">
              Build beautiful products faster. Trusted by thousands of teams
              worldwide.
            </p>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                Stay updated
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-300 placeholder-neutral-600 outline-none focus:border-sky-500/60 focus:ring-1 focus:ring-sky-500/30 transition"
                />
                <button className="flex-shrink-0 rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-400 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/5" />

        {/* Bottom: copyright + socials */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} Cyser. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-neutral-400 hover:border-sky-500/40 hover:text-sky-400 transition-all"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}