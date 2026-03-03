"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../demo1/Header";

const IMAGES = {
  logo: "/demo1/sjm-logo.png",
  hero: "/demo1/search-hero.png",
};

const searchResults = [
  { date: "24 Feb 2026", category: "Financial Reports", title: "Monthly Return of Equity Issuer on Movements in Securities for the Month Ended 31/01/2026" },
  { date: "24 Feb 2026", category: "Financial Reports", title: "Settlement of Offer to Purchase for Cash any and all of the Outstanding 4.500% Senior Notes Due 2026" },
  { date: "24 Feb 2026", category: "Announcements, Notices & Returns", title: "Publication of Offering Memorandum \u2013 SJM International Limited \u2013 USD540,000,000 6.500% Senior Notes Due 2031" },
  { date: "24 Feb 2026", category: "Financial Reports", title: "Notice of Listing on The Stock Exchange of Hong Kong Limited \u2013 SJM International Limited \u2013 USD540,000,000 6.500% Senior Notes Due 2031" },
  { date: "24 Feb 2026", category: "Announcements, Notices & Returns", title: "Closing of the Issuance of USD540,000,000 6.500% Senior Notes Due 2031" },
  { date: "24 Feb 2026", category: "Financial Reports", title: "Results of Offer to Purchase for Cash any and all of the Outstanding 4.500% Senior Notes Due 2026" },
  { date: "24 Feb 2026", category: "CSR Events", title: "Issuance of USD540,000,000 6.500% Senior Notes Due 2031 and Disclosure Pursuant to Rule 13.18 of the Listing Rules & Exempted Connected Transaction in relation to the Partial Subscription of the Notes by a Connected Person" },
  { date: "24 Feb 2026", category: "Announcements, Notices & Returns", title: "Monthly Return of Equity Issuer on Movements in Securities for the Month Ended 31/12/2025" },
  { date: "24 Feb 2026", category: "Financial Reports", title: "Commencement of Offer to Purchase for Cash any and all of the Outstanding 4.500% Senior Notes Due 2026" },
  { date: "24 Feb 2026", category: "CSR Events", title: "Inside Information Proposed Issuance of U.S. Dollar Denominated Senior Notes" },
];

const filterCategories = [
  { name: "All", count: 59 },
  { name: "Financial Reports", count: 24 },
  { name: "Announcements, Notices & Returns", count: 16 },
  { name: "CSR Events", count: 19 },
];

function FilterArrowIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 14 14" fill="none" className={className} aria-hidden="true">
      <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PaginationChevronLeft({ className = "" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M10 3L5.5 8L10 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PaginationChevronRight({ className = "" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M6 3L10.5 8L6 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
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

      {/* Hero */}
      <section className="relative aspect-1600/575 w-full sm:aspect-auto sm:h-[400px] lg:h-[575px]">
        <Image
          src={IMAGES.hero}
          alt="SJM Holdings"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </section>

      {/* Search Results */}
      <section className="bg-[#f7f6f0]">
        <div className="mx-auto w-full max-w-[1680px] px-5 py-10 sm:px-8 lg:gap-[40px] lg:px-[60px] lg:py-[80px] xl:px-[120px]">
          <div className="flex flex-col gap-8 lg:gap-[40px]">
            <h1 className="font-petrona text-[36px] font-extralight leading-none text-[#231f20] sm:text-[42px] lg:text-[48px]">
              Search Results
            </h1>

            <div className="flex flex-col gap-8 lg:flex-row lg:gap-[64px]">
              {/* Results list */}
              <div className="flex flex-1 flex-col gap-8 lg:gap-[40px]">
                <div className="flex flex-col gap-5">
                  {searchResults.map((item, idx) => (
                    <div key={`${item.title.slice(0, 40)}-${idx}`}>
                      <a
                        href="#"
                        className="group flex flex-col gap-0.5 rounded-sm transition-colors hover:bg-[rgba(0,0,0,0.02)]"
                      >
                        <p className="flex flex-wrap items-center gap-2 text-[13px] leading-[22.8px] text-[#8e9590] sm:text-[14px]">
                          <span>{item.date}</span>
                          <span>/</span>
                          <span>{item.category}</span>
                        </p>
                        <p className="text-[15px] leading-[24px] text-[#141414] sm:text-[16px]">
                          {item.title}
                        </p>
                      </a>
                      {idx < searchResults.length - 1 && (
                        <div className="mt-5 h-px bg-[rgba(35,31,32,0.06)]" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-1">
                  <button
                    type="button"
                    className="flex h-[40px] w-[40px] items-center justify-center text-[#8e9590] transition hover:text-[#231f20]"
                    aria-label="Previous page"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  >
                    <PaginationChevronLeft className="h-4 w-4" />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      type="button"
                      className={`flex h-[40px] w-[40px] items-center justify-center text-[14px] tracking-[0.9px] transition ${
                        page === currentPage
                          ? "bg-[#009b79] text-white"
                          : "text-[#8e9590] hover:text-[#231f20]"
                      }`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    type="button"
                    className="flex h-[40px] w-[40px] items-center justify-center text-[#8e9590] transition hover:text-[#231f20]"
                    aria-label="Next page"
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  >
                    <PaginationChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="flex w-full flex-col gap-5 lg:w-[380px] lg:shrink-0">
                {/* Keyword Search */}
                <div className="border border-[rgba(35,31,32,0.08)] bg-white p-5 sm:p-[25px]">
                  <div className="flex flex-col gap-5">
                    <p className="text-[14px] uppercase tracking-[2.7px] text-[#a8996e]">
                      keyword SEARCH
                    </p>
                    <div className="flex items-center border border-[rgba(35,31,32,0.1)]">
                      <input
                        type="text"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        className="h-[44px] flex-1 bg-transparent px-4 text-[14px] leading-[18px] text-[#231f20] outline-none placeholder:text-[#8e9590]"
                        placeholder="Enter keywords..."
                      />
                      <button
                        type="button"
                        className="flex h-[44px] shrink-0 items-center justify-center border-l border-[rgba(35,31,32,0.1)] px-4 text-[12px] font-medium uppercase text-[#a8996e] transition hover:bg-[rgba(168,153,110,0.05)]"
                      >
                        SEARCH
                      </button>
                    </div>
                  </div>
                </div>

                {/* Filter */}
                <div className="border border-[rgba(35,31,32,0.08)] bg-white p-5 sm:p-[25px]">
                  <div className="flex flex-col gap-5">
                    <p className="text-[14px] uppercase tracking-[2.7px] text-[#a8996e]">
                      FILTER
                    </p>
                    <div className="flex flex-col gap-4">
                      {filterCategories.map((cat, idx) => (
                        <div key={cat.name}>
                          {idx > 0 && (
                            <div className="mb-4 h-px bg-[rgba(35,31,32,0.06)]" />
                          )}
                          <button
                            type="button"
                            className={`flex w-full items-center gap-2 text-left transition hover:opacity-80 ${
                              activeFilter === cat.name ? "text-[#231f20]" : "text-[#231f20]"
                            }`}
                            onClick={() => setActiveFilter(cat.name)}
                          >
                            <span className="flex-1 text-[14px] leading-[18px]">
                              {cat.name}
                            </span>
                            <span className="text-[14px] font-medium leading-[18px] text-[#8e9590]">
                              {cat.count}
                            </span>
                            <FilterArrowIcon className="h-3.5 w-3.5 shrink-0 text-[rgba(35,31,32,0.3)]" />
                          </button>
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
