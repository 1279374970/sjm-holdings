"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const DEARFLIP_CSS_ID = "demo3-dearflip-css";
const DEARFLIP_JQUERY_ID = "demo3-dearflip-jquery";
const DEARFLIP_CORE_ID = "demo3-dearflip-core";

const DEARFLIP_CSS_SRC =
  "/vendor/dearflip/css/dflip.min.css";
const DEARFLIP_JQUERY_SRC =
  "/vendor/dearflip/js/libs/jquery.min.js";
const DEARFLIP_CORE_SRC =
  "/vendor/dearflip/js/dflip.min.js";

function ensureStyleSheet(id, href) {
  if (document.getElementById(id)) {
    return;
  }

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

    const existingScript = document.getElementById(id);
    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener(
        "error",
        () => reject(new Error(`Failed to load ${src}`)),
        { once: true },
      );
      return;
    }

    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.async = true;
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener(
      "error",
      () => reject(new Error(`Failed to load ${src}`)),
      { once: true },
    );
    document.body.appendChild(script);
  });
}

export default function Demo3Page() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    async function initFlipbook() {
      try {
        ensureStyleSheet(DEARFLIP_CSS_ID, DEARFLIP_CSS_SRC);

        await loadScript({
          id: DEARFLIP_JQUERY_ID,
          src: DEARFLIP_JQUERY_SRC,
          isReady: () => Boolean(window.jQuery),
        });

        // DearFlip 2.x resolves internal libs from dFlipLocation.
        window.dFlipLocation = "/vendor/dearflip/";
        window.DEARVIEWER_LOCATION = "/vendor/dearflip/";

        const options = {
          source: "/pdf/demo3.pdf",
          webgl: false,
          soundEnable: false,
          autoEnableOutline: false,
          height: 720,
        };

        await loadScript({
          id: DEARFLIP_CORE_ID,
          src: DEARFLIP_CORE_SRC,
          isReady: () => Boolean(window.jQuery?.fn?.flipBook),
        });

        const bookElement = document.getElementById("demo3Book");
        if (bookElement && bookElement.dataset.initialized !== "true") {
          window.jQuery(bookElement).flipBook(options.source, options);
          bookElement.dataset.initialized = "true";
        }

        if (!cancelled) {
          setStatus("ready");
        }
      } catch (error) {
        if (!cancelled) {
          setStatus("error");
        }
      }
    }

    initFlipbook();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#f2f0ea] px-4 py-8 text-[#1f2524] sm:px-8 sm:py-10">
      <section className="mx-auto w-full max-w-[1200px] rounded-[24px] border border-[#d8d4c8] bg-white p-4 shadow-[0_24px_60px_rgba(0,0,0,0.1)] sm:p-6 lg:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[12px] uppercase tracking-[0.16em] text-[#7a837f]">
              Demo3
            </p>
            <h1 className="mt-2 font-serif text-[32px] font-extralight leading-[1.05] text-[#1f2524] sm:text-[40px]">
              PDF Flipbook
            </h1>
            <p className="mt-3 max-w-[700px] text-[14px] leading-[1.8] text-[#59615f]">
              Based on the DearFlip package from
              <span className="font-medium text-[#23302d]"> js.dearflip.com</span>.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-full border border-[#1f2524] px-5 text-[12px] font-medium uppercase tracking-[0.14em] text-[#1f2524] transition hover:bg-[#1f2524] hover:text-white"
          >
            Back
          </Link>
        </div>

        <div className="mt-6 rounded-[16px] border border-[#dad5c8] bg-[#f6f4ee] p-3 sm:p-4">
          <div
            id="demo3Book"
            className="h-[70vh] min-h-[500px] w-full overflow-hidden rounded-[12px]"
          />
        </div>

        {status === "loading" ? (
          <p className="mt-4 text-[13px] text-[#606866]">
            Loading DearFlip resources...
          </p>
        ) : null}
        {status === "error" ? (
          <p className="mt-4 text-[13px] text-[#9c2d2d]">
            Failed to load local DearFlip assets. Install and sync package files,
            then refresh.
          </p>
        ) : null}
      </section>
    </main>
  );
}
