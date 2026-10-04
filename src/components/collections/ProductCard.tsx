import React, { memo } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import ProductBadge from './ProductBadge';
import WishlistButton from './WishlistButton';

export type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
    fabric: string;
    img: string;
    isFeatured?: boolean;
    isBestSeller?: boolean;
};

type Props = {
    product: Product;
};

function ProductCard({ product }: Props) {
    const { id, name, price, category, fabric, img, isFeatured, isBestSeller } = product;

    return (
        <article className="group relative flex flex-col bg-background rounded-2xl overflow-hidden border border-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30">

            {/* Image */}
            <div className="relative aspect-4/5 overflow-hidden bg-muted">
                <img
                    src={img}
                    alt={name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Soft bottom shade for depth */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {(isBestSeller || isFeatured) && (
                    <div className="absolute top-3 left-3 z-10 flex flex-col items-start gap-1.5">
                        {isBestSeller && <ProductBadge label="Best Seller" />}
                        {isFeatured && <ProductBadge label="Featured" variant="secondary" />}
                    </div>
                )}

                <WishlistButton productName={name} className="absolute top-3 right-3 z-20" />
            </div>

            {/* Details */}
            <div className="flex flex-col grow p-4 md:p-5 gap-1">
                <p className="text-[11px] text-on-muted uppercase tracking-widest font-medium line-clamp-1">
                    {fabric} <span className="mx-1 text-border">•</span> {category}
                </p>

                <h3 className="font-header font-semibold text-sm md:text-base text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                    {name}
                </h3>

                <p className="font-bold text-lg md:text-xl text-foreground mt-1 mb-4">
                    ₹{price.toLocaleString('en-IN')}
                </p>

                {/* Stretched link: the ::after covers the whole card, so any click opens the product */}
                <Link
                    href={`/product/${id}`}
                    aria-label={`View details of ${name}`}
                    className="mt-auto w-full flex items-center justify-center gap-2 py-2.5 rounded-full border border-primary text-primary text-xs md:text-sm font-semibold transition-all duration-300 group-hover:bg-primary group-hover:text-on-primary active:scale-[0.98] after:absolute after:inset-0 after:z-10 after:content-['']"
                >
                    View Details
                    <FaArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </div>
        </article>
    );
}

export default memo(ProductCard);
