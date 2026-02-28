import Image from "next/image";
import Link from "next/link";
import PropertyShowcaseCarousel from "./PropertyShowcaseCarousel";

const navItems = [
  { label: "About Us", withChevron: true },
  { label: "Properties", withChevron: true },
  { label: "Media Releases", withChevron: false },
  { label: "Investor Relations", withChevron: true },
  { label: "Environment, Social and Governance", withChevron: true },
  { label: "Careers", withChevron: false },
];

const newsItems = [
  {
    date: "24 Feb 2026",
    title: "SJM Rings in the Chinese New Year with Auspicious Lion Dance Parades",
  },
  {
    date: "22 Feb 2026",
    title: "SJM Leads Asian Wine Scene with Seven Awards at Star Wine List 2026",
  },
  {
    date: "11 Feb 2026",
    title:
      "SJM's Grand Lisboa Palace Resort Macau becomes the only integrated resort in the world with all hotels Forbes Five-Star rated",
  },
  {
    date: "04 Feb 2026",
    title:
      "SJM presents Macau debut of world-renowned magician and mentalist Drummond Money-Coutts",
  },
];

const featuredNews = {
  date: "25 Feb 2026",
  title: "SJM Rings in the Chinese New Year with Auspicious Lion Dance Parades",
  href: "/news/featured",
};

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
];

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
        sizes="(max-width: 1024px) 100vw, 1320px"
        className="object-cover"
        priority={priority}
      />
      {label ? (
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-5 pb-4 pt-20 text-white md:px-6 md:pb-5">
          <p className="font-serif text-[24px] font-extralight leading-[1.15] tracking-[-0.02em] md:text-[32px] md:leading-[38px]">
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

function NewsPreview() {
  return (
    <Link href={featuredNews.href} className="group relative block h-full overflow-hidden">
      <Image
        src="/demo2/news-main.jpg"
        alt="Latest news highlight"
        fill
        sizes="(max-width: 1024px) 100vw, 60vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute bottom-5 left-5 right-5 bg-[#004433] p-5 text-white md:right-auto md:w-[476px]">
        <p className="text-[13px] font-semibold uppercase tracking-[0.02em] leading-4">
          {featuredNews.date}
        </p>
        <p className="mt-4 font-serif text-[20px] font-extralight leading-[28px]">
          {featuredNews.title}
        </p>
      </div>
    </Link>
  );
}

export default function Demo2Page() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#001625] [--demo-green:#004433] [--demo-cream:#f7f6f0] [--demo-gold:#a8996e]">
      <section className="relative bg-[var(--demo-green)] lg:min-h-[778px]">
        <div className="fixed left-0 right-0 top-0 z-50 bg-gradient-to-b from-black/55 to-transparent">
          <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 py-4 md:px-8 lg:px-[60px]">
            <div className="relative h-7 w-[122px] shrink-0">
              <Image
                src="/demo2/sjm-logo.png"
                alt="SJM Holdings"
                fill
                priority
                sizes="122px"
                className="object-contain object-left"
              />
            </div>

            <div className="hidden items-center lg:flex">
              {navItems.map((item) => (
                <button
                  type="button"
                  key={item.label}
                  className="group flex items-center px-4 py-[17px] text-[14px] font-medium leading-5 text-white transition hover:text-[var(--demo-gold)]"
                >
                  <span>{item.label}</span>
                  {item.withChevron ? (
                    <ChevronDownIcon className="ml-1.5 h-[6px] w-[8px] opacity-90 transition group-hover:opacity-100" />
                  ) : null}
                </button>
              ))}
            </div>

            <div className="flex items-center text-white">
              <button
                type="button"
                className="hidden h-[27px] w-[39px] items-center justify-center text-white/90 transition hover:text-white lg:flex"
                aria-label="Search"
              >
                <SearchIcon className="h-[15px] w-[15px]" />
              </button>
              <button
                type="button"
                className="flex items-center px-4 py-[17px] text-[14px] font-medium leading-5 text-white transition hover:text-[var(--demo-gold)]"
              >
                <span>Language</span>
                <ChevronDownIcon className="ml-1.5 h-[6px] w-[8px]" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col pb-8 pt-28 md:pb-10 md:pt-32 lg:pb-12 lg:pt-[206px]">
          <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-[32px]">
            <div className="mb-8 grid gap-8 lg:mb-10 lg:grid-cols-[minmax(0,1fr)_445px] lg:px-[28px]">
              <h1 className="font-serif text-4xl font-extralight leading-[1.12] tracking-[-0.03em] text-white md:text-5xl lg:text-[60px] lg:leading-[72px]">
                Welcome to
                <br />
                SJM Holdings Limited
              </h1>
              <p className="max-w-[445px] self-end pb-2 text-sm leading-[22px] text-white/90 md:text-base">
                One of the six gaming concessionaires in Macau, operating iconic
                integrated resorts that define the world&apos;s premier
                entertainment destination.
              </p>
            </div>
          </div>

          <div className="relative z-10 -mb-6 px-[32px] md:-mb-10 lg:-mb-[84px]">
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
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-4 py-12 md:px-8 lg:gap-10 lg:px-[60px] lg:pb-16 lg:pt-[149px]">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-[120px]">
            <div>
              <h2 className="font-serif text-4xl font-extralight tracking-[-0.01em] text-[#001625] lg:text-[48px]">
                SJM Holdings Limited
              </h2>
              <p className="mt-8 max-w-[860px] text-[16px] leading-8 text-[#3f4644]">
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

            <aside className="border border-black/10 bg-white px-[33px] py-[25px]">
              <div className="flex items-center gap-2 text-[12px] uppercase leading-[18px] tracking-[0.21em] text-[#141414]/50">
                <span>HKEX</span>
                <span className="tracking-[0.08em] text-[var(--demo-gold)]">
                  00880.HK
                </span>
              </div>
              <p className="mt-1 font-serif text-[40px] font-light leading-[1.2] text-[#141414]">
                HK$2.85
              </p>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-[18px] font-medium leading-7 text-[#009b79]">
                  +0.05
                </span>
                <span className="text-[14px] leading-5 text-[#009b79]">
                  (+1.79%)
                </span>
              </div>
              <p className="mt-2 text-[12px] leading-[18px] text-[#141414]/30">
                25 Feb 2026 · 16:08 HKT · 15-minute delayed
              </p>
            </aside>
          </div>

          <div className="flex flex-col gap-3 bg-[var(--demo-cream)] px-6 py-3 md:h-[52px] md:flex-row md:items-center md:gap-6 md:py-0">
            <p className="text-[13px] font-semibold uppercase leading-4 tracking-[0.02em] text-[var(--demo-gold)]">
              Important Warnings / Clarifications
            </p>
            <p className="text-[14px] leading-5 text-[#3f4644]">
              Fraudulent Competitions, Prizes and Lucky Draws NOT authorised by
              SJM
            </p>
          </div>
        </div>
      </section>

      <PropertyShowcaseCarousel />

      <section className="bg-[var(--demo-cream)]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-4 py-12 md:px-8 lg:gap-8 lg:px-[60px] lg:py-16">
          <h2 className="font-serif text-4xl font-extralight tracking-[-0.01em] text-[#001625] lg:text-[48px]">
            Latest News
          </h2>

          <div className="grid gap-5 lg:grid-cols-[1fr_1fr] lg:gap-8">
            <article className="min-h-[420px] lg:min-h-[560px]">
              <NewsPreview />
            </article>

            <div className="flex flex-col gap-4">
              {newsItems.map((item) => (
                <article
                  key={item.title}
                  className="border border-black/10 bg-white p-5"
                >
                  <p className="text-[13px] font-semibold uppercase leading-4 tracking-[0.02em] text-[#001625]">
                    {item.date}
                  </p>
                  <div className="mt-4 flex items-end gap-6">
                    <p className="flex-1 font-serif text-[20px] font-extralight leading-[28px] text-[#141414]">
                      {item.title}
                    </p>
                    <button
                      type="button"
                      className="flex h-12 w-12 shrink-0 items-center justify-center bg-[var(--demo-green)] text-white transition hover:bg-[#005840]"
                      aria-label="Open news item"
                    >
                      <ArrowRightIcon className="h-[10px] w-[6px]" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end gap-4">
            <button
              type="button"
              className="flex h-[46px] w-[46px] items-center justify-center border border-[#cccac4] text-[#7b7770] transition hover:border-[#9f9a91] hover:text-[#4f4c46]"
              aria-label="Previous news"
            >
              <ArrowRightIcon className="h-[10px] w-[6px] rotate-180" />
            </button>
            <button
              type="button"
              className="flex h-[46px] w-[46px] items-center justify-center border border-[#001625] text-[#001625] transition hover:bg-[#001625] hover:text-white"
              aria-label="Next news"
            >
              <ArrowRightIcon className="h-[10px] w-[6px]" />
            </button>
            <button
              type="button"
              className="h-[46px] border border-[#001625] px-[17px] text-[14px] font-medium leading-5 text-[#001625] transition hover:bg-[#001625] hover:text-white"
            >
              See All News
            </button>
          </div>
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
        <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-4 py-12 md:px-8 lg:gap-8 lg:px-[60px] lg:py-16">
          <h2 className="font-serif text-4xl font-extralight tracking-[-0.01em] text-white lg:text-[48px]">
            CSR Events
          </h2>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {csrItems.map((item) => (
              <article
                key={item.title}
                className="group relative min-h-[320px] overflow-hidden lg:min-h-[356px]"
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
                  <p className="mt-4 font-serif text-[20px] font-extralight leading-[28px]">
                    {item.title}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="flex items-center justify-end gap-4">
            <button
              type="button"
              className="flex h-[46px] w-[46px] items-center justify-center border border-white/50 text-white/70 transition hover:border-white hover:text-white"
              aria-label="Previous CSR event"
            >
              <ArrowRightIcon className="h-[10px] w-[6px] rotate-180" />
            </button>
            <button
              type="button"
              className="flex h-[46px] w-[46px] items-center justify-center border border-white text-white transition hover:bg-white hover:text-[#001625]"
              aria-label="Next CSR event"
            >
              <ArrowRightIcon className="h-[10px] w-[6px]" />
            </button>
            <button
              type="button"
              className="h-[46px] border border-white px-[17px] text-[14px] font-medium leading-5 text-white transition hover:bg-white hover:text-[#001625]"
            >
              See All Events
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-[#001e1e] text-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-10 md:px-8 lg:px-[80px]">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <div className="relative h-[52px] w-[227px]">
              <Image
                src="/demo2/sjm-logo.png"
                alt="SJM Holdings"
                fill
                sizes="227px"
                className="object-contain object-left"
              />
            </div>
            <div className="hidden h-10 w-px bg-white/10 md:block" />
            {brandLogos.map((brand) => (
              <div
                key={brand.alt}
                className="relative h-12 w-[95px] md:h-[52px] md:w-[112px]"
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  fill
                  sizes="112px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-white/10 pt-8 text-center">
            <p className="text-[12px] leading-6 tracking-[0.02em] text-[#a78a5d]">
              Privacy Statement & Disclaimer
            </p>
            <p className="text-[12px] leading-6 tracking-[0.02em] text-white">
              Copyright 2026 © SJM Holdings Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
