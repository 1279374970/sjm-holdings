"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../demo1/Header";

const IMAGES = {
  logo: "/demo1/sjm-logo.png",
  hero: "/demo1/csr-hero.png",
};

const csrEvents = [
  { image: "/demo1/csr-card-1.png", date: "23 Feb 2026", title: "SJM Joins Hands with the Community to Celebrate the Year of the Horse" },
  { image: "/demo1/csr-card-2.png", date: "23 Feb 2026", title: "SJM Volunteer Team 10th Anniversary Celebration Dinner | A Decade of Unity and Giving Back" },
  { image: "/demo1/csr-card-3.png", date: "23 Feb 2026", title: "SJM Supports the USJ SDG Week 2026 to Explore the Future of Sustainable Development" },
  { image: "/demo1/csr-card-4.png", date: "23 Feb 2026", title: "\u201CSJM Talent Development Programme\u201D Graduation Ceremony Highlights Local Talent Development Achievements" },
  { image: "/demo1/csr-card-5.png", date: "23 Feb 2026", title: "SJM Sends New Year Spring Blessings to the Community" },
  { image: "/demo1/csr-card-6.png", date: "23 Feb 2026", title: "Parent-Child Co-learning: \u201CThe Lisboa, Stories of Macau\u201D Exhibition & Workshop" },
  { image: "/demo1/csr-card-7.png", date: "23 Feb 2026", title: "SJM Donates Supplies to Social Service Organisations" },
  { image: "/demo1/csr-card-8.png", date: "23 Feb 2026", title: "SJM Receives \u201CThe Best Companion for Teenagers\u201D and \u201CThe Friendly Enterprise Supporting Teenagers Franchise Merchants\u201D Awards" },
  { image: "/demo1/csr-card-9.png", date: "23 Feb 2026", title: "SJM Awards Championship at the \u201CMSO Bowling Contest \u2013 Inclusive Group Tournament\u201D" },
];

const eventCategories = [
  { name: "All", count: 59 },
  { name: "Environmental Sustainability", count: 24 },
  { name: "Community Engagement", count: 16 },
  { name: "Employee Development", count: 19 },
  { name: "Responsible Operations", count: 27 },
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

export default function CsrEventsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f6f0] font-sans text-[#1f2524]">
      <Header logoSrc={IMAGES.logo} />

      {/* Hero */}
      <section className="relative aspect-1600/575 w-full sm:aspect-auto sm:h-[400px] lg:h-[575px]">
        <Image src={IMAGES.hero} alt="SJM Holdings CSR" fill priority sizes="100vw" className="object-cover" />
      </section>

      {/* CSR Events */}
      <section className="bg-[#f7f6f0]">
        <div className="mx-auto w-full max-w-[1680px] px-5 py-10 sm:px-8 lg:gap-[40px] lg:px-[60px] lg:py-[80px] xl:px-[120px]">
          <div className="flex flex-col gap-8 lg:gap-[40px]">
            <h1 className="font-petrona text-[36px] font-extralight leading-none text-[#231f20] sm:text-[42px] lg:text-[48px]">
              CSR Events
            </h1>

            <div className="flex flex-col gap-8 lg:flex-row lg:gap-[64px]">
              {/* Cards grid */}
              <div className="flex flex-1 flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {csrEvents.map((item, idx) => (
                    <a
                      key={idx}
                      href={`/csr-events/${idx + 1}`}
                      className="group flex flex-col gap-3 border-b border-[rgba(35,31,32,0.08)] pb-5 transition hover:opacity-90"
                    >
                      <div className="relative aspect-448/317 w-full overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <p className="text-[14px] leading-[22.8px] text-[#8e9590]">
                          {item.date}
                        </p>
                        <p className="line-clamp-2 text-[16px] leading-[24px] text-[rgba(35,31,32,0.8)]">
                          {item.title}
                        </p>
                      </div>
                    </a>
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
                <FilterCard title="Event Category" items={eventCategories} />
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
