"use client";

import React from 'react';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';


const categories = [
    {
        name: "Sarees",
        img: "https://imgs.ogaanindia.com/homepage/2026/jan/13-jan/new/catogery-sares-dektop.jpg.jpeg",
        active: true,
    },
    {
        name: "Dress Materials",
        img: "https://www.royalexport.in/product-img/all-over-printed-cotton-dress-9-1689229503.jpg",
        active: false,
    },
    {
        name: "Kurtis",
        img: "https://www.roopdarshan.co.nz/cdn/shop/files/PHOTO-2024-11-01-10-31-58_6.jpg?v=1742952820",
        active: false,
    },
    {
        name: "Fabrics",
        img: "https://www.royalexport.in/product-img/all-over-printed-cotton-dress-9-1689229503.jpg",
        active: false,
    },
    {
        name: "Men's Wear",
        img: "https://www.kraftindia.in/cdn/shop/files/IMG_0060_724a0488-239b-477d-8fba-1047287f945f.jpg?v=1726048894&width=1080",
        active: false,
    },
    {
        name: "Kids Wear",
        img: "https://resources.indianclothstore.com/productimages/77829032023-Pink-Polyester-Readymade-Kids-Kurta-Pajama.jpg",
        active: false,
    },
    {
        name: "Home Textiles",
        img: "https://ambiyaonline.com/cdn/shop/files/0H7A0837copy_1.jpg?v=1752237849",
        active: false,
    },
];

export default function CategoriesSection() {
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <span className="text-secondary font-medium tracking-widest text-xs uppercase mb-2 block">Explore Our Collections</span>
                        <h2 className="text-3xl md:text-4xl font-header font-bold text-foreground">Shop by Category</h2>
                        <div className="h-1 w-20 bg-primary mt-4"></div>
                    </div>
                    <Link href="/collections" className="hidden md:flex items-center gap-2 text-primary font-medium hover:underline">
                        View All Products
                        <FaArrowRightLong className="w-4 h-4" />
                    </Link>
                </div>

                <div className="w-full">
                    <Swiper
                        modules={[FreeMode, Autoplay]}
                        spaceBetween={16}
                        slidesPerView="auto"
                        freeMode={true}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        breakpoints={{
                            768: { spaceBetween: 20 },
                        }}
                        className="w-full pb-8!"
                    >
                        {categories.map((cat, i) => (
                            <SwiperSlide key={i} className="w-32.5! md:w-40! lg:w-45!">
                                <Link href={`/collections?category=${encodeURIComponent(cat.name)}`} className="flex flex-col items-center gap-3 group">
                                    <div className="w-full aspect-4/5 rounded-2xl overflow-hidden bg-muted shadow-sm hover:shadow-md relative border border-border">
                                        <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                                    </div>
                                    <span className="font-semibold text-sm text-foreground text-center group-hover:text-primary transition-colors">{cat.name}</span>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
