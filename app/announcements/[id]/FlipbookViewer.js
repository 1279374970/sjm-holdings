"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const DEARFLIP_CSS_SRC = "/vendor/dearflip/css/dflip.min.css";
const THEMIFY_ICONS_CSS_SRC = "/vendor/dearflip/css/themify-icons.min.css";
const DEARFLIP_JQUERY_SRC = "/vendor/dearflip/js/libs/jquery.min.js";
const DEARFLIP_CORE_SRC = "/vendor/dearflip/js/dflip.min.js";

function ensureStyleSheet(id, href) {
  if (document.getElementById(id)) return;
  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

function loadScript({ id, src, isReady }) {
  return new Promise((resolve, reject) => {
    if (isReady()) {
      resolve();
      return;
    }
    const existing = document.getElementById(id);
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)), { once: true });
      return;
    }
    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.async = true;
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)), { once: true });
    document.body.appendChild(script);
  });
}

function CloseIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M3 3L13 13M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function FlipbookViewer() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    async function initFlipbook() {
      try {
        ensureStyleSheet("ann-dflip-css", DEARFLIP_CSS_SRC);
        ensureStyleSheet("ann-themify-icons", THEMIFY_ICONS_CSS_SRC);

        await loadScript({
          id: "ann-dflip-jquery",
          src: DEARFLIP_JQUERY_SRC,
          isReady: () => Boolean(window.jQuery),
        });

        window.dFlipLocation = "/vendor/dearflip/";
        window.DEARVIEWER_LOCATION = "/vendor/dearflip/";

        await loadScript({
          id: "ann-dflip-core",
          src: DEARFLIP_CORE_SRC,
          isReady: () => Boolean(window.jQuery?.fn?.flipBook),
        });

        const el = document.getElementById("announcementBook");
        if (el && el.dataset.initialized !== "true") {
          window.jQuery(el).flipBook("/pdf/demo3.pdf", {
            webgl: false,
            soundEnable: false,
            autoEnableOutline: false,
            height: "100%",
          });
          el.dataset.initialized = "true";
        }

        if (!cancelled) setStatus("ready");
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    initFlipbook();
    return () => { cancelled = true; };
  }, []);

  return (
    <main className="fixed inset-0 z-0 flex flex-col bg-[#1a1a1a]">
      {/* Top bar */}
      <div className="relative z-10 flex h-[56px] shrink-0 items-center justify-between border-b border-white/10 bg-[#001e1e] px-5 sm:px-8">
        <p className="truncate pr-4 text-[13px] leading-[18px] text-white/70 sm:text-[14px]">
          Announcement Document Viewer
        </p>
        <Link
          href="/announcements"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-white/40 hover:text-white"
          aria-label="Close and go back"
        >
          <CloseIcon className="h-4 w-4" />
        </Link>
      </div>

      {/* Flipbook fullscreen area */}
      <div className="relative flex-1">
        <div id="announcementBook" className="absolute inset-0" />

        {status === "loading" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-[#a8996e]" />
              <p className="text-[13px] text-white/50">Loading document...</p>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3 text-center">
              <p className="text-[14px] text-red-400">Failed to load document viewer.</p>
              <Link
                href="/announcements"
                className="text-[13px] text-[#a8996e] underline underline-offset-2 transition hover:text-white"
              >
                Back to announcements
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
