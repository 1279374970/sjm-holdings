import Image from "next/image";
import Header from "../demo1/Header";

const IMAGES = {
  logo: "/demo1/sjm-logo.png",
  hero: "/demo1/properties-hero.png",
};

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

export default function PropertiesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f6f0] font-sans text-[#1f2524]">
      <Header logoSrc={IMAGES.logo} />

      {/* Hero */}
      <section className="relative aspect-1600/575 w-full sm:aspect-auto sm:h-[400px] lg:h-[575px]">
        <Image
          src={IMAGES.hero}
          alt="SJM Properties"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </section>

      {/* Intro */}
      <section className="bg-[#f7f6f0]">
        <div className="mx-auto flex w-full max-w-[1680px] flex-col gap-6 px-5 py-10 sm:px-8 lg:flex-row lg:items-center lg:gap-0 lg:px-[60px] lg:py-[80px] xl:px-[120px]">
          <h1 className="flex-1 font-petrona text-[36px] font-extralight leading-none text-[#231f20] sm:text-[42px] lg:text-[48px]">
            Properties
          </h1>
          <p className="flex-1 text-[16px] leading-[26px] text-[#3f4644]">
            Established in prime locations throughout Macau, SJM offers iconic
            settings for exceptional accommodations, entertainment, shopping,
            gastronomy, MICE experiences, and more. From integrated resorts and
            hotels to culinary and cultural spots, our properties blend
            traditional, contemporary and visionary aesthetics.
          </p>
        </div>
      </section>

      {/* Properties List — 5-col grid with alternating layout */}
      <section className="bg-[#f7f6f0]">
        <div className="mx-auto flex w-full max-w-[1680px] flex-col gap-10 px-5 pb-10 sm:px-8 lg:gap-[60px] lg:px-[60px] lg:pb-[80px] xl:px-[120px]">
          {properties.map((prop, idx) => {
            const imageOnLeft = idx % 2 === 0;
            return (
              <div
                key={prop.name}
                className="group grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-6"
              >
                {imageOnLeft ? (
                  <>
                    {/* Image: col 1-3 */}
                    <div className="relative aspect-3/2 w-full overflow-hidden lg:col-span-3 lg:aspect-auto lg:h-[560px]">
                      <Image
                        src={prop.image}
                        alt={prop.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                    {/* Text: col 4-5 */}
                    <div className="flex flex-col justify-center gap-6 lg:col-span-2 lg:px-5">
                      <PropertyContent prop={prop} />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Text: col 1-2 (on desktop) */}
                    <div className="order-2 flex flex-col justify-center gap-6 lg:order-1 lg:col-span-2 lg:px-5">
                      <PropertyContent prop={prop} />
                    </div>
                    {/* Image: col 3-5 (on desktop) */}
                    <div className="relative order-1 aspect-3/2 w-full overflow-hidden lg:order-2 lg:col-span-3 lg:aspect-auto lg:h-[560px]">
                      <Image
                        src={prop.image}
                        alt={prop.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                  </>
                )}
              </div>
            );
          })}
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

function PropertyContent({ prop }) {
  return (
    <>
      <div className="flex flex-col">
        <p className="text-[16px] font-semibold uppercase leading-[32px] tracking-[2px] text-[#a78a5d] sm:text-[18px] lg:text-[20px]">
          {prop.location}
        </p>
        <h2 className="font-petrona text-[26px] font-extralight uppercase leading-[1.3] tracking-[3.2px] text-[#266a62] sm:text-[28px] lg:text-[32px]">
          {prop.name}
        </h2>
      </div>
      <p className="text-[16px] leading-[26px] text-[#3f4644]">
        {prop.description}
      </p>
      <div>
        <a
          href={prop.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-[44px] items-center border border-[#009b79] px-5 text-[12px] font-medium uppercase leading-[16px] tracking-[2.4px] text-[#009b79] transition hover:bg-[#009b79] hover:text-white"
        >
          Learn More
        </a>
      </div>
    </>
  );
}
