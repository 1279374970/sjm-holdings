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
      "A world of elegant opulence awaits at two MICHELIN Key Grand Lisboa Palace Macau. Here, Chinoiserie and contemporary Western design exist in exquisite harmony, accented by maritime-inspired elements that pay homage to Macau's cultural heritage.",
    image: "/demo1/prop-grand-lisboa-palace.png",
  },
  {
    location: "MACAU COTAI",
    name: "THE KARL LAGERFELD",
    description:
      "The world's only hotel tower entirely designed by the late fashion icon, THE KARL LAGERFELD invites you to experience the transcendent world of Karl through an immersive, two MICHELIN Key journey into the fashion genius's ethos, vision and distinctive aesthetics.",
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

export default function Demo2PropertiesPage() {
  return (
    <div className="min-h-screen bg-[#f7f6f0] font-sans">
      <Demo2Header />

      {/* Hero Section */}
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
          <div className="bg-white px-4 py-10 md:px-8 lg:px-[60px] lg:py-[40px]">
            <h1 className="anim-fade-up font-petrona text-[36px] font-extralight leading-[1.12] tracking-[-0.047em] text-black md:text-[48px]">
              Properties
            </h1>
            <p className="anim-fade-up anim-delay-200 mt-8 max-w-[1000px] text-[16px] leading-[1.625] text-[#3f4644]">
              Established in prime locations throughout Macau, SJM offers iconic settings for exceptional accommodations, entertainment, shopping, gastronomy, MICE experiences, and more. From integrated resorts and hotels to culinary and cultural spots, our properties blend traditional, contemporary and visionary aesthetics.
            </p>
          </div>
        </div>
      </section>

      {/* Properties List */}
      <section className="bg-[#f7f6f0] py-10 lg:py-[80px]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[60px] px-4 md:px-8 lg:px-[100px]">
          {properties.map((prop, idx) => {
            const imageOnLeft = idx % 2 === 0;
            return (
              <div
                key={prop.name}
                className="group prop-reveal relative flex min-h-[400px] flex-col lg:min-h-[560px] lg:flex-row"
              >
                {imageOnLeft ? (
                  <>
                    {/* Image left */}
                    <div className="relative h-[280px] w-full overflow-hidden lg:absolute lg:left-0 lg:top-0 lg:h-[560px] lg:w-[61%]">
                      <Image
                        src={prop.image}
                        alt={prop.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 61vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                    {/* Text right */}
                    <div className="flex flex-col justify-center gap-6 bg-[#f7f6f0] px-5 py-10 lg:ml-auto lg:w-[39%] lg:py-0 lg:pl-[44px] lg:pr-5">
                      <PropertyContent prop={prop} />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Text left */}
                    <div className="order-2 flex flex-col justify-center gap-6 bg-[#f7f6f0] px-5 py-10 lg:order-1 lg:w-[39%] lg:py-0 lg:pl-[44px] lg:pr-5">
                      <PropertyContent prop={prop} />
                    </div>
                    {/* Image right */}
                    <div className="relative order-1 h-[280px] w-full overflow-hidden lg:absolute lg:right-0 lg:top-0 lg:order-2 lg:h-[560px] lg:w-[61%]">
                      <Image
                        src={prop.image}
                        alt={prop.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 61vw"
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
      <p className="text-[16px] leading-[1.625] text-[#3f4644]">{prop.description}</p>
      <div>
        <button
          type="button"
          className="inline-flex h-[44px] items-center border border-[#141414] px-5 text-[12px] font-medium uppercase leading-4 tracking-[0.2em] text-[#141414] transition hover:bg-[#141414] hover:text-white"
        >
          Learn More
        </button>
      </div>
    </>
  );
}
