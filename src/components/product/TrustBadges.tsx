import React from 'react';
import { FaTruckFast, FaRotateLeft, FaShieldHalved, FaLock } from 'react-icons/fa6';

const badges = [
    { icon: FaTruckFast, title: 'Free Shipping', text: 'On orders above ₹999' },
    { icon: FaRotateLeft, title: 'Easy Returns', text: '7 days return policy' },
    { icon: FaShieldHalved, title: 'Premium Quality', text: '100% quality products' },
    { icon: FaLock, title: 'Secure Payment', text: 'Multiple payment options' },
];

export default function TrustBadges() {
    return (
        <div className="grid grid-cols-4 gap-2 pt-5 border-t border-border">
            {badges.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex flex-col items-center text-center gap-1.5">
                    <div className="w-10 h-10 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center text-primary">
                        <Icon className="w-4 h-4" />
                    </div>
                    <p className="text-[11px] font-semibold text-foreground leading-tight">{title}</p>
                    <p className="text-[10px] text-on-muted leading-tight hidden sm:block">{text}</p>
                </div>
            ))}
        </div>
    );
}
