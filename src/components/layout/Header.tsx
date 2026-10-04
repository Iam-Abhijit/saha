"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaHeadset, FaMagnifyingGlass, FaUser, FaRegHeart, FaBagShopping, FaLocationDot } from 'react-icons/fa6';
import Logo from './logo';

export default function Header() {
    const [searchQuery, setSearchQuery] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="hidden md:block w-full bg-background shadow-sm font-header sticky top-0 z-50">
            {/* Topbar */}
            <div className={`w-full bg-muted/10 text-[11px] md:text-xs overflow-hidden transition-all duration-300 ease-in-out ${isScrolled ? 'max-h-0 opacity-0 border-transparent' : 'max-h-10 border-b border-border opacity-100'}`}>
                <div className="py-1.5">
                    <div className="container mx-auto px-4 lg:px-8 max-w-7xl flex justify-between items-center text-on-muted font-sans font-medium">
                        <div className="flex gap-6">
                            <span className="flex items-center gap-1.5 hover:text-primary cursor-pointer transition-colors"><FaHeadset className="w-3.5 h-3.5" /> +91 98765 43210</span>
                            <span className="flex items-center gap-1.5"><FaLocationDot className="w-3 h-3" /> Silchar, Assam</span>
                        </div>
                        <div className="flex gap-4">
                            <Link href="/track" className="hover:text-primary transition-colors">Track Order</Link>
                            <span className="text-border">|</span>
                            <Link href="/support" className="hover:text-primary transition-colors">Customer Support</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                <div className="flex items-center justify-between h-20 gap-4 lg:gap-8">
                    {/* Logo Area */}
                    <div className="shrink-0">
                        <Logo />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-6 xl:gap-8 grow justify-center">
                        <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
                            Home
                        </Link>
                        <Link href="/collections" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
                            Collections
                        </Link>
                        <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
                            About Us
                        </Link>
                        <Link href="/store" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
                            Our Store
                        </Link>
                    </nav>

                    {/* Right side: Search */}
                    <div className="flex items-center shrink-0">
                        {/* Search Bar */}
                        <div className="hidden md:flex relative group font-sans">
                            <input
                                type="text"
                                placeholder="Search sarees, fabrics..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-48 xl:w-64 pl-4 pr-10 py-2 bg-muted/10 border border-border rounded-md text-sm focus:outline-hidden focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            />
                            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-on-muted hover:text-primary transition-colors">
                                <FaMagnifyingGlass className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}