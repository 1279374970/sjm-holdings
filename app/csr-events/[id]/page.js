import Image from "next/image";
import Header from "../../demo1/Header";

const IMAGES = { logo: "/demo1/sjm-logo.png" };

const galleryImages = [
  "/demo1/csr-detail-1.png",
  "/demo1/csr-detail-2.png",
  "/demo1/csr-detail-3.png",
];

function IconBorder({ children }) {
  return (
    <button
      type="button"
      className="flex h-9 w-9 items-center justify-center border border-[rgba(0,155,121,0.05)] bg-[rgba(0,155,121,0.05)] text-[#009b79] transition hover:bg-[rgba(0,155,121,0.12)]"
    >
      {children}
    </button>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M10.5 3H12.75V0H10.5C8.84 0 7.5 1.34 7.5 3V5.25H5.25V8.25H7.5V18H10.5V8.25H12.75L13.5 5.25H10.5V3Z" fill="currentColor" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path d="M0.16 0L5.84 8.08L0 15H1.32L6.44 8.88L10.6 15H15L9.04 6.56L14.56 0H13.24L8.44 5.76L4.56 0H0.16ZM2 1H4L13 14H11L2 1Z" fill="currentColor" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="1.5" y="1.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="13" cy="5" r="0.9" fill="currentColor" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect x="1.5" y="3" width="15" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1.5 4.5L9 9.75L16.5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

function FileTextIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3 1.5H11.25L15 5.25V16.5H3V1.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M11.25 1.5V5.25H15" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M6 9H12M6 12H10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function PrinterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M4.5 6V1.5H13.5V6" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <rect x="1.5" y="6" width="15" height="7.5" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4.5 10.5H13.5V16.5H4.5V10.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

const articleParagraphs = [
  { type: "body", text: '12 February 2026 \u2013 As the Lunar New Year ushers in the Year of the Horse, SJM Resorts, S.A. (\u201CSJM\u201D) continues its community commitment with a vibrant series of celebrations. Living up to its philosophy of giving back to society, SJM collaborated with local welfare organisations throughout January and February to bring festive joy to the community. The initiatives encompassed family-oriented activities, cultural celebrations and community outreach programs, bringing communities together while preserving cherished traditions and strengthening family bonds.' },
  { type: "heading", text: "Sharing Warmth with the Community" },
  { type: "body", text: "From January through February, the SJM Volunteer Team rolled out its annual Lunar New Year Caring Campaign, reaching families and individuals across Macau. Volunteers visited a variety of community organisations\u2014including the Against Child Abuse (Macau) Association Child Protection Centre, Macau Down Syndrome Association, Escola S\u00E3o Jos\u00E9 de K\u00E1-H\u00F3, Macau Special Olympics and the Macau Deaf Association\u2014delivering gift packs and heartfelt greetings to 750 households and more than 2,000 beneficiaries. Beyond distributing gifts, volunteers spent meaningful time engaging with community members, offering companionship and bringing an extra touch of warmth to the New Year season." },
  { type: "body", text: "In alignment with the Healthy Macao Blueprint, SJM also partnered with the Macao New Chinese Youth Association to host a health seminar at the Lok Yin Elderly Service Centre of the Women\u2019s General Association of Macau. Attended by 80 seniors, the session covered nutrition, healthy eating and awareness of swallowing difficulties commonly experienced by older adults. Participants also received New Year calligraphy blessings and gift bags, rounding off a meaningful and joyful afternoon." },
  { type: "heading", text: "Enhancing Family Cohesion through Festive Programmes" },
  { type: "body", text: "To champion family-friendly values and a harmonious community, SJM organised a series of Lunar New Year parent-child activities. In January, 32 parents and children from the Centro de Servi\u00E7os Integrados de Apoio \u00E0 Fam\u00EDlia - Fonte de Alegria e de Energia, Caritas Macau visited Kam Pek Market, where they created Year of the Horse bamboo ornaments together and enjoyed afternoon tea." },
  { type: "body", text: 'In February, SJM hosted the \u201CJoyful New Year Baking Parent\u2011Child Workshop\u201D, which attracted 10 family groups of employees and their children. Through hands\u2011on baking, participants strengthened parent\u2011child bonds in a joyful setting. Later in the month, SJM also invited employees and their children, along with elderly members of the Women\u2019s General Association of Macau to visit the Lisboa: The Story of Macao exhibition at the Grand Lisboa Palace Art Gallery. The guided tour was followed by a themed workshop, offering families an engaging cultural experience and opportunities to connect through shared learning.' },
  { type: "heading", text: "Celebrating Tradition and Giving Back" },
  { type: "body", text: 'To promote Chinese traditional culture, SJM held its \u201CSJM Welcomes the New Year \u2013 Calligraphy Blessings for All\u201D event in February, featuring renowned local calligraphers including Mr. Kuan Kun Cheong. More than 1,600 fai chuns (spring couplets) were written on site and gifted to the public, bringing blessings to the community.' },
  { type: "body", text: "During the New Year period, SJM also invited the Sheng Kung Hui Macau Social Services Coordination Office and the Association of Parents of the People with Intellectual Disabilities of Macau to set up charity booths in staff back\u2011of\u2011house areas to display and sell handicrafts and festive products created by service users. All proceeds support the organisations\u2019 operations and development, enabling SJM team members to contribute to the community while preparing for the New Year." },
];

export function generateStaticParams() {
  return Array.from({ length: 9 }, (_, i) => ({ id: String(i + 1) }));
}

export default function CsrEventDetailPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f6f0] font-sans text-[#231f20]">
      <Header logoSrc={IMAGES.logo} />

      {/* Green Banner */}
      <section className="h-[100px] bg-[#009b79] sm:h-[120px] lg:h-[140px]" />

      {/* Article Content */}
      <section className="bg-[#f7f6f0]">
        <div className="mx-auto flex w-full max-w-[1680px] flex-col items-center gap-10 px-5 py-10 sm:px-8 lg:gap-[60px] lg:px-[60px] lg:py-[60px] xl:px-[120px]">

          {/* Title + Date */}
          <div className="flex w-full flex-col items-center gap-5">
            <h1 className="text-center font-petrona text-[28px] font-extralight leading-tight text-[#231f20] sm:text-[32px] lg:text-[36px]">
              SJM Joins Hands with the Community to Celebrate the Year of the Horse
            </h1>
            <p className="text-[14px] leading-[18px] text-[#8e9590] sm:text-[16px]">
              24 Feb 2026
            </p>
          </div>

          {/* Body text (left) + Images column (right) */}
          <div className="flex w-full flex-col gap-8 lg:flex-row lg:gap-[60px]">
            {/* Body Text */}
            <div className="w-full lg:w-[800px] lg:shrink-0">
              {articleParagraphs.map((block, idx) =>
                block.type === "heading" ? (
                  <p key={idx} className="mt-6 text-[16px] font-medium leading-[26px] text-[#231f20] first:mt-0">
                    {block.text}
                  </p>
                ) : (
                  <p key={idx} className="mt-3 text-[16px] leading-[26px] text-[#231f20] first:mt-0">
                    {block.text}
                  </p>
                )
              )}
            </div>

            {/* Images Column */}
            <div className="flex flex-1 flex-col gap-4">
              {galleryImages.map((src, idx) => (
                <div key={src} className="relative aspect-791/600 w-full overflow-hidden">
                  <Image
                    src={src}
                    alt={`CSR event photo ${idx + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Social Icons (bottom) */}
          <div className="flex gap-4">
            <IconBorder><FacebookIcon /></IconBorder>
            <IconBorder><TwitterIcon /></IconBorder>
            <IconBorder><InstagramIcon /></IconBorder>
            <IconBorder><EmailIcon /></IconBorder>
            <IconBorder><FileTextIcon /></IconBorder>
            <IconBorder><PrinterIcon /></IconBorder>
          </div>

        </div>
      </section>

      {/* Footer */}
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
