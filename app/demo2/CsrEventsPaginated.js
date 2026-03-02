"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const csrItems = [
  {
    date: "10 Dec 2025",
    title: "SJM joins hands with the community to celebrate the Year of the Horse",
    image: "/demo2/csr-1.jpg",
  },
  {
    date: "10 Dec 2025",
    title: "SJM Volunteer Team 10th Anniversary Celebration Dinner",
    image: "/demo2/csr-2.jpg",
  },
  {
    date: "10 Dec 2025",
    title: "SJM Talent Development Programme Graduation Ceremony",
    image: "/demo2/csr-3.jpg",
  },
  {
    date: "18 Nov 2025",
    title: "SJM Partners with Local NGOs for Community Outreach Programme",
    image: "/demo2/csr-1.jpg",
  },
  {
    date: "05 Nov 2025",
    title: "Grand Lisboa Palace Resort Hosts Annual Charity Gala for Education Fund",
    image: "/demo2/csr-2.jpg",
  },
  {
    date: "22 Oct 2025",
    title: "SJM Environmental Sustainability Initiative: Clean Macau Campaign 2025",
    image: "/demo2/csr-3.jpg",
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
const TRANSITION_MS = 240;

export default function CsrEventsPaginated() {
  const [page, setPage] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [phase, setPhase] = useState("idle"); // "idle" | "out" | "in"
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = back

  const totalPages = Math.ceil(csrItems.length / ITEMS_PER_PAGE);
  const visibleItems = csrItems.slice(
    page * ITEMS_PER_PAGE,
    (page + 1) * ITEMS_PER_PAGE,
  );

  const changePage = useCallback(
    (newPage, dir) => {
      if (animating || newPage === page) return;
      setDirection(dir);
      setAnimating(true);
      setPhase("out");
      setTimeout(() => {
        setPage(newPage);
        setPhase("in");
        setTimeout(() => {
          setPhase("idle");
          setAnimating(false);
        }, TRANSITION_MS);
      }, TRANSITION_MS);
    },
    [animating, page],
  );

  const gridStyle = {
    transition: `opacity ${TRANSITION_MS}ms ease, transform ${TRANSITION_MS}ms ease`,
    opacity: phase === "out" ? 0 : 1,
    transform:
      phase === "out"
        ? `translateX(${direction > 0 ? "-40px" : "40px"})`
        : phase === "in"
          ? `translateX(${direction > 0 ? "40px" : "-40px"})`
          : "translateX(0)",
  };

  return (
    <>
      <div
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        style={gridStyle}
      >
        {visibleItems.map((item) => (
          <Link
            key={item.title}
            href="/demo2/csr-events/1"
            className="group relative block min-h-[320px] overflow-hidden lg:min-h-[356px]"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <div className="absolute inset-x-5 bottom-5 bg-white p-5 text-[#141414]">
              <p className="text-[13px] font-semibold uppercase leading-4 tracking-[0.02em] text-[#001625]">
                {item.date}
              </p>
              <p className="mt-4 font-petrona text-[20px] font-extralight leading-[28px]">
                {item.title}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-end gap-4">
        <button
          type="button"
          onClick={() => changePage(Math.max(0, page - 1), -1)}
          disabled={page === 0 || animating}
          className="flex h-[46px] w-[46px] items-center justify-center border border-white/50 text-white/70 transition hover:border-white hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Previous CSR event"
        >
          <ArrowRightIcon className="h-[10px] w-[6px] rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => changePage(Math.min(totalPages - 1, page + 1), 1)}
          disabled={page === totalPages - 1 || animating}
          className="flex h-[46px] w-[46px] items-center justify-center border border-white text-white transition hover:bg-white hover:text-[#001625] disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Next CSR event"
        >
          <ArrowRightIcon className="h-[10px] w-[6px]" />
        </button>
        <Link
          href="/demo2/csr-events"
          className="inline-flex h-[46px] items-center border border-white px-[17px] text-[14px] font-medium leading-5 text-white transition hover:bg-white hover:text-[#001625]"
        >
          See All Events
        </Link>
      </div>
    </>
  );
}
