import React from 'react';
import type { Review } from '@/data/productDetails';
import StarRating from '@/components/ui/StarRating';

type Props = {
    review: Review;
};

export default function ReviewItem({ review }: Props) {
    const initials = review.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2);

    return (
        <article className="flex gap-3 py-4 border-b border-border last:border-0">
            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center shrink-0">
                {initials}
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <p className="text-sm font-semibold text-foreground">{review.name}</p>
                    <StarRating rating={review.rating} size="w-3 h-3" />
                </div>
                <p className="text-[11px] text-on-muted mt-0.5">{review.date}</p>
                <p className="text-sm text-on-muted mt-2 leading-relaxed">{review.text}</p>
            </div>
            {review.img && (
                <img src={review.img} alt="Customer photo" loading="lazy" className="w-14 h-14 md:w-16 md:h-16 rounded-lg object-cover shrink-0" />
            )}
        </article>
    );
}
