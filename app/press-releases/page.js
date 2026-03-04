"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../demo1/Header";

const IMAGES = {
  logo: "/demo1/sjm-logo.png",
  hero: "/demo1/announcements-hero.png",
};

const pressReleases = [
  { date: "03 Mar 2026", category: "Corporate", title: "SJM Enhances Parental Benefits" },
  { date: "24 Feb 2026", category: "Events", title: "SJM Rings in the Chinese New Year with Auspicious Lion Dance Parades" },
  { date: "22 Feb 2026", category: "Awards", title: "SJM Leads Asian Wine Scene with Seven Awards at Star Wine List 2026" },
  { date: "11 Feb 2026", category: "Awards", title: "SJM\u2019s Grand Lisboa Palace Resort Macau Becomes the Only Integrated Resort in the World with All Hotels Forbes Travel Guide Five-Star Rated" },
  { date: "04 Feb 2026", category: "Entertainment", title: "SJM Presents Macau Debut of World-Renowned Magician and Mentalist Drummond Money-Coutts" },
  { date: "30 Jan 2026", category: "Awards", title: "SJM Shines with Four Prestigious Accolades on Harper\u2019s BAZAAR HK\u2019s Annual Lists" },
  { date: "22 Jan 2026", category: "Awards", title: "SJM Shines with Top Honours at China\u2019s Hotel and Restaurant Awards" },
  { date: "04 Jan 2026", category: "Entertainment", title: "SJM Resorts Presents \u201cTV Awards Presentation 2025\u201d at Grand Lisboa Palace for the Third Consecutive Year" },
  { date: "30 Dec 2025", category: "Corporate", title: "SJM Celebrates a New Chapter for L\u2019Arc Hotel" },
  { date: "26 Dec 2025", category: "Awards", title: "SJM Restaurants and Bar Recognised in \u201cT+L Tastemakers 2025/26\u201d" },
];

const articleCategories = [
  { name: "All", count: 59 },
  { name: "Awards", count: 24 },
  { name: "Events", count: 16 },
  { name: "Entertainment", count: 19 },
  { name: "Corporate", count: 27 },
];

const publishedYears = [
  { name: "All", count: 59 },
  { name: "2026", count: 4 },
  { name: "2025", count: 16 },
  { name: "2024", count: 19 },
  { name: "2023", count: 27 },
];

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

function ChevronDownIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FilterCard({ title, items, showViewMore = false }) {
  return (
    <div className="border border-[rgba(35,31,32,0.08)] bg-white p-5 sm:p-[25px]">
      <div className="flex flex-col gap-5">
        <p className="text-[14px] uppercase tracking-[2.7px] text-[#a8996e]">
          {title}
        </p>
        <div className="flex flex-col gap-4">
          {items.map((item, idx) => (
            <div key={`${item.name}-${idx}`}>
              {idx > 0 && <div className="mb-4 h-px bg-[rgba(35,31,32,0.06)]" />}
              <button
                type="button"
                className="flex w-full items-center gap-2 text-left transition hover:opacity-80"
              >
                <span className="flex-1 text-[14px] leading-[18px] text-[#231f20]">
                  {item.name}
                </span>
                <span className="text-[14px] font-medium leading-[18px] text-[#8e9590]">
                  {item.count}
                </span>
                <FilterArrowIcon className="h-3.5 w-3.5 shrink-0 text-[rgba(35,31,32,0.3)]" />
              </button>
            </div>
          ))}
          {showViewMore && (
            <>
              <div className="h-px bg-[rgba(35,31,32,0.06)]" />
              <button
                type="button"
                className="flex items-center justify-center gap-2 text-[14px] leading-[18px] text-[#8e9590] transition hover:text-[#231f20]"
              >
                View More
                <ChevronDownIcon className="h-4 w-4" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function PressReleasesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f6f0] font-sans text-[#1f2524]">
      <Header logoSrc={IMAGES.logo} />

      {/* Hero */}
      <section className="relative aspect-1600/575 w-full sm:aspect-auto sm:h-[400px] lg:h-[575px]">
        <Image src={IMAGES.hero} alt="SJM Holdings" fill priority sizes="100vw" className="object-cover" />
      </section>

      {/* Press Releases */}
      <section className="bg-[#f7f6f0]">
        <div className="mx-auto w-full max-w-[1680px] px-5 py-10 sm:px-8 lg:px-[60px] lg:py-[80px] xl:px-[120px]">
          <div className="flex flex-col gap-8 lg:gap-[40px]">
            <h1 className="font-petrona text-[36px] font-extralight leading-none text-[#231f20] sm:text-[42px] lg:text-[48px]">
              Latest Press Releases.
            </h1>

            <div className="flex flex-col gap-8 lg:flex-row lg:gap-[64px]">
              {/* List */}
              <div className="flex flex-1 flex-col gap-10">
                <div className="flex flex-col gap-5">
                  {pressReleases.map((item, idx) => (
                    <div key={idx}>
                      <Link
                        href={`/announcements/${idx + 1}`}
                        className="group flex flex-col gap-0.5 rounded-sm transition hover:opacity-80"
                      >
                        <div className="flex items-center gap-[8px] text-[14px] leading-[22.8px] text-[#8e9590]">
                          <span>{item.date}</span>
                          <span>/</span>
                          <span>{item.category}</span>
                        </div>
                        <p className="text-[16px] leading-[24px] text-[#141414]">
                          {item.title}
                        </p>
                      </Link>
                      <div className="mt-5 h-px bg-[rgba(35,31,32,0.06)]" />
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
                <FilterCard title="Article Category" items={articleCategories} />
                <FilterCard title="Published Year" items={publishedYears} showViewMore />
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
