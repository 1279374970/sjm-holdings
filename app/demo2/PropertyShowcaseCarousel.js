"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

const AUTO_PLAY_DELAY = 5200;
const DRAG_THRESHOLD = 64;
const TRANSITION_DURATION = 700;

const propertySlides = [
  {
    src: "/demo1/prop-grand-lisboa-palace.png",
    alt: "Grand Lisboa Palace Macau",
    label: "Grand Lisboa Palace Macau",
    href: "https://www.grandlisboapalace.com/en",
  },
  {
    src: "/demo1/prop-karl-lagerfeld.png",
    alt: "The Karl Lagerfeld",
    label: "The Karl Lagerfeld",
    href: "https://www.thekarllagerfeld.mo/en",
  },
  {
    src: "/demo1/prop-palazzo-versace.png",
    alt: "Palazzo Versace Macau",
    label: "Palazzo Versace Macau",
    href: "https://www.palazzoversace.mo/en",
  },
  {
    src: "/demo1/prop-grand-lisboa.png",
    alt: "Grand Lisboa",
    label: "Grand Lisboa",
    href: "https://www.grandlisboa.com/en",
  },
  {
    src: "/demo1/prop-hotel-lisboa.png",
    alt: "Hotel Lisboa",
    label: "Hotel Lisboa",
    href: "https://hotelisboa.com/?lang=en",
  },
  {
    src: "/demo1/prop-oceanus.png",
    alt: "Oceanus",
    label: "Oceanus",
    href: "https://www.oceanus-macau.com/#!en",
  },
  {
    src: "/demo1/prop-larc.png",
    alt: "L\u2019Arc Macau",
    label: "L\u2019Arc Macau",
    href: "https://www.larcmacau.com/en/",
  },
  {
    src: "/demo1/prop-ponte16.png",
    alt: "Ponte 16",
    label: "Ponte 16",
    href: "https://ponte16.com.mo/en",
  },
  {
    src: "/demo1/prop-kam-pek.png",
    alt: "Kam Pek Market",
    label: "Kam Pek Market",
    href: "https://www.kampekmarket.com/en",
  },
];

export default function PropertyShowcaseCarousel() {
  const slideCount = propertySlides.length;
  const [activeSlide, setActiveSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [noTransition, setNoTransition] = useState(false);

  const trackRef = useRef(null);
  const dragStartXRef = useRef(0);
  const dragDistanceRef = useRef(0);
  const didDragRef = useRef(false);
  const snapTimerRef = useRef(null);

  const extendedSlides = useMemo(() => {
    if (slideCount === 0) return [];
    return [propertySlides[slideCount - 1], ...propertySlides, propertySlides[0]];
  }, [slideCount]);

  const snapToReal = useCallback((targetIdx) => {
    setNoTransition(true);
    setActiveSlide(targetIdx);
    setIsTransitioning(false);
  }, []);

  const handleBoundarySnap = useCallback(
    (slideIdx) => {
      if (slideIdx === 0) {
        snapToReal(slideCount);
      } else if (slideIdx === slideCount + 1) {
        snapToReal(1);
      } else {
        setIsTransitioning(false);
      }
    },
    [slideCount, snapToReal],
  );

  const handleTransitionEnd = useCallback(
    (e) => {
      if (e.target !== e.currentTarget) return;
      if (snapTimerRef.current) {
        clearTimeout(snapTimerRef.current);
        snapTimerRef.current = null;
      }
      handleBoundarySnap(activeSlide);
    },
    [activeSlide, handleBoundarySnap],
  );

  const animateTo = useCallback(
    (nextSlide) => {
      if (isTransitioning) return;
      setNoTransition(false);
      setIsTransitioning(true);
      setActiveSlide(nextSlide);

      if (snapTimerRef.current) clearTimeout(snapTimerRef.current);
      snapTimerRef.current = setTimeout(() => {
        handleBoundarySnap(nextSlide);
        snapTimerRef.current = null;
      }, TRANSITION_DURATION + 100);
    },
    [isTransitioning, handleBoundarySnap],
  );

  const goToNext = useCallback(() => {
    animateTo(activeSlide + 1);
  }, [activeSlide, animateTo]);

  const goToPrev = useCallback(() => {
    animateTo(activeSlide - 1);
  }, [activeSlide, animateTo]);

  useEffect(() => {
    if (!noTransition) return;
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setNoTransition(false);
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [noTransition]);

  useEffect(() => {
    if (slideCount <= 1 || isDragging || isHovered || isTransitioning) return;
    const timer = setTimeout(goToNext, AUTO_PLAY_DELAY);
    return () => clearTimeout(timer);
  }, [activeSlide, goToNext, isDragging, isHovered, isTransitioning, slideCount]);

  useEffect(() => {
    return () => {
      if (snapTimerRef.current) clearTimeout(snapTimerRef.current);
    };
  }, []);

  const handlePointerDown = useCallback(
    (event) => {
      if (slideCount <= 1 || isTransitioning) return;
      if (event.pointerType === "mouse" && event.button !== 0) return;
      dragStartXRef.current = event.clientX;
      dragDistanceRef.current = 0;
      didDragRef.current = false;
      setIsDragging(true);
      setDragOffset(0);
      event.currentTarget.setPointerCapture?.(event.pointerId);
    },
    [slideCount, isTransitioning],
  );

  const handlePointerMove = useCallback(
    (event) => {
      if (!isDragging) return;
      const distance = event.clientX - dragStartXRef.current;
      dragDistanceRef.current = distance;
      setDragOffset(distance);
      if (Math.abs(distance) > 8) didDragRef.current = true;
    },
    [isDragging],
  );

  const finishDrag = useCallback(() => {
    if (!isDragging) return;
    const distance = dragDistanceRef.current;
    setIsDragging(false);
    setDragOffset(0);
    if (Math.abs(distance) < DRAG_THRESHOLD) return;
    if (distance < 0) goToNext();
    else goToPrev();
  }, [goToNext, goToPrev, isDragging]);

  const handlePointerUp = useCallback(
    (event) => {
      event.currentTarget.releasePointerCapture?.(event.pointerId);
      finishDrag();
    },
    [finishDrag],
  );

  const handleClickCapture = useCallback((event) => {
    if (!didDragRef.current) return;
    event.preventDefault();
    event.stopPropagation();
    didDragRef.current = false;
  }, []);

  const activeDotIndex = ((activeSlide - 1 + slideCount) % slideCount) + 1;
  const currentSlide = propertySlides[activeDotIndex - 1] || propertySlides[0];

  const trackStyle = {
    transform: `translate3d(calc(${-activeSlide * 100}% + ${dragOffset}px), 0, 0)`,
    transition:
      isDragging || noTransition
        ? "none"
        : `transform ${TRANSITION_DURATION}ms cubic-bezier(0.22, 0.61, 0.36, 1)`,
  };

  return (
    <section className="bg-white pb-12 md:pb-14 lg:pb-16">
      <div
        className={`relative h-[56.25vw] min-h-[420px] w-full select-none overflow-hidden touch-pan-y md:min-h-[480px] lg:h-[640px] lg:min-h-[640px] ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={finishDrag}
        onPointerLeave={finishDrag}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClickCapture={handleClickCapture}
      >
        <div
          ref={trackRef}
          className="flex h-full"
          style={trackStyle}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedSlides.map((slide, index) => (
            <div key={`${slide.src}-${index}`} className="relative h-full w-full shrink-0">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="100vw"
                draggable={false}
                className="object-cover"
                priority={index <= 2}
              />
            </div>
          ))}
        </div>

        <div
          className="pointer-events-none absolute inset-0 flex items-end text-white"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.2) 64%, rgba(0,0,0,0.4) 76%, rgba(0,0,0,0.7) 88%, rgb(0,0,0) 100%)",
          }}
        >
          <div className="pointer-events-auto w-full border-t border-white/70">
            <div className="mx-auto flex w-full max-w-[1600px] items-end justify-between gap-4 px-4 py-5 md:px-8 md:py-7 lg:px-[60px] lg:py-[40px] xl:px-[100px]">
              <div className="flex w-full max-w-[790px] flex-col gap-[20px]">
                <div className="relative h-[30px] overflow-hidden md:h-[38px]">
                  {propertySlides.map((slide, idx) => (
                    <p
                      key={slide.label}
                      className="absolute inset-0 font-petrona text-[24px] font-extralight leading-[1.1875em] md:text-[32px] md:leading-[1.1875em]"
                      style={{
                        opacity: activeDotIndex === idx + 1 ? 1 : 0,
                        transition: "opacity 400ms ease",
                      }}
                    >
                      {slide.label}
                    </p>
                  ))}
                </div>
                <div className="flex items-center gap-[8px]">
                  {propertySlides.map((dotSlide, dotIndex) => (
                    <span
                      key={`${dotSlide.src}-${dotIndex}`}
                      className={`h-[5px] rounded-[2px] transition-all duration-300 ${
                        activeDotIndex === dotIndex + 1
                          ? "w-[50px] bg-white"
                          : "w-[16px] bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <a
                href={currentSlide.href}
                target="_blank"
                rel="noopener noreferrer"
                onPointerDown={(e) => e.stopPropagation()}
                className="hidden shrink-0 border border-white px-[16px] py-[12px] text-[14.6px] font-medium leading-[1.37em] text-white transition hover:bg-white hover:text-[#001625] md:flex"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
