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

const articleParagraphs = [
  {
    type: "body",
    text: '12 February 2026 – As the Lunar New Year ushers in the Year of the Horse, SJM Resorts, S.A. ("SJM") continues its community commitment with a vibrant series of celebrations. Living up to its philosophy of giving back to society, SJM collaborated with local welfare organisations throughout January and February to bring festive joy to the community. The initiatives encompassed family-oriented activities, cultural celebrations and community outreach programs, bringing communities together while preserving cherished traditions and strengthening family bonds.',
  },
  { type: "heading", text: "Sharing Warmth with the Community" },
  {
    type: "body",
    text: "From January through February, the SJM Volunteer Team rolled out its annual Lunar New Year Caring Campaign, reaching families and individuals across Macau. Volunteers visited a variety of community organisations—including the Against Child Abuse (Macau) Association Child Protection Centre, Macau Down Syndrome Association, Escola São José de Ká-Hó, Macau Special Olympics and the Macau Deaf Association—delivering gift packs and heartfelt greetings to 750 households and more than 2,000 beneficiaries. Beyond distributing gifts, volunteers spent meaningful time engaging with community members, offering companionship and bringing an extra touch of warmth to the New Year season.",
  },
  {
    type: "body",
    text: "In alignment with the Healthy Macao Blueprint, SJM also partnered with the Macao New Chinese Youth Association to host a health seminar at the Lok Yin Elderly Service Centre of the Women's General Association of Macau. Attended by 80 seniors, the session covered nutrition, healthy eating and awareness of swallowing difficulties commonly experienced by older adults. Participants also received New Year calligraphy blessings and gift bags, rounding off a meaningful and joyful afternoon.",
  },
  { type: "heading", text: "Enhancing Family Cohesion through Festive Programmes" },
  {
    type: "body",
    text: "To champion family-friendly values and a harmonious community, SJM organised a series of Lunar New Year parent-child activities. In January, 32 parents and children from the Centro de Serviços Integrados de Apoio à Família - Fonte de Alegria e de Energia, Caritas Macau visited Kam Pek Market, where they created Year of the Horse bamboo ornaments together and enjoyed afternoon tea.",
  },
  {
    type: "body",
    text: 'In February, SJM hosted the "Joyful New Year Baking Parent‑Child Workshop", which attracted 10 family groups of employees and their children. Through hands‑on baking, participants strengthened parent‑child bonds in a joyful setting. Later in the month, SJM also invited employees and their children, along with elderly members of the Women\'s General Association of Macau to visit the Lisboa: The Story of Macao exhibition at the Grand Lisboa Palace Art Gallery. The guided tour was followed by a themed workshop, offering families an engaging cultural experience and opportunities to connect through shared learning.',
  },
  { type: "heading", text: "Celebrating Tradition and Giving Back" },
  {
    type: "body",
    text: 'To promote Chinese traditional culture, SJM held its "SJM Welcomes the New Year – Calligraphy Blessings for All" event in February, featuring renowned local calligraphers including Mr. Kuan Kun Cheong. More than 1,600 fai chuns (spring couplets) were written on site and gifted to the public, bringing blessings to the community.',
  },
  {
    type: "body",
    text: "During the New Year period, SJM also invited the Sheng Kung Hui Macau Social Services Coordination Office and the Association of Parents of the People with Intellectual Disabilities of Macau to set up charity booths in staff back‑of‑house areas to display and sell handicrafts and festive products created by service users. All proceeds support the organisations' operations and development, enabling SJM team members to contribute to the community while preparing for the New Year.",
  },
];

export default function CsrEventDetailPage() {
  return (
    <div className="min-h-screen bg-[#f7f6f0] font-sans">
      <Demo2Header />

      {/* ── Hero ── */}
      <section className="bg-[#f7f6f0]">
        <div className="h-[220px] w-full bg-[#004433]" />
        <div className="relative z-10 -mt-[70px] px-4 md:px-8 lg:px-[40px]">
          <div className="bg-white px-4 py-10 md:px-8 lg:px-[60px] lg:py-[40px]">
            {/* Date + Title */}
            <div className="flex flex-col gap-4">
              <p className="text-[16px] font-semibold uppercase leading-6 tracking-[0.02em] text-[#001625]">
                24 Feb 2026
              </p>
              <h1 className="font-petrona text-[32px] font-extralight leading-[1.13] tracking-[-0.047em] text-black md:text-[48px]">
                SJM Joins Hands with the Community to Celebrate the Year of the Horse
              </h1>
            </div>

            {/* Social Share Icons */}
            <div className="mt-6 flex items-center gap-5">
              {/* Facebook */}
              <a href="#" aria-label="Share on Facebook" className="text-[#141414] transition hover:opacity-60">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="17" height="17" rx="2.5" stroke="#141414"/>
                  <path d="M10.5 6.5H11.5V5H10C8.895 5 8 5.895 8 7V8H7V9.5H8V13H9.5V9.5H11L11.5 8H9.5V7C9.5 6.724 9.724 6.5 10 6.5H10.5Z" fill="#141414"/>
                </svg>
              </a>
              {/* X (Twitter) */}
              <a href="#" aria-label="Share on X" className="text-[#141414] transition hover:opacity-60">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.16 0L5.84 8.08L0 15H1.32L6.44 8.88L10.6 15H15L9.04 6.56L14.56 0H13.24L8.44 5.76L4.56 0H0.16ZM2 1H4L13 14H11L2 1Z" fill="#141414"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Share on Instagram" className="text-[#141414] transition hover:opacity-60">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="14" height="14" rx="3.5" stroke="#141414"/>
                  <circle cx="7.5" cy="7.5" r="2.5" stroke="#141414"/>
                  <circle cx="11" cy="4" r="0.75" fill="#141414"/>
                </svg>
              </a>
              {/* Email */}
              <a href="#" aria-label="Share by Email" className="text-[#141414] transition hover:opacity-60">
                <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="14" height="11" rx="1.5" stroke="#141414"/>
                  <path d="M1 1L7.5 7L14 1" stroke="#141414" strokeLinecap="round"/>
                </svg>
              </a>
              {/* Document */}
              <a href="#" aria-label="Save document" className="text-[#141414] transition hover:opacity-60">
                <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 0.5H7.5L11.5 4.5V14.5H0.5V0.5H1.5Z" stroke="#141414" strokeLinejoin="round"/>
                  <path d="M7.5 0.5V4.5H11.5" stroke="#141414" strokeLinejoin="round"/>
                  <path d="M3 7H9M3 9.5H7" stroke="#141414" strokeLinecap="round"/>
                </svg>
              </a>
              {/* Print */}
              <a href="#" aria-label="Print" className="text-[#141414] transition hover:opacity-60">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="4.5" width="14" height="8" rx="1.5" stroke="#141414"/>
                  <path d="M3 4.5V1.5H12V4.5" stroke="#141414" strokeLinecap="round"/>
                  <rect x="3" y="8.5" width="9" height="4" rx="0.5" fill="white" stroke="#141414"/>
                  <circle cx="11.5" cy="7" r="0.75" fill="#141414"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Article Content ── */}
      <section className="bg-[#f7f6f0]">
        <div className="flex w-full flex-col items-center gap-10 px-4 py-10 md:px-8 lg:gap-[40px] lg:px-[40px] lg:py-[40px]">

          {/* Images Row */}
          <div className="grid w-full gap-4 grid-cols-3">
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
          <div className="w-full max-w-[960px]">
            {articleParagraphs.map((block, idx) =>
              block.type === "heading" ? (
                <h2 key={idx} className="mb-3 mt-8 font-petrona text-[20px] font-extralight leading-[1.4] text-[#141414] first:mt-0">
                  {block.text}
                </h2>
              ) : (
                <p key={idx} className="mb-4 text-[14px] leading-[1.57] text-[#231f20]">
                  {block.text}
                </p>
              )
            )}
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
