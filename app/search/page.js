"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../demo1/Header";

const IMAGES = {
  logo: "https://www.figma.com/api/mcp/asset/d1f9731d-0dc6-4e95-94da-5a44af0c78de",
  hero: "/demo1/search-hero.png",
};

const searchResults = [
  {
    date: "24 Feb 2026",
    title: "SJM Rings in the Chinese New Year with Auspicious Lion Dance Parades",
    tag: "Events",
  },
  {
    date: "22 Feb 2026",
    title: "SJM Leads Asian Wine Scene with Seven Awards at Star Wine List 2026",
    tag: "Awards",
  },
  {
    date: "11 Feb 2026",
    title:
      "SJM\u2019s Grand Lisboa Palace Resort Macau Becomes the Only Integrated Resort in the World with All Hotels Forbes Travel Guide Five-Star Rated",
    tag: "Awards",
  },
  {
    date: "04 Feb 2026",
    title:
      "SJM Presents Macau Debut of World-Renowned Magician and Mentalist Drummond Money-Coutts",
    tag: "Entertainment",
  },
  {
    date: "11 Feb 2026",
    title:
      "SJM\u2019s Grand Lisboa Palace Resort Macau Becomes the Only Integrated Resort in the World with All Hotels Forbes Travel Guide Five-Star Rated",
    tag: "Awards",
  },
  {
    date: "04 Feb 2026",
    title:
      "SJM Presents Macau Debut of World-Renowned Magician and Mentalist Drummond Money-Coutts",
    tag: "Entertainment",
  },
  {
    date: "24 Feb 2026",
    title: "SJM Rings in the Chinese New Year with Auspicious Lion Dance Parades",
    tag: "Events",
  },
  {
    date: "22 Feb 2026",
    title: "SJM Leads Asian Wine Scene with Seven Awards at Star Wine List 2026",
    tag: "Awards",
  },
  {
    date: "11 Feb 2026",
    title:
      "SJM\u2019s Grand Lisboa Palace Resort Macau Becomes the Only Integrated Resort in the World with All Hotels Forbes Travel Guide Five-Star Rated",
    tag: "Awards",
  },
  {
    date: "04 Feb 2026",
    title:
      "SJM Presents Macau Debut of World-Renowned Magician and Mentalist Drummond Money-Coutts",
    tag: "Entertainment",
  },
];

const filterCategories = [
  { name: "All", count: 59, active: true },
  { name: "Financial Reports", count: 24 },
  { name: "Announcements, Notices & Returns", count: 16 },
  { name: "CSR Events", count: 19 },
];

function ChevronRightIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 3.5L10.5 8L6 12.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PaginationChevronLeft({ className = "" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
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

function PaginationChevronRight({ className = "" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
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

function FilterBarIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 16 8" fill="none" className={className} aria-hidden="true">
      <rect width="16" height="8" rx="0" fill="currentColor" />
    </svg>
  );
}

export default function SearchPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyword] = useState("Awards");
  const [activeFilter, setActiveFilter] = useState("All");
  const totalPages = 5;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f6f0] font-sans text-[#1f2524]">
      <Header logoSrc={IMAGES.logo} />

      {/* Hero Background */}
      <section className="relative h-[575px]">
        <Image
          src={IMAGES.hero}
          alt="SJM Holdings"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Dark overlay matching Figma design */}
        {/* <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-[10px]" />
        <div
          className="absolute inset-0"
          style={{ boxShadow: "inset 0 0 10px rgba(0,0,0,0.3)" }}
        /> */}
      </section>

      {/* Search Results Section */}
      <section className="bg-[#f7f6f0]">
        <div className="mx-auto w-full max-w-[1680px] px-5 py-14 sm:px-8 lg:px-[120px] lg:py-[80px]">
          <div className="flex flex-col gap-10">
            {/* Heading */}
            <h1 className="font-petrona text-[48px] font-extralight leading-[1] text-[#231f20]">
              Search Results
            </h1>

            {/* Content: Results + Sidebar */}
            <div className="flex flex-col justify-center gap-10 lg:flex-row lg:gap-16">
              {/* Results List */}
              <div className="flex flex-1 flex-col">
                {searchResults.map((item, idx) => (
                  <article
                    key={`${item.date}-${item.title.slice(0, 30)}-${idx}`}
                    className="flex gap-6 border-b border-[rgba(35,31,32,0.1)] py-6"
                  >
                    {/* Date */}
                    <div className="flex w-[80px] shrink-0 flex-col justify-center">
                      <p className="text-right text-[12px] leading-[18px] text-[#8e9590]">
                        {item.date}
                      </p>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col gap-2">
                      <span className="inline-block w-fit bg-[rgba(0,155,121,0.1)] px-2 py-0.5 text-[12px] uppercase leading-[18px] tracking-[0.9px] text-[#009b79]">
                        {item.tag}
                      </span>
                      <p className="text-[14px] leading-[22.75px] text-[#231f20]">
                        {item.title}
                      </p>
                    </div>

                    {/* Chevron */}
                    <div className="flex shrink-0 flex-col justify-center">
                      <ChevronRightIcon className="h-4 w-4 text-[rgba(35,31,32,0.2)]" />
                    </div>
                  </article>
                ))}

                {/* Pagination */}
                <div className="flex items-center justify-center gap-1 py-6">
                  <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center text-[#8e9590]"
                    aria-label="Previous page"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  >
                    <PaginationChevronLeft className="h-4 w-4" />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      type="button"
                      className={`flex h-10 w-10 items-center justify-center text-[12px] uppercase leading-[18px] tracking-[0.9px] ${
                        page === currentPage
                          ? "bg-[#009b79] text-white"
                          : "text-[#8e9590]"
                      }`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center text-[#8e9590]"
                    aria-label="Next page"
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  >
                    <PaginationChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="flex w-full flex-col gap-5 lg:w-[380px] lg:shrink-0">
                {/* Keyword Search Card */}
                <div className="border border-[rgba(35,31,32,0.08)] bg-white p-6">
                  <div className="flex flex-col gap-5">
                    <p className="text-[12px] uppercase leading-[18px] tracking-[2.7px] text-[#a8996e]">
                      keyword SEARCH
                    </p>
                    <div className="flex items-center border border-[rgba(35,31,32,0.1)]">
                      <div className="flex flex-1 items-center gap-2.5 px-4 py-0">
                        <input
                          type="text"
                          value={keyword}
                          onChange={(e) => setKeyword(e.target.value)}
                          className="h-[44px] w-full bg-transparent text-[14px] leading-[18px] text-[#231f20] outline-none placeholder:text-[#8e9590]"
                          placeholder="Enter keywords..."
                        />
                      </div>
                      <button
                        type="button"
                        className="flex h-[44px] items-center justify-center border-l border-[rgba(35,31,32,0.1)] px-4 text-[12px] font-medium uppercase leading-[18px] text-[#a8996e]"
                      >
                        SEARCH
                      </button>
                    </div>
                  </div>
                </div>

                {/* Filter Card */}
                <div className="border border-[rgba(35,31,32,0.08)] bg-white p-6">
                  <div className="flex flex-col gap-5">
                    <p className="text-[12px] uppercase leading-[18px] tracking-[2.7px] text-[#a8996e]">
                      FILTER
                    </p>
                    <div className="flex flex-col gap-4">
                      {filterCategories.map((cat, idx) => (
                        <div key={cat.name}>
                          {idx === 0 ? (
                            /* "All" item with green bar */
                            <div className="flex flex-col gap-2">
                              <button
                                type="button"
                                className="flex items-center justify-between"
                                onClick={() => setActiveFilter(cat.name)}
                              >
                                <span className="text-[14px] leading-[18px] text-[#8e9590]">
                                  {cat.name}
                                </span>
                                <span className="text-[14px] font-medium leading-[18px] text-[#8e9590]">
                                  {cat.count}
                                </span>
                              </button>
                              <div className="h-2 w-full bg-[rgba(0,155,121,0.1)]">
                                <div className="h-full w-full bg-[#009b79]" />
                              </div>
                            </div>
                          ) : (
                            /* Other filter items with expand icon */
                            <>
                              <div className="mb-4 h-px bg-[rgba(35,31,32,0.06)]" />
                              <div className="flex flex-col gap-2">
                                <button
                                  type="button"
                                  className="flex items-center justify-between"
                                  onClick={() => setActiveFilter(cat.name)}
                                >
                                  <span className="text-[14px] leading-[18px] text-[#8e9590]">
                                    {cat.name}
                                  </span>
                                  <span className="text-[14px] font-medium leading-[18px] text-[#8e9590]">
                                    {cat.count}
                                  </span>
                                </button>
                                <div className="h-2 w-full bg-[rgba(0,155,121,0.1)]">
                                  <div
                                    className="h-full bg-[#009b79]"
                                    style={{
                                      width: `${Math.round((cat.count / 59) * 100)}%`,
                                    }}
                                  />
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001e1e] py-6 text-center">
        <p className="text-[12px] leading-[24px] tracking-[0.24px] text-[#a78a5d]">
          Privacy Statement &amp; Disclaimer
        </p>
        <p className="mt-1 text-[12px] leading-[24px] tracking-[0.24px] text-white">
          Copyright 2026 © SJM Holdings Limited. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
