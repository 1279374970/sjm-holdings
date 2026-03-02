"use client";

import { useState } from "react";
import Link from "next/link";

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
    title:
      "SJM's Grand Lisboa Palace Resort Macau becomes the only integrated resort in the world with all hotels Forbes Five-Star rated",
  },
  {
    id: 4,
    date: "04 Feb 2026",
    title:
      "SJM presents Macau debut of world-renowned magician and mentalist Drummond Money-Coutts",
  },
  {
    id: 5,
    date: "28 Jan 2026",
    title:
      "SJM Holdings Reports Record Visitor Engagement Across Grand Lisboa Palace Resort Macau",
  },
  {
    id: 6,
    date: "15 Jan 2026",
    title:
      "SJM Celebrates 55th Anniversary with a Series of Community and Charity Initiatives",
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

const ITEMS_PER_PAGE = 4;

export default function NewsListPaginated() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(newsItems.length / ITEMS_PER_PAGE);
  const visibleItems = newsItems.slice(
    page * ITEMS_PER_PAGE,
    (page + 1) * ITEMS_PER_PAGE,
  );

  return (
    <>
      <div className="flex flex-col gap-3">
        {visibleItems.map((item) => (
          <Link
            key={item.id}
            href="/demo2/csr-events/1"
            className="group flex flex-col gap-4 bg-white p-5 transition-colors duration-200 hover:bg-[#f7f6f0]"
          >
            <p className="text-[13px] font-semibold uppercase leading-4 tracking-[0.02em] text-[#001625]">
              {item.date}
            </p>
            <div className="flex items-end gap-6">
              <p className="flex-1 font-petrona text-[20px] font-extralight leading-[28px] text-[#141414]">
                {item.title}
              </p>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#004433] text-white transition-colors duration-200 group-hover:bg-[#005840]">
                <ArrowRightIcon className="h-3 w-[7px]" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-end gap-4">
        <button
          type="button"
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
          className="flex h-[46px] w-[46px] items-center justify-center border border-[#cccac4] text-[#7b7770] transition hover:border-[#9f9a91] hover:text-[#4f4c46] disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Previous news"
        >
          <ChevronDownIcon className="h-[6px] w-[10px] rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={page === totalPages - 1}
          className="flex h-[46px] w-[46px] items-center justify-center border border-[#001625] text-[#001625] transition hover:bg-[#001625] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Next news"
        >
          <ChevronDownIcon className="h-[6px] w-[10px]" />
        </button>
        <Link
          href="/demo2/news"
          className="inline-flex h-[46px] items-center border border-[#001625] px-[17px] text-[14px] font-medium leading-5 text-[#001625] transition hover:bg-[#001625] hover:text-white"
        >
          See All News
        </Link>
      </div>
    </>
  );
}
