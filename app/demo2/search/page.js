"use client";

import { useState } from "react";
import Image from "next/image";
import Demo2Header from "../Header";

const searchResults = [
  {
    date: "24 Feb 2026",
    category: "Financial Reports",
    title:
      "Monthly Return of Equity Issuer on Movements in Securities for the Month Ended 31/01/2026",
  },
  {
    date: "24 Feb 2026",
    category: "Financial Reports",
    title:
      "Settlement of Offer to Purchase for Cash any and all of the Outstanding 4.500% Senior Notes Due 2026",
  },
  {
    date: "24 Feb 2026",
    category: "Announcements, Notices & Returns",
    title:
      "Publication of Offering Memorandum - SJM International Limited - USD540,000,000 6.500% Senior Notes Due 2031",
  },
  {
    date: "24 Feb 2026",
    category: "Financial Reports",
    title:
      "Notice of Listing on The Stock Exchange of Hong Kong Limited - SJM International Limited - USD540,000,000 6.500% Senior Notes Due 2031",
  },
  {
    date: "24 Feb 2026",
    category: "Announcements, Notices & Returns",
    title:
      "Closing of the Issuance of USD540,000,000 6.500% Senior Notes Due 2031",
  },
  {
    date: "24 Feb 2026",
    category: "Financial Reports",
    title:
      "Results of Offer to Purchase for Cash any and all of the Outstanding 4.500% Senior Notes Due 2026",
  },
  {
    date: "24 Feb 2026",
    category: "CSR Events",
    title:
      "Issuance of USD540,000,000 6.500% Senior Notes Due 2031 and Disclosure Pursuant to Rule 13.18 of the Listing Rules & Exempted Connected Transaction in relation to the Partial Subscription of the Notes by a Connected Person",
  },
  {
    date: "24 Feb 2026",
    category: "Announcements, Notices & Returns",
    title:
      "Monthly Return of Equity Issuer on Movements in Securities for the Month Ended 31/12/2025",
  },
  {
    date: "24 Feb 2026",
    category: "Financial Reports",
    title:
      "Commencement of Offer to Purchase for Cash any and all of the Outstanding 4.500% Senior Notes Due 2026",
  },
  {
    date: "24 Feb 2026",
    category: "CSR Events",
    title:
      "Inside Information Proposed Issuance of U.S. Dollar Denominated Senior Notes",
  },
];

const filterCategories = [
  { name: "All", count: 59 },
  { name: "Financial Reports", count: 24 },
  { name: "Announcements, Notices & Returns", count: 16 },
  { name: "CSR Events", count: 19 },
];

const brandLogos = [
  { src: "/demo2/logo-glp.png", alt: "Grand Lisboa Palace" },
  { src: "/demo2/logo-gl.png", alt: "Grand Lisboa" },
  { src: "/demo2/logo-hl.png", alt: "Hotel Lisboa" },
  { src: "/demo2/logo-ja.png", alt: "Jai Alai Oceanus" },
  { src: "/demo2/logo-larc.png", alt: "Lisboa Arcade" },
  { src: "/demo2/logo-p16.png", alt: "Ponte 16" },
  { src: "/demo2/logo-km.png", alt: "Kam Pek Market" },
];

function ChevronLeftIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path
        d="M10 3L5.5 8L10 13"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path
        d="M6 3L10.5 8L6 13"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FilterArrowIcon({ className = "" }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M5.25 3.5L8.75 7L5.25 10.5"
        stroke="currentColor"
        strokeWidth="1.17"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Demo2SearchPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyword] = useState("Awards");
  const [activeFilter, setActiveFilter] = useState("All");
  const totalPages = 5;

  return (
    <main className="min-h-screen bg-[#f7f6f0] font-sans text-[#231f20]">
      <Demo2Header />

      <section className="bg-[#f7f6f0]">
        <div className="relative h-[240px] w-full md:h-[380px] lg:h-[575px]">
          <Image
            src="/demo2/search-hero.png"
            alt="SJM Holdings"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="relative z-10 -mt-[70px] px-4 md:px-8 lg:px-[40px]">
          <div className="bg-white px-4 py-10 md:px-8 lg:px-[60px] lg:py-[40px]">
            <h1 className="font-petrona text-[36px] font-extralight leading-[1.128em] tracking-[-0.047em] text-black md:text-[48px]">
              Search Results
            </h1>

            <div className="mt-[32px] flex h-[48px] max-w-[700px] items-stretch gap-[16px]">
              <div className="flex flex-1 items-center border border-[#001625]">
                <input
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="h-full w-full bg-transparent px-[24px] text-[14px] leading-[1.29em] text-[#231f20] outline-none placeholder:text-[#8e9590]"
                  placeholder="Enter keywords..."
                />
              </div>
              <button
                type="button"
                className="border border-[#001625] px-[24px] text-[14.3px] font-medium leading-[1.4em] text-[#001625] transition hover:bg-[#001625] hover:text-white"
              >
                SEARCH
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f6f0]">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-10 md:px-8 lg:px-[100px] lg:py-[40px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-[40px]">
            <div className="flex flex-1 flex-col gap-[40px]">
              <div className="flex flex-col">
                {searchResults.map((item, idx) => (
                  <div key={`${item.title.slice(0, 30)}-${idx}`}>
                    <div className="flex w-full flex-col gap-[8px] rounded-[2px] py-[10px]">
                      <div className="flex items-center gap-[8px]">
                        <span className="text-[13.1px] font-semibold uppercase leading-[1.22em] tracking-[0.021em] text-[#001625]">
                          {item.date}
                        </span>
                        <span className="text-[13.1px] uppercase leading-[1.22em] tracking-[0.021em] text-[#001625]">
                          /
                        </span>
                        <span className="text-[13.1px] uppercase leading-[1.22em] tracking-[0.021em] text-[#001625]">
                          {item.category}
                        </span>
                      </div>
                      <p className="font-petrona text-[20px] font-extralight leading-[1.4em] text-[#141414]">
                        {item.title}
                      </p>
                    </div>
                    {idx < searchResults.length - 1 && (
                      <div className="my-[10px] h-px bg-[rgba(35,31,32,0.06)]" />
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-[4px]">
                <button
                  type="button"
                  className="flex h-[40px] w-[40px] items-center justify-center text-[#8e9590] transition hover:text-[#001625]"
                  aria-label="Previous page"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                >
                  <ChevronLeftIcon className="h-4 w-4" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      type="button"
                      className={`flex h-[40px] w-[40px] items-center justify-center text-[14px] uppercase leading-[1.5em] tracking-[0.064em] transition ${
                        page === currentPage
                          ? "border border-[#001625] text-[#001625]"
                          : "text-[#8e9590] hover:text-[#001625]"
                      }`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  ),
                )}

                <button
                  type="button"
                  className="flex h-[40px] w-[40px] items-center justify-center text-[#8e9590] transition hover:text-[#001625]"
                  aria-label="Next page"
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                >
                  <ChevronRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="w-full lg:w-[380px] lg:shrink-0">
              <div className="border border-[rgba(35,31,32,0.08)] p-[24px]">
                <p className="text-[14px] uppercase leading-[1.5em] tracking-[0.225em] text-[#a8996e]">
                  FILTER
                </p>

                <div className="mt-[20px] flex flex-col gap-[16px]">
                  {filterCategories.map((cat, idx) => (
                    <div key={cat.name}>
                      {idx > 0 && (
                        <div className="mb-[16px] h-px bg-[rgba(35,31,32,0.06)]" />
                      )}
                      <button
                        type="button"
                        className="flex w-full items-center gap-[8px] transition"
                        onClick={() => setActiveFilter(cat.name)}
                      >
                        <span
                          className={`flex-1 text-left text-[14px] leading-[1.29em] transition ${
                            activeFilter === cat.name
                              ? "font-medium text-[#231f20]"
                              : "text-[#231f20] hover:opacity-70"
                          }`}
                        >
                          {cat.name}
                        </span>
                        <span className="text-[14px] font-medium leading-[1.29em] text-[#8e9590]">
                          {cat.count}
                        </span>
                        <FilterArrowIcon className="h-[14px] w-[14px] shrink-0 text-[rgba(35,31,32,0.2)]" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#001e1e] text-white">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center gap-[32px] px-4 py-10 md:px-8 lg:px-[100px] lg:py-[40px]">
          <div className="flex w-full flex-col items-center gap-6 lg:flex-row lg:justify-center lg:gap-[48px]">
            <div className="relative h-[52px] w-[227px] shrink-0">
              <Image
                src="/demo2/sjm-logo.png"
                alt="SJM Holdings"
                fill
                sizes="227px"
                className="object-contain"
              />
            </div>
            <div className="hidden h-[52px] w-px bg-white/10 lg:block" />
            <div className="flex flex-1 flex-wrap items-center justify-center gap-6 lg:gap-[48px]">
              {brandLogos.map((brand) => (
                <div
                  key={brand.alt}
                  className="relative h-[80px] w-[80px] flex-1 md:h-[113px]"
                >
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    fill
                    sizes="(max-width: 768px) 80px, 120px"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="w-full border-t border-white/10 pt-[32px] text-center">
            <p className="text-[12px] leading-[2em] tracking-[0.02em] text-[#a78a5d]">
              Privacy Statement &amp; Disclaimer
            </p>
            <p className="text-[12px] leading-[2em] tracking-[0.02em] text-white">
              Copyright 2026 &copy; SJM Holdings Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
