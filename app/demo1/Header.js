"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const navItems = [
  "About us",
  "Properties",
  "Media releases",
  "Investor relations",
  "Environment, Social and Governance",
  "Career",
];

function SearchIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="6.5"
        cy="6.5"
        r="5"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M10.5 10.5L13.5 13.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GlobeIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.1" />
      <ellipse
        cx="7"
        cy="7"
        rx="2.8"
        ry="5.5"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path d="M1.5 7H12.5" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

const TRANSITION = "all 500ms cubic-bezier(0.4, 0, 0.2, 1)";

export default function Header({ logoSrc }) {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);

  const lastScrollTopRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;

      requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const lastScrollTop = lastScrollTopRef.current;

        if (Math.abs(scrollTop - lastScrollTop) < 5) {
          tickingRef.current = false;
          return;
        }

        const goingUp = scrollTop < lastScrollTop;

        if (scrollTop <= 15) {
          setIsAtTop(true);
          setIsTopBarVisible(true);
        } else {
          setIsAtTop(false);
          if (goingUp) {
            setIsTopBarVisible(true);
          } else if (scrollTop >= 30) {
            setIsTopBarVisible(false);
          }
        }

        setIsScrollingUp(goingUp);
        lastScrollTopRef.current = scrollTop;
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const useLightTheme = !isAtTop || isNavHovered;
  const navHeight = isAtTop ? 100 : 70;
  const showShadow = !isAtTop && !isScrollingUp;

  const textColor = useLightTheme ? "#3f4644" : "rgba(255,255,255,0.8)";
  const textHoverColor = "#a8996e";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* ── Top Bar (Stock Ticker) ── */}
      <div
        className="overflow-hidden bg-[#001c1c]"
        style={{
          height: isTopBarVisible ? 40 : 0,
          borderBottom: isTopBarVisible
            ? "1px solid rgba(168,153,110,0.2)"
            : "none",
          transition: TRANSITION,
        }}
      >
        <div className="mx-auto flex h-10 w-full max-w-[1680px] items-center justify-between px-5 sm:px-8 lg:px-[60px] xl:px-[120px]">
          <div className="flex items-center gap-4 text-[13px] uppercase leading-[19.2px] tracking-[0.32px]">
            <span className="text-white/80">HKEX</span>
            <span className="hidden text-white sm:inline">00880.HK</span>
            <span className="hidden text-white sm:inline">HK$3.850</span>
            <span className="flex items-center gap-1.5 text-[#00a76d]">
              <svg
                viewBox="0 0 10 8"
                fill="currentColor"
                className="h-2 w-2.5"
                aria-hidden="true"
              >
                <path d="M5 0L10 8H0L5 0Z" />
              </svg>
              +0.050(+1.32%)
            </span>
          </div>
          <div className="flex items-center gap-2 text-[12px] leading-[16px] tracking-[0.3px] text-white">
            <span className="h-1 w-1 rounded-full bg-[#00a76d]" />
            <span>16:08 HKT · 15-min delayed</span>
          </div>
        </div>
      </div>

      {/* ── Main Nav Bar ── */}
      <div
        style={{
          height: navHeight,
          backgroundColor: useLightTheme ? "#f7f6f0" : "rgba(0,30,30,0.6)",
          backdropFilter: useLightTheme ? "none" : "blur(5px)",
          WebkitBackdropFilter: useLightTheme ? "none" : "blur(5px)",
          boxShadow: showShadow ? "0 0 10px rgba(0,0,0,0.3)" : "none",
          transition: TRANSITION,
        }}
        onMouseEnter={() => setIsNavHovered(true)}
        onMouseLeave={() => setIsNavHovered(false)}
      >
        <div className="mx-auto flex h-full w-full max-w-[1680px] items-center justify-between px-5 sm:px-8 lg:px-[60px] xl:px-[120px]">
          <div className="relative h-9 w-[157px]">
            <Image
              src={logoSrc}
              alt="SJM Holdings"
              fill
              priority
              sizes="157px"
              className="object-contain object-left"
              style={{
                filter: useLightTheme ? "brightness(0)" : "none",
                transition: TRANSITION,
              }}
            />
          </div>

          <nav className="hidden items-center gap-[21.6px] xl:flex">
            {navItems.map((item) => (
              <button
                type="button"
                key={item}
                className="px-1 text-[14px] uppercase leading-[19.2px]"
                style={{
                  color: textColor,
                  transition: TRANSITION,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = textHoverColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = textColor;
                }}
              >
                {item}
              </button>
            ))}
            <button
              type="button"
              className="flex items-center gap-2 px-1 text-[14px] uppercase leading-[19.2px]"
              style={{ color: textColor, transition: TRANSITION }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = textHoverColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = textColor;
              }}
            >
              <SearchIcon className="h-[15px] w-[15px]" />
              Search
            </button>
            <button
              type="button"
              className="flex items-center gap-2 px-1 text-[14px] uppercase leading-[19.2px]"
              style={{ color: textColor, transition: TRANSITION }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = textHoverColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = textColor;
              }}
            >
              <GlobeIcon className="h-[14px] w-[14px]" />
              EN
            </button>
          </nav>

          <button
            type="button"
            className="rounded-full px-4 py-1.5 text-[12px] uppercase tracking-wider xl:hidden"
            style={{
              color: useLightTheme ? "#3f4644" : "white",
              borderColor: useLightTheme
                ? "rgba(63,70,68,0.25)"
                : "rgba(255,255,255,0.25)",
              borderWidth: 1,
              borderStyle: "solid",
              transition: TRANSITION,
            }}
          >
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}
