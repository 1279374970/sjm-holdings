"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../demo1/Header";

const IMAGES = {
  logo: "https://www.figma.com/api/mcp/asset/d1f9731d-0dc6-4e95-94da-5a44af0c78de",
  hero: "/demo1/announcements-hero.png",
};

const announcements = [
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

const categories = [
  { name: "All", count: 925 },
  { name: "Awards", count: 107 },
  { name: "Events", count: 93 },
  { name: "Entertainment", count: 91 },
  { name: "Corporate", count: 82 },
];

const years = [
  { name: "All", count: 925 },
  { name: "2026", count: 7 },
  { name: "2025", count: 93 },
  { name: "2024", count: 91 },
  { name: "2023", count: 82 },
  { name: "2025", count: 93, id: "2025-dup" },
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

function ChevronDownIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FilterCard({ title, items, goldBars = false }) {
  const maxCount = items[0]?.count || 1;
  return (
    <div className="border border-[rgba(35,31,32,0.08)] bg-white p-6">
      <div className="flex flex-col gap-5">
        <p className="text-[12px] uppercase leading-[18px] tracking-[2.7px] text-[#a8996e]">
          {title}
        </p>
        <div className="flex flex-col gap-4">
          {items.map((item, idx) => (
            <div key={item.id || `${item.name}-${idx}`}>
              {idx > 0 && (
                <div className="mb-4 h-px bg-[rgba(35,31,32,0.06)]" />
              )}
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  className="flex items-center justify-between"
                >
                  <span className="text-[14px] leading-[18px] text-[#8e9590]">
                    {item.name}
                  </span>
                  <span className="text-[14px] font-medium leading-[18px] text-[#8e9590]">
                    {item.count}
                  </span>
                </button>
                <div
                  className={`h-2 w-full ${
                    goldBars
                      ? "bg-[rgba(168,153,110,0.1)]"
                      : "bg-[rgba(0,155,121,0.1)]"
                  }`}
                >
                  <div
                    className={`h-full ${goldBars ? "bg-[#a8996e]" : "bg-[#009b79]"}`}
                    style={{
                      width:
                        idx === 0
                          ? "100%"
                          : `${Math.round((item.count / maxCount) * 100)}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AnnouncementsPage() {
  const [currentPage, setCurrentPage] = useState(1);
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
        {/* <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-[10px]" />
        <div
          className="absolute inset-0"
          style={{ boxShadow: "inset 0 0 10px rgba(0,0,0,0.3)" }}
        /> */}
      </section>

      {/* Announcements Section */}
      <section className="bg-[#f7f6f0]">
        <div className="mx-auto w-full max-w-[1680px] px-5 py-14 sm:px-8 lg:px-[120px] lg:py-[80px]">
          <div className="flex flex-col gap-10">
            {/* Heading */}
            <h1 className="font-petrona text-[48px] font-extralight leading-[1] text-[#231f20]">
              Announcements, Notices & Returns
            </h1>

            {/* Content: Results + Sidebar */}
            <div className="flex flex-col justify-center gap-10 lg:flex-row lg:gap-16">
              {/* Results List */}
              <div className="flex flex-1 flex-col">
                {announcements.map((item, idx) => (
                  <article
                    key={`${item.date}-${item.title.slice(0, 30)}-${idx}`}
                    className="flex gap-6 border-b border-[rgba(35,31,32,0.1)] py-6"
                  >
                    <div className="flex w-[80px] shrink-0 flex-col justify-center">
                      <p className="text-right text-[12px] leading-[18px] text-[#8e9590]">
                        {item.date}
                      </p>
                    </div>

                    <div className="flex flex-1 flex-col gap-2">
                      <span className="inline-block w-fit bg-[rgba(0,155,121,0.1)] px-2 py-0.5 text-[12px] uppercase leading-[18px] tracking-[0.9px] text-[#009b79]">
                        {item.tag}
                      </span>
                      <p className="text-[14px] leading-[22.75px] text-[#231f20]">
                        {item.title}
                      </p>
                    </div>

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

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
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
                    ),
                  )}

                  <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center text-[#8e9590]"
                    aria-label="Next page"
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                  >
                    <PaginationChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="flex w-full flex-col gap-5 lg:w-[380px] lg:shrink-0">
                <FilterCard title="categories" items={categories} />

                {/* Years Card */}
                <div className="border border-[rgba(35,31,32,0.08)] bg-white p-6">
                  <div className="flex flex-col gap-5">
                    <p className="text-[12px] uppercase leading-[18px] tracking-[2.7px] text-[#a8996e]">
                      YEARS
                    </p>
                    <div className="flex flex-col gap-4">
                      {years.map((item, idx) => (
                        <div key={item.id || `${item.name}-${idx}`}>
                          {idx > 0 && (
                            <div className="mb-4 h-px bg-[rgba(35,31,32,0.06)]" />
                          )}
                          <div className="flex flex-col gap-2">
                            <button
                              type="button"
                              className="flex items-center justify-between"
                            >
                              <span className="text-[14px] leading-[18px] text-[#8e9590]">
                                {item.name}
                              </span>
                              <span className="text-[14px] font-medium leading-[18px] text-[#8e9590]">
                                {item.count}
                              </span>
                            </button>
                            <div className="h-2 w-full bg-[rgba(168,153,110,0.1)]">
                              <div
                                className="h-full bg-[#a8996e]"
                                style={{
                                  width:
                                    idx === 0
                                      ? "100%"
                                      : `${Math.round((item.count / years[0].count) * 100)}%`,
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* View More */}
                      <div className="mt-2 flex items-center justify-center gap-2">
                        <span className="text-[14px] leading-[18px] text-[#8e9590]">
                          View More
                        </span>
                        <ChevronDownIcon className="h-4 w-4 text-[#8e9590]" />
                      </div>
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
