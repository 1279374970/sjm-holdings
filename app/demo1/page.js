import Image from "next/image";

const IMAGES = {
  logo: "https://www.figma.com/api/mcp/asset/d1f9731d-0dc6-4e95-94da-5a44af0c78de",
  hero: "https://www.figma.com/api/mcp/asset/f9d4e489-dc18-41b6-b0ba-9d9383e30656",
  aboutOverlay:
    "https://www.figma.com/api/mcp/asset/b08a5d77-2bb1-496e-b2f6-d69003e2b099",
  greenPattern:
    "https://www.figma.com/api/mcp/asset/082706bb-76a7-41a6-bde6-cb1bd23bb827",
  propertyMain:
    "https://www.figma.com/api/mcp/asset/56abe991-53f0-4d94-9948-e1bbac9c4334",
  communityFeature:
    "https://www.figma.com/api/mcp/asset/1498a53a-7acc-4878-bbd8-5020f2d81d82",
  esgMain:
    "https://www.figma.com/api/mcp/asset/d4e326e1-7a73-45c2-814a-d3f5546ac66d",
};

const navItems = [
  "About us",
  "Properties",
  "Media releases",
  "Investor relations",
  "Environment, Social and Governance",
  "Career",
];

const statsItems = [
  { value: "60+", label: "Years of Excellence" },
  { value: "7", label: "Integrated Resorts" },
  { value: "6", label: "Licensed Concessionaires" },
  { value: "00880.HK", label: "HKEX Listed" },
];

const pressReleases = [
  {
    date: "24 Feb 2026",
    title:
      "SJM Rings in the Chinese New Year with Auspicious Lion Dance Parades",
    tag: "Events",
    tagColor: "green",
  },
  {
    date: "22 Feb 2026",
    title:
      "SJM Leads Asian Wine Scene with Seven Awards at Star Wine List 2026",
    tag: "Awards",
    tagColor: "gold",
  },
  {
    date: "11 Feb 2026",
    title:
      "SJM\u2019s Grand Lisboa Palace Resort Macau Becomes the Only Integrated Resort in the World with All Hotels Forbes Travel Guide Five-Star Rated",
    tag: "Awards",
    tagColor: "gold",
  },
  {
    date: "04 Feb 2026",
    title:
      "SJM Presents Macau Debut of World-Renowned Magician and Mentalist Drummond Money-Coutts",
    tag: "Entertainment",
    tagColor: "green",
  },
];

const pressCategories = [
  { name: "Awards", count: 107, pct: 88 },
  { name: "Events", count: 93, pct: 78 },
  { name: "Entertainment", count: 91, pct: 74 },
  { name: "Corporate", count: 82, pct: 63 },
];

const investorAnnouncements = [
  { date: "23 Feb 2026", title: "Date of Board Meeting" },
  {
    date: "20 Feb 2026",
    title:
      "Notice of Listing on The Stock Exchange of Hong Kong Limited \u2013 SJM International Limited \u2013 USD540,000,000 6.500% Senior Notes Due 2031",
  },
  {
    date: "04 Feb 2026",
    title:
      "Monthly Return of Equity Issuer on Movements in Securities for the Month Ended 31/01/2026",
  },
  {
    date: "19 Jan 2026",
    title:
      "Settlement of Offer to Purchase for Cash any and all of the Outstanding 4.500% Senior Notes Due 2026",
  },
  {
    date: "16 Jan 2026",
    title:
      "Publication of Offering Memorandum \u2013 SJM International Limited \u2013 USD540,000,000 6.500% Senior Notes Due 2031",
  },
  {
    date: "15 Jan 2026",
    title:
      "Notice of Listing on The Stock Exchange of Hong Kong Limited \u2013 SJM International Limited \u2013 USD540,000,000 6.500% Senior Notes Due 2031",
  },
];

const investorLinks = [
  {
    label: "Financial Reports",
    iconUrl:
      "https://www.figma.com/api/mcp/asset/7915224c-8323-4f20-b822-27d9faac746e",
  },
  {
    label: "Environmental, Social and Governance Reports",
    iconUrl:
      "https://www.figma.com/api/mcp/asset/4928f4e9-d8ca-413b-99d0-f6681c97f1fc",
  },
  {
    label: "Circulars, Proxy Forms, Letters & Documents on Display",
    iconUrl:
      "https://www.figma.com/api/mcp/asset/05574595-aca8-4d97-8983-0a516305eb7e",
  },
  {
    label: "Stock Information",
    iconUrl:
      "https://www.figma.com/api/mcp/asset/0e581576-1fcc-4ce0-8a40-9ccc78f03d4e",
  },
];

const ICON_SIDEBAR_ARROW =
  "https://www.figma.com/api/mcp/asset/52613f02-dfb3-4d42-ae22-d6ded7ffdd89";
const ICON_EMAIL =
  "https://www.figma.com/api/mcp/asset/ed0043e7-df5d-4f63-ad33-2031854c886b";

const communityArticles = [
  {
    date: "24 Feb",
    title:
      "SJM Joins Hands with the Community to Celebrate the Year of the Horse",
    featured: true,
  },
  {
    date: "24 Feb",
    title:
      "SJM Volunteer Team 10th Anniversary Celebration Dinner | A Decade of Unity and Giving Back",
  },
  {
    date: "24 Feb",
    title:
      "SJM Supports the USJ SDG Week 2026 to Explore the Future of Sustainable Development",
  },
  {
    date: "24 Feb",
    title:
      '\u201CSJM Talent Development Programme\u201D Graduation Ceremony Highlights Local Talent Development Achievements',
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
    iconUrl:
      "https://www.figma.com/api/mcp/asset/b247066c-f0c6-4985-8e9c-bfb6560847ef",
  },
  {
    title: "Community Support",
    body: "Investing in community development through charitable partnerships, cultural preservation, local employment, and social impact programmes in Macau.",
    iconUrl:
      "https://www.figma.com/api/mcp/asset/451acd26-7034-4559-b620-77f58c91804e",
  },
  {
    title: "Responsible Gaming",
    body: "Promoting a safe and responsible gaming environment through strict compliance, player protection measures, staff training, and public education initiatives.",
    iconUrl:
      "https://www.figma.com/api/mcp/asset/513e5f80-c3c3-4add-84cf-e744344c01d9",
  },
  {
    title: "ESG Reports",
    body: "Maintaining transparent ESG disclosures aligned with international standards and HKEX requirements, with clear metrics, targets, and performance tracking.",
    iconUrl:
      "https://www.figma.com/api/mcp/asset/b62535dc-35d9-43cf-8a71-f03d1a1468e7",
  },
];

/* ── SVG Icon Components ── */

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

function DocIcon({ className = "" }) {
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
      <path d="M6 7H10M6 9.5H10M6 12H8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
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

function FolderIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M2 4.5V12.5H14V6H8L6.5 4.5H2Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChartIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 13V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 13V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 13V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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

function EmailIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="3.5" width="12" height="9" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <path d="M2 4.5L8 9L14 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

const sidebarIconMap = {
  doc: DocIcon,
  leaf: LeafIcon,
  folder: FolderIcon,
  chart: ChartIcon,
};

const esgIconMap = {
  leaf: LeafIcon,
  heart: HeartIcon,
  shield: ShieldIcon,
  file: FileIcon,
};

/* ── Divider Link ── */

function DividerLink({ children, color = "accent" }) {
  const colorMap = {
    accent: "text-[#009b79]",
    gold: "text-[#a8996e]",
  };
  const barMap = {
    accent: "bg-[#009b79]",
    gold: "bg-[#a8996e]",
  };
  return (
    <button
      type="button"
      className={`inline-flex items-center gap-3 text-[12px] leading-[16px] uppercase tracking-[2.4px] transition hover:opacity-80 ${colorMap[color]}`}
    >
      {children}
      <span className={`h-px w-8 ${barMap[color]}`} />
    </button>
  );
}

/* ── Page ── */

export default function Demo1Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f6f0] font-sans text-[#1f2524]">
      {/* ── Header ── */}
      <header className="fixed inset-x-0 top-0 z-50">
        {/* Stock ticker */}
        <div className="border-b border-[rgba(168,153,110,0.2)] bg-[#001c1c]">
          <div className="mx-auto flex h-10 w-full max-w-[1680px] items-center justify-between px-5 sm:px-8 lg:px-[60px] xl:px-[120px]">
            <div className="flex items-center gap-4 text-[13px] leading-[19.2px] tracking-[0.32px] uppercase">
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

        {/* Main nav */}
        <div className="bg-[rgba(0,30,30,0.6)] backdrop-blur-[5px]">
          <div className="mx-auto flex h-[100px] w-full max-w-[1680px] items-center justify-between px-5 sm:px-8 lg:px-[60px] xl:px-[120px]">
            <div className="relative h-9 w-[157px]">
              <Image
                src={IMAGES.logo}
                alt="SJM Holdings"
                fill
                priority
                sizes="157px"
                className="object-contain object-left"
              />
            </div>

            <nav className="hidden items-center gap-[21.6px] xl:flex">
              {navItems.map((item) => (
                <button
                  type="button"
                  key={item}
                  className="px-1 text-[14px] leading-[19.2px] uppercase text-white/80 transition hover:text-[#a8996e]"
                >
                  {item}
                </button>
              ))}
              <button
                type="button"
                className="flex items-center gap-2 px-1 text-[14px] leading-[19.2px] uppercase text-white/80 transition hover:text-[#a8996e]"
              >
                <SearchIcon className="h-[15px] w-[15px]" />
                Search
              </button>
              <button
                type="button"
                className="flex items-center gap-2 px-1 text-[14px] leading-[19.2px] uppercase text-white/80 transition hover:text-[#a8996e]"
              >
                <GlobeIcon className="h-[14px] w-[14px]" />
                EN
              </button>
            </nav>

            <button
              type="button"
              className="rounded-full border border-white/25 px-4 py-1.5 text-[12px] uppercase tracking-wider text-white xl:hidden"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

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

        <div className="relative mx-auto flex w-full max-w-[1680px] flex-1 flex-col justify-center px-5 pb-24 sm:px-8 lg:px-[60px] xl:px-[120px]">
          <div className="flex max-w-[1280px] flex-col gap-[30px] pt-[100px] lg:px-[80px]">
            <h1 className="font-petrona text-[42px] font-extralight leading-[1] tracking-[-1px] text-white sm:text-[54px] sm:tracking-[-1.5px] lg:text-[80px] lg:leading-[80px] lg:tracking-[-2.25px]">
              <span className="block">Welcome to</span>
              <span className="block text-[#a8996e]">SJM Holdings</span>
              <span className="block pt-2 text-[34px] sm:text-[42px] lg:text-[60px] lg:leading-[60px] lg:tracking-[-1.5px]">
                Limited
              </span>
            </h1>

            <div className="h-px w-24 bg-[rgba(168,153,110,0.6)]" />

            <p className="max-w-[672px] text-[15px] leading-[29.25px] text-white/80 sm:text-[18px]">
              One of the six gaming concessionaires in Macau, operating iconic
              integrated resorts that define the world&apos;s premier
              entertainment destination. Listed on the Hong Kong Stock Exchange:
              <span className="font-medium text-[#a8996e]"> 00880.HK</span>.
            </p>

            <div>
              <button
                type="button"
                className="inline-flex items-center gap-3 rounded-full border border-[#a8996e] px-[33px] py-[15px] text-[12px] font-medium leading-[16px] uppercase tracking-[2.4px] text-[#a8996e] transition hover:bg-[#a8996e] hover:text-[#072121]"
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
                  className={`flex flex-col items-center py-3 ${idx > 0 ? "border-l border-white/10" : ""}`}
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
              <span className="font-petrona text-[36px] font-extralight capitalize leading-[75px] text-[#231f20] sm:text-[48px] lg:text-[60px]">
                Macau&apos;s pioneering
              </span>
              <span className="font-petrona text-[36px] font-extralight capitalize leading-[75px] text-[#009b79] sm:text-[48px] lg:text-[60px]">
                integrated resort
              </span>
              <span className="font-petrona text-[36px] font-extralight capitalize leading-[75px] text-[#231f20] sm:text-[48px] lg:text-[60px]">
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
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url('${IMAGES.greenPattern}'), linear-gradient(90deg, #004433 0%, #004433 100%)`,
          backgroundSize: "1020px 1361px, auto auto",
          backgroundPosition: "left top",
        }}
      >
        <div className="mx-auto w-full max-w-[1680px] px-5 sm:px-8 lg:px-[60px]">
          <div className="flex flex-col lg:flex-row">
            {/* Info panel */}
            <div className="flex w-full flex-col justify-between bg-[rgba(0,30,30,0.85)] px-6 py-10 backdrop-blur-[5px] sm:px-12 sm:py-[60px] lg:w-[440px] lg:shrink-0">
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-2">
                  <p className="text-[12px] leading-[18px] uppercase tracking-[2.7px] text-[#a8996e]">
                    MACAU COTAI
                  </p>
                  <p className="font-petrona text-[28px] font-extralight uppercase leading-[41.6px] tracking-[3.2px] text-white sm:text-[32px]">
                    GRAND LISBOA
                    <br />
                    PALACE
                  </p>
                </div>
                <p className="max-w-[344px] text-[14px] leading-[22.75px] text-white/80">
                  A prominent integrated resort that celebrates Macau&apos;s
                  legendary cross-cultural heritage, where European and
                  Chinoiserie-inspired opulence meld seamlessly with
                  sophisticated, world-class.
                </p>
                <DividerLink color="gold">LEARN MORE</DividerLink>
              </div>

              <div className="mt-8 flex gap-3.5">
                <button
                  type="button"
                  className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-white text-white transition hover:bg-white/10"
                  aria-label="Previous"
                >
                  <ChevronIcon left className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-white text-white transition hover:bg-white/10"
                  aria-label="Next"
                >
                  <ChevronIcon className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Property image */}
            <div className="relative min-h-[260px] flex-1 sm:min-h-[360px] lg:h-[560px] lg:min-h-0">
              <Image
                src={IMAGES.propertyMain}
                alt="Grand Lisboa Palace exterior"
                fill
                sizes="(max-width: 1024px) 100vw, 960px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Press Releases ── */}
      <section className="bg-[#f7f6f0]">
        <div className="mx-auto flex w-full max-w-[1680px] flex-col gap-10 px-5 py-14 sm:px-8 lg:px-[60px] lg:py-[80px] xl:px-[120px]">
          <h2 className="font-petrona text-[36px] font-extralight leading-[48px] text-[#231f20] sm:text-[44px] lg:text-[48px]">
            Latest <span className="text-[#009b79]">Press Releases.</span>
          </h2>

          <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
            {/* Articles list */}
            <div className="flex-1">
              <div className="flex flex-col">
                {pressReleases.map((item) => (
                  <article
                    key={item.title}
                    className="flex gap-4 border-b border-[rgba(35,31,32,0.1)] py-6 sm:gap-6"
                  >
                    <p className="w-[80px] shrink-0 text-right text-[12px] leading-[18px] text-[#8e9590]">
                      {item.date}
                    </p>
                    <div className="flex flex-1 flex-col gap-2">
                      <span
                        className={`inline-block w-fit px-2 py-0.5 text-[12px] leading-[18px] uppercase tracking-[0.9px] ${
                          item.tagColor === "green"
                            ? "bg-[rgba(0,155,121,0.1)] text-[#009b79]"
                            : "bg-[rgba(168,153,110,0.1)] text-[#a8996e]"
                        }`}
                      >
                        {item.tag}
                      </span>
                      <p className="text-[14px] leading-[22.75px] text-[#231f20]">
                        {item.title}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center">
                      <ChevronRightIcon className="h-4 w-4 text-[#8e9590]" />
                    </div>
                  </article>
                ))}
              </div>

              <div className="pt-4">
                <DividerLink color="accent">All Press Releases</DividerLink>
              </div>
            </div>

            {/* Categories sidebar */}
            <div className="w-full lg:w-[380px] lg:shrink-0">
              <div className="border border-[rgba(35,31,32,0.08)] bg-white p-6">
                <p className="text-[12px] leading-[18px] uppercase tracking-[2.7px] text-[#a8996e]">
                  Categories
                </p>
                <div className="mt-6 flex flex-col gap-4">
                  {pressCategories.map((cat, idx) => (
                    <div key={cat.name}>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[14px] leading-[18px] text-[#8e9590]">
                            {cat.name}
                          </span>
                          <span className="text-[14px] font-medium leading-[18px] text-[#8e9590]">
                            {cat.count}
                          </span>
                        </div>
                        <div className="h-2 w-full bg-[rgba(0,155,121,0.1)]">
                          <div
                            className="h-full bg-[#009b79]"
                            style={{ width: `${cat.pct}%` }}
                          />
                        </div>
                      </div>
                      {idx < pressCategories.length - 1 && (
                        <div className="mt-4 h-px bg-[rgba(35,31,32,0.06)]" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Investor Relations ── */}
      <section className="bg-[#001e1e]">
        <div className="mx-auto flex w-full max-w-[1680px] flex-col gap-10 px-5 py-14 sm:px-8 lg:px-[60px] lg:py-[80px] xl:px-[120px]">
          <h2 className="font-petrona text-[36px] font-extralight leading-[48px] text-white sm:text-[44px] lg:text-[48px]">
            Transparent.
            <br />
            Accountable.{" "}
            <span className="text-[#a8996e]">Investor-first.</span>
          </h2>

          <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
            {/* Announcements */}
            <div className="flex-1">
              <div className="flex flex-col">
                {investorAnnouncements.map((item) => (
                  <article
                    key={`${item.date}-${item.title.slice(0, 20)}`}
                    className="flex gap-4 border-b border-white/[0.08] py-5 sm:gap-6"
                  >
                    <p className="w-[80px] shrink-0 text-right text-[12px] leading-[15px] text-[#8e9590]">
                      {item.date}
                    </p>
                    <p className="flex-1 text-[14px] leading-[22.75px] text-white/80">
                      {item.title}
                    </p>
                    <div className="flex shrink-0 items-start pt-0.5">
                      <ChevronRightIcon className="h-4 w-4 text-[rgba(255,255,255,0.2)]" />
                    </div>
                  </article>
                ))}
              </div>

              <div className="pt-4">
                <DividerLink color="gold">ALL Investor Relations</DividerLink>
              </div>
            </div>

            {/* Sidebar links + IR Contact */}
            <div className="flex w-full flex-col gap-4 lg:w-[380px] lg:shrink-0">
              {investorLinks.map((link) => (
                <button
                  type="button"
                  key={link.label}
                  className="flex items-center gap-4 border border-white/[0.08] bg-white/[0.05] px-[17px] py-[15px] text-left transition hover:border-[#a8996e]/40 hover:bg-white/[0.08]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt=""
                      src={link.iconUrl}
                      className="h-4 w-4"
                    />
                  </span>
                  <span className="flex-1 text-[12px] leading-[16px] tracking-[0.3px] text-white/80">
                    {link.label}
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt=""
                    src={ICON_SIDEBAR_ARROW}
                    className="h-3.5 w-3.5 shrink-0"
                  />
                </button>
              ))}

              {/* IR Contact */}
              <div className="flex flex-col gap-3 border border-[rgba(168,153,110,0.3)] bg-[rgba(168,153,110,0.05)] px-[21px] pb-[23px] pt-[21px]">
                <p className="text-[12px] leading-[18px] uppercase tracking-[2.7px] text-[#a8996e]">
                  IR CONTACT
                </p>
                <p className="text-[12px] leading-[19.5px] text-white/60">
                  If you have any additional questions for our Investor Relations
                  Department, please contact us.
                </p>
                <div className="flex items-start gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" src={ICON_EMAIL} className="mt-0.5 h-4 w-4 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <span className="text-[12px] leading-[18px] uppercase tracking-[0.9px] text-white/40">
                      Email
                    </span>
                    <span className="text-[12px] leading-[16px] text-white/80">
                      media@sjmholdings.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Community / Impact ── */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url('${IMAGES.greenPattern}'), linear-gradient(90deg, #004433 0%, #004433 100%)`,
          backgroundSize: "1020px 1361px, auto auto",
          backgroundPosition: "left top",
        }}
      >
        <div className="mx-auto flex w-full max-w-[1680px] flex-col gap-14 px-5 py-14 sm:px-8 lg:px-[60px] lg:py-[80px] xl:px-[120px]">
          <h2 className="font-petrona text-[36px] font-extralight leading-[48px] text-white sm:text-[44px] lg:text-[48px]">
            Responsible. Impact-driven.
            <br />
            <span className="text-[#a8996e]">Community-focused.</span>
          </h2>

          <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
            {/* Articles */}
            <div className="flex-1">
              <div className="flex flex-col gap-6 lg:flex-row lg:gap-16">
                {/* Featured article with image */}
                <div className="w-full border-b border-white/[0.08] pb-5 lg:w-[540px] lg:shrink-0">
                  <div className="relative mb-3 h-[200px] w-full sm:h-[260px] lg:h-[317px]">
                    <Image
                      src={IMAGES.communityFeature}
                      alt={communityArticles[0].title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 540px"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[12px] leading-[15px] text-[#8e9590]">
                    {communityArticles[0].date}
                  </p>
                  <p className="mt-3 text-[14px] leading-[22.75px] text-white/80">
                    {communityArticles[0].title}
                  </p>
                </div>

                {/* Text-only articles */}
                <div className="flex flex-1 flex-col gap-6">
                  {communityArticles.slice(1).map((item) => (
                    <article
                      key={item.title}
                      className="flex flex-col gap-3 border-b border-white/[0.08] pb-5"
                    >
                      <p className="text-[12px] leading-[15px] text-[#8e9590]">
                        {item.date}
                      </p>
                      <p className="text-[14px] leading-[22.75px] text-white/80">
                        {item.title}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <DividerLink color="gold">
                  ALL Investor Relations
                </DividerLink>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid w-full grid-cols-2 gap-4 self-start lg:w-[380px] lg:shrink-0">
              {communityStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col justify-center border border-[rgba(168,153,110,0.3)] bg-[rgba(168,153,110,0.05)] px-6 py-5"
                >
                  <p className="font-petrona text-[32px] font-extralight text-white/80 sm:text-[40px]">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-[11px] uppercase leading-[18px] tracking-[2.7px] text-[#a8996e] sm:text-[12px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ESG ── */}
      <section className="bg-[#f7f6f0]">
        <div className="mx-auto w-full max-w-[1680px] px-5 py-14 sm:px-8 lg:px-[60px] lg:py-[80px] xl:px-[120px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
            <div className="relative h-[220px] w-full overflow-hidden sm:h-[280px] lg:h-[339px] lg:flex-1">
              <Image
                src={IMAGES.esgMain}
                alt="ESG initiative"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col gap-6">
              <div>
                <p className="font-petrona text-[36px] font-extralight leading-[60px] text-[#231f20] sm:text-[44px] lg:text-[48px]">
                  Building an ESG-driven
                </p>
                <p className="font-petrona text-[36px] font-extralight leading-[60px] text-[#009b79] sm:text-[44px] lg:text-[48px]">
                  future for Macau.
                </p>
              </div>
              <div className="h-px w-16 bg-[#a8996e]" />
              <p className="text-[14px] leading-[22.75px] text-[#231f20]">
                SJM Holdings embraces its responsibility as a major corporate
                citizen in Macau. Our sustainability strategy integrates
                environmental stewardship, social responsibility, and rigorous
                governance across every aspect of our operations.
              </p>
              <p className="text-[14px] leading-[22.75px] text-[#8e9590]">
                Our annual ESG Report, published in accordance with the HKEX ESG
                Reporting Guide, provides full transparency on our progress and
                commitments to all stakeholders.
              </p>
            </div>
          </div>

          {/* ESG Cards */}
          <div className="mt-[60px] grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {esgCards.map((card) => (
                <article
                  key={card.title}
                  className="flex flex-col gap-5 border border-[rgba(35,31,32,0.1)] bg-white p-[25px]"
                >
                  <div className="flex h-10 w-10 items-center justify-center border border-[rgba(0,155,121,0.05)] bg-[rgba(0,155,121,0.05)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src={card.iconUrl} className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[14px] font-medium leading-[20px] tracking-[0.35px] text-[#231f20]">
                      {card.title}
                    </h3>
                    <p className="text-[12px] leading-[19.5px] text-[#8e9590]">
                      {card.body}
                    </p>
                  </div>
                  <DividerLink color="accent">LEARN MORE</DividerLink>
                </article>
            ))}
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
