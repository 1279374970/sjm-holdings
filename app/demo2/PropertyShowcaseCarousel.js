"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

const AUTO_PLAY_DELAY = 5200;
const DRAG_THRESHOLD = 64;

const propertySlides = [
  {
    src: "/demo2/property-main.jpg",
    alt: "Grand Lisboa Palace Macau",
    label: "Grand Lisboa Palace Macau",
  },
  {
    src: "/demo2/property-main.jpg",
    alt: "Grand Lisboa Palace Macau",
    label: "Grand Lisboa Palace Macau",
  },
  {
    src: "/demo2/property-main.jpg",
    alt: "Grand Lisboa Palace Macau",
    label: "Grand Lisboa Palace Macau",
  },
];

export default function PropertyShowcaseCarousel() {
  const slideCount = propertySlides.length;
  const [activeSlide, setActiveSlide] = useState(1);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const dragStartXRef = useRef(0);
  const dragDistanceRef = useRef(0);
  const didDragRef = useRef(false);

  const extendedSlides = useMemo(() => {
    if (slideCount === 0) {
      return [];
    }

    return [propertySlides[slideCount - 1], ...propertySlides, propertySlides[0]];
  }, [slideCount]);

  const goToNext = useCallback(() => {
    setIsTransitionEnabled(true);
    setActiveSlide((prev) => prev + 1);
  }, []);

  const goToPrev = useCallback(() => {
    setIsTransitionEnabled(true);
    setActiveSlide((prev) => prev - 1);
  }, []);

  useEffect(() => {
    if (slideCount <= 1 || isDragging || isHovered) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      goToNext();
    }, AUTO_PLAY_DELAY);

    return () => {
      window.clearInterval(timer);
    };
  }, [goToNext, isDragging, isHovered, slideCount]);

  useEffect(() => {
    if (isTransitionEnabled) {
      return undefined;
    }

    const frame = window.requestAnimationFrame(() => {
      setIsTransitionEnabled(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [isTransitionEnabled]);

  const handlePointerDown = useCallback(
    (event) => {
      if (slideCount <= 1) {
        return;
      }

      if (event.pointerType === "mouse" && event.button !== 0) {
        return;
      }

      dragStartXRef.current = event.clientX;
      dragDistanceRef.current = 0;
      didDragRef.current = false;
      setIsDragging(true);
      setDragOffset(0);
      event.currentTarget.setPointerCapture?.(event.pointerId);
    },
    [slideCount]
  );

  const handlePointerMove = useCallback(
    (event) => {
      if (!isDragging) {
        return;
      }

      const distance = event.clientX - dragStartXRef.current;
      dragDistanceRef.current = distance;
      setDragOffset(distance);

      if (Math.abs(distance) > 8) {
        didDragRef.current = true;
      }
    },
    [isDragging]
  );

  const finishDrag = useCallback(() => {
    if (!isDragging) {
      return;
    }

    const distance = dragDistanceRef.current;
    setIsDragging(false);
    setDragOffset(0);

    if (Math.abs(distance) < DRAG_THRESHOLD) {
      return;
    }

    if (distance < 0) {
      goToNext();
      return;
    }

    goToPrev();
  }, [goToNext, goToPrev, isDragging]);

  const handlePointerUp = useCallback(
    (event) => {
      event.currentTarget.releasePointerCapture?.(event.pointerId);
      finishDrag();
    },
    [finishDrag]
  );

  const handlePointerCancel = useCallback(() => {
    finishDrag();
  }, [finishDrag]);

  const handleClickCapture = useCallback((event) => {
    if (!didDragRef.current) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    didDragRef.current = false;
  }, []);

  const handleTransitionEnd = useCallback(() => {
    if (activeSlide === 0) {
      setIsTransitionEnabled(false);
      setActiveSlide(slideCount);
      return;
    }

    if (activeSlide === slideCount + 1) {
      setIsTransitionEnabled(false);
      setActiveSlide(1);
    }
  }, [activeSlide, slideCount]);

  const activeDotIndex = ((activeSlide - 1 + slideCount) % slideCount) + 1;

  return (
    <section className="bg-white pb-12 md:pb-14 lg:pb-16">
      <div
        className={`relative h-[56.25vw] min-h-[580px] max-h-[660px] w-full select-none overflow-hidden touch-pan-y ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onPointerLeave={finishDrag}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClickCapture={handleClickCapture}
      >
        <div
          className="flex h-full"
          style={{
            transform: `translate3d(calc(${-activeSlide * 100}% + ${dragOffset}px), 0, 0)`,
            transition:
              isDragging || !isTransitionEnabled
                ? "none"
                : "transform 700ms cubic-bezier(0.22, 0.61, 0.36, 1)",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedSlides.map((slide, index) => (
            <div key={`${slide.src}-${index}`} className="group relative h-full w-full shrink-0">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="100vw"
                draggable={false}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority={index === 1}
              />
              <div
                className="absolute inset-0 flex items-end text-white"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.2) 64%, rgba(0, 0, 0, 0.4) 76%, rgba(0, 0, 0, 0.7) 88%, rgb(0, 0, 0) 100%)",
                }}
              >
                <div className="w-full border-t border-white/70">
                  <div className="mx-auto flex w-full max-w-[1440px] items-end justify-between gap-4 px-4 py-5 md:px-8 md:py-7 lg:px-[60px] lg:py-10">
                    <div className="flex w-full max-w-[795px] flex-col gap-5">
                      <p className="font-serif text-[24px] font-extralight leading-[1.15] tracking-[-0.02em] md:text-[32px] md:leading-[38px]">
                        {slide.label}
                      </p>
                      <div className="flex items-center gap-2">
                        {propertySlides.map((dotSlide, dotIndex) => (
                          <span
                            key={`${dotSlide.src}-${dotIndex}`}
                            className={`h-[5px] rounded-[2px] transition-all duration-300 ${
                              activeDotIndex === dotIndex + 1
                                ? "w-[50px] bg-white"
                                : "w-4 bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="hidden shrink-0 border border-white px-[17px] py-[13px] text-[14px] font-medium leading-5 text-white transition hover:bg-white hover:text-[#001625] md:flex"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
