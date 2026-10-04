import React from 'react';
import { FaQuoteLeft, FaGem, FaFeather, FaGift, FaStar, FaHandHoldingHeart, FaSwatchbook } from 'react-icons/fa6';
import type { ProductDetail } from '@/data/productDetails';
import SectionTitle from '@/components/ui/SectionTitle';

const highlightIcons = [FaSwatchbook, FaGem, FaFeather, FaGift, FaStar, FaHandHoldingHeart];

type Props = {
    product: ProductDetail;
};

export default function ProductOverview({ product }: Props) {
    return (
        <section id="description" className="scroll-mt-28 grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Text */}
            <div>
                <SectionTitle title="Product Overview" />
                <p className="text-sm text-on-muted leading-relaxed">{product.description}</p>

                <blockquote className="flex gap-3 mt-6 p-4 rounded-xl bg-primary/5 border-l-4 border-primary">
                    <FaQuoteLeft className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground italic leading-relaxed">{product.quote}</p>
                </blockquote>

                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
                    {product.highlights.map((item, i) => {
                        const Icon = highlightIcons[i % highlightIcons.length];
                        return (
                            <li key={item} className="flex items-center gap-2.5">
                                <span className="w-9 h-9 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center text-primary shrink-0">
                                    <Icon className="w-4 h-4" />
                                </span>
                                <span className="text-xs text-foreground font-medium leading-snug">{item}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Visual */}
            <div className="flex flex-col gap-3">
                <div className="relative rounded-2xl overflow-hidden aspect-16/10 bg-foreground">
                    <img src={product.gallery[1] ?? product.img} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/50 to-transparent" />
                    <div className="relative h-full flex flex-col justify-center p-6 md:p-8 max-w-[60%]">
                        <h3 className="text-2xl md:text-4xl font-header font-bold text-on-primary leading-tight">
                            Tradition in Every Thread
                        </h3>
                        <div className="h-0.5 w-12 bg-on-primary/70 my-3" />
                        <p className="text-xs md:text-sm text-on-primary/90">
                            Premium {product.name} for your special moments.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                    {product.gallery.slice(2, 5).map((img) => (
                        <div key={img} className="aspect-4/3 rounded-xl overflow-hidden bg-muted">
                            <img src={img} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
