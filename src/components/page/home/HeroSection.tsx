"use client";

import React from 'react';
import Link from 'next/link';
import { FaRegPaperPlane, FaArrowRightLong } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

const heroImages = [
    {
        desktop: "/images/hero_saree2.png",
        mobile: "/images/m_hero_saree.png", // Fallback to same if specific mobile version isn't available locally
    },
    {
        desktop: "https://images.unsplash.com/photo-1610030469983-98e550905b92?q=80&w=1920&auto=format&fit=crop",
        mobile: "https://images.unsplash.com/photo-1610030469983-98e550905b92?q=80&w=800&h=1200&auto=format&fit=crop",
    },
    {
        desktop: "https://images.unsplash.com/photo-1528459801416-a1e5389f5986?q=80&w=1920&auto=format&fit=crop",
        mobile: "https://images.unsplash.com/photo-1528459801416-a1e5389f5986?q=80&w=800&h=1200&auto=format&fit=crop",
    },
];

export default function HeroSection() {
    return (
        <section className="relative w-full h-[60vh] md:h-[60vh] bg-foreground overflow-hidden">
            {/* Image Swiper */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}

                    className="w-full h-full"
                >
                    {heroImages.map((img, index) => (
                        <SwiperSlide key={index}>
                            <picture>
                                <source media="(max-width: 767px)" srcSet={img.mobile} />
                                <source media="(min-width: 768px)" srcSet={img.desktop} />
                                <img
                                    src={img.desktop}
                                    alt={`Hero Slide ${index + 1}`}
                                    className="w-full h-full object-cover object-center md:object-top"
                                />
                            </picture>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-linear-to-r from-background/90 via-background/60 md:via-background/40 to-transparent z-10 pointer-events-none"></div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 lg:px-8 h-full flex flex-col justify-center max-w-7xl">
                <div className="max-w-2xl text-foreground mt-8 md:mt-0">
                    <span className="text-secondary font-medium tracking-[0.2em] text-xs md:text-sm uppercase mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">Premium Collections</span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-header font-bold leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 fill-mode-both">
                        Tradition <br />in Every Thread
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/90 mb-8 max-w-md animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 fill-mode-both">
                        Sarees, Dress Materials, Kurtis, Fabrics and more for every occasion.
                    </p>
                    <div className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500 fill-mode-both">
                        <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-on-primary px-6 py-3 rounded-md font-medium transition-colors w-fit">
                            <FaRegPaperPlane className="w-5 h-5" />
                            Contact Us
                            <FaArrowRightLong className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Floating Badge - Repositioned for mobile */}
                <div className="hidden sm:flex absolute bottom-12 right-4 md:top-1/4 md:right-8 lg:right-24 md:bottom-auto w-24 h-24 md:w-32 md:h-32 bg-secondary/20 backdrop-blur-md rounded-full items-center justify-center text-center p-4 shadow-xl text-background font-header font-bold text-xs md:text-sm animate-pulse">
                    Your Trusted Textile Store in Silchar
                </div>
            </div>
        </section>
    );
}
