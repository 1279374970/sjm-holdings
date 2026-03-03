import Image from "next/image";
import Demo2Header from "../Header";

const brandLogos = [
  { src: "/demo2/logo-glp.png", alt: "Grand Lisboa Palace" },
  { src: "/demo2/logo-gl.png", alt: "Grand Lisboa" },
  { src: "/demo2/logo-hl.png", alt: "Hotel Lisboa" },
  { src: "/demo2/logo-ja.png", alt: "Jai Alai Oceanus" },
  { src: "/demo2/logo-larc.png", alt: "Lisboa Arcade" },
  { src: "/demo2/logo-p16.png", alt: "Ponte 16" },
  { src: "/demo2/logo-km.png", alt: "Kam Pek Market" },
];

const properties = [
  {
    location: "MACAU COTAI",
    name: "GRAND LISBOA PALACE MACAU",
    description:
      "A world of elegant opulence awaits at two MICHELIN Key Grand Lisboa Palace Macau. Here, Chinoiserie and contemporary Western design exist in exquisite harmony, accented by maritime-inspired elements that pay homage to Macau\u2019s cultural heritage.",
    image: "/demo1/prop-grand-lisboa-palace.png",
    href: "https://www.grandlisboapalace.com/en",
  },
  {
    location: "MACAU COTAI",
    name: "THE KARL LAGERFELD",
    description:
      "The world\u2019s only hotel tower entirely designed by the late fashion icon, THE KARL LAGERFELD invites you to experience the transcendent world of Karl through an immersive, two MICHELIN Key journey into the fashion genius\u2019s ethos, vision and distinctive aesthetics.",
    image: "/demo1/prop-karl-lagerfeld.png",
    href: "https://www.thekarllagerfeld.mo/en",
  },
  {
    location: "MACAU COTAI",
    name: "PALAZZO VERSACE MACAU",
    description:
      "The first of its kind in Asia, two MICHELIN Key Palazzo Versace Macau offers an immersive fashion-inspired lifestyle experience where every element is meticulously infused with the stylistic and creative direction of Donatella Versace.",
    image: "/demo1/prop-palazzo-versace.png",
    href: "https://www.palazzoversace.mo/en",
  },
  {
    location: "MACAU PENINSULA",
    name: "GRAND LISBOA",
    description:
      "An iconic hotel located in the heart of Macau that holds quadruple Forbes Travel Guide Five-Star awards for its opulent accommodations, acclaimed dining and exceptional entertainment experiences.",
    image: "/demo1/prop-grand-lisboa.png",
    href: "https://www.grandlisboa.com/en",
  },
  {
    location: "MACAU PENINSULA",
    name: "HOTEL LISBOA",
    description:
      "An original hospitality experience that transformed the history of Macau, becoming its first five-star hotel property.",
    image: "/demo1/prop-hotel-lisboa.png",
    href: "https://hotelisboa.com/?lang=en",
  },
  {
    location: "MACAU PENINSULA",
    name: "OCEANUS",
    description:
      "A conveniently situated, strikingly designed contemporary complex with diversified entertainment and leisure facilities.",
    image: "/demo1/prop-oceanus.png",
    href: "https://www.oceanus-macau.com/#!en",
  },
  {
    location: "MACAU PENINSULA",
    name: "L\u2019ARC MACAU",
    description:
      "A majestic and iconic landmark in the city, L\u2019Arc Macau offers a luxurious and elegant stay featuring exceptional amenities, diverse entertainment and delectable dining experiences, perfect for everything from solo travellers to family vacations.",
    image: "/demo1/prop-larc.png",
    href: "https://www.larcmacau.com/en/",
  },
  {
    location: "MACAU PENINSULA",
    name: "PONTE 16",
    description:
      "A resort experience in Macau\u2019s Inner Harbour with spectacular views of the UNESCO World Heritage site.",
    image: "/demo1/prop-ponte16.png",
    href: "https://ponte16.com.mo/en",
  },
  {
    location: "MACAU PENINSULA",
    name: "KAM PEK MARKET",
    description:
      "Kam Pek Market is a dynamic new dining hotspot and social hub where locals and tourists can explore and celebrate Macau\u2019s many cultural and culinary charms, set inside a heritage building that has been artfully rejuvenated under SJM\u2019s revitalisation project.",
    image: "/demo1/prop-kam-pek.png",
    href: "https://www.kampekmarket.com/en",
  },
];

export default function Demo2PropertiesPage() {
  return (
    <main className="min-h-screen bg-[#f7f6f0] font-sans text-[#231f20]">
      <Demo2Header />

      <section className="bg-[#f7f6f0]">
        <div className="relative h-[300px] w-full md:h-[420px] lg:h-[575px]">
          <Image
            src="/demo1/properties-hero.png"
            alt="SJM Properties"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="relative z-10 -mt-[70px] px-4 md:px-8 lg:px-[40px]">
          <div className="flex flex-col gap-[32px] bg-white px-4 py-10 md:px-8 lg:px-[60px] lg:py-[40px]">
            <h1 className="font-petrona text-[36px] font-extralight leading-[1.128em] tracking-[-0.047em] text-black md:text-[48px]">
              Properties
            </h1>
            <p className="max-w-[1000px] text-[16px] leading-[1.5em] text-[#3f4644]">
              Established in prime locations throughout Macau, SJM offers iconic
              settings for exceptional accommodations, entertainment, shopping,
              gastronomy, MICE experiences, and more. From integrated resorts and
              hotels to culinary and cultural spots, our properties blend
              traditional, contemporary and visionary aesthetics.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f6f0]">
        <div className="mx-auto w-full max-w-[1600px] px-4 py-10 md:px-8 lg:px-[100px] lg:py-[80px]">
          <div className="flex flex-col gap-[60px]">
            {properties.map((prop, idx) => {
              const imageLeft = idx % 2 === 0;
              return (
                <div
                  key={prop.name}
                  className="group grid grid-cols-1 gap-[24px] lg:grid-cols-5"
                >
                  <div
                    className={`relative h-[280px] overflow-hidden lg:h-[560px] ${
                      imageLeft
                        ? "lg:col-span-3"
                        : "order-first lg:order-last lg:col-span-3"
                    }`}
                  >
                    <Image
                      src={prop.image}
                      alt={prop.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>

                  <div
                    className={`flex flex-col justify-center gap-[24px] px-4 py-8 lg:px-[20px] lg:py-0 ${
                      imageLeft ? "lg:col-span-2" : "lg:col-span-2"
                    }`}
                  >
                    <div className="flex flex-col">
                      <p className="text-[20px] font-semibold uppercase leading-[32px] tracking-widest text-[#a78a5d]">
                        {prop.location}
                      </p>
                      <h2 className="font-petrona text-[32px] font-extralight uppercase leading-[1.3em] tracking-widest text-[#266a62]">
                        {prop.name}
                      </h2>
                    </div>
                    <p className="text-[16px] leading-[1.5em] text-[#3f4644]">
                      {prop.description}
                    </p>
                    <div>
                      <a
                        href={prop.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-[44px] items-center border border-[#141414] px-[21px] text-[12px] font-medium uppercase leading-4 tracking-[0.2em] text-[#141414] transition hover:bg-[#141414] hover:text-white"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="bg-[#001e1e] text-white">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center gap-[32px] px-4 py-10 md:px-8 lg:px-[100px] lg:py-[40px]">
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
              Privacy Statement &amp; Disclaimer
            </p>
            <p className="text-[12px] leading-[2em] tracking-[0.02em] text-white">
              Copyright 2026 &copy; SJM Holdings Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
