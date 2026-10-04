import React from 'react';
import Link from 'next/link';
import { FaRegPaperPlane, FaArrowRightLong } from 'react-icons/fa6';

export default function AboutSection() {
    return (
        <section className="py-16 bg-muted/10">
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                <div className="flex flex-col md:flex-row gap-10 items-center bg-background rounded-2xl overflow-hidden">
                    <div className="w-full md:w-1/2 h-full md:h-full min-h-full">
                        <img src="/images/store_front.jpg" alt="Store Front" className="w-full h-full object-cover rounded-2xl" />
                    </div>
                    <div className="w-full md:w-1/2 pt-2 md:p-12 flex flex-col justify-center">
                        <span className="text-secondary font-medium tracking-widest text-xs uppercase mb-2 block">About Saha Textile</span>
                        <h2 className="text-3xl font-header font-bold text-foreground mb-4">Your Favourite Textile Store in Silchar</h2>
                        <p className="text-on-muted mb-8 text-sm md:text-base leading-relaxed">
                            At Saha Textile, we bring you a wide range of sarees, dress materials, kurtis, fabrics and more to match every occasion and style. Known for quality, variety and customer satisfaction, we are proud to be a trusted choice for families in Silchar.
                        </p>
                        <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-on-primary px-6 py-3 rounded-md font-medium transition-colors w-fit">
                            <FaRegPaperPlane className="w-5 h-5" />
                            Contact Us
                            <FaArrowRightLong className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
