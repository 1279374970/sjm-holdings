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
  },
  {
    location: "MACAU COTAI",
    name: "THE KARL LAGERFELD",
    description:
      "The world\u2019s only hotel tower entirely designed by the late fashion icon, THE KARL LAGERFELD invites you to experience the transcendent world of Karl through an immersive, two MICHELIN Key journey into the fashion genius\u2019s ethos, vision and distinctive aesthetics.",
    image: "/demo1/prop-karl-lagerfeld.png",
  },
  {
    location: "MACAU COTAI",
    name: "PALAZZO VERSACE MACAU",
    description:
      "The first of its kind in Asia, two MICHELIN Key Palazzo Versace Macau offers an immersive fashion-inspired lifestyle experience where every element is meticulously infused with the stylistic and creative direction of Donatella Versace.",
    image: "/demo1/prop-palazzo-versace.png",
  },
  {
    location: "MACAU PENINSULA",
    name: "GRAND LISBOA",
    description:
      "An iconic hotel located in the heart of Macau that holds quadruple Forbes Travel Guide Five-Star awards for its opulent accommodations, acclaimed dining and exceptional entertainment experiences.",
    image: "/demo1/prop-grand-lisboa.png",
  },
  {
    location: "MACAU PENINSULA",
    name: "HOTEL LISBOA",
    description:
      "An original hospitality experience that transformed the history of Macau, becoming its first five-star hotel property.",
    image: "/demo1/prop-hotel-lisboa.png",
  },
  {
    location: "MACAU PENINSULA",
    name: "OCEANUS",
    description:
      "A conveniently situated, strikingly designed contemporary complex with diversified entertainment and leisure facilities.",
    image: "/demo1/prop-oceanus.png",
  },
  {
    location: "MACAU PENINSULA",
    name: "L\u2019Arc MACAU",
    description:
      "A majestic and iconic landmark in the city, L\u2019Arc Macau offers a luxurious and elegant stay featuring exceptional amenities, diverse entertainment and delectable dining experiences, perfect for everything from solo travellers to family vacations.",
    image: "/demo1/prop-larc.png",
  },
  {
    location: "MACAU PENINSULA",
    name: "PONTE 16",
    description:
      "A resort experience in Macau\u2019s Inner Harbour with spectacular views of the UNESCO World Heritage site.",
    image: "/demo1/prop-ponte16.png",
  },
  {
    location: "MACAU PENINSULA",
    name: "KAM PEK MARKET",
    description:
      "Kam Pek Market is a dynamic new dining hotspot and social hub where locals and tourists can explore and celebrate Macau\u2019s many cultural and culinary charms, set inside a heritage building that has been artfully rejuvenated under SJM\u2019s revitalisation project.",
    image: "/demo1/prop-kam-pek.png",
  },
];

export default function PropertiesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f6f0] font-sans text-[#1f2524]">
      <Header logoSrc={IMAGES.logo} />

      {/* Hero Background */}
      <section className="relative h-[575px]">
        <Image
          src={IMAGES.hero}
          alt="SJM Properties"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-[10px]" /> */}
      </section>

      {/* Intro */}
      <section className="bg-[#f7f6f0]">
        <div className="mx-auto flex w-full max-w-[1680px] flex-col gap-6 px-5 py-14 sm:px-8 lg:flex-row lg:items-stretch lg:gap-0 lg:px-[120px] lg:py-[80px]">
          <h1 className="flex-1 font-petrona text-[48px] font-extralight leading-[1] text-[#231f20]">
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

      {/* Properties List */}
      <section className="bg-[#f7f6f0]">
        <div className="mx-auto flex w-full max-w-[1680px] flex-col gap-[60px] px-5 pb-14 sm:px-8 lg:px-[120px] lg:pb-[80px]">
          {properties.map((prop, idx) => {
            const imageOnLeft = idx % 2 === 0;
            return (
              <div
                key={prop.name}
                className="relative flex min-h-[560px] flex-col lg:flex-row"
              >
                {imageOnLeft ? (
                  <>
                    {/* Image left */}
                    <div className="relative h-[300px] w-full lg:absolute lg:left-0 lg:top-0 lg:h-[560px] lg:w-[61%]">
                      <Image
                        src={prop.image}
                        alt={prop.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 61vw"
                        className="object-cover"
                      />
                    </div>
                    {/* Text right */}
                    <div className="flex flex-col justify-center gap-6 bg-[#f7f6f0] px-5 py-10 lg:ml-auto lg:w-[39%] lg:py-0 lg:pl-5 lg:pr-5">
                      <PropertyContent prop={prop} />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Text left */}
                    <div className="order-2 flex flex-col justify-center gap-6 bg-[#f7f6f0] px-5 py-10 lg:order-1 lg:w-[39%] lg:py-0 lg:pl-5 lg:pr-5">
                      <PropertyContent prop={prop} />
                    </div>
                    {/* Image right */}
                    <div className="relative order-1 h-[300px] w-full lg:absolute lg:right-0 lg:top-0 lg:order-2 lg:h-[560px] lg:w-[61%]">
                      <Image
                        src={prop.image}
                        alt={prop.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 61vw"
                        className="object-cover"
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
      <div className="flex flex-col gap-2">
        <p className="text-[20px] font-semibold uppercase leading-[32px] tracking-[0.1em] text-[#a78a5d]">
          {prop.location}
        </p>
        <h2 className="font-petrona text-[32px] font-extralight uppercase leading-[1.3] tracking-[0.1em] text-[#266a62]">
          {prop.name}
        </h2>
      </div>
      <p className="text-[16px] leading-[26px] text-[#3f4644]">
        {prop.description}
      </p>
      <div>
        <button
          type="button"
          className="inline-flex h-[44px] items-center border border-[#a8996e] px-5 text-[12px] font-medium uppercase leading-[16px] tracking-[0.2em] text-[#a8996e] transition hover:bg-[#a8996e] hover:text-white"
        >
          Learn More
        </button>
      </div>
    </>
  );
}
