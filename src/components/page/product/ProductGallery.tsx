'use client';

import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown, FaChevronLeft, FaChevronRight, FaExpand, FaXmark } from 'react-icons/fa6';

type Props = {
    images: string[];
    name: string;
};

export default function ProductGallery({ images, name }: Props) {
    const [active, setActive] = useState(0);
    const [isZoomOpen, setIsZoomOpen] = useState(false);

    const goPrev = () => setActive((i) => (i - 1 + images.length) % images.length);
    const goNext = () => setActive((i) => (i + 1) % images.length);

    return (
        <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col items-center gap-2">
                <button type="button" onClick={goPrev} aria-label="Previous image" className="hidden md:flex w-full justify-center py-1 text-on-muted hover:text-primary cursor-pointer">
                    <FaChevronUp className="w-3 h-3" />
                </button>
                <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible no-scrollbar">
                    {images.map((img, i) => (
                        <button
                            key={img + i}
                            type="button"
                            onClick={() => setActive(i)}
                            aria-label={`Show image ${i + 1}`}
                            className={`shrink-0 w-16 h-20 md:w-18 md:h-22 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                                active === i ? 'border-primary shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                            }`}
                        >
                            <img src={img} alt="" className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
                <button type="button" onClick={goNext} aria-label="Next image" className="hidden md:flex w-full justify-center py-1 text-on-muted hover:text-primary cursor-pointer">
                    <FaChevronDown className="w-3 h-3" />
                </button>
            </div>

            {/* Main Image */}
            <div className="relative flex-1 aspect-4/5 rounded-2xl overflow-hidden bg-muted group">
                <img key={active} src={images[active]} alt={name} className="w-full h-full object-cover animate-[fadeIn_0.4s_ease]" />

                <button type="button" onClick={goPrev} aria-label="Previous image" className="md:hidden absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/90 flex items-center justify-center text-foreground shadow cursor-pointer">
                    <FaChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button type="button" onClick={goNext} aria-label="Next image" className="md:hidden absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/90 flex items-center justify-center text-foreground shadow cursor-pointer">
                    <FaChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                    type="button"
                    onClick={() => setIsZoomOpen(true)}
                    aria-label="View full image"
                    className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center text-foreground shadow-md hover:bg-primary hover:text-on-primary transition-colors cursor-pointer"
                >
                    <FaExpand className="w-4 h-4" />
                </button>
            </div>

            {/* Full view */}
            {isZoomOpen && (
                <div className="fixed inset-0 z-100 bg-foreground/90 flex items-center justify-center p-4" onClick={() => setIsZoomOpen(false)}>
                    <button type="button" aria-label="Close" className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background text-foreground flex items-center justify-center cursor-pointer">
                        <FaXmark className="w-5 h-5" />
                    </button>
                    <img src={images[active]} alt={name} className="max-h-full max-w-full object-contain rounded-lg" />
                </div>
            )}
        </div>
    );
}
