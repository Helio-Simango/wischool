"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { ChevronDown } from "lucide-react"
import type { SortOption } from "@/types/landing"

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "name", label: "Name (A-Z)" },
  { value: "price", label: "Price" },
  { value: "students", label: "Students" },
]

type SortDropdownProps = {
  value: SortOption
  onChange: (value: SortOption) => void
}

export function SortDropdown({ value, onChange }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [handleClickOutside])

  const handleSelect = useCallback(
    (option: SortOption) => {
      onChange(option)
      setIsOpen(false)
    },
    [onChange]
  )

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
        Sort by
      </button>

      {isOpen && (
        <ul
          role="listbox"
          className="absolute right-0 top-full z-30 mt-2 w-44 overflow-hidden rounded-xl border border-border bg-card shadow-lg"
        >
          {SORT_OPTIONS.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                role="option"
                aria-selected={value === option.value}
                onClick={() => handleSelect(option.value)}
                className={`flex w-full items-center px-4 py-2.5 text-left text-sm transition-colors hover:bg-primary-light ${
                  value === option.value
                    ? "font-semibold text-primary"
                    : "text-card-foreground"
                }`}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
