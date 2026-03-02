import Image from "next/image";
import Link from "next/link";
import Demo2Header from "../../Header";

const brandLogos = [
  { src: "/demo2/logo-glp.png", alt: "Grand Lisboa Palace" },
  { src: "/demo2/logo-gl.png", alt: "Grand Lisboa" },
  { src: "/demo2/logo-hl.png", alt: "Hotel Lisboa" },
  { src: "/demo2/logo-ja.png", alt: "Jai Alai Oceanus" },
  { src: "/demo2/logo-larc.png", alt: "Lisboa Arcade" },
  { src: "/demo2/logo-p16.png", alt: "Ponte 16" },
  { src: "/demo2/logo-km.png", alt: "Kam Pek Market" },
];

function ShareIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 18 18" aria-hidden className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14.25" cy="3.75" r="2.25" stroke="currentColor" strokeWidth="1" />
      <circle cx="3.75" cy="9" r="2.25" stroke="currentColor" strokeWidth="1" />
      <circle cx="14.25" cy="14.25" r="2.25" stroke="currentColor" strokeWidth="1" />
      <path d="M6 10.2L12 13.05M12 4.95L6 7.8" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

const articleBody = `12 February 2026 – As the Lunar New Year ushers in the Year of the Horse, SJM Resorts, S.A. ("SJM") continues its community commitment with a vibrant series of celebrations. Living up to its philosophy of giving back to society, SJM collaborated with local welfare organisations throughout January and February to bring festive joy to the community. The initiatives encompassed family-oriented activities, cultural celebrations and community outreach programs, bringing communities together while preserving cherished traditions and strengthening family bonds.

Sharing Warmth with the Community

From January through February, the SJM Volunteer Team rolled out its annual Lunar New Year Caring Campaign, reaching families and individuals across Macau. Volunteers visited a variety of community organisations—including the Against Child Abuse (Macau) Association Child Protection Centre, Macau Down Syndrome Association, Escola São José de Ká-Hó, Macau Special Olympics and the Macau Deaf Association—delivering gift packs and heartfelt greetings to 750 households and more than 2,000 beneficiaries. Beyond distributing gifts, volunteers spent meaningful time engaging with community members, offering companionship and bringing an extra touch of warmth to the New Year season.

In alignment with the Healthy Macao Blueprint, SJM also partnered with the Macao New Chinese Youth Association to host a health seminar at the Lok Yin Elderly Service Centre of the Women's General Association of Macau. Attended by 80 seniors, the session covered nutrition, healthy eating and awareness of swallowing difficulties commonly experienced by older adults. Participants also received New Year calligraphy blessings and gift bags, rounding off a meaningful and joyful afternoon.

Enhancing Family Cohesion through Festive Programmes

To champion family-friendly values and a harmonious community, SJM organised a series of Lunar New Year parent-child activities. In January, 32 parents and children from the Centro de Serviços Integrados de Apoio à Família - Fonte de Alegria e de Energia, Caritas Macau visited Kam Pek Market, where they created Year of the Horse bamboo ornaments together and enjoyed afternoon tea.

In February, SJM hosted the "Joyful New Year Baking Parent‑Child Workshop", which attracted 10 family groups of employees and their children. Through hands‑on baking, participants strengthened parent‑child bonds in a joyful setting. Later in the month, SJM also invited employees and their children, along with elderly members of the Women's General Association of Macau to visit the Lisboa: The Story of Macao exhibition at the Grand Lisboa Palace Art Gallery. The guided tour was followed by a themed workshop, offering families an engaging cultural experience and opportunities to connect through shared learning.

Celebrating Tradition and Giving Back

To promote Chinese traditional culture, SJM held its "SJM Welcomes the New Year – Calligraphy Blessings for All" event in February, featuring renowned local calligraphers including Mr. Kuan Kun Cheong. More than 1,600 fai chuns (spring couplets) were written on site and gifted to the public, bringing blessings to the community.

During the New Year period, SJM also invited the Sheng Kung Hui Macau Social Services Coordination Office and the Association of Parents of the People with Intellectual Disabilities of Macau to set up charity booths in staff back‑of‑house areas to display and sell handicrafts and festive products created by service users. All proceeds support the organisations' operations and development, enabling SJM team members to contribute to the community while preparing for the New Year.`;

export default function CsrEventDetailPage() {
  return (
    <div className="min-h-screen bg-[#f7f6f0] font-sans">
      <Demo2Header />

      {/* Hero Section */}
      <section className="bg-[#f7f6f0]">
        <div className="h-[220px] w-full bg-[#004433]" />
        <div className="relative z-10 -mt-[70px] px-4 md:px-8 lg:px-[40px]">
          <div className="bg-white px-4 py-10 md:px-8 lg:px-[60px] lg:py-[40px]">
            <div className="flex flex-col gap-4">
              <p className="text-[16px] font-semibold uppercase leading-6 tracking-[0.02em] text-[#001625]">
                24 Feb 2026
              </p>
              <h1 className="font-petrona text-[32px] font-extralight leading-[1.13] tracking-[-0.047em] text-black md:text-[48px]">
                SJM Joins Hands with the Community to Celebrate the Year of the Horse
              </h1>
            </div>
            <div className="mt-6 flex items-center gap-5">
              <button
                type="button"
                className="flex h-[18px] w-[18px] items-center justify-center text-[#141414] transition hover:text-[#004433]"
                aria-label="Share"
              >
                <ShareIcon className="h-[18px] w-[18px]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-[#f7f6f0]">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-10 md:px-8 lg:px-[40px] lg:py-10">
          {/* Images Row */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="relative h-[200px] w-full sm:h-[240px] lg:h-[376px]">
              <Image src="/demo2/csr-1.jpg" alt="CSR Event photo 1" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
            </div>
            <div className="relative h-[200px] w-full sm:h-[240px] lg:h-[376px]">
              <Image src="/demo2/csr-2.jpg" alt="CSR Event photo 2" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
            </div>
            <div className="relative h-[200px] w-full sm:h-[240px] lg:h-[376px]">
              <Image src="/demo2/csr-3.jpg" alt="CSR Event photo 3" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
            </div>
          </div>

          {/* Article Body */}
          <div className="mx-auto mt-10 max-w-[960px]">
            {articleBody.split("\n\n").map((para, idx) => {
              const isHeading = !para.startsWith("1") && !para.startsWith("From") && !para.startsWith("In ") && !para.startsWith("To ") && !para.startsWith("During") && para.length < 80;
              return isHeading ? (
                <h2 key={idx} className="mb-4 mt-8 font-petrona text-[20px] font-extralight leading-[1.4] text-[#141414]">
                  {para}
                </h2>
              ) : (
                <p key={idx} className="mb-4 text-[14px] leading-[1.57] text-[#231f20]">
                  {para}
                </p>
              );
            })}
          </div>

          {/* Back Link */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/demo2/csr-events"
              className="inline-flex h-[44px] items-center border border-[#001625] px-6 text-[12px] font-medium uppercase leading-4 tracking-[0.1em] text-[#001625] transition hover:bg-[#001625] hover:text-white"
            >
              Back to CSR Events
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001e1e] text-white">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-10 md:px-8 lg:px-[80px]">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-center lg:gap-8">
            <div className="relative h-[52px] w-[227px] shrink-0">
              <Image src="/demo2/sjm-logo.png" alt="SJM Holdings" fill sizes="227px" className="object-contain" />
            </div>
            <div className="hidden h-10 w-px bg-white/10 lg:block" />
            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
              {brandLogos.map((brand) => (
                <div key={brand.alt} className="relative h-[80px] w-[80px] md:h-[100px] md:w-[100px]">
                  <Image src={brand.src} alt={brand.alt} fill sizes="100px" className="object-contain" />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-8 text-center">
            <p className="text-[12px] leading-6 tracking-[0.02em] text-[#a78a5d]">Privacy Statement &amp; Disclaimer</p>
            <p className="text-[12px] leading-6 tracking-[0.02em] text-white">Copyright 2026 © SJM Holdings Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
