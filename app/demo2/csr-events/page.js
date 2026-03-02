"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Demo2Header from "../Header";

const brandLogos = [
  { src: "/demo2/logo-glp.png", alt: "Grand Lisboa Palace" },
  { src: "/demo2/logo-gl.png", alt: "Grand Lisboa" },
  { src: "/demo2/logo-hl.png", alt: "Hotel Lisboa" },
  { src: "/demo2/logo-ja.png", alt: "Jai Alai Oceanus" },
  { src: "/demo2/logo-larc.png", alt: "Lisboa Arcade" },
  { src: "/demo2/logo-p16.png", alt: "Ponte 16" },
  { src: "/demo2/logo-km.png", alt: "Kam Pek Market" },
];

const featuredEvents = [
  {
    id: "1",
    date: "10 Dec 2025",
    title: "SJM Joins Hands with the Community to Celebrate the Year of the Horse",
    image: "/demo2/csr-1.jpg",
  },
  {
    id: "2",
    date: "10 Dec 2025",
    title: "SJM Volunteer Team 10th Anniversary Celebration Dinner | A Decade of Unity and Giving Back",
    image: "/demo2/csr-2.jpg",
  },
];

const listEvents = [
  {
    id: "3",
    date: "24 Feb 2026",
    title: "SJM Supports the USJ SDG Week 2026 to Explore the Future of Sustainable Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "4",
    date: "24 Feb 2026",
    title: '"SJM Talent Development Programme" Graduation Ceremony Highlights Local Talent Development Achievements',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "5",
    date: "24 Feb 2026",
    title: "SJM Supports the Macau Social Service Bureau Youth Leadership Programme",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "6",
    date: "15 Jan 2026",
    title: "SJM Volunteer Team Celebrates 10 Years of Community Service",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "7",
    date: "05 Jan 2026",
    title: "SJM Partners with Local NGOs to Distribute Lunar New Year Gift Packs",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const years = [
  { label: "All", count: 24 },
  { label: "2026", count: 8 },
  { label: "2025", count: 7 },
  { label: "2024", count: 5 },
  { label: "2023", count: 4 },
];

const BASE_LIST_EVENTS = listEvents;
const allListEvents = Array.from({ length: 3 }, (_, p) =>
  BASE_LIST_EVENTS.map((item) => ({ ...item, id: String(Number(item.id) + p * BASE_LIST_EVENTS.length) }))
).flat();

const ITEMS_PER_PAGE = 5;
const TOTAL_PAGES = Math.ceil(allListEvents.length / ITEMS_PER_PAGE);

function ChevronDownIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1.25L4 4.75L7 1.25" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowLeftIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 6 10" aria-hidden className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.75 9L1.25 5L4.75 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRightIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 6 10" aria-hidden className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.25 1L4.75 5L1.25 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CsrEventsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeYear, setActiveYear] = useState("All");
  const visibleEvents = allListEvents.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <div className="min-h-screen bg-[#f7f6f0] font-sans">
      <Demo2Header />

      {/* Hero Section */}
      <section className="bg-[#f7f6f0]">
        <div className="h-[220px] w-full bg-[#004433]" />
        <div className="relative z-10 -mt-[70px] px-4 md:px-8 lg:px-[40px]">
          <div className="bg-white px-4 py-10 md:px-8 lg:px-[60px] lg:py-[40px]">
            <h1 className="font-petrona text-[36px] font-extralight leading-[1.12] tracking-[-0.047em] text-black md:text-[48px]">
              CSR Events
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#f7f6f0]">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-10 md:px-8 lg:px-[60px] lg:py-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
            {/* Left Column */}
            <div className="flex-1">
              {/* Featured Image Cards */}
              <div className="grid gap-5 sm:grid-cols-2">
                {featuredEvents.map((event) => (
                  <Link
                    key={event.id}
                    href={`/demo2/csr-events/${event.id}`}
                    className="group relative block min-h-[280px] overflow-hidden lg:min-h-[356px]"
                  >
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    <div className="absolute inset-x-5 bottom-5 bg-white p-5">
                      <p className="text-[13px] font-semibold uppercase leading-[1.23] tracking-[0.02em] text-[#001625]">
                        {event.date}
                      </p>
                      <p className="mt-4 font-petrona text-[20px] font-extralight leading-[1.4] text-[#141414]">
                        {event.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Text Items List */}
              <div className="mt-5 flex flex-col gap-5">
                {visibleEvents.map((event, idx) => (
                  <div key={event.id}>
                    <Link href={`/demo2/csr-events/1`} className="block py-1 transition hover:opacity-80">
                      <p className="text-[13px] font-semibold uppercase leading-[1.23] tracking-[0.02em] text-[#001625]">
                        {event.date}
                      </p>
                      <p className="mt-2 font-petrona text-[20px] font-extralight leading-[1.4] text-[#141414]">
                        {event.title}
                      </p>
                      <p className="mt-2 text-[14px] leading-[1.625] text-[#231f20]">
                        {event.description}
                      </p>
                    </Link>
                    {idx < visibleEvents.length - 1 && (
                      <div className="mt-5 h-px bg-[rgba(35,31,32,0.06)]" />
                    )}
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-10 flex items-center justify-center gap-1">
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="flex h-10 w-10 items-center justify-center text-[#8e9590] transition hover:text-[#001625]"
                  aria-label="Previous page"
                >
                  <ArrowLeftIcon className="h-[10px] w-[6px]" />
                </button>
                {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setCurrentPage(p)}
                    className={`flex h-10 w-10 items-center justify-center text-[14px] transition ${
                      currentPage === p
                        ? "border border-[#001625] text-[#001625]"
                        : "text-[#8e9590] hover:text-[#001625]"
                    }`}
                  >
                    {p}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.min(TOTAL_PAGES, p + 1))}
                  className="flex h-10 w-10 items-center justify-center text-[#8e9590] transition hover:text-[#001625]"
                  aria-label="Next page"
                >
                  <ArrowRightIcon className="h-[10px] w-[6px]" />
                </button>
              </div>
            </div>

            {/* Right Filter Sidebar */}
            <aside className="w-full border border-[rgba(35,31,32,0.08)] bg-white px-8 py-6 lg:w-[360px] lg:shrink-0">
              <p className="text-[14px] uppercase leading-[1.57] tracking-[0.14em] text-[#a8996e]">
                FILTER
              </p>
              <div className="mt-4 flex flex-col gap-4">
                {years.map((year) => (
                  <button
                    key={year.label}
                    type="button"
                    onClick={() => setActiveYear(year.label)}
                    className={`flex items-center justify-between text-left transition ${
                      activeYear === year.label ? "text-[#001625]" : "text-[#8e9590] hover:text-[#231f20]"
                    }`}
                  >
                    <span className="text-[14px] leading-[1.29]">{year.label}</span>
                    <span className="text-[14px] leading-[1.29]">{year.count}</span>
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="mt-6 flex items-center gap-2 text-[14px] leading-[1.29] text-[#8e9590] transition hover:text-[#231f20]"
              >
                <span>View More</span>
                <ChevronDownIcon className="h-[6px] w-[8px]" />
              </button>
            </aside>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001e1e] text-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-10 md:px-8 lg:px-[80px]">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-center lg:gap-8">
            <div className="relative h-[52px] w-[227px] shrink-0">
              <Image src="/demo2/sjm-logo.png" alt="SJM Holdings" fill sizes="227px" className="object-contain" />
            </div>
            <div className="hidden h-10 w-px bg-white/10 lg:block" />
            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
              {brandLogos.map((brand) => (
                <div key={brand.alt} className="relative h-[80px] w-[80px] md:h-[100px] md:w-[100px]">
                  <Image src={brand.src} alt={brand.alt} fill sizes="100px" className="object-contain" />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-8 text-center">
            <p className="text-[12px] leading-6 tracking-[0.02em] text-[#a78a5d]">Privacy Statement &amp; Disclaimer</p>
            <p className="text-[12px] leading-6 tracking-[0.02em] text-white">Copyright 2026 © SJM Holdings Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
