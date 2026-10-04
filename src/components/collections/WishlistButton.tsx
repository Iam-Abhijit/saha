'use client';

import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';

type Props = {
    productName: string;
    className?: string;
};

export default function WishlistButton({ productName, className = '' }: Props) {
    const [isSaved, setIsSaved] = useState(false);

    return (
        <button
            type="button"
            onClick={() => setIsSaved((prev) => !prev)}
            aria-label={isSaved ? `Remove ${productName} from wishlist` : `Save ${productName} to wishlist`}
            aria-pressed={isSaved}
            className={`w-9 h-9 rounded-full flex items-center justify-center bg-background/90 backdrop-blur-sm shadow-sm transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ${
                isSaved ? 'text-destructive' : 'text-on-muted hover:text-destructive'
            } ${className}`}
        >
            {isSaved ? <FaHeart className="w-4 h-4" /> : <FaRegHeart className="w-4 h-4" />}
        </button>
    );
}
