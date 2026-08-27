"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import PrimaryBtn from "./PrimaryBtn";

const slides = [
    {
        id: 1,
        image: "/assets/hero-slider.jpg",
        alt: "A child receiving medical care",
        title:
            "Then doctors urgently flew me to Germany, cut my stomach open and found cancer there. I don’t know what it is, what it looks like, but I know for sure it’s the scariest thing ever...",
        storyHref: "/stories/help-a-child",
    },
    {
        id: 2,
        image: "/assets/hero-slider.jpg",
        alt: "A family receiving charitable support",
        title:
            "Together, we can bring hope back into a family’s home and give children the safe future they deserve.",
        storyHref: "/stories/support-a-family",
    },
    {
        id: 3,
        image: "/assets/hero-slider.jpg",
        alt: "An elderly woman smiling",
        title:
            "A small act of kindness can change an entire life. Help us make sure no elderly person feels forgotten or alone.",
        storyHref: "/stories/elderly-care",
    },
];

export default function HeroSlider() {
    return (
        <section
            className="hero-slider relative w-full overflow-hidden bg-zinc-900"
            aria-label="Featured stories"
        >
            <Swiper
                modules={[Autoplay, Navigation, Pagination, Keyboard, A11y]}
                slidesPerView={1}
                loop
                speed={850}
                keyboard={{ enabled: true }}
                navigation={{
                    prevEl: ".hero-slider-prev",
                    nextEl: ".hero-slider-next",
                }}
                pagination={{
                    el: ".hero-slider-pagination",
                    clickable: true,
                }}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                className="h-110 sm:h-130 lg:h-150"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        <article className="relative isolate flex h-full items-end justify-center overflow-hidden px-14 pb-16 pt-20 text-center sm:px-24 sm:pb-20 lg:pb-24">
                            <Image
                                src={slide.image}
                                alt={slide.alt}
                                fill
                                priority={index === 0}
                                sizes="100vw"
                                className="-z-20 object-cover object-center transition-transform duration-6500 ease-out in-[.swiper-slide-active]:scale-105"
                            />

                            <div className="absolute inset-0 -z-10 bg-black/40" />

                            <div className="absolute inset-x-0 bottom-0 -z-10 h-3/4 bg-linear-to-t from-black/65 via-black/15 to-transparent" />

                            <div className="slide-content w-full max-w-3xl text-white">
                                <h2 className="text-pretty text-xl font-bold leading-tight drop-shadow-lg sm:text-2xl lg:text-[32px] lg:leading-[1.12]">
                                    “{slide.title}”
                                </h2>

                                <Link
                                    href={slide.storyHref}
                                    className="mt-4 inline-block text-sm font-bold text-(--primary-color) underline underline-offset-4 transition-colors hover:text-white"
                                >
                                    See the story
                                </Link>

                                <div className="mt-5">
                                    <PrimaryBtn href="#">
                                        I want to help
                                    </PrimaryBtn>
                                </div>
                            </div>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button
                type="button"
                className="hero-slider-prev absolute left-3 top-1/2 z-20 flex -translate-y-1/2 items-center gap-1 text-xs font-medium text-white/90 transition-colors hover:text-white sm:left-7"
                aria-label="Previous story"
            >
                <ChevronLeft className="size-5" aria-hidden="true" />

                <span className="hidden sm:inline">
                    More stories
                </span>
            </button>

            <button
                type="button"
                className="hero-slider-next absolute right-3 top-1/2 z-20 flex -translate-y-1/2 items-center gap-1 text-xs font-medium text-white/90 transition-colors hover:text-white sm:right-7"
                aria-label="Next story"
            >
                <span className="hidden sm:inline">
                    More stories
                </span>

                <ChevronRight className="size-5" aria-hidden="true" />
            </button>

            <div className="hero-slider-pagination" />
        </section>
    );
}