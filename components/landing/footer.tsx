"use client"
import Link from "next/link"

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const FOOTER_COLUMNS = [
  {
    links: [
      { label: "Home", href: "#home" },
      { label: "Services", href: "#services" },
      { label: "Training", href: "#training" },
      { label: "Resources", href: "#resources" },
      { label: "About Us", href: "#about" },
    ],
  },
  {
    links: [
      { label: "SME", href: "#sme" },
      { label: "Solution", href: "#solution" },
      { label: "Reviews", href: "#reviews" },
      { label: "Blog", href: "#blog" },
    ],
  },
  {
    links: [
      { label: "Contact Us", href: "#contact" },
      { label: "Place A Call", href: "#call" },
      { label: "Email", href: "#email" },
      { label: "Wischool@Gmail.Com", href: "mailto:wischool@gmail.com" },
    ],
  },
  {
    links: [
      { label: "Job Opening", href: "#jobs" },
      { label: "News", href: "#news" },
      { label: "Research", href: "#research" },
    ],
  },
  {
    links: [
      { label: "Uk Privacy Policy", href: "#privacy" },
      { label: "Terms Of Use", href: "#terms" },
    ],
  },
]

const SOCIAL_LINKS = [
  { icon: Facebook, href: "#facebook", label: "Facebook" },
  { icon: Twitter, href: "#twitter", label: "Twitter" },
  { icon: Instagram, href: "#instagram", label: "Instagram" },
  { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white" role="contentinfo">
      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="hidden lg:block">
        <div className="mx-auto max-w-[1240px] px-4 pt-16 pb-12 md:px-6 lg:px-8">
          {/* Top Row: Brand + Nav Columns */}
          <div className="flex gap-12">
            {/* Brand Column */}
            <div className="w-[240px] shrink-0">
              {/* WiSchool text */}
              <FooterLogo />

              {/* Tagline */}
              <p className="mt-4 font-sans text-sm leading-relaxed text-white/70">
                we are not here to sell you products, we sell value through our expertise.
              </p>

              {/* Social Icons */}
              <div className="mt-6 flex items-center gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex h-8 w-8 items-center justify-center text-primary transition-colors hover:text-primary/80"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Nav Columns */}
            <div className="flex flex-1 justify-between">
              {FOOTER_COLUMNS.map((column, colIdx) => (
                <ul key={colIdx} className="flex flex-col gap-3" role="list">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="font-sans text-[14px] capitalize leading-[25px] text-white/80 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Subscribe Row */}
          <div className="mt-14 flex flex-col items-center">
            <h3 className="font-poppins text-[24px] font-semibold leading-[100%] text-white">
              Subscribe to get latest updates
            </h3>

            <form
              className="mt-6 flex w-full max-w-[520px] items-center overflow-hidden rounded-lg bg-white"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your Email address"
                className="flex-1 bg-transparent px-5 py-3 text-sm text-primary placeholder:text-primary/60 outline-none"
                aria-label="Your email address"
              />
              <button
                type="submit"
                className="shrink-0 bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ===== MOBILE/TABLET LAYOUT ===== */}
      <div className="block lg:hidden">
        <div className="mx-auto max-w-[1240px] px-6 pt-12 pb-10">
          {/* Subscribe First on Mobile */}
          <div className="mb-10">
            <h3 className="font-poppins text-[20px] font-semibold leading-[100%] text-white sm:text-[24px]">
              Subscribe to get latest updates
            </h3>

            <form
              className="mt-4 flex w-full items-center overflow-hidden rounded-lg bg-white"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your Email address"
                className="flex-1 bg-transparent px-4 py-3 text-sm text-primary placeholder:text-primary/60 outline-none"
                aria-label="Your email address"
              />
              <button
                type="submit"
                className="shrink-0 bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Nav Links in 3-column Grid */}
          <div className="grid grid-cols-3 gap-x-4 gap-y-3">
            {FOOTER_COLUMNS.slice(0, 3).map((column, colIdx) => (
              <ul key={colIdx} className="flex flex-col gap-3" role="list">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-sans text-[14px] capitalize leading-[25px] text-white/80 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          {/* Brand + Social at Bottom */}
          <div className="mt-10">
            <FooterLogo />

            <div className="mt-4 flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center text-primary transition-colors hover:text-primary/80"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* WiSchool logo for the footer - white variant using Source Sans (font-heading) */
function FooterLogo() {
  return (
    <Link
      href="/"
      className="inline-flex items-baseline gap-0 font-heading"
      aria-label="WiSchool - Home"
    >
      <span className="text-[32.8px] font-semibold leading-[100%] text-white">
        {"WiSchool"}
      </span>
    </Link>
  )
}