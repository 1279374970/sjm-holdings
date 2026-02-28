import Image from "next/image";
import Header from "../../demo1/Header";

const IMAGES = {
  logo: "https://www.figma.com/api/mcp/asset/d1f9731d-0dc6-4e95-94da-5a44af0c78de",
};

const galleryImages = [
  "/demo1/csr-detail-1.png",
  "/demo1/csr-detail-2.png",
  "/demo1/csr-detail-3.png",
];

function FacebookIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 18 18" fill="none" className={className} aria-hidden="true">
      <path
        d="M10.5 3H12.75V0H10.5C8.84 0 7.5 1.34 7.5 3V5.25H5.25V8.25H7.5V18H10.5V8.25H12.75L13.5 5.25H10.5V3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TwitterIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 18 18" fill="none" className={className} aria-hidden="true">
      <path
        d="M16.5 2.25C15.75 2.75 14.92 3.1 14.04 3.29C13.56 2.75 12.87 2.42 12.11 2.42C10.51 2.42 9.28 3.92 9.65 5.5C7.15 5.37 4.93 4.14 3.43 2.29C2.61 3.68 3.01 5.48 4.35 6.4C3.71 6.38 3.11 6.2 2.58 5.9C2.55 7.33 3.57 8.67 5.03 9.01C4.47 9.16 3.86 9.18 3.24 9.05C3.63 10.28 4.76 11.18 6.11 11.2C4.82 12.22 3.18 12.67 1.5 12.44C2.87 13.32 4.49 13.83 6.23 13.83C12.17 13.83 15.52 8.99 15.34 4.68C16.07 4.15 16.71 3.48 17.21 2.72C16.53 3.02 15.8 3.22 15.04 3.3C15.81 2.83 16.4 2.09 16.67 1.22"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 18 18" fill="none" className={className} aria-hidden="true">
      <path
        d="M4.5 6.75H1.5V16.5H4.5V6.75ZM3 5.25C3.83 5.25 4.5 4.58 4.5 3.75C4.5 2.92 3.83 2.25 3 2.25C2.17 2.25 1.5 2.92 1.5 3.75C1.5 4.58 2.17 5.25 3 5.25ZM16.5 16.5H13.5V11.25C13.5 10.01 13.48 8.4 11.77 8.4C10.04 8.4 9.79 9.77 9.79 11.17V16.5H6.79V6.75H9.64V8.25H9.68C10.07 7.38 11.2 6.46 12.88 6.46C15.92 6.46 16.5 8.44 16.5 11.02V16.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function EmailIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 18 18" fill="none" className={className} aria-hidden="true">
      <rect x="1.5" y="3" width="15" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1.5 4.5L9 9.75L16.5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

function PrintIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 18 18" fill="none" className={className} aria-hidden="true">
      <path d="M4.5 6V1.5H13.5V6" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <rect x="1.5" y="6" width="15" height="7.5" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4.5 10.5H13.5V16.5H4.5V10.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

const articleBody = [
  `12 February 2026 – As the Lunar New Year ushers in the Year of the Horse, SJM Resorts, S.A. ("SJM") continues its community commitment with a vibrant series of celebrations. Living up to its philosophy of giving back to society, SJM collaborated with local welfare organisations throughout January and February to bring festive joy to the community. The initiatives encompassed family-oriented activities, cultural celebrations and community outreach programs, bringing communities together while preserving cherished traditions and strengthening family bonds.`,
  `Sharing Warmth with the Community`,
  `From January through February, the SJM Volunteer Team rolled out its annual Lunar New Year Caring Campaign, reaching families and individuals across Macau. Volunteers visited a variety of community organisations—including the Against Child Abuse (Macau) Association Child Protection Centre, Macau Down Syndrome Association, Escola São José de Ká-Hó, Macau Special Olympics and the Macau Deaf Association—delivering gift packs and heartfelt greetings to 750 households and more than 2,000 beneficiaries. Beyond distributing gifts, volunteers spent meaningful time engaging with community members, offering companionship and bringing an extra touch of warmth to the New Year season.`,
  `In alignment with the Healthy Macao Blueprint, SJM also partnered with the Macao New Chinese Youth Association to host a health seminar at the Lok Yin Elderly Service Centre of the Women's General Association of Macau. Attended by 80 seniors, the session covered nutrition, healthy eating and awareness of swallowing difficulties commonly experienced by older adults. Participants also received New Year calligraphy blessings and gift bags, rounding off a meaningful and joyful afternoon.`,
  `Enhancing Family Cohesion through Festive Programmes`,
  `To champion family-friendly values and a harmonious community, SJM organised a series of Lunar New Year parent-child activities. In January, 32 parents and children from the Centro de Serviços Integrados de Apoio à Família - Fonte de Alegria e de Energia, Caritas Macau visited Kam Pek Market, where they created Year of the Horse bamboo ornaments together and enjoyed afternoon tea.`,
  `In February, SJM hosted the "Joyful New Year Baking Parent‑Child Workshop", which attracted 10 family groups of employees and their children. Through hands‑on baking, participants strengthened parent‑child bonds in a joyful setting. Later in the month, SJM also invited employees and their children, along with elderly members of the Women's General Association of Macau to visit the Lisboa: The Story of Macao exhibition at the Grand Lisboa Palace Art Gallery. The guided tour was followed by a themed workshop, offering families an engaging cultural experience and opportunities to connect through shared learning.`,
  `Celebrating Tradition and Giving Back`,
  `To promote Chinese traditional culture, SJM held its "SJM Welcomes the New Year – Calligraphy Blessings for All" event in February, featuring renowned local calligraphers including Mr. Kuan Kun Cheong. More than 1,600 fai chuns (spring couplets) were written on site and gifted to the public, bringing blessings to the community.`,
  `During the New Year period, SJM also invited the Sheng Kung Hui Macau Social Services Coordination Office and the Association of Parents of the People with Intellectual Disabilities of Macau to set up charity booths in staff back‑of‑house areas to display and sell handicrafts and festive products created by service users. All proceeds support the organisations' operations and development, enabling SJM team members to contribute to the community while preparing for the New Year.`,
];

const sectionHeadings = [
  "Sharing Warmth with the Community",
  "Enhancing Family Cohesion through Festive Programmes",
  "Celebrating Tradition and Giving Back",
];

export default function CsrEventDetailPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f6f0] font-sans text-[#1f2524]">
      <Header logoSrc={IMAGES.logo} />

      {/* Green Banner */}
      <section className="h-[140px] bg-[#009b79]" />

      {/* Article Content */}
      <section className="bg-[#f7f6f0]">
        <div className="mx-auto flex w-full max-w-[1680px] flex-col items-center gap-[60px] px-5 py-[60px] sm:px-8 lg:px-[120px]">
          {/* Title */}
          <h1 className="max-w-[1360px] text-center font-petrona text-[36px] font-extralight leading-[1.13] text-[#231f20]">
            SJM Joins Hands with the Community to Celebrate the Year of the
            Horse
          </h1>

          {/* Image Gallery */}
          <div className="flex w-full gap-4">
            {galleryImages.map((src, idx) => (
              <div
                key={src}
                className="relative flex-1 overflow-hidden"
                style={{ height: idx === 0 ? 336 : 336 }}
              >
                <Image
                  src={src}
                  alt={`CSR event photo ${idx + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Article Body */}
          <div className="flex w-full max-w-[800px] flex-col gap-0">
            {articleBody.map((paragraph, idx) => {
              const isHeading = sectionHeadings.includes(paragraph);
              if (isHeading) {
                return (
                  <p
                    key={idx}
                    className="mt-4 text-[14px] font-medium leading-[22px] text-[#231f20]"
                  >
                    {paragraph}
                  </p>
                );
              }
              return (
                <p
                  key={idx}
                  className="mt-4 text-[14px] leading-[22px] text-[#231f20]"
                >
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Social Share Icons */}
          <div className="flex gap-4">
            {[FacebookIcon, TwitterIcon, LinkedInIcon, EmailIcon, PrintIcon].map(
              (Icon, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="flex h-9 w-9 items-center justify-center border border-[rgba(0,155,121,0.05)] bg-[rgba(0,155,121,0.05)] text-[#009b79] transition hover:bg-[rgba(0,155,121,0.12)]"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </button>
              ),
            )}
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
