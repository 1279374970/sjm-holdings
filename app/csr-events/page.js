"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../demo1/Header";

const IMAGES = {
  logo: "/demo1/sjm-logo.png",
  hero: "/demo1/csr-hero.png",
};

const csrEvents = [
  { image: "/demo1/csr-card-1.png", date: "24 Feb", title: "SJM Joins Hands with the Community to Celebrate the Year of the Horse" },
  { image: "/demo1/csr-card-2.png", date: "24 Feb", title: "SJM Joins Hands with the Community to Celebrate the Year of the Horse" },
  { image: "/demo1/csr-card-3.png", date: "24 Feb", title: "SJM Joins Hands with the Community to Celebrate the Year of the Horse" },
  { image: "/demo1/csr-card-4.png", date: "24 Feb", title: "SJM Joins Hands with the Community to Celebrate the Year of the Horse" },
  { image: "/demo1/csr-card-5.png", date: "24 Feb", title: "SJM Joins Hands with the Community to Celebrate the Year of the Horse" },
  { image: "/demo1/csr-card-6.png", date: "24 Feb", title: "SJM Joins Hands with the Community to Celebrate the Year of the Horse" },
  { image: "/demo1/csr-card-7.png", date: "24 Feb", title: "SJM Joins Hands with the Community to Celebrate the Year of the Horse" },
  { image: "/demo1/csr-card-8.png", date: "24 Feb", title: "SJM Joins Hands with the Community to Celebrate the Year of the Horse" },
  { image: "/demo1/csr-card-9.png", date: "24 Feb", title: "SJM Joins Hands with the Community to Celebrate the Year of the Horse" },
];

const categories = [
  { name: "All", count: 925 },
  { name: "Environmental Sustainability", count: 107 },
  { name: "Community Engagement", count: 93 },
  { name: "Employee Development", count: 91 },
  { name: "Responsible Operations", count: 82 },
];

const years = [
  { name: "All", count: 925 },
  { name: "2026", count: 7 },
  { name: "2025", count: 93 },
  { name: "2024", count: 91 },
  { name: "2023", count: 82 },
  { name: "2025", count: 93, id: "2025-dup" },
];

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
              {idx > 0 && <div className="mb-4 h-px bg-[rgba(35,31,32,0.06)]" />}
              <div className="flex flex-col gap-2">
                <button type="button" className="flex items-center justify-between">
                  <span className="text-[14px] leading-[18px] text-[#8e9590]">{item.name}</span>
                  <span className="text-[14px] font-medium leading-[18px] text-[#8e9590]">{item.count}</span>
                </button>
                <div className={`h-2 w-full ${goldBars ? "bg-[rgba(168,153,110,0.1)]" : "bg-[rgba(0,155,121,0.1)]"}`}>
                  <div
                    className={`h-full ${goldBars ? "bg-[#a8996e]" : "bg-[#009b79]"}`}
                    style={{ width: idx === 0 ? "100%" : `${Math.round((item.count / maxCount) * 100)}%` }}
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

export default function CsrEventsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f6f0] font-sans text-[#1f2524]">
      <Header logoSrc={IMAGES.logo} />

      {/* Hero Background */}
      <section className="relative h-[575px]">
        <Image src={IMAGES.hero} alt="SJM Holdings CSR" fill priority sizes="100vw" className="object-cover" />
        {/* <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-[10px]" />
        <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 10px rgba(0,0,0,0.3)" }} /> */}
      </section>

      {/* CSR Events Section */}
      <section className="bg-[#f7f6f0]">
        <div className="mx-auto w-full max-w-[1680px] px-5 py-14 sm:px-8 lg:px-[120px] lg:py-[80px]">
          <div className="flex flex-col gap-10">
            <h1 className="font-petrona text-[48px] font-extralight leading-[1] text-[#231f20]">
              CSR Events
            </h1>

            <div className="flex flex-col justify-center gap-10 lg:flex-row lg:gap-16">
              {/* Cards Grid + Pagination */}
              <div className="flex flex-1 flex-col gap-5">
                {/* Row-based grid: 3 rows of 3 cards */}
                <div className="flex flex-col gap-5">
                  {[0, 1, 2].map((rowIdx) => (
                    <div key={rowIdx} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {csrEvents.slice(rowIdx * 3, rowIdx * 3 + 3).map((item, colIdx) => (
                        <a
                          key={`${rowIdx}-${colIdx}`}
                          href={`/csr-events/${rowIdx * 3 + colIdx + 1}`}
                          className="flex flex-col gap-3 border-b border-[rgba(35,31,32,0.08)] pb-5 transition hover:opacity-80"
                        >
                          <div className="relative h-[207px] w-full overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              className="object-cover"
                            />
                          </div>
                          <p className="text-[12px] leading-[15px] text-[#8e9590]">
                            {item.date}
                          </p>
                          <p className="text-[14px] leading-[22.75px] text-[rgba(35,31,32,0.8)]">
                            {item.title}
                          </p>
                        </a>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-1">
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
                        page === currentPage ? "bg-[#009b79] text-white" : "text-[#8e9590]"
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
                          {idx > 0 && <div className="mb-4 h-px bg-[rgba(35,31,32,0.06)]" />}
                          <div className="flex flex-col gap-2">
                            <button type="button" className="flex items-center justify-between">
                              <span className="text-[14px] leading-[18px] text-[#8e9590]">{item.name}</span>
                              <span className="text-[14px] font-medium leading-[18px] text-[#8e9590]">{item.count}</span>
                            </button>
                            <div className="h-2 w-full bg-[rgba(168,153,110,0.1)]">
                              <div
                                className="h-full bg-[#a8996e]"
                                style={{ width: idx === 0 ? "100%" : `${Math.round((item.count / years[0].count) * 100)}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="mt-2 flex items-center justify-center gap-2">
                        <span className="text-[14px] leading-[18px] text-[#8e9590]">View More</span>
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
