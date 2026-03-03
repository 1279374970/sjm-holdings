import Image from "next/image";
import PropertyShowcaseCarousel from "./PropertyShowcaseCarousel";
import Demo2Header from "./Header";
import LatestNewsSection from "./LatestNewsSection";
import CsrEventsPaginated from "./CsrEventsPaginated";

const brandLogos = [
  { src: "/demo2/logo-glp.png", alt: "Grand Lisboa Palace" },
  { src: "/demo2/logo-gl.png", alt: "Grand Lisboa" },
  { src: "/demo2/logo-hl.png", alt: "Hotel Lisboa" },
  { src: "/demo2/logo-ja.png", alt: "Jai Alai Oceanus" },
  { src: "/demo2/logo-larc.png", alt: "Lisboa Arcade" },
  { src: "/demo2/logo-p16.png", alt: "Ponte 16" },
  { src: "/demo2/logo-km.png", alt: "Kam Pek Market" },
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

function SearchIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 15 15"
      aria-hidden
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M10 10L13.5 13.5" stroke="currentColor" strokeWidth="1.2" />
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

function ScenicPanel({
  className = "",
  label,
  src,
  alt,
  priority = false,
  ctaLabel = null,
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 1536px"
        className="object-cover"
        priority={priority}
      />
      {label ? (
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-5 pb-4 pt-20 text-white md:px-6 md:pb-5">
          <p className="font-petrona text-[24px] font-extralight leading-[1.15] tracking-[-0.02em] md:text-[32px] md:leading-[38px]">
            {label}
          </p>
          {ctaLabel ? (
            <button
              type="button"
              className="hidden h-[30px] shrink-0 items-center border border-white/60 px-3 text-[11px] font-medium uppercase tracking-[0.11em] text-white transition hover:border-white hover:bg-white hover:text-[#001625] md:flex"
            >
              {ctaLabel}
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default function Demo2Page() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#001625] [--demo-green:#004433] [--demo-cream:#f7f6f0] [--demo-gold:#a8996e]">
      <section className="relative bg-[var(--demo-green)] lg:min-h-[778px]">
        <Demo2Header />

        <div className="flex w-full flex-col pb-8 pt-28 md:pb-10 md:pt-32 lg:pb-12 lg:pt-[205px]">
          <div className="mx-auto w-full max-w-[1600px] px-4 md:px-8 lg:px-[60px] xl:px-[100px]">
            <div className="mb-8 flex flex-col gap-8 lg:mb-10 lg:flex-row lg:items-end lg:justify-between lg:gap-[60px] xl:gap-[231px]">
              <h1 className="anim-fade-up anim-delay-200 font-petrona text-4xl font-extralight leading-[1.2] tracking-[-0.0375em] text-white md:text-5xl lg:text-[60px] lg:leading-[1.2em]">
                Welcome to
                <br />
                SJM Holdings Limited
              </h1>
              <p className="anim-fade-up anim-delay-400 max-w-[445px] shrink-0 pb-2 text-sm leading-[1.5em] text-white/90 md:text-base">
                One of the six gaming concessionaires in Macau, operating iconic
                integrated resorts that define the world&apos;s premier
                entertainment destination.
              </p>
            </div>
          </div>

          <div className="anim-scale-up anim-delay-300 relative z-10 -mb-6 mx-auto w-full max-w-[1600px] px-4 md:-mb-10 md:px-8 lg:-mb-[84px] lg:px-[32px]">
            <ScenicPanel
              className="h-[220px] w-full md:h-[320px] lg:h-[480px]"
              src="/demo2/hero-main.jpg"
              alt="SJM Holdings hero"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-8 px-4 py-12 md:px-8 lg:gap-[40px] lg:px-[60px] lg:pb-[64px] lg:pt-[149px] xl:px-[100px]">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-[60px] xl:gap-[100px]">
            <div className="flex flex-col gap-[32px]">
              <h2 className="anim-fade-up font-petrona text-4xl font-extralight tracking-[-0.00875em] text-[#001625] lg:text-[48px] lg:leading-[1.128em]">
                SJM Holdings Limited
              </h2>
              <p className="max-w-[860px] text-[16px] leading-[1.5em] text-[#3f4644]">
                SJM Holdings Limited (HKEx: 880) and its subsidiaries is a
                leading owner, operator and developer of casinos and integrated
                entertainment resorts in Macau. Our principal subsidiary SJM
                Resorts, S.A. (in Portuguese) SJM Resorts, Limited (in English)
                (&ldquo;SJM&rdquo;) is one of the six concessionaires in Macau,
                authorised by the Government of the Macau Special Administrative
                Region to operate casinos and gaming areas. SJM is also the only
                casino gaming concessionaire with its roots in Macau.
              </p>
            </div>

            <aside className="anim-fade-up anim-delay-200 flex flex-col gap-[12px] border border-[rgba(35,31,32,0.08)] bg-white px-[32px] py-[24px]">
              <div className="flex items-center gap-2 text-[12px] uppercase leading-[1.5em] tracking-[0.21em] text-[#141414]/50">
                <span>HKEX</span>
                <span className="tracking-[0.08em] text-[var(--demo-gold)]">
                  00880.HK
                </span>
              </div>
              <div className="flex flex-col gap-[8px]">
                <p className="font-petrona text-[40px] font-light leading-[1.128em] text-[#141414]">
                  HK$2.85
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-[18px] font-medium leading-[1.556em] text-[#009b79]">
                    +0.05
                  </span>
                  <span className="text-[14px] leading-[1.429em] text-[#009b79]">
                    (+1.79%)
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-[8px] text-[12px] leading-[1.5em] text-[#141414]/30">
                <span>25 Feb 2026</span>
                <span>·</span>
                <span>16:08 HKT</span>
                <span>·</span>
                <span>15-minute delayed</span>
              </div>
            </aside>
          </div>

          <div className="flex flex-col gap-3 bg-[var(--demo-cream)] px-[24px] py-[12px] md:flex-row md:items-center md:gap-[24px]">
            <p className="text-[14px] font-semibold uppercase leading-[1.5em] text-[var(--demo-gold)]">
              Important Warnings / Clarifications
            </p>
            <p className="text-[14px] leading-[1.5em] text-[#3f4644]">
              Fraudulent Competitions, Prizes and Lucky Draws NOT authorised by
              SJM
            </p>
          </div>
        </div>
      </section>

      <PropertyShowcaseCarousel />

      <section className="bg-[var(--demo-cream)]">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-8 px-4 py-12 md:px-8 lg:gap-[32px] lg:px-[60px] lg:py-[64px] xl:px-[100px]">
          <LatestNewsSection />
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-[var(--demo-green)]"
        style={{
          backgroundImage: "url('/demo2/csr-bg.png')",
          backgroundSize: "1020px 1361px",
          backgroundPosition: "left top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-[#004433]/88" />
        <div className="relative mx-auto flex w-full max-w-[1600px] flex-col gap-8 px-4 py-12 md:px-8 lg:gap-[32px] lg:px-[60px] lg:py-[64px] xl:px-[100px]">
          <h2 className="anim-fade-up font-petrona text-4xl font-extralight tracking-[-0.00875em] text-white lg:text-[48px] lg:leading-[1.128em]">
            CSR Events
          </h2>

          <CsrEventsPaginated />
        </div>
      </section>

      <footer className="bg-[#001e1e] text-white">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center gap-[32px] px-4 py-10 md:px-8 lg:px-[60px] lg:py-[40px] xl:px-[100px]">
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
              Privacy Statement & Disclaimer
            </p>
            <p className="text-[12px] leading-[2em] tracking-[0.02em] text-white">
              Copyright 2026 © SJM Holdings Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
