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
        <article className="group relative flex flex-col bg-background transition-all duration-500 hover:-translate-y-1">
            
            {/* Image Container */}
            <div className="relative aspect-4/5 overflow-hidden bg-muted rounded-2xl">
                <img
                    src={img}
                    alt={name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Badges */}
                {(isBestSeller || isFeatured) && (
                    <div className="absolute top-3 left-3 z-20 flex flex-col items-start gap-1.5">
                        {isBestSeller && <ProductBadge label="Best Seller" />}
                        {isFeatured && <ProductBadge label="Featured" variant="secondary" />}
                    </div>
                )}

                {/* Wishlist Button */}
                <div className="absolute top-3 right-3 z-30">
                    <WishlistButton productName={name} />
                </div>
                
                {/* View Details Overlay Button (Visible on Hover) */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20 w-[85%] md:w-[75%] hidden lg:block pointer-events-none">
                    <div className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-background/95 text-foreground text-xs font-bold shadow-xl backdrop-blur-md">
                        View Details <FaArrowRight className="w-3 h-3 text-primary" />
                    </div>
                </div>
            </div>

            {/* Details Section */}
            <div className="flex flex-col pt-4 pb-2 px-1 gap-1">
                <div className="flex justify-between items-start gap-3">
                    <h3 className="font-header font-bold text-sm md:text-base text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                        {name}
                    </h3>
                    <p className="font-bold text-sm md:text-base text-foreground shrink-0">
                        ₹{price.toLocaleString('en-IN')}
                    </p>
                </div>
                
                <p className="text-[11px] md:text-xs text-on-muted capitalize font-medium flex items-center gap-1.5">
                    {fabric} <span className="w-1 h-1 rounded-full bg-border inline-block"></span> {category}
                </p>
            </div>

            {/* Stretched Link (Covers entire card) */}
            <Link
                href={`/product/${id}`}
                aria-label={`View details of ${name}`}
                className="absolute inset-0 z-10"
            />
        </article>
    );
}

export default memo(ProductCard);
