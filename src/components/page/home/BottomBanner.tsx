import React from 'react';
import Link from 'next/link';
import { FaRegPaperPlane, FaArrowRightLong } from 'react-icons/fa6';

export default function BottomBanner() {
    return (
        <section className="bg-primary text-on-primary py-10 md:mb-0">
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                <div>
                    <h2 className="text-2xl font-header font-bold mb-2">Looking for Something Specific?</h2>
                    <p className="text-on-primary/80 text-sm">We're here to help! Contact us for product details, availability or any other enquiry.</p>
                </div>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-background text-primary hover:bg-muted px-6 py-3 rounded-md font-semibold transition-colors shrink-0">
                    <FaRegPaperPlane className="w-5 h-5" />
                    Contact Us Now
                    <FaArrowRightLong className="w-4 h-4" />
                </Link>
            </div>
        </section>
    );
}
