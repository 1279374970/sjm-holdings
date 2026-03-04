"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const featuredNews = {
  date: "25 Feb 2026",
  title: "SJM Sends New Year Spring Blessings to the Community",
  href: "/demo2/news",
};

const newsItems = [
  {
    id: 1,
    date: "24 Feb 2026",
    title: "SJM Rings in the Chinese New Year with Auspicious Lion Dance Parades",
  },
  {
    id: 2,
    date: "22 Feb 2026",
    title: "SJM Leads Asian Wine Scene with Seven Awards at Star Wine List 2026",
  },
  {
    id: 3,
    date: "11 Feb 2026",
    title: "SJM's Grand Lisboa Palace Resort Macau Becomes the Only Integrated Resort in the World with All Hotels Forbes Travel Guide Five-Star Rated",
  },
  {
    id: 4,
    date: "04 Feb 2026",
    title: "SJM Presents Macau Debut of World-Renowned Magician and Mentalist Drummond Money-Coutts",
  },
  {
    id: 5,
    date: "28 Jan 2026",
    title: "SJM Volunteer Team 10th Anniversary Celebration Dinner | A Decade of Unity and Giving Back",
  },
  {
    id: 6,
    date: "15 Jan 2026",
    title: "SJM Supports the USJ SDG Week 2026 to Explore the Future of Sustainable Development",
  },
  {
    id: 7,
    date: "08 Jan 2026",
    title: "SJM Holdings Reports Record Visitor Engagement Across Grand Lisboa Palace Resort Macau",
  },
  {
    id: 8,
    date: "02 Jan 2026",
    title: "SJM Holdings Announces Strategic Expansion Plan for Grand Lisboa Palace Phase II",
  },
];

function ChevronDownIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 8 6"
      aria-hidden
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1.25L4 4.75L7 1.25"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon({ className = "" }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      aria-hidden
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6006 0.00976562C11.8284 0.0563748 12 0.258363 12 0.5V10.2558H11V1.70898L1.06055 11.6455L0.707031 11.999L0 11.291L0.353516 10.9375L10.2969 1H1.74023V0H11.5L11.6006 0.00976562Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function LatestNewsSection() {
  const leftRef = useRef(null);
  const scrollRef = useRef(null);
  const [syncHeight, setSyncHeight] = useState(0);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(true);

  useEffect(() => {
    if (!leftRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      setSyncHeight(entry.contentRect.height);
    });
    ro.observe(leftRef.current);
    return () => ro.disconnect();
  }, []);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollUp(el.scrollTop > 1);
    setCanScrollDown(el.scrollTop + el.clientHeight < el.scrollHeight - 1);
  }, []);

  useEffect(() => {
    updateScrollState();
  }, [syncHeight, updateScrollState]);

  const scrollPage = useCallback(
    (direction) => {
      const el = scrollRef.current;
      if (!el) return;
      el.scrollBy({
        top: direction * el.clientHeight,
        behavior: "smooth",
      });
    },
    [],
  );

  return (
    <>
      <h2 className="font-petrona text-4xl font-extralight tracking-[-0.00875em] text-[#001625] lg:text-[48px] lg:leading-[1.128em]">
        Latest News
      </h2>

      <div className="grid gap-5 lg:grid-cols-[1fr_1fr] lg:gap-[32px]">
        <article ref={leftRef} className="aspect-20/17">
          <Link
            href={featuredNews.href}
            className="group relative block h-full overflow-hidden"
          >
            <Image
              src="/demo2/news-main.jpg"
              alt="Latest news highlight"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute bottom-[20px] left-[20px] right-[20px] bg-[#004433] p-[20px] text-white md:right-auto md:w-[476px]">
              <p className="text-[15px] font-semibold uppercase leading-[1.2em] tracking-[0.02em]">
                {featuredNews.date}
              </p>
              <p className="mt-[16px] font-petrona text-[20px] font-extralight leading-[1.4em]">
                {featuredNews.title}
              </p>
            </div>
          </Link>
        </article>

        <div
          ref={scrollRef}
          className="flex flex-col gap-[12px] overflow-y-auto scrollbar-hide"
          style={syncHeight ? { height: syncHeight } : { height: 420 }}
          onScroll={updateScrollState}
        >
          {newsItems.map((item) => (
            <Link
              key={item.id}
              href="/announcements/1"
              className="group flex shrink-0 flex-col gap-[16px] rounded-[2px] bg-white p-[20px] transition-colors duration-200 hover:bg-[#f0efea]"
            >
              <p className="text-[13px] font-semibold uppercase leading-[1.22em] tracking-[0.02em] text-[#001625]">
                {item.date}
              </p>
              <div className="flex items-end gap-[24px]">
                <p className="flex-1 font-petrona text-[20px] font-extralight leading-[1.4em] text-[#141414]">
                  {item.title}
                </p>
                <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center bg-[#004433] text-white transition-colors duration-200 group-hover:bg-[#005840]">
                  <ArrowIcon className="h-3 w-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-end gap-[16px]">
        <button
          type="button"
          onClick={() => scrollPage(-1)}
          disabled={!canScrollUp}
          className="flex h-[46px] w-[46px] items-center justify-center border border-[#001625] text-[#001625] transition hover:bg-[#001625] hover:text-white disabled:cursor-not-allowed disabled:border-[#cccac4] disabled:text-[#7b7770] disabled:hover:bg-transparent disabled:hover:text-[#7b7770]"
          aria-label="Previous page"
        >
          <ChevronDownIcon className="h-[6px] w-[10px] rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => scrollPage(1)}
          disabled={!canScrollDown}
          className="flex h-[46px] w-[46px] items-center justify-center border border-[#001625] text-[#001625] transition hover:bg-[#001625] hover:text-white disabled:cursor-not-allowed disabled:border-[#cccac4] disabled:text-[#7b7770] disabled:hover:bg-transparent disabled:hover:text-[#7b7770]"
          aria-label="Next page"
        >
          <ChevronDownIcon className="h-[6px] w-[10px]" />
        </button>
        <Link
          href="/demo2/news"
          className="inline-flex h-[46px] items-center border border-[#001625] px-[16px] text-[14.3px] font-medium leading-[1.4em] text-[#001625] transition hover:bg-[#001625] hover:text-white"
        >
          See All News
        </Link>
      </div>
    </>
  );
}
