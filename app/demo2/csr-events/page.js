"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Demo2Header from "../Header";

const csrEvents = [
  {
    id: "1",
    date: "24 Feb 2026",
    title:
      "SJM Joins Hands with the Community to Celebrate the Year of the Horse",
    description:
      'As the Lunar New Year ushers in the Year of the Horse, SJM Resorts, S.A. (\u201cSJM\u201d) continues its community commitment with a vibrant series of celebrations. Living up to its philosophy of giving back to society, SJM collaborated with local welfare organisations throughout January and February to bring festive joy to the community. The initiatives encompassed family-oriented activities, cultural celebrations and community outreach programs, bringing communities together while preserving cherished traditions and strengthening family bonds.',
    image: "/demo2/csr-1.jpg",
  },
  {
    id: "2",
    date: "24 Feb 2026",
    title:
      "SJM Volunteer Team 10th Anniversary Celebration Dinner | A Decade of Unity and Giving Back",
    description:
      'SJM Resorts, S.A. (\u201cSJM\u201d) hosted a celebration dinner to mark the 10th anniversary of its Volunteer Team, recognising 204 outstanding volunteers. Ms. Angela Leong, Director of SJM, Chairman of the Staff Welfare Consultative Committee and the Head of the Volunteer Team, presented the awards expressing the company\u2019s heartfelt appreciation for the team\u2019s selfless dedication.',
    image: "/demo2/csr-2.jpg",
  },
  {
    id: "3",
    date: "24 Feb 2026",
    title:
      "SJM Supports the USJ SDG Week 2026 to Explore the Future of Sustainable Development",
    description:
      'SJM Resorts, S.A. ("SJM") is honored to have been invited to the Opening Seminar of the \u201cUSJ SDG Week 2026\u201d, joining experts from UNU Macao and the University of Saint Joseph and industry peers to explore the future of sustainable development.',
    image: "/demo2/csr-3.jpg",
  },
  {
    id: "4",
    date: "24 Feb 2026",
    title:
      '\u201cSJM Talent Development Programme\u201d Graduation Ceremony Highlights Local Talent Development Achievements',
    description:
      'SJM Resorts, S.A. (\u201cSJM\u201d) hosted the graduation ceremony for its \u201cSJM Talent Development Programme\u201d at Grand Lisboa Palace Resort Macau. The ceremony celebrated the successful career transitions of participating employees, showcasing SJM\u2019s significant achievements in supporting economic diversification and local talent development.',
    image: "/demo2/csr-4.jpg",
  },
  {
    id: "5",
    date: "24 Feb 2026",
    title: "SJM Sends New Year Spring Blessings to the Community",
    description:
      'SJM Resorts, S.A. (\u201cSJM\u201d) hosted the graduation ceremony for its \u201cSJM Talent Development Programme\u201d at Grand Lisboa Palace Resort Macau. The ceremony celebrated the successful career transitions of participating employees, showcasing SJM\u2019s significant achievements in supporting economic diversification and local talent development.',
    image: "/demo2/csr-5.jpg",
  },
  {
    id: "6",
    date: "24 Feb 2026",
    title:
      'Parent-Child Co-learning: \u201cThe Lisboa, Stories of Macau\u201d Exhibition & Workshop',
    description:
      'As the Lunar New Year ushers in the Year of the Horse, SJM Resorts, S.A. (\u201cSJM\u201d) continues its community commitment with a vibrant series of celebrations. Living up to its philosophy of giving back to society, SJM collaborated with local welfare organisations throughout January and February to bring festive joy to the community.',
    image: "/demo2/csr-6.jpg",
  },
  {
    id: "7",
    date: "24 Feb 2026",
    title: "SJM Donates Supplies to Social Service Organisations",
    description:
      'As the Lunar New Year ushers in the Year of the Horse, SJM Resorts, S.A. (\u201cSJM\u201d) continues its community commitment with a vibrant series of celebrations. Living up to its philosophy of giving back to society, SJM collaborated with local welfare organisations throughout January and February to bring festive joy to the community.',
    image: "/demo2/csr-7.jpg",
  },
  {
    id: "8",
    date: "24 Feb 2026",
    title:
      'SJM Receives \u201cThe Best Companion for Teenagers\u201d and \u201cThe Friendly Enterprise Supporting Teenagers Franchise Merchants\u201d Awards',
    description:
      'As the Lunar New Year ushers in the Year of the Horse, SJM Resorts, S.A. (\u201cSJM\u201d) continues its community commitment with a vibrant series of celebrations. Living up to its philosophy of giving back to society, SJM collaborated with local welfare organisations throughout January and February to bring festive joy to the community.',
    image: "/demo2/csr-8.jpg",
  },
  {
    id: "9",
    date: "24 Feb 2026",
    title:
      'SJM Awards Championship at the \u201cMSO Bowling Contest \u2013 Inclusive Group Tournament\u201d',
    description:
      'As the Lunar New Year ushers in the Year of the Horse, SJM Resorts, S.A. (\u201cSJM\u201d) continues its community commitment with a vibrant series of celebrations. Living up to its philosophy of giving back to society, SJM collaborated with local welfare organisations throughout January and February to bring festive joy to the community.',
    image: "/demo2/csr-9.jpg",
  },
  {
    id: "10",
    date: "24 Feb 2026",
    title: 'SJM Hosts \u201cParent\u2011Child Floor Curling Experience Day\u201d',
    description:
      'As the Lunar New Year ushers in the Year of the Horse, SJM Resorts, S.A. (\u201cSJM\u201d) continues its community commitment with a vibrant series of celebrations. Living up to its philosophy of giving back to society, SJM collaborated with local welfare organisations throughout January and February to bring festive joy to the community.',
    image: "/demo2/csr-10.jpg",
  },
];

const BASE_EVENTS = csrEvents;
const allEvents = Array.from({ length: 5 }, (_, p) =>
  BASE_EVENTS.map((item) => ({
    ...item,
    id: String(Number(item.id) + p * BASE_EVENTS.length),
  })),
).flat();

const yearFilters = [
  { name: "All", count: 59 },
  { name: "2026", count: 4 },
  { name: "2025", count: 16 },
  { name: "2024", count: 19 },
  { name: "2023", count: 27 },
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

function ChevronDownIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.17"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ITEMS_PER_PAGE = 10;
const TOTAL_PAGES = Math.ceil(allEvents.length / ITEMS_PER_PAGE);

export default function CsrEventsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeYear, setActiveYear] = useState("All");
  const visibleEvents = allEvents.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <main className="min-h-screen bg-[#f7f6f0] font-sans text-[#231f20]">
      <Demo2Header />

      <section className="bg-[#f7f6f0]">
        <div className="relative h-[240px] w-full md:h-[380px] lg:h-[575px]">
          <Image
            src="/demo2/csr-hero.jpg"
            alt="CSR Events"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="relative z-10 -mt-[70px] px-4 md:px-8 lg:px-[40px]">
          <div className="bg-white px-4 py-10 md:px-8 lg:px-[60px] lg:py-[40px]">
            <h1 className="font-petrona text-[36px] font-extralight leading-[1em] tracking-[-0.047em] text-black md:text-[48px]">
              CSR Events
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f6f0]">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-10 md:px-8 lg:px-[100px] lg:py-[40px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-[40px]">
            <div className="flex flex-1 flex-col gap-[40px]">
              <div className="flex flex-col gap-[20px]">
                {visibleEvents.map((item, idx) => (
                  <div key={item.id}>
                    <Link
                      href={`/demo2/csr-events/${item.id}`}
                      className="flex flex-col gap-[20px] rounded-[2px] transition-colors hover:bg-[#f0efea] sm:flex-row"
                    >
                      <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden sm:aspect-auto sm:h-auto sm:w-[200px]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 200px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-[8px]">
                        <p className="text-[13.1px] font-semibold uppercase leading-[1.22em] tracking-[0.021em] text-[#001625]">
                          {item.date}
                        </p>
                        <p className="font-petrona text-[20px] font-extralight leading-[1.4em] text-[#141414]">
                          {item.title}
                        </p>
                        <p className="text-[14px] leading-[1.625em] text-[#231f20]">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                    {idx < visibleEvents.length - 1 && (
                      <div className="mt-[20px] h-px bg-[rgba(35,31,32,0.06)]" />
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

                {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map(
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
                    setCurrentPage((p) => Math.min(TOTAL_PAGES, p + 1))
                  }
                >
                  <ChevronRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="w-full lg:w-[280px] lg:shrink-0">
              <div className="border border-[rgba(35,31,32,0.08)] p-[24px]">
                <p className="text-[12px] uppercase leading-[1.5em] tracking-[0.225em] text-[#a8996e]">
                  PUBLISHED YEAR
                </p>

                <div className="mt-[20px] flex flex-col gap-[16px]">
                  {yearFilters.map((item, idx) => (
                    <div key={item.name}>
                      {idx > 0 && (
                        <div className="mb-[16px] h-px bg-[rgba(35,31,32,0.06)]" />
                      )}
                      <button
                        type="button"
                        className="flex w-full items-center gap-[8px] transition"
                        onClick={() => setActiveYear(item.name)}
                      >
                        <span
                          className={`flex-1 text-left text-[14px] leading-[1.29em] transition ${
                            activeYear === item.name
                              ? "font-medium text-[#231f20]"
                              : "text-[#231f20] hover:opacity-70"
                          }`}
                        >
                          {item.name}
                        </span>
                        <span className="text-[14px] font-medium leading-[1.29em] text-[#8e9590]">
                          {item.count}
                        </span>
                        <FilterArrowIcon className="h-[14px] w-[14px] shrink-0 text-[rgba(35,31,32,0.2)]" />
                      </button>
                    </div>
                  ))}

                  <div className="h-px bg-[rgba(35,31,32,0.06)]" />
                  <button
                    type="button"
                    className="flex w-full items-center justify-center gap-[8px] text-[14px] leading-[1.29em] text-[#8e9590] transition hover:text-[#231f20]"
                  >
                    <span>View More</span>
                    <ChevronDownIcon className="h-4 w-4" />
                  </button>
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
