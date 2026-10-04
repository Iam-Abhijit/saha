import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import type { ProductDetail } from '@/data/productDetails';
import StarRating from '@/components/ui/StarRating';
import SectionTitle from '@/components/ui/SectionTitle';
import ReviewItem from './ReviewItem';

type Props = {
    product: ProductDetail;
};

export default function CustomerReviews({ product }: Props) {
    return (
        <section id="reviews" className="scroll-mt-28">
            <SectionTitle
                title="Customer Reviews"
                action={
                    <button type="button" className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline cursor-pointer">
                        View All Reviews <FaArrowRight className="w-3 h-3" />
                    </button>
                }
            />

            <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-8 md:gap-12">
                {/* Summary */}
                <div className="rounded-2xl border border-border p-6 h-fit">
                    <div className="flex items-start gap-6">
                        <div>
                            <p className="text-5xl font-bold text-foreground">
                                {product.rating}
                                <span className="text-lg text-on-muted font-medium">/5</span>
                            </p>
                            <div className="mt-2">
                                <StarRating rating={product.rating} size="w-4 h-4" />
                            </div>
                            <p className="text-xs text-on-muted mt-2">Based on {product.reviewCount} reviews</p>
                        </div>

                        <div className="flex-1 flex flex-col gap-2">
                            {product.ratingBreakdown.map((percent, i) => (
                                <div key={5 - i} className="flex items-center gap-2 text-xs">
                                    <span className="w-6 text-on-muted">{5 - i} ★</span>
                                    <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                                        <div className="h-full bg-primary rounded-full" style={{ width: `${percent}%` }} />
                                    </div>
                                    <span className="w-8 text-right text-on-muted">{percent}%</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        type="button"
                        className="w-full mt-6 py-3 rounded-lg bg-primary text-on-primary text-sm font-semibold hover:brightness-110 transition-all cursor-pointer"
                    >
                        Write a Review
                    </button>
                </div>

                {/* List */}
                <div>
                    {product.reviews.map((review) => (
                        <ReviewItem key={review.id} review={review} />
                    ))}
                </div>
            </div>
        </section>
    );
}
