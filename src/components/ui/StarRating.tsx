import React from 'react';
import { FaStar, FaStarHalfStroke, FaRegStar } from 'react-icons/fa6';

type Props = {
    rating: number;
    size?: string;
};

export default function StarRating({ rating, size = 'w-3.5 h-3.5' }: Props) {
    return (
        <div className="flex items-center gap-0.5 text-secondary" aria-label={`${rating} out of 5 stars`}>
            {[1, 2, 3, 4, 5].map((star) => {
                if (rating >= star) return <FaStar key={star} className={size} />;
                if (rating >= star - 0.5) return <FaStarHalfStroke key={star} className={size} />;
                return <FaRegStar key={star} className={size} />;
            })}
        </div>
    );
}
