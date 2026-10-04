import React from 'react';
import { FaTruckFast, FaRotateLeft, FaLock, FaHeadset } from 'react-icons/fa6';

const services = [
    { icon: FaTruckFast, title: 'Free Shipping', text: 'On orders above ₹999' },
    { icon: FaRotateLeft, title: 'Easy Returns', text: '7 days return policy' },
    { icon: FaLock, title: 'Secure Payment', text: '100% safe & secure' },
    { icon: FaHeadset, title: 'Customer Support', text: '+91 98765 43210' },
];

export default function ServiceStrip() {
    return (
        <section className="bg-primary/5 border-y border-border">
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map(({ icon: Icon, title, text }) => (
                    <div key={title} className="flex items-center gap-3">
                        <span className="w-11 h-11 rounded-full bg-background border border-primary/20 text-primary flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5" />
                        </span>
                        <div>
                            <p className="text-sm font-semibold text-foreground">{title}</p>
                            <p className="text-xs text-on-muted">{text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
