"use client";

import React from 'react';
import Link from 'next/link';
import { FaRegPaperPlane, FaArrowRightLong } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import { products } from '@/data/mockData';

export default function LatestArrivalsSection() {
    const latestArrivals = products.filter(p => p.isFeatured);

    return (
        <section className="py-20 md:py-28 bg-muted relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center">
                    
                    {/* Left Text Content */}
                    <div className="w-full md:w-1/3 flex flex-col items-start justify-center text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold tracking-widest uppercase mb-6 border border-secondary/20 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                            Just Dropped
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-header font-bold text-foreground mb-6 leading-tight">
                            Latest <br className="hidden md:block" />Arrivals
                        </h2>
                        <p className="text-on-muted text-base md:text-lg mb-10 leading-relaxed max-w-md">
                            Be the first to explore our handpicked new collection. Fresh styles and elegant designs updated weekly.
                        </p>
                        <Link href="/contact" className="group inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-on-primary px-8 py-4 rounded-full font-medium transition-all shadow-md hover:shadow-xl hover:-translate-y-1">
                            <FaRegPaperPlane className="w-4 h-4" />
                            <span>Enquire Now</span>
                            <FaArrowRightLong className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                        </Link>
                    </div>

                    {/* Right Carousel */}
                    <div className="w-full md:w-2/3 overflow-hidden">
                        <Swiper
                            modules={[Autoplay, FreeMode]}
                            spaceBetween={20}
                            slidesPerView="auto"
                            freeMode={true}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            className="w-full pb-8! px-2!"
                        >
                            {latestArrivals.map((item) => (
                                <SwiperSlide key={item.id} className="w-65! md:w-75!">
                                    <Link href="/products" className="group relative block w-full aspect-3/4 bg-background border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
                                        <img 
                                            src={item.img} 
                                            alt={item.name} 
                                            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                                        
                                        {/* Item Details */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                            <h3 className="text-white font-header font-bold text-xl mb-1.5">{item.name}</h3>
                                            <div className="flex items-center justify-between">
                                                <p className="text-secondary font-semibold text-lg">₹{item.price.toLocaleString('en-IN')}</p>
                                                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                                    <FaArrowRightLong className="w-3 h-3 -rotate-45" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </div>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-200 h-200 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        </section>
    );
}
