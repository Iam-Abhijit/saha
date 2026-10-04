import React from 'react';
import Link from 'next/link';

export default function MobileNavigation() {
    return (
        <div className="md:hidden fixed bottom-0 w-full bg-background border-t border-border z-50 pb-safe">
            <div className="flex items-center justify-around h-16 relative px-2">

                <Link href="/" className="flex flex-col items-center justify-center gap-1 w-16 text-primary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
                    <span className="text-[10px] font-semibold">Home</span>
                </Link>

                <Link href="/collections" className="flex flex-col items-center justify-center gap-1 w-16 text-on-muted">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                    <span className="text-[10px] font-medium">Collections</span>
                </Link>

                {/* Floating Contact Button */}
                <div className="relative w-16 h-full flex justify-center">
                    <Link href="/contact" className="absolute -top-6 flex flex-col items-center justify-center w-16 h-16 bg-primary rounded-full text-on-primary shadow-lg border-4 border-background">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                        <span className="text-[9px] font-medium mt-0.5">Contact</span>
                    </Link>
                </div>

                <Link href="/wishlist" className="flex flex-col items-center justify-center gap-1 w-16 text-on-muted">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    <span className="text-[10px] font-medium">Wishlist</span>
                </Link>

                <Link href="/account" className="flex flex-col items-center justify-center gap-1 w-16 text-on-muted">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    <span className="text-[10px] font-medium">Account</span>
                </Link>

            </div>
        </div>
    );
}