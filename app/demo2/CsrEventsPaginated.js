"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const csrItems = [
  {
    date: "24 Feb 2026",
    title:
      "SJM Joins Hands with the Community to Celebrate the Year of the Horse",
    image: "/demo2/csr-1.jpg",
  },
  {
    date: "24 Feb 2026",
    title:
      "SJM Volunteer Team 10th Anniversary Celebration Dinner | A Decade of Unity and Giving Back",
    image: "/demo2/csr-2.jpg",
  },
  {
    date: "24 Feb 2026",
    title:
      "SJM Supports the USJ SDG Week 2026 to Explore the Future of Sustainable Development",
    image: "/demo2/csr-3.jpg",
  },
  {
    date: "24 Feb 2026",
    title:
      '\u201cSJM Talent Development Programme\u201d Graduation Ceremony Highlights Local Talent Development Achievements',
    image: "/demo2/csr-4.jpg",
  },
  {
    date: "24 Feb 2026",
    title: "SJM Sends New Year Spring Blessings to the Community",
    image: "/demo2/csr-5.jpg",
  },
  {
    date: "24 Feb 2026",
    title:
      'Parent-Child Co-learning: \u201cThe Lisboa, Stories of Macau\u201d Exhibition & Workshop',
    image: "/demo2/csr-6.jpg",
  },
];

function ArrowRightIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 6 10"
      aria-hidden
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.25 1L4.75 5L1.25 9"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CsrEventsPaginated() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => updateScrollState());
    ro.observe(el);
    return () => ro.disconnect();
  }, [updateScrollState]);

  const scrollPage = useCallback((direction) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction * el.clientWidth,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div
        ref={scrollRef}
        className="scrollbar-hide flex gap-[20px] overflow-x-auto"
        onScroll={updateScrollState}
      >
        {csrItems.map((item) => (
          <Link
            key={item.title}
            href="/demo2/csr-events/1"
            className="group relative flex w-[85vw] shrink-0 flex-col overflow-hidden sm:w-[45vw] lg:w-[calc((100%-40px)/3)]"
            draggable={false}
          >
            <div className="relative aspect-448/317 w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                draggable={false}
              />
            </div>
            <div className="flex flex-1 flex-col gap-[16px] bg-white p-[20px] text-[#141414]">
              <p className="text-[13px] font-semibold uppercase leading-[1.23em] tracking-[0.02em] text-[#001625]">
                {item.date}
              </p>
              <p className="line-clamp-2 font-petrona text-[20px] font-extralight leading-[1.4em]">
                {item.title}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-end gap-[16px]">
        <button
          type="button"
          onClick={() => scrollPage(-1)}
          disabled={!canScrollLeft}
          className="flex h-[46px] w-[46px] items-center justify-center border border-white text-white transition hover:bg-white hover:text-[#001625] disabled:cursor-not-allowed disabled:border-white/50 disabled:text-white/70 disabled:hover:bg-transparent disabled:hover:text-white/70"
          aria-label="Previous CSR event"
        >
          <ArrowRightIcon className="h-[10px] w-[6px] rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => scrollPage(1)}
          disabled={!canScrollRight}
          className="flex h-[46px] w-[46px] items-center justify-center border border-white text-white transition hover:bg-white hover:text-[#001625] disabled:cursor-not-allowed disabled:border-white/50 disabled:text-white/70 disabled:hover:bg-transparent disabled:hover:text-white/70"
          aria-label="Next CSR event"
        >
          <ArrowRightIcon className="h-[10px] w-[6px]" />
        </button>
        <Link
          href="/demo2/csr-events"
          className="inline-flex h-[46px] items-center border border-white px-[16px] text-[14.3px] font-medium leading-[1.4em] text-white transition hover:bg-white hover:text-[#001625]"
        >
          See All Events
        </Link>
      </div>
    </>
  );
}
