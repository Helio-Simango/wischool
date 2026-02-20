"use client"

import { useState } from "react"
import { Search, Menu, X, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { WischoolLogo } from "@/components/landing/wischool-logo"
import { Button } from "@/components/ui/wischool-button"
import type { NavLink } from "@/types/landing"

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Instuctors", href: "#instructors" },
  { label: "Schedules", href: "#schedules" },
  { label: "Contact Us", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-background"
      role="banner"
    >
      {/* Desktop Navbar */}
      <nav
        className="mx-auto hidden h-25 max-w-360 items-center justify-between px-6 lg:flex lg:px-25"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <WischoolLogo />

        {/* Nav Links Container - width: 545, gap: 24 */}
        <ul
          className="flex items-center"
          role="list"
          style={{ gap: "24px" }}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-sans text-[16px] font-semibold text-foreground transition-colors hover:text-primary"
                style={{
                  lineHeight: "48px",
                  letterSpacing: "-2%",
                  textAlign: "center",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:text-primary"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>

          {/* Login Button - w:75 h:36 rounded:3px px:18 py:8 */}
          <a
            href="#login"
            className="inline-flex items-center justify-center font-sans text-[16px] font-semibold text-primary transition-colors hover:text-primary/80"
            style={{
              height: "36px",
              borderRadius: "3px",
              paddingTop: "8px",
              paddingBottom: "8px",
              paddingLeft: "18px",
              paddingRight: "18px",
              lineHeight: "48px",
              letterSpacing: "-2%",
            }}
          >
            Login
          </a>

          {/* Register Button - w:104 h:44 rounded:5px px:24 py:12 */}
          <Button
            variant="primary"
            className="font-sans text-[16px] font-semibold"
            style={{
              height: "44px",
              borderRadius: "5px",
              paddingTop: "12px",
              paddingBottom: "12px",
              paddingLeft: "24px",
              paddingRight: "24px",
              lineHeight: "48px",
              letterSpacing: "-2%",
            }}
          >
            Register
          </Button>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className="flex h-15 items-center justify-between px-4 lg:hidden"
        aria-label="Mobile navigation"
      >
        {/* Hamburger / Close */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Centered Logo */}
        <WischoolLogo />

        {/* User Icon */}
        <a
          href="#login"
          className="flex h-10 w-10 items-center justify-center text-foreground"
          aria-label="User account"
        >
          <User className="h-6 w-6" />
        </a>
      </nav>

      {/* Mobile Nav Overlay */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out lg:hidden",
          mobileOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="border-t border-border bg-background px-4 pb-6 pt-4">
          <ul className="flex flex-col gap-4" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block font-sans text-[16px] font-semibold text-foreground transition-colors hover:text-primary"
                  style={{ lineHeight: "48px", letterSpacing: "-2%" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href="#login"
              className="text-center font-sans text-[16px] font-semibold text-primary"
            >
              Login
            </a>
            <Button
              variant="primary"
              className="w-full font-sans text-[16px] font-semibold"
              style={{
                height: "44px",
                borderRadius: "5px",
                paddingTop: "12px",
                paddingBottom: "12px",
                paddingLeft: "24px",
                paddingRight: "24px",
              }}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}