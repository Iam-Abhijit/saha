import React from 'react';
import { FaGem, FaShieldHalved, FaIndianRupeeSign, FaUserGroup } from 'react-icons/fa6';

const features = [
    { title: 'Wide Collection', desc: 'Traditional, Modern & Trendy Designs', icon: <FaGem /> },
    { title: 'Good Quality', desc: 'Carefully Selected Fabrics', icon: <FaShieldHalved /> },
    { title: 'Affordable Prices', desc: 'Best Value for Every Budget', icon: <FaIndianRupeeSign /> },
    { title: 'Trusted by Locals', desc: 'A Preferred Textile Store in Silchar', icon: <FaUserGroup /> },
];

export default function FeaturesSection() {
    return (
        <section className="py-12 bg-background border-y border-border">
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-x-0 md:divide-x divide-border">
                    {features.map((feat, i) => (
                        <div key={i} className="flex flex-col md:flex-row items-center md:justify-center gap-4 text-center md:text-left px-2">
                            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-2xl shrink-0 text-primary border border-border">
                                {feat.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-foreground text-sm">{feat.title}</h3>
                                <p className="text-xs text-on-muted mt-1">{feat.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
