'use client';

import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaLocationDot, FaWhatsapp, FaGem, FaTruckFast, FaHeadset, FaPaperPlane, FaPlus, FaMinus } from 'react-icons/fa6';
import Breadcrumb from '@/components/ui/Breadcrumb';
import SectionTitle from '@/components/ui/SectionTitle';
import ServiceStrip from '@/components/product/ServiceStrip';

const contactInfo = [
    { icon: FaPhone, title: 'Phone', desc: '+91 98765 43210\nMon - Sat, 9AM - 8PM' },
    { icon: FaEnvelope, title: 'Email', desc: 'sahatextile@gmail.com\nWe reply within 24 hours' },
    { icon: FaLocationDot, title: 'Visit Our Store', desc: 'Saha Textile Closet\nSilchar, Assam\nPIN - 788001' },
    { icon: FaWhatsapp, title: 'WhatsApp', desc: '+91 98765 43210\nQuick Support' },
];

const faqs = [
    { q: 'Do you offer home delivery?', a: 'Yes, we offer nationwide delivery across India.' },
    { q: 'Can I return or exchange a product?', a: 'We have a 7-day easy return policy for unused products.' },
    { q: 'What payment methods do you accept?', a: 'We accept all major credit/debit cards, UPI, and net banking.' },
    { q: 'Do you have a physical store?', a: 'Yes, our flagship store is located in Silchar, Assam.' },
    { q: 'Can I book a saree for a specific date?', a: 'Please contact our support team for pre-booking inquiries.' },
];

function FaqItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-border py-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between text-left font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
            >
                {question}
                {isOpen ? <FaMinus className="w-3 h-3 text-primary shrink-0" /> : <FaPlus className="w-3 h-3 text-primary shrink-0" />}
            </button>
            {isOpen && <p className="text-sm text-on-muted mt-2 leading-relaxed">{answer}</p>}
        </div>
    );
}

export default function ContactScreen() {
    return (
        <main className="w-full bg-background pb-0">
            {/* Hero Section */}
            <section className="relative w-full h-[35vh] min-h-75 bg-primary/60 overflow-hidden">
                <img
                    src="/images/hero_saree2.png"
                    alt="Contact Us Banner"
                    className="absolute right-0 top-0 h-full w-2/3 md:w-1/2 object-cover object-top"
                />
                <div className="absolute inset-0 bg-linear-to-r from-background/60 via-background/80 to-transparent" />

                <div className="relative container mx-auto px-4 lg:px-8 h-full flex flex-col justify-center max-w-7xl text-on-primary">
                    <div className="max-w-xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-header font-bold mb-4">Get in Touch</h1>
                        <p className="text-sm md:text-base text-on-primary/90 leading-relaxed mb-8">
                            We'd love to hear from you. For any inquiries, assistance or feedback, feel free to reach out to us.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 md:gap-8 text-xs md:text-sm font-medium">
                            <div className="flex items-center gap-2"><FaGem /> Premium Quality</div>
                            <div className="hidden md:block w-px h-4 bg-on-primary/30" />
                            <div className="flex items-center gap-2"><FaTruckFast /> Nationwide Delivery</div>
                            <div className="hidden md:block w-px h-4 bg-on-primary/30" />
                            <div className="flex items-center gap-2"><FaHeadset /> Dedicated Support</div>
                        </div>
                    </div>
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
                        <span className="font-header italic text-3xl text-on-primary/80 opacity-80 leading-snug">Tradition<br />Connects<br />Us</span>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-12 md:py-16 grid lg:grid-cols-2 gap-12 lg:gap-16">

                {/* Left Column */}
                <div className="flex flex-col gap-12">
                    {/* Contact Info */}
                    <div>
                        <SectionTitle title="Contact Information" />
                        <p className="text-sm text-on-muted mb-6">Reach out to us through any of the following channels. Our team is always happy to assist you.</p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {contactInfo.map((info) => (
                                <div key={info.title} className="p-5 rounded-2xl border border-border bg-background shadow-sm hover:shadow-md hover:border-primary/30 transition-all text-center flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                                        <info.icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                                    <p className="text-xs text-on-muted whitespace-pre-line leading-relaxed">{info.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Our Store */}
                    <div>
                        <SectionTitle title="Our Store" />
                        <p className="text-sm text-on-muted mb-6">Visit our showroom to explore our exclusive collection of sarees, dress materials, kurtis, fabrics and more.</p>

                        <div className="grid sm:grid-cols-2 gap-4 mb-4">
                            <div className="rounded-2xl overflow-hidden aspect-video bg-muted border border-border">
                                <img src="/images/store_front.jpg" alt="Store Front" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="rounded-2xl overflow-hidden aspect-video bg-muted border border-border relative">
                                {/* Placeholder for map */}
                                <img src="/images/map_placeholder.jpg" alt="Map Location" className="w-full h-full object-cover bg-accent opacity-50" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                    <div className="bg-background px-3 py-2 rounded-lg shadow-md text-center text-xs mb-2">
                                        <span className="font-bold text-foreground block">Saha Textile Closet</span>
                                        <span className="text-on-muted">Vivekananda Road, Silchar<br />Assam - 788001</span>
                                    </div>
                                    <FaLocationDot className="text-primary text-2xl drop-shadow-md" />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 text-[10px] md:text-xs">
                            <div className="flex items-start gap-2">
                                <FaLocationDot className="text-primary shrink-0 mt-0.5" />
                                <span className="text-on-muted">Vivekananda Road, Silchar,<br />Assam - 788001</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-primary font-bold shrink-0 mt-0.5">🕒</span>
                                <span className="text-on-muted"><span className="font-semibold text-foreground">Store Timings</span><br />Mon - Sat: 9AM - 8PM<br />Sunday: 10AM - 6PM</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-primary font-bold shrink-0 mt-0.5">🚗</span>
                                <span className="text-on-muted"><span className="font-semibold text-foreground">Parking Available</span><br />Convenient parking for all customers</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-12">
                    {/* Contact Form */}
                    <div>
                        <SectionTitle title="Send Us a Message" />
                        <p className="text-sm text-on-muted mb-6">Have a question or need assistance? Fill out the form below and we'll get back to you soon.</p>

                        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-5">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-foreground">Full Name <span className="text-primary">*</span></label>
                                    <input type="text" placeholder="Enter your name" className="px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm" required />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-foreground">Phone Number <span className="text-primary">*</span></label>
                                    <input type="tel" placeholder="Enter your phone number" className="px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-5">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-foreground">Email Address <span className="text-primary">*</span></label>
                                    <input type="email" placeholder="Enter your email address" className="px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm" required />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-foreground">Subject <span className="text-primary">*</span></label>
                                    <select className="px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm appearance-none cursor-pointer" required>
                                        <option value="" disabled selected>Select a subject</option>
                                        <option value="inquiry">General Inquiry</option>
                                        <option value="order">Order Status</option>
                                        <option value="return">Returns / Exchange</option>
                                        <option value="bulk">Bulk Order</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-foreground">Message <span className="text-primary">*</span></label>
                                <textarea placeholder="Type your message here..." rows={5} className="px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm resize-y" required></textarea>
                            </div>

                            <button type="submit" className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-on-primary font-semibold text-sm hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer mt-2 shadow-lg shadow-primary/25">
                                <FaPaperPlane className="w-3.5 h-3.5" /> Send Message
                            </button>
                        </form>
                    </div>

                    {/* FAQs */}
                    <div>
                        <div className="flex items-end justify-between gap-4 mb-4">
                            <SectionTitle title="Frequently Asked Questions" />
                            <a href="#" className="text-xs font-medium text-primary hover:underline flex items-center gap-1 pb-1">
                                View All FAQ <span className="text-[10px]">→</span>
                            </a>
                        </div>
                        <p className="text-sm text-on-muted mb-4 -mt-6">Find quick answers to common questions.</p>

                        <div className="flex flex-col">
                            {faqs.map((faq, i) => (
                                <FaqItem key={i} question={faq.q} answer={faq.a} />
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            <ServiceStrip />
        </main>
    );
}