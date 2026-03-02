"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "About Us", withChevron: true },
  { label: "Properties", withChevron: true, href: "/demo2/properties" },
  { label: "Media Releases", withChevron: false },
  { label: "Investor Relations", withChevron: true },
  { label: "Environment, Social and Governance", withChevron: true },
  { label: "Careers", withChevron: false },
];

function ChevronDownIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 8 6"
      aria-hidden
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1.25L4 4.75L7 1.25"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 15 15"
      aria-hidden
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M10 10L13.5 13.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export default function Demo2Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);

  return (
    <div className="fixed left-0 right-0 top-0 z-50 bg-gradient-to-b from-black/55 to-transparent">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 py-4 md:px-8 lg:px-[60px]">
        <Link href="/demo2" className="relative block h-9 w-[157px] shrink-0">
          <Image
            src="/demo2/sjm-logo.png"
            alt="SJM Holdings"
            fill
            priority
            sizes="157px"
            className="object-contain object-left transition-opacity duration-300 hover:opacity-80"
          />
        </Link>

        {isSearchOpen ? (
          <>
            <div className="hidden flex-1 items-center justify-end text-white lg:flex">
              <div className="mr-4 flex h-10 items-center gap-2.5">
                <SearchIcon className="h-[14px] w-[14px] shrink-0" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="PLEASE INPUT KEYWORDS TO SEARCH"
                  className="w-[280px] bg-transparent text-[14px] leading-[19.2px] text-white outline-none placeholder:text-white/40"
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setIsSearchOpen(false);
                    if (e.key === "Enter" && e.currentTarget.value.trim()) {
                      window.location.href = `/demo2/search?q=${encodeURIComponent(e.currentTarget.value.trim())}`;
                    }
                  }}
                  onBlur={() => setIsSearchOpen(false)}
                />
              </div>
            </div>

            <div className="flex items-center text-white">
              <button
                type="button"
                className="flex items-center px-4 py-[17px] text-[14px] font-medium leading-5 text-white transition hover:text-[var(--demo-gold)]"
              >
                <span>中文</span>
                <ChevronDownIcon className="ml-1.5 h-[6px] w-[8px]" />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="hidden items-center lg:flex">
              {navItems.map((item) =>
                item.href ? (
                  <Link
                    href={item.href}
                    key={item.label}
                    className="group flex items-center px-4 py-[17px] text-[14px] font-medium leading-5 text-white transition hover:text-[var(--demo-gold)]"
                  >
                    <span>{item.label}</span>
                    {item.withChevron ? (
                      <ChevronDownIcon className="ml-1.5 h-[6px] w-[8px] opacity-90 transition group-hover:opacity-100" />
                    ) : null}
                  </Link>
                ) : (
                  <button
                    type="button"
                    key={item.label}
                    className="group flex items-center px-4 py-[17px] text-[14px] font-medium leading-5 text-white transition hover:text-[var(--demo-gold)]"
                  >
                    <span>{item.label}</span>
                    {item.withChevron ? (
                      <ChevronDownIcon className="ml-1.5 h-[6px] w-[8px] opacity-90 transition group-hover:opacity-100" />
                    ) : null}
                  </button>
                )
              )}
            </div>

            <div className="flex items-center text-white">
              <button
                type="button"
                className="hidden h-[27px] w-[39px] items-center justify-center text-white/90 transition hover:text-white lg:flex"
                aria-label="Search"
                onClick={() => {
                  setIsSearchOpen(true);
                  setTimeout(() => searchInputRef.current?.focus(), 50);
                }}
              >
                <SearchIcon className="h-[15px] w-[15px]" />
              </button>
              <button
                type="button"
                className="flex items-center px-4 py-[17px] text-[14px] font-medium leading-5 text-white transition hover:text-[var(--demo-gold)]"
              >
                <span>中文</span>
                <ChevronDownIcon className="ml-1.5 h-[6px] w-[8px]" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
