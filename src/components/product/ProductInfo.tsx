'use client';

import React, { useState } from 'react';
import { FaRegHeart, FaHeart, FaCodeCompare, FaShareNodes, FaCartShopping, FaBolt, FaFire, FaCheck } from 'react-icons/fa6';
import type { ProductDetail } from '@/data/productDetails';
import StarRating from '@/components/ui/StarRating';
import ProductBadge from '@/components/collections/ProductBadge';
import ColorSelector from './ColorSelector';
import QuantitySelector from './QuantitySelector';
import TrustBadges from './TrustBadges';

type Props = {
    product: ProductDetail;
};

export default function ProductInfo({ product }: Props) {
    const [color, setColor] = useState(product.colors[0]?.name ?? '');
    const [quantity, setQuantity] = useState(1);
    const [isSaved, setIsSaved] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

    const handleAddToCart = () => {
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    const handleShare = async () => {
        const url = window.location.href;
        if (navigator.share) {
            await navigator.share({ title: product.name, url }).catch(() => {});
        } else {
            await navigator.clipboard.writeText(url);
        }
    };

    return (
        <div className="flex flex-col gap-5">
            {/* Title block */}
            <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                    {product.isBestSeller ? <ProductBadge label="Best Seller" /> : <span />}
                    <span className="text-[11px] text-on-muted">SKU: {product.sku}</span>
                </div>

                <div className="flex items-start justify-between gap-3">
                    <h1 className="text-2xl md:text-3xl font-header font-bold text-foreground leading-tight">{product.name}</h1>
                    <span className="shrink-0 mt-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">In Stock</span>
                </div>
                <p className="text-sm text-on-muted mt-1.5">{product.tagline}</p>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-3 text-xs">
                    <StarRating rating={product.rating} />
                    <span className="font-semibold text-foreground">{product.rating}</span>
                    <span className="text-on-muted">({product.reviewCount} Reviews)</span>
                    <span className="w-px h-3 bg-border" />
                    <span className="text-on-muted">{product.soldCount} sold this month</span>
                </div>
            </div>

            {/* Price */}
            <div>
                <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-primary">₹{product.price.toLocaleString('en-IN')}</span>
                    <span className="text-base text-on-muted line-through">₹{product.mrp.toLocaleString('en-IN')}</span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-primary/10 text-primary">{discount}% OFF</span>
                </div>
                <p className="text-[11px] text-on-muted mt-1">Inclusive of all taxes</p>
            </div>

            <ColorSelector colors={product.colors} selected={color} onSelect={setColor} image={product.img} />

            {/* Quantity */}
            <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-foreground">Quantity:</span>
                    <QuantitySelector value={quantity} onChange={setQuantity} max={product.stockLeft} />
                </div>
                <span className="flex items-center gap-1.5 text-xs font-medium text-primary">
                    <FaFire className="w-3.5 h-3.5" /> Only {product.stockLeft} left in stock
                </span>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-3">
                <button
                    type="button"
                    onClick={handleAddToCart}
                    className="flex items-center justify-center gap-2 py-3 rounded-lg border-2 border-primary text-primary font-semibold text-sm hover:bg-primary/5 active:scale-[0.98] transition-all cursor-pointer"
                >
                    {isAdded ? <FaCheck className="w-4 h-4" /> : <FaCartShopping className="w-4 h-4" />}
                    {isAdded ? 'Added' : 'Add to Cart'}
                </button>
                <button
                    type="button"
                    className="flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-on-primary font-semibold text-sm shadow-lg shadow-primary/25 hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
                >
                    <FaBolt className="w-4 h-4" /> Buy Now
                </button>
            </div>

            {/* Secondary actions */}
            <div className="flex items-center justify-between text-xs text-on-muted">
                <button type="button" onClick={() => setIsSaved((s) => !s)} className={`flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer ${isSaved ? 'text-primary' : ''}`}>
                    {isSaved ? <FaHeart className="w-3.5 h-3.5" /> : <FaRegHeart className="w-3.5 h-3.5" />}
                    {isSaved ? 'Saved' : 'Add to Wishlist'}
                </button>
                <button type="button" className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer">
                    <FaCodeCompare className="w-3.5 h-3.5" /> Compare
                </button>
                <button type="button" onClick={handleShare} className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer">
                    <FaShareNodes className="w-3.5 h-3.5" /> Share
                </button>
            </div>

            <TrustBadges />
        </div>
    );
}
