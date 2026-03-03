"use client";

import { useState, useRef } from "react";
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

const ITEMS_PER_PAGE = 3;
const DRAG_THRESHOLD = 50;

export default function CsrEventsPaginated() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(csrItems.length / ITEMS_PER_PAGE);

  const dragStartX = useRef(null);
  const dragDelta = useRef(0);
  const isDragging = useRef(false);

  const goNext = () => setPage((p) => Math.min(totalPages - 1, p + 1));
  const goPrev = () => setPage((p) => Math.max(0, p - 1));

  /* ── pointer drag (desktop + touch) ── */
  const onPointerDown = (e) => {
    dragStartX.current = e.clientX;
    dragDelta.current = 0;
    isDragging.current = false;
  };

  const onPointerMove = (e) => {
    if (dragStartX.current === null) return;
    dragDelta.current = e.clientX - dragStartX.current;
    if (Math.abs(dragDelta.current) > 8) isDragging.current = true;
  };

  const onPointerUp = () => {
    if (dragStartX.current === null) return;
    if (isDragging.current) {
      if (dragDelta.current < -DRAG_THRESHOLD) goNext();
      else if (dragDelta.current > DRAG_THRESHOLD) goPrev();
    }
    dragStartX.current = null;
    dragDelta.current = 0;
    isDragging.current = false;
  };

  /* prevent link click when user was dragging */
  const onLinkClick = (e) => {
    if (isDragging.current) e.preventDefault();
  };

  return (
    <>
      {/* Swiper track */}
      <div
        className="overflow-hidden"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        style={{ cursor: "grab", userSelect: "none" }}
      >
        <div
          className="flex"
          style={{
            transform: `translateX(-${page * 100}%)`,
            transition: "transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          {Array.from({ length: totalPages }, (_, pageIdx) => {
            const pageItems = csrItems.slice(
              pageIdx * ITEMS_PER_PAGE,
              (pageIdx + 1) * ITEMS_PER_PAGE,
            );
            return (
              <div
                key={pageIdx}
                className="grid w-full shrink-0 gap-[20px] md:grid-cols-2 xl:grid-cols-3"
              >
                {pageItems.map((item) => (
                  <Link
                    key={item.title}
                    href="/demo2/csr-events/1"
                    onClick={onLinkClick}
                    className="group relative flex min-h-[320px] flex-col overflow-hidden p-[20px] lg:min-h-[356px]"
                    draggable={false}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    <div className="relative mt-auto flex flex-col gap-[16px] bg-white p-[20px] text-[#141414]">
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
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-end gap-[16px]">
        {/* Dots */}
        {/* <div className="mr-auto flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              aria-label={`Page ${i + 1}`}
              className="transition-all duration-300"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  i === page
                    ? "h-2 w-6 bg-white"
                    : "h-2 w-2 bg-white/40 hover:bg-white/60"
                }`}
              />
            </button>
          ))}
        </div> */}

        <button
          type="button"
          onClick={goPrev}
          disabled={page === 0}
          className="flex h-[46px] w-[46px] items-center justify-center border border-white text-white transition hover:bg-white hover:text-[#001625] disabled:cursor-not-allowed disabled:border-white/50 disabled:text-white/70 disabled:hover:bg-transparent disabled:hover:text-white/70"
          aria-label="Previous CSR event"
        >
          <ArrowRightIcon className="h-[10px] w-[6px] rotate-180" />
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={page === totalPages - 1}
          className="flex h-[46px] w-[46px] items-center justify-center border border-white text-white transition hover:bg-white hover:text-[#001625] disabled:cursor-not-allowed disabled:opacity-40"
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
