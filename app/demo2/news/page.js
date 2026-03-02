"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Demo2Header from "../Header";

const newsItems = [
  {
    id: 1,
    date: "24 Feb 2026",
    title: "Date of Board Meeting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    date: "24 Feb 2026",
    title:
      "Settlement of Offer to Purchase for Cash any and all of the Outstanding 4.500% Senior Notes Due 2026",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    date: "24 Feb 2026",
    title:
      "Notice of Listing on The Stock Exchange of Hong Kong Limited - SJM International Limited - USD540,000,000 6.500% Senior Notes Due 2031",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    date: "24 Feb 2026",
    title:
      "Results of Offer to Purchase for Cash any and all of the Outstanding 4.500% Senior Notes Due 2026",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    date: "24 Feb 2026",
    title:
      "Monthly Return of Equity Issuer on Movements in Securities for the Month Ended 31/12/2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    date: "24 Feb 2026",
    title:
      "Inside Information Proposed Issuance of U.S. Dollar Denominated Senior Notes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 7,
    date: "24 Feb 2026",
    title:
      "Poll Results of the Extraordinary General Meeting Held on 15 December 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 8,
    date: "24 Feb 2026",
    title: "Notice of Extraordinary General Meeting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 9,
    date: "24 Feb 2026",
    title:
      "Voluntary Announcement Termination of Gaming Operations with Casino Ponte 16",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 10,
    date: "24 Feb 2026",
    title:
      "2025 Third Quarter and Year-to-date Selected Unaudited Key Performance Indicators",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const BASE_NEWS = newsItems;
const allNewsItems = Array.from({ length: 5 }, (_, p) =>
  BASE_NEWS.map((item) => ({ ...item, id: item.id + p * BASE_NEWS.length }))
).flat();

const yearFilters = [
  { name: "All", count: 59 },
  { name: "2026", count: 24 },
  { name: "2025", count: 16 },
  { name: "2024", count: 19 },
  { name: "2023", count: 59 },
  { name: "2022", count: 24 },
  { name: "2021", count: 16 },
  { name: "2020", count: 19 },
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

function ChevronDownIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path
        d="M3 6L8 11L13 6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Demo2NewsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeYear, setActiveYear] = useState("All");
  const ITEMS_PER_PAGE = 10;
  const totalPages = Math.ceil(allNewsItems.length / ITEMS_PER_PAGE);
  const visibleNews = allNewsItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <main className="min-h-screen bg-[#f7f6f0] font-sans text-[#231f20]">
      <Demo2Header />

      {/* ── Hero + Page Title ── */}
      {/* Figma: column gap:-70px padding:0 40px, image in-flow 575px, container overlaps 70px */}
      <section className="bg-[#f7f6f0]">
        {/* Background image — in flow */}
        <div className="relative h-[240px] w-full md:h-[380px] lg:h-[575px]">
          <Image
            src="/demo2/news-hero.png"
            alt="SJM Holdings news"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Outer wrap with section-level side padding (Figma: 40px), reveals cream bg on sides */}
        <div className="relative z-10 -mt-[70px] px-4 md:px-8 lg:px-[40px]">
          {/* White box with internal content padding (Figma: 40px 60px) */}
          <div className="bg-white px-4 py-10 md:px-8 lg:px-[60px] lg:py-[40px]">
            <h1 className="font-petrona text-[36px] font-extralight leading-[1.12] tracking-[-0.047em] text-black md:text-[48px]">
              Announcements, Notices &amp; Returns
            </h1>
          </div>
        </div>
      </section>

      {/* ── Results + Sidebar ── */}
      <section className="bg-[#f7f6f0]">
        <div className="mx-auto max-w-[1440px] px-4 py-10 md:px-8 lg:px-[60px] lg:py-[40px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-10">

            {/* Results column */}
            <div className="flex flex-1 flex-col gap-10">
              <div className="flex flex-col">
                {visibleNews.map((item, idx) => (
                  <div key={item.id}>
                    <Link
                      href={`/announcements/1`}
                      className="block transition hover:opacity-75"
                    >
                      <div className="flex flex-col gap-2">
                        <p className="text-[13px] font-semibold uppercase leading-[1.22] tracking-[0.02em] text-[#001625]">
                          {item.date}
                        </p>
                        <h2 className="font-petrona text-[20px] font-extralight leading-[1.4] text-[#141414]">
                          {item.title}
                        </h2>
                        <p className="text-[14px] leading-[1.625] text-[#231f20]">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                    {idx < visibleNews.length - 1 && (
                      <div className="my-5 h-px bg-[rgba(35,31,32,0.06)]" />
                    )}
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-1 pt-2">
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center text-[#8e9590] transition hover:text-[#001625]"
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
                      className={`flex h-10 w-10 items-center justify-center text-[12px] uppercase tracking-[0.075em] transition ${
                        page === currentPage
                          ? "border border-[#001625] text-[#001625]"
                          : "text-[#8e9590] hover:text-[#001625]"
                      }`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center text-[#8e9590] transition hover:text-[#001625]"
                  aria-label="Next page"
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                >
                  <ChevronRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Years sidebar */}
            <div className="w-full border border-[rgba(35,31,32,0.08)] px-8 py-6 lg:w-[360px] lg:shrink-0 lg:self-start">
              {/* Label — "YEARS" Poppins 14px uppercase tracking #A8996E */}
              <p className="text-[14px] uppercase leading-[1.57] tracking-[0.143em] text-[#a8996e]">
                YEARS
              </p>

              <div className="mt-6 flex flex-col gap-4">
                {yearFilters.map((item, idx) => (
                  <div key={item.name}>
                    {idx > 0 && (
                      <div className="mb-4 h-px bg-[rgba(35,31,32,0.06)]" />
                    )}
                    <button
                      type="button"
                      className="flex w-full items-center justify-between"
                      onClick={() => setActiveYear(item.name)}
                    >
                      <span
                        className={`text-[14px] leading-[1.29] transition ${
                          activeYear === item.name
                            ? "font-medium text-[#231f20]"
                            : "text-[#231f20] hover:opacity-70"
                        }`}
                      >
                        {item.name}
                      </span>
                      <span className="text-[14px] leading-[1.29] text-[#a8996e]">
                        {item.count}
                      </span>
                    </button>
                  </div>
                ))}

                {/* View More */}
                <div className="mt-2 h-px bg-[rgba(35,31,32,0.06)]" />
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 text-[14px] leading-[1.29] text-[#8e9590] transition hover:text-[#231f20]"
                >
                  <span>View More</span>
                  <ChevronDownIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#001e1e] text-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-10 md:px-8 lg:px-[100px] lg:py-[40px]">
          <div className="flex flex-col items-center justify-center gap-12 lg:flex-row lg:gap-[48px]">
            <div className="relative h-[52px] w-[227px] shrink-0">
              <Image
                src="/demo2/sjm-logo.png"
                alt="SJM Holdings"
                fill
                sizes="227px"
                className="object-contain"
              />
            </div>
            <div className="hidden w-px self-stretch bg-white/10 lg:block" />
            <div className="flex flex-wrap items-center justify-center gap-[48px]">
              {brandLogos.map((brand) => (
                <div key={brand.alt} className="relative h-[112px] w-[80px]">
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-8 text-center">
            <p className="text-[12px] leading-[2] tracking-[0.02em] text-[#a78a5d]">
              Privacy Statement &amp; Disclaimer
            </p>
            <p className="text-[12px] leading-[2] tracking-[0.02em] text-white">
              Copyright 2026 &copy; SJM Holdings Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
