"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaMagnifyingGlass, FaBagShopping } from 'react-icons/fa6';
import Logo from './logo';

export default function MobileHeader() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <div className="md:hidden w-full sticky top-0 z-50 flex flex-col bg-background/85 backdrop-blur-xl border-b border-white/5 shadow-sm transition-all duration-300">
            <div className="flex items-center justify-between px-4 py-3">
                <Link href="/" className="active:scale-95 transition-transform">
                    <Logo className="scale-75 origin-left" />
                </Link>
                <div className="flex items-center gap-5 text-foreground/90">
                    <button
                        aria-label="Search"
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                        className={`active:scale-90 transition-all duration-200 ${isSearchOpen ? 'text-primary' : 'hover:text-primary'}`}
                    >
                        <FaMagnifyingGlass className="w-4.5 h-4.5" />
                    </button>
                    <button aria-label="Cart" className="relative active:scale-90 transition-all duration-200 hover:text-primary">
                        <FaBagShopping className="w-4.5 h-4.5" />
                        <span className="absolute -top-1 -right-1.5 w-2.5 h-2.5 bg-primary rounded-full border-2 border-background"></span>
                    </button>
                </div>
            </div>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isSearchOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 pb-3">
                    <div className="relative w-full group">
                        <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none transition-colors group-focus-within:text-primary">
                            <FaMagnifyingGlass className="w-3.5 h-3.5 text-on-muted group-focus-within:text-primary" />
                        </div>
                        <input
                            type="text"
                            autoFocus={isSearchOpen}
                            className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-primary/50 focus:bg-white/10 text-foreground placeholder:text-on-muted/50 transition-all duration-300"
                            placeholder="Search sarees, fabrics, kurtis..."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}