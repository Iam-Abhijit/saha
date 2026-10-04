import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import ProductCard, { type Product } from '@/components/collections/ProductCard';
import SectionTitle from '@/components/ui/SectionTitle';

type Props = {
    products: Product[];
};

export default function RelatedProducts({ products }: Props) {
    if (products.length === 0) return null;

    return (
        <section>
            <SectionTitle
                title="You May Also Like"
                action={
                    <Link href="/collections" className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
                        View All <FaArrowRight className="w-3 h-3" />
                    </Link>
                }
            />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
