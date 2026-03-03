"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";

const properties = [
  {
    location: "MACAU COTAI",
    name: "GRAND LISBOA\nPALACE",
    description:
      "A prominent integrated resort that celebrates Macau\u2019s legendary cross-cultural heritage, where European and Chinoiserie-inspired opulence meld seamlessly with sophisticated, world-class.",
    image: "/demo1/prop-grand-lisboa-palace.png",
    href: "https://www.grandlisboapalace.com/en",
  },
  {
    location: "MACAU COTAI",
    name: "THE KARL\nLAGERFELD",
    description:
      "The world\u2019s only hotel tower entirely designed by the late fashion icon, THE KARL LAGERFELD invites you to experience the transcendent world of Karl through an immersive journey.",
    image: "/demo1/prop-karl-lagerfeld.png",
    href: "https://www.thekarllagerfeld.mo/en",
  },
  {
    location: "MACAU COTAI",
    name: "PALAZZO\nVERSACE MACAU",
    description:
      "The first of its kind in Asia, Palazzo Versace Macau offers an immersive fashion-inspired lifestyle experience where every element is meticulously infused with the creative direction of Donatella Versace.",
    image: "/demo1/prop-palazzo-versace.png",
    href: "https://www.palazzoversace.mo/en",
  },
  {
    location: "MACAU PENINSULA",
    name: "GRAND\nLISBOA",
    description:
      "An iconic hotel located in the heart of Macau that holds quadruple Forbes Travel Guide Five-Star awards for its opulent accommodations, acclaimed dining and exceptional entertainment.",
    image: "/demo1/prop-grand-lisboa.png",
    href: "https://www.grandlisboa.com/en",
  },
  {
    location: "MACAU PENINSULA",
    name: "HOTEL\nLISBOA",
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
    name: "L\u2019ARC\nMACAU",
    description:
      "A majestic and iconic landmark in the city, L\u2019Arc Macau offers a luxurious and elegant stay featuring exceptional amenities, diverse entertainment and delectable dining experiences.",
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
    name: "KAM PEK\nMARKET",
    description:
      "Kam Pek Market is a dynamic new dining hotspot and social hub where locals and tourists can explore and celebrate Macau\u2019s many cultural and culinary charms.",
    image: "/demo1/prop-kam-pek.png",
    href: "https://www.kampekmarket.com/en",
  },
];

function ChevronIcon({ className = "", left = false }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden>
      <path
        d={left ? "M10 3L5.5 8L10 13" : "M6 3L10.5 8L6 13"}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function getSlideStyle(idx, activeIndex, prevIndex, animating) {
  if (idx === activeIndex) {
    return {
      opacity: 1,
      transition: "opacity 300ms ease",
      willChange: "opacity",
      zIndex: 2,
      pointerEvents: "auto",
    };
  }

  if (idx === prevIndex && animating) {
    return {
      opacity: 0,
      transition: "opacity 300ms ease",
      willChange: "opacity",
      zIndex: 1,
      pointerEvents: "none",
    };
  }

  return {
    opacity: 0,
    transition: "none",
    zIndex: 0,
    pointerEvents: "none",
  };
}

export default function PropertySection({ greenPattern }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const lockRef = useRef(false);

  const navigate = useCallback(
    (dir) => {
      if (lockRef.current) return;
      lockRef.current = true;
      setAnimating(true);
      setPrevIndex(activeIndex);
      const next =
        dir === 1
          ? (activeIndex + 1) % properties.length
          : (activeIndex - 1 + properties.length) % properties.length;
      setActiveIndex(next);
      setTimeout(() => {
        setAnimating(false);
        lockRef.current = false;
      }, 350);
    },
    [activeIndex],
  );

  const goPrev = useCallback(() => navigate(-1), [navigate]);
  const goNext = useCallback(() => navigate(1), [navigate]);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url('${greenPattern}'), linear-gradient(90deg, #004433 0%, #004433 100%)`,
        backgroundSize: "1020px 1361px, auto auto",
        backgroundPosition: "left top",
      }}
    >
      <div className="mx-auto w-full max-w-[1680px] lg:px-[60px]">
        <div className="flex flex-col lg:flex-row">
          {/* Info panel */}
          <div className="relative flex w-full flex-col justify-between overflow-hidden bg-[rgba(0,30,30,0.85)] p-6 backdrop-blur-[5px] sm:p-12 lg:w-[460px] lg:shrink-0 lg:p-[60px]">
            <div className="relative w-full min-h-[340px] sm:min-h-[280px] lg:min-h-[240px]">
              {properties.map((prop, idx) => {
                const style = getSlideStyle(idx, activeIndex, prevIndex, animating);
                return (
                  <div
                    key={prop.name}
                    className="absolute inset-0 flex flex-col gap-7"
                    style={style}
                  >
                    <div className="flex flex-col gap-2">
                      <p className="text-[12px] leading-[18px] uppercase tracking-[2.7px] text-[#a8996e]">
                        {prop.location}
                      </p>
                      <p className="whitespace-pre-line font-petrona text-[28px] font-extralight uppercase leading-[41.6px] tracking-[3.2px] text-white sm:text-[32px]">
                        {prop.name}
                      </p>
                    </div>
                    <p className="max-w-[344px] text-[14px] leading-[22.75px] text-white/80">
                      {prop.description}
                    </p>
                    <a
                      href={prop.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-[12px] leading-[16px] uppercase tracking-[2.4px] text-[#a8996e] transition hover:opacity-80"
                    >
                      LEARN MORE
                      <span className="h-px w-8 bg-[#a8996e]" />
                    </a>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex items-center gap-3.5">
              <button
                type="button"
                onClick={goPrev}
                className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-white text-white transition hover:bg-white/10"
                aria-label="Previous property"
              >
                <ChevronIcon left className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-white text-white transition hover:bg-white/10"
                aria-label="Next property"
              >
                <ChevronIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Image swiper */}
          <div className="relative min-h-[260px] flex-1 overflow-hidden sm:min-h-[360px] lg:h-[560px] lg:min-h-0">
            {properties.map((prop, idx) => {
              const style = getSlideStyle(idx, activeIndex, prevIndex, animating);
              return (
                <div key={prop.name} className="absolute inset-0" style={style}>
                  <Image
                    src={prop.image}
                    alt={prop.name.replace("\n", " ")}
                    fill
                    sizes="(max-width: 1024px) 100vw, 960px"
                    className="object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
