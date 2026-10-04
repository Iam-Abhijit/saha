import React from 'react';
import { FaShirt, FaBoxArchive, FaHandSparkles, FaSprayCanSparkles, FaHandHoldingHeart } from 'react-icons/fa6';
import type { CareItem } from '@/data/productDetails';
import SectionTitle from '@/components/ui/SectionTitle';

const icons = [FaShirt, FaBoxArchive, FaHandSparkles, FaSprayCanSparkles, FaHandHoldingHeart];

type Props = {
    items: CareItem[];
};

export default function CareInstructions({ items }: Props) {
    return (
        <section id="care" className="scroll-mt-28">
            <SectionTitle title="Care Instructions" />
            <ul className="flex flex-col gap-4">
                {items.map((item, i) => {
                    const Icon = icons[i % icons.length];
                    return (
                        <li key={item.title} className="flex items-start gap-3">
                            <span className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                <Icon className="w-4 h-4" />
                            </span>
                            <div>
                                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                                <p className="text-xs text-on-muted mt-0.5">{item.text}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
