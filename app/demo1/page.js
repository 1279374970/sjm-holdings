import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import PropertySection from "./PropertySection";

const IMAGES = {
  logo: "/demo1/sjm-logo.png",
  hero: "/demo1/hero-macau.jpg",
  aboutOverlay: "/demo1/section-overlay.png",
  greenPattern: "/demo1/section-resort.png",
  propertyMain: "/demo1/property-main.png",
  communityFeature: "/demo1/csr-card-1.png",
  esgMain: "/demo1/esg-main.png",
};

const statsItems = [
  { value: "60+", label: "Years of Excellence" },
  { value: "9", label: "Integrated Resorts" },
  { value: "6", label: "Licensed Concessionaires" },
  { value: "00880.HK", label: "HKEX Listed" },
];

const pressReleases = [
  { id: 1, date: "23 Feb 2026", title: "SJM Rings in the Chinese New Year with Auspicious Lion Dance Parades" },
  { id: 2, date: "20 Feb 2026", title: "SJM Leads Asian Wine Scene with Seven Awards at Star Wine List 2026" },
  { id: 3, date: "04 Feb 2026", title: "SJM\u2019s Grand Lisboa Palace Resort Macau Becomes the Only Integrated Resort in the World with All Hotels Forbes Travel Guide Five-Star Rated" },
  { id: 4, date: "19 Jan 2026", title: "SJM Presents Macau Debut of World-Renowned Magician and Mentalist Drummond Money-Coutts" },
  { id: 5, date: "16 Jan 2026", title: "SJM Shines with Four Prestigious Accolades on Harper\u2019s BAZAAR HK\u2019s Annual Lists" },
  { id: 6, date: "15 Jan 2026", title: "SJM Shines with Top Honours at China\u2019s Hotel and Restaurant Awards" },
];

const pressStats = [
  { value: "127", label: "Awards" },
  { value: "96", label: "Events" },
  { value: "241", label: "Entertainment" },
  { value: "114", label: "Corporate" },
];

const investorAnnouncements = [
  { id: 1, date: "23 Feb 2026", title: "Date of Board Meeting" },
  {
    id: 2,
    date: "20 Feb 2026",
    title:
      "Notice of Listing on The Stock Exchange of Hong Kong Limited \u2013 SJM International Limited \u2013 USD540,000,000 6.500% Senior Notes Due 2031",
  },
  {
    id: 3,
    date: "04 Feb 2026",
    title:
      "Monthly Return of Equity Issuer on Movements in Securities for the Month Ended 31/01/2026",
  },
  {
    id: 4,
    date: "19 Jan 2026",
    title:
      "Settlement of Offer to Purchase for Cash any and all of the Outstanding 4.500% Senior Notes Due 2026",
  },
  {
    id: 5,
    date: "16 Jan 2026",
    title:
      "Publication of Offering Memorandum \u2013 SJM International Limited \u2013 USD540,000,000 6.500% Senior Notes Due 2031",
  },
  {
    id: 6,
    date: "15 Jan 2026",
    title:
      "Notice of Listing on The Stock Exchange of Hong Kong Limited \u2013 SJM International Limited \u2013 USD540,000,000 6.500% Senior Notes Due 2031",
  },
];

const investorLinks = [
  { label: "Financial Reports", icon: "/demo1/icongroup/icon-reports.svg" },
  { label: "Environmental, Social and Governance Reports", icon: "/demo1/icongroup/icon-esg.svg" },
  { label: "Circulars, Proxy Forms, Letters & Documents on Display", icon: "/demo1/icongroup/icon-circulars.svg" },
  { label: "Stock Information", icon: "/demo1/icongroup/icon-stock.svg" },
];

const communityArticles = [
  {
    id: 1,
    date: "23 Feb 2026",
    title: "\u201CSJM Talent Development Programme\u201D Graduation Ceremony Highlights Local Talent Development Achievements",
    featured: true,
  },
  {
    id: 2,
    date: "23 Feb 2026",
    title: "SJM Joins Hands with the Community to Celebrate the Year of the Horse",
  },
  {
    id: 3,
    date: "23 Feb 2026",
    title: "SJM Volunteer Team 10th Anniversary Celebration Dinner | A Decade of Unity and Giving Back",
  },
  {
    id: 4,
    date: "23 Feb 2026",
    title: "SJM Supports the USJ SDG Week 2026 to Explore the Future of Sustainable Development",
  },
];

const communityStats = [
  { value: "127", label: "Environmental Sustainability" },
  { value: "96", label: "Community Engagement" },
  { value: "241", label: "Employee Development" },
  { value: "114", label: "Responsible Operations" },
];

const esgCards = [
  {
    title: "Sustainability",
    body: "Driving long-term sustainability through carbon reduction, energy efficiency, resource optimisation, and green building practices across all operations.",
    icon: "leaf",
  },
  {
    title: "Community Support",
    body: "Investing in community development through charitable partnerships, cultural preservation, local employment, and social impact programmes in Macau.",
    icon: "heart",
  },
  {
    title: "Responsible Gaming",
    body: "Promoting a safe and responsible gaming environment through strict compliance, player protection measures, staff training, and public education initiatives.",
    icon: "shield",
  },
  {
    title: "ESG Reports",
    body: "Maintaining transparent ESG disclosures aligned with international standards and HKEX requirements, with clear metrics, targets, and performance tracking.",
    icon: "file",
  },
];

/* ── SVG Icon Components ── */

function ChevronRightIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 3.5L10.5 8L6 12.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon({ className = "", left = false }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d={
          left
            ? "M10 3L5.5 8L10 13"
            : "M6 3L10.5 8L6 13"
        }
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkArrowIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 11L11 3M11 3H5M11 3V9"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LeafIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 13C3 13 4 6 12 3C12 3 11 11 3 13Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M4 12C6 10 8 7 12 3"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeartIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 13S2 9 2 5.5C2 3.5 3.5 2 5.5 2C6.8 2 7.6 2.7 8 3.2C8.4 2.7 9.2 2 10.5 2C12.5 2 14 3.5 14 5.5C14 9 8 13 8 13Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 2L3 4.5V8C3 11 5.5 13.5 8 14C10.5 13.5 13 11 13 8V4.5L8 2Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M6 8L7.5 9.5L10 6.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FileIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 2H9.5L12 4.5V14H4V2Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M9.5 2V5H12" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}


const esgIconMap = {
  leaf: LeafIcon,
  heart: HeartIcon,
  shield: ShieldIcon,
  file: FileIcon,
};

/* ── Divider Link ── */

function DividerLink({ children, color = "accent", href }) {
  const colorMap = {
    accent: "text-[#009b79]",
    gold: "text-[#a8996e]",
  };
  const barMap = {
    accent: "bg-[#009b79]",
    gold: "bg-[#a8996e]",
  };
  const Tag = href ? "a" : "button";
  const extraProps = href ? { href } : { type: "button" };
  return (
    <Tag
      {...extraProps}
      className={`inline-flex items-center gap-3 text-[12px] leading-[16px] uppercase tracking-[2.4px] transition hover:opacity-80 ${colorMap[color]}`}
    >
      {children}
      <span className={`h-px w-8 ${barMap[color]}`} />
    </Tag>
  );
}

/* ── Page ── */

export default function Demo1Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f6f0] font-sans text-[#1f2524]">
      <Header logoSrc={IMAGES.logo} />

      {/* ── Hero ── */}
      <section className="relative flex min-h-[780px] flex-col justify-end pt-[140px]">
        <Image
          src={IMAGES.hero}
          alt="Macau skyline"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,30,30,0.7)] via-[rgba(0,30,30,0.4)] to-[rgba(0,30,30,0.9)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,30,30,0.6)] via-transparent to-transparent" />

        <div className="relative mx-auto flex w-full max-w-[1680px] flex-1 flex-col justify-center px-5 pb-24 sm:px-8 lg:px-[40px]">
          <div className="flex max-w-[1280px] flex-col gap-[30px] pt-[60px] lg:px-[80px] lg:pt-[95px]">
            <h1 className="anim-fade-up anim-delay-200 font-petrona text-[42px] font-extralight leading-[1] tracking-[-1px] text-white sm:text-[54px] sm:tracking-[-1.5px] lg:text-[80px] lg:leading-[80px] lg:tracking-[-2.25px]">
              <span className="block">Welcome to</span>
              <span className="block text-[#a8996e]">SJM Holdings</span>
              <span className="block pt-2 text-[34px] sm:text-[42px] lg:text-[60px] lg:leading-[60px] lg:tracking-[-1.5px]">
                Limited
              </span>
            </h1>

            <div className="anim-fade-in anim-delay-400 h-px w-24 bg-[rgba(168,153,110,0.6)]" />

            <p className="anim-fade-up anim-delay-400 max-w-[672px] text-[15px] leading-[29.25px] text-white/80 sm:text-[18px]">
              One of the six gaming concessionaires in Macau, operating iconic
              integrated resorts that define the world&apos;s premier
              entertainment destination. Listed on the Hong Kong Stock Exchange:
              <span className="font-medium text-[#a8996e]"> 00880.HK</span>.
            </p>

            <div className="anim-fade-up anim-delay-500">
              <button
                type="button"
                className="inline-flex items-center gap-3 border border-[#a8996e] px-[33px] py-[15px] text-[12px] font-medium leading-[16px] uppercase tracking-[2.4px] text-[#a8996e] transition hover:bg-[#a8996e] hover:text-[#072121]"
              >
                Investor Relations
              </button>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-white/10 bg-[#001e1e] backdrop-blur-[4px]">
          <div className="mx-auto flex w-full max-w-[1680px] px-5 sm:px-8 lg:px-[60px] xl:px-[80px]">
            <div className="grid w-full grid-cols-2 sm:grid-cols-4">
              {statsItems.map((item, idx) => (
                <div
                  key={item.label}
                  className={`anim-fade-up flex flex-col items-center border-white/10 py-3 ${
                    idx % 2 !== 0 ? "border-l" : idx > 0 ? "sm:border-l" : ""
                  } ${idx >= 2 ? "border-t sm:border-t-0" : ""}`}
                  style={{ animationDelay: `${0.5 + idx * 0.1}s` }}
                >
                  <p className="font-petrona text-[20px] font-extralight text-[#a8996e] sm:text-[24px] sm:leading-[32px]">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[11px] uppercase leading-[18px] tracking-[1px] text-white/80 sm:text-[12px]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="bg-[#f7f6f0]">
        <div className="mx-auto flex w-full max-w-[1680px] flex-col gap-10 px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:gap-16 lg:px-[60px] lg:py-[80px] xl:px-[120px]">
          <div className="flex flex-1 flex-col gap-8">
            <div className="flex flex-col">
              <span className="font-petrona text-[36px] font-extralight capitalize leading-[53.5px] text-[#231f20] sm:text-[48px] sm:leading-[71.3px] lg:text-[60px] lg:leading-[75px]">
                Macau&apos;s pioneering
              </span>
              <span className="font-petrona text-[36px] font-extralight capitalize leading-[53.5px] text-[#009b79] sm:text-[48px] sm:leading-[71.3px] lg:text-[60px] lg:leading-[75px]">
                integrated resort
              </span>
              <span className="font-petrona text-[36px] font-extralight capitalize leading-[53.5px] text-[#231f20] sm:text-[48px] sm:leading-[71.3px] lg:text-[60px] lg:leading-[75px]">
                concessionaire.
              </span>
            </div>
            <div className="h-px w-16 bg-[#a8996e]" />
            <p className="text-[14px] leading-[26px] text-[#3f4644] sm:text-[16px]">
              SJM Holdings Limited (HKEx: 880) and its subsidiaries is a leading
              owner, operator and developer of casinos and integrated
              entertainment resorts in Macau. Our principal subsidiary SJM
              Resorts, S.A. (in Portuguese) SJM Resorts, Limited (in English)
              (&ldquo;SJM&rdquo;) is one of the six concessionaires in Macau,
              authorised by the Government of the Macau Special Administrative
              Region to operate casinos and gaming areas. SJM is also the only
              casino gaming concessionaire with its roots in Macau.
            </p>
          </div>

          <div className="relative mx-auto h-[400px] w-full max-w-[540px] overflow-hidden sm:h-[520px] lg:mx-0 lg:h-[620px] lg:w-[540px] lg:shrink-0">
            <Image
              src={IMAGES.aboutOverlay}
              alt="Grand Lisboa Palace"
              fill
              sizes="(max-width: 1024px) 100vw, 540px"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 px-10 pb-10">
              <div className="h-px w-8 bg-[#a8996e]" />
              <p className="mt-4 font-petrona text-[20px] font-extralight uppercase tracking-[0.77px] text-white sm:text-[24px]">
                FORBES FIVE STARS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Properties ── */}
      <PropertySection greenPattern={IMAGES.greenPattern} />

      {/* ── Investor Relations ── */}
      <section className="bg-[#f7f6f0]">
        <div className="mx-auto flex w-full max-w-[1680px] flex-col gap-8 px-5 py-14 sm:px-8 lg:gap-[40px] lg:px-[60px] lg:py-[80px] xl:px-[120px]">
          <h2 className="font-petrona text-[36px] font-extralight leading-[48px] text-[#231f20] sm:text-[44px] lg:text-[48px]">
            Transparent.
            <br />
            Accountable.{" "}
            <span className="text-[#009b79]">Investor-first.</span>
          </h2>

          <div className="flex flex-col gap-10 lg:flex-row lg:gap-[64px]">
            <div className="flex flex-1 flex-col gap-6">
              <div className="flex flex-col">
                {investorAnnouncements.map((item) => (
                  <Link
                    key={item.id}
                    href={`/announcements/${item.id}`}
                    className="flex items-center gap-4 border-b border-[rgba(35,31,32,0.08)] pb-[21px] pt-[20px] sm:gap-6"
                  >
                    <p className="w-[80px] shrink-0 text-right text-[13px] leading-[22.8px] text-[#8e9590] sm:w-[100px] sm:text-[14px]">
                      {item.date}
                    </p>
                    <p className="flex-1 text-[15px] leading-[24px] text-[rgba(35,31,32,0.8)] sm:text-[16px]">
                      {item.title}
                    </p>
                    <div className="flex shrink-0 items-center">
                      <ChevronRightIcon className="h-4 w-4 text-[rgba(35,31,32,0.25)]" />
                    </div>
                  </Link>
                ))}
              </div>
              <DividerLink color="accent" href="/announcements">ALL Investor Relations</DividerLink>
            </div>

            <div className="flex w-full flex-col gap-4 lg:w-[380px] lg:shrink-0">
              {investorLinks.map((link) => (
                  <button
                    type="button"
                    key={link.label}
                    className="flex items-center gap-4 border border-[rgba(0,155,121,0.2)] bg-[rgba(0,155,121,0.05)] px-[17px] py-[15px] text-left transition hover:border-[#009b79]/40 hover:bg-[rgba(0,155,121,0.1)]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center">
                      <img src={link.icon} alt="" width={20} height={20} draggable={false} />
                    </span>
                    <span className="flex-1 text-[15px] leading-[24px] text-[rgba(35,31,32,0.8)] sm:text-[16px]">
                      {link.label}
                    </span>
                    <ChevronRightIcon className="h-3.5 w-3.5 shrink-0 text-[rgba(35,31,32,0.4)]" />
                  </button>
              ))}

              <div className="flex flex-col gap-3 border border-[rgba(0,155,121,0.2)] bg-[rgba(0,155,121,0.05)] px-[25px] pb-[23px] pt-[21px]">
                <p className="text-[14px] uppercase tracking-[2.7px] text-[#009b79]">
                  IR CONTACT
                </p>
                <p className="pb-2 text-[14px] leading-[20px] text-[rgba(35,31,32,0.6)]">
                  If you have any questions for our Investor Relations
                  Department, please contact us.
                </p>
                <div className="h-px bg-[rgba(35,31,32,0.06)]" />
                <div className="flex items-center gap-6 pt-2">
                  <img src="/demo1/icongroup/icon-email.svg" alt="" width={20} height={20} className="shrink-0" draggable={false} />
                  <span className="text-[16px] leading-[24px] text-[rgba(35,31,32,0.8)]">
                    media@sjmholdings.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Press Releases ── */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url('${IMAGES.greenPattern}'), linear-gradient(90deg, #004433 0%, #004433 100%)`,
          backgroundSize: "1020px 1361px, auto auto",
          backgroundPosition: "left top",
        }}
      >
        <div className="mx-auto flex w-full max-w-[1680px] flex-col gap-8 px-5 py-14 sm:px-8 lg:gap-[40px] lg:px-[60px] lg:py-[80px] xl:px-[120px]">
          <h2 className="font-petrona text-[36px] font-extralight leading-[48px] text-white sm:text-[44px] lg:text-[48px]">
            Latest <span className="text-[#a8996e]">Press Releases.</span>
          </h2>

          <div className="flex flex-col gap-10 lg:flex-row lg:gap-[64px]">
            <div className="flex flex-1 flex-col gap-6">
              <div className="flex flex-col">
                {pressReleases.map((item) => (
                  <Link
                    key={item.id}
                    href={`/press-releases/${item.id}`}
                    className="flex items-center gap-4 border-b border-white/8 pb-[21px] pt-[20px] sm:gap-6"
                  >
                    <p className="w-[80px] shrink-0 text-right text-[13px] leading-[22.8px] text-[#8e9590] sm:w-[100px] sm:text-[14px]">
                      {item.date}
                    </p>
                    <p className="flex-1 text-[15px] leading-[24px] text-white/80 sm:text-[16px]">
                      {item.title}
                    </p>
                    <div className="flex shrink-0 items-center">
                      <ChevronRightIcon className="h-4 w-4 text-white/20" />
                    </div>
                  </Link>
                ))}
              </div>
              <DividerLink color="gold" href="/press-releases">ALL Investor Relations</DividerLink>
            </div>

            <div className="flex w-full flex-col gap-6 lg:w-[380px] lg:shrink-0">
              <div className="grid flex-1 grid-cols-2 gap-4">
                {pressStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col justify-center border border-[rgba(168,153,110,0.3)] bg-[rgba(168,153,110,0.05)] px-[25px] pb-[23px] pt-[21px]"
                  >
                    <p className="font-petrona text-[32px] font-light text-white/80 sm:text-[40px]">
                      {stat.value}
                    </p>
                    <p className="mt-3 text-[13px] uppercase leading-[20px] tracking-[1px] text-[#a8996e] sm:text-[14px]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-[12px] uppercase tracking-[2.4px] text-[#a8996e]">
                DATA SINCE 2008
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Community / Impact ── */}
      <section className="overflow-hidden bg-[#f7f6f0]">
        <div className="mx-auto flex w-full max-w-[1680px] flex-col gap-8 px-5 py-14 sm:px-8 lg:gap-[40px] lg:px-[60px] lg:py-[80px] xl:px-[120px]">
          <h2 className="font-petrona text-[36px] font-extralight leading-[48px] text-[#231f20] sm:text-[44px] lg:text-[48px]">
            Responsible. Impact-driven.
            <br />
            <span className="text-[#009b79]">Community-focused.</span>
          </h2>

          <div className="flex flex-col gap-10 lg:flex-row lg:gap-[64px]">
            <div className="flex flex-1 flex-col gap-6">
              <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
                <Link
                  href={`/csr-events/${communityArticles[0].id}`}
                  className="group w-full border-b border-[rgba(35,31,32,0.08)] pb-5 lg:w-[540px] lg:shrink-0"
                >
                  <div className="relative mb-3 h-[200px] w-full overflow-hidden sm:h-[260px] lg:h-[317px]">
                    <Image
                      src={IMAGES.communityFeature}
                      alt={communityArticles[0].title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 540px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-[14px] leading-[22.8px] text-[#8e9590]">
                      {communityArticles[0].date}
                    </p>
                    <p className="text-[16px] leading-[24px] text-[rgba(35,31,32,0.8)]">
                      {communityArticles[0].title}
                    </p>
                  </div>
                </Link>

                <div className="flex flex-1 flex-col justify-between">
                  {communityArticles.slice(1).map((item, idx) => (
                    <div key={item.id}>
                      <Link
                        href={`/csr-events/${item.id}`}
                        className="flex flex-col gap-0.5 py-5"
                      >
                        <p className="text-[14px] leading-[22.8px] text-[#8e9590]">
                          {item.date}
                        </p>
                        <p className="text-[16px] leading-[24px] text-[rgba(35,31,32,0.8)]">
                          {item.title}
                        </p>
                      </Link>
                      {idx < communityArticles.length - 2 && (
                        <div className="h-px bg-[rgba(35,31,32,0.06)]" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <DividerLink color="accent" href="/csr-events">ALL Investor Relations</DividerLink>
            </div>

            <div className="flex w-full flex-col gap-6 lg:w-[380px] lg:shrink-0">
              <div className="grid flex-1 grid-cols-2 gap-4">
                {communityStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col justify-center border border-[rgba(0,155,121,0.2)] bg-[rgba(0,155,121,0.05)] px-[25px] pb-[23px] pt-[21px]"
                  >
                    <p className="font-petrona text-[32px] font-light text-[rgba(0,155,121,0.8)] sm:text-[40px]">
                      {stat.value}
                    </p>
                    <p className="mt-3 text-[13px] uppercase leading-[20px] tracking-[1px] text-[rgba(35,31,32,0.5)] sm:text-[14px]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-[12px] uppercase tracking-[2.4px] text-[#009b79]">
                DATA SINCE 2018
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ESG ── */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url('${IMAGES.greenPattern}'), linear-gradient(90deg, #004433 0%, #004433 100%)`,
          backgroundSize: "1020px 1361px, auto auto",
          backgroundPosition: "left top",
        }}
      >
        <div className="mx-auto flex w-full max-w-[1680px] flex-col gap-10 px-5 py-14 sm:px-8 lg:gap-[60px] lg:px-[60px] lg:py-[80px] xl:px-[120px]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-[32px]">
            <div className="relative h-[220px] w-full overflow-hidden sm:h-[280px] lg:h-[340px] lg:flex-1">
              <Image
                src={IMAGES.esgMain}
                alt="ESG initiative"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col gap-8">
              <div>
                <p className="font-petrona text-[36px] font-extralight leading-[60px] text-white sm:text-[44px] lg:text-[48px]">
                  Building an ESG-driven
                </p>
                <p className="font-petrona text-[36px] font-extralight leading-[60px] text-[#a8996e] sm:text-[44px] lg:text-[48px]">
                  future for Macau.
                </p>
              </div>
              <div className="h-px w-16 bg-[#a8996e]" />
              <div className="flex flex-col gap-4 text-[15px] leading-[24px] text-white/80 sm:text-[16px]">
                <p>
                  SJM Holdings embraces its responsibility as a major corporate
                  citizen in Macau. Our sustainability strategy integrates
                  environmental stewardship, social responsibility, and rigorous
                  governance across every aspect of our operations.
                </p>
                <p>
                  Our annual ESG Report, published in accordance with the HKEX
                  ESG Reporting Guide, provides full transparency on our progress
                  and commitments to all stakeholders.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:gap-8 xl:grid-cols-4">
            {esgCards.map((card) => {
              const EsgIcon = esgIconMap[card.icon];
              return (
                <article
                  key={card.title}
                  className="flex flex-col gap-5 border border-[rgba(168,153,110,0.3)] bg-[rgba(168,153,110,0.05)] p-[25px] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(168,153,110,0.5)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center border border-[rgba(168,153,110,0.05)] bg-[rgba(168,153,110,0.05)] text-[#a8996e]">
                    {EsgIcon && <EsgIcon className="h-4 w-4" />}
                  </div>
                  <div className="flex flex-1 flex-col gap-3">
                    <h3 className="text-[16px] font-medium leading-[24px] tracking-[0.35px] text-white/80">
                      {card.title}
                    </h3>
                    <p className="text-[14px] leading-[22.8px] text-white/80">
                      {card.body}
                    </p>
                  </div>
                  <DividerLink color="gold">LEARN MORE</DividerLink>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#001e1e] py-6 text-center">
        <p className="text-[12px] leading-[24px] tracking-[0.24px] text-[#a78a5d]">
          Privacy Statement &amp; Disclaimer
        </p>
        <p className="mt-1 text-[12px] leading-[24px] tracking-[0.24px] text-white">
          Copyright 2026 © SJM Holdings Limited. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
