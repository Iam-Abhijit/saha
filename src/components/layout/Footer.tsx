import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLocationDot, FaPhone, FaEnvelope } from 'react-icons/fa6';
import Logo from './logo';

export default function Footer() {
    return (
        <footer className="bg-foreground text-background pt-16 pb-24 md:pb-8 ">
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl" >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-background/20 pb-12">

                    {/* Brand Info */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="inline-block text-background scale-90 origin-left">
                            <Logo mode='dark' />
                        </Link>
                        <p className="text-background/70 text-sm leading-relaxed max-w-sm">
                            Your trusted destination for premium sarees, dress materials, and fabrics in Silchar. We bring tradition and modernity together in every thread.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-background/5 hover:bg-primary hover:text-white flex items-center justify-center transition-colors text-background/80">
                                <FaFacebookF size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-background/5 hover:bg-primary hover:text-white flex items-center justify-center transition-colors text-background/80">
                                <FaInstagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-background/5 hover:bg-primary hover:text-white flex items-center justify-center transition-colors text-background/80">
                                <FaWhatsapp size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-background font-header font-bold text-lg mb-6 tracking-wide">Quick Links</h4>
                        <ul className="flex flex-col gap-3">
                            {['Home', 'About Us', 'Shop', 'New Arrivals', 'Contact Us'].map((link, i) => (
                                <li key={i}>
                                    <Link href="#" className="text-background/70 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                                        <span className="w-0 group-hover:w-2 h-[1px] bg-primary transition-all duration-300"></span>
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="text-background font-header font-bold text-lg mb-6 tracking-wide">Categories</h4>
                        <ul className="flex flex-col gap-3">
                            {['Silk Sarees', 'Cotton Sarees', 'Dress Materials', 'Kurtis', 'Bridal Wear'].map((link, i) => (
                                <li key={i}>
                                    <Link href="#" className="text-background/70 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                                        <span className="w-0 group-hover:w-2 h-[1px] bg-primary transition-all duration-300"></span>
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-background font-header font-bold text-lg mb-6 tracking-wide">Contact Us</h4>
                        <ul className="flex flex-col gap-4 text-sm text-background/70">
                            <li className="flex items-start gap-3">
                                <FaLocationDot className="text-primary mt-1 shrink-0" size={16} />
                                <span>123, Central Road, near Capital Mall, Silchar, Assam 788001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaPhone className="text-primary shrink-0" size={16} />
                                <a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 98765 43210</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-primary shrink-0" size={16} />
                                <a href="mailto:contact@sahatextile.com" className="hover:text-primary transition-colors">contact@sahatextile.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/50">
                    <p className="flex items-center gap-1.5 flex-wrap justify-center md:justify-start">
                        <span>&copy; {new Date().getFullYear()} Saha Textile. All Rights Reserved.</span>
                        <span className="hidden md:inline-block w-1 h-1 bg-background/30 rounded-full mx-1"></span>
                        <span>Developed by <a href="https://inxuslabs.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-background/80 hover:text-primary transition-colors">inxuslabs</a></span>
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-background/80 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-background/80 transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-background/80 transition-colors">Return Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}