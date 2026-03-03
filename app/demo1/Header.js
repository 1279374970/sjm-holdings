"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "About us" },
  { label: "Properties", href: "/properties" },
  { label: "Media releases" },
  { label: "Investor relations" },
  { label: "Environment, Social and Governance" },
  { label: "Career" },
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

function CloseIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M1 1L13 13M13 1L1 13"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header({ logoSrc }) {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchInputRef = useRef(null);

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
          backgroundColor: useLightTheme ? "#f7f6f0" : "rgba(0,30,30,0.5)",
          backdropFilter: useLightTheme ? "none" : "blur(10px)",
          WebkitBackdropFilter: useLightTheme ? "none" : "blur(5px)",
          boxShadow: showShadow ? "0 0 10px rgba(0,0,0,0.3)" : "none",
          transition: TRANSITION,
        }}
        onMouseEnter={() => setIsNavHovered(true)}
        onMouseLeave={() => setIsNavHovered(false)}
      >
        <div className="mx-auto flex h-full w-full max-w-[1680px] items-center justify-between px-5 sm:px-8 lg:px-[60px] xl:px-[120px]">
          <Link href="/demo1" className="relative block h-9 w-[157px]">
            <Image
              src={logoSrc}
              alt="SJM Holdings"
              fill
              priority
              sizes="157px"
              className="object-contain object-left"
              style={{
                opacity: useLightTheme ? 0 : 1,
                transition: TRANSITION,
              }}
            />
            <Image
              src="/demo1/sjm-logo-active.png"
              alt="SJM Holdings"
              fill
              sizes="157px"
              className="object-contain object-left"
              style={{
                opacity: useLightTheme ? 1 : 0,
                transition: TRANSITION,
              }}
            />
          </Link>

          {isSearchOpen ? (
            <>
              <div
                className="hidden flex-1 items-center justify-end lg:flex"
                style={{ color: useLightTheme ? "#3f4644" : "white", transition: TRANSITION }}
              >
                <div className="mr-4 flex h-10 items-center gap-2.5">
                  <SearchIcon className="h-[14px] w-[14px] shrink-0" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="PLEASE INPUT KEYWORDS TO SEARCH"
                    className="search-input w-[280px] bg-transparent text-[14px] leading-[19.2px] outline-none"
                    style={{
                      color: "inherit",
                      "--search-placeholder": useLightTheme ? "rgba(63,70,68,0.4)" : "rgba(255,255,255,0.4)",
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Escape") setIsSearchOpen(false);
                      if (e.key === "Enter" && e.currentTarget.value.trim()) {
                        window.location.href = `/search?q=${encodeURIComponent(e.currentTarget.value.trim())}`;
                      }
                    }}
                    onBlur={() => setIsSearchOpen(false)}
                  />
                </div>
              </div>

              <div className="flex items-center">
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
                  中文
                </button>
              </div>
            </>
          ) : (
            <>
              <nav className="hidden items-center gap-[21.6px] xl:flex">
                {navItems.map((item) => {
                  const Tag = item.href ? "a" : "button";
                  const extraProps = item.href
                    ? { href: item.href }
                    : { type: "button" };
                  return (
                    <Tag
                      key={item.label}
                      {...extraProps}
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
                      {item.label}
                    </Tag>
                  );
                })}
                <button
                  type="button"
                  className="flex items-center gap-2 px-1 text-[14px] uppercase leading-[19.2px]"
                  style={{ color: textColor, transition: TRANSITION }}
                  onClick={() => {
                    setIsSearchOpen(true);
                    setTimeout(() => searchInputRef.current?.focus(), 50);
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
                  中文
                </button>
              </nav>

              <button
                type="button"
                className="cursor-pointer px-4 py-3 xl:hidden"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="none" aria-hidden="true">
                  <g clipPath="url(#hamburger-a)">
                    <path
                      d="M0 3.5c0-.553.447-1 1-1h12a.999.999 0 1 1 0 2H1c-.553 0-1-.447-1-1m2 5c0-.553.447-1 1-1h12a.999.999 0 1 1 0 2H3c-.553 0-1-.447-1-1m12 5c0 .553-.447 1-1 1H1a.999.999 0 1 1 0-2h12c.553 0 1 .447 1 1"
                      fill={useLightTheme ? "#3f4644" : "white"}
                      style={{ transition: TRANSITION }}
                    />
                  </g>
                  <defs>
                    <clipPath id="hamburger-a">
                      <path fill="#fff" d="M0 .5h16v16H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </>
          )}
        </div>
      </div>

      {/* ── Mobile Menu Drawer ── */}
      <div
        className="fixed inset-0 z-60 xl:hidden"
        style={{
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/50"
          style={{
            opacity: isMobileMenuOpen ? 1 : 0,
            transition: "opacity 300ms ease",
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className="absolute bottom-0 right-0 top-0 flex w-[300px] max-w-[85vw] flex-col bg-[#001e1e]"
          style={{
            transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
            <span className="text-[14px] uppercase tracking-[2px] text-white/60">
              {/* Menu */}
            </span>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center text-white/60 transition hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <CloseIcon className="h-3.5 w-3.5" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col overflow-y-auto px-6 py-4">
            {navItems.map((item) => {
              const Tag = item.href ? "a" : "button";
              const extraProps = item.href
                ? { href: item.href }
                : { type: "button" };
              return (
                <Tag
                  key={item.label}
                  {...extraProps}
                  className="border-b border-white/5 py-4 text-left text-[14px] uppercase leading-[20px] text-white/80 transition hover:text-[#a8996e]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Tag>
              );
            })}
          </nav>

          <div className="flex flex-col gap-4 border-t border-white/10 px-6 py-5">
            <button
              type="button"
              className="flex items-center gap-2 text-[14px] uppercase leading-[19.2px] text-white/80 transition hover:text-[#a8996e]"
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.location.href = "/search";
              }}
            >
              <SearchIcon className="h-[15px] w-[15px]" />
              Search
            </button>
            <button
              type="button"
              className="flex items-center gap-2 text-[14px] uppercase leading-[19.2px] text-white/80 transition hover:text-[#a8996e]"
            >
              <GlobeIcon className="h-[14px] w-[14px]" />
              中文
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
