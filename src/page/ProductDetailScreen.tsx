import React from 'react';
import Link from 'next/link';
import { getProductDetail, getRelatedProducts } from '@/data/productDetails';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductTabs from '@/components/product/ProductTabs';
import ProductOverview from '@/components/product/ProductOverview';
import ProductSpecifications from '@/components/product/ProductSpecifications';
import CareInstructions from '@/components/product/CareInstructions';
import RelatedProducts from '@/components/product/RelatedProducts';
import CustomerReviews from '@/components/product/CustomerReviews';
import ServiceStrip from '@/components/product/ServiceStrip';

type Props = {
    productId: number;
};

export default function ProductDetailScreen({ productId }: Props) {
    const product = getProductDetail(productId);

    if (!product) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 gap-4">
                <h1 className="text-2xl font-header font-bold text-foreground">Product not found</h1>
                <p className="text-on-muted">Sorry, we could not find this product.</p>
                <Link href="/collections" className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-medium">
                    Back to Collections
                </Link>
            </div>
        );
    }

    const related = getRelatedProducts(product);

    const tabs = [
        { id: 'description', label: 'Description' },
        { id: 'specifications', label: 'Specifications' },
        { id: 'care', label: 'Care Instructions' },
        { id: 'reviews', label: `Reviews (${product.reviewCount})` },
    ];

    return (
        <main className="w-full bg-background pb-20 md:pb-0">
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-5 md:py-8 flex flex-col gap-10 md:gap-14">
                <Breadcrumb
                    items={[
                        { label: 'Home', href: '/' },
                        { label: product.category, href: `/collections?category=${encodeURIComponent(product.category)}` },
                        { label: product.name },
                    ]}
                />

                {/* Top: gallery + info */}
                <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-8 lg:gap-12 -mt-4 md:-mt-6">
                    <ProductGallery images={product.gallery} name={product.name} />
                    <ProductInfo product={product} />
                </div>

                <ProductTabs tabs={tabs} />

                <ProductOverview product={product} />

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 p-5 md:p-8 rounded-2xl bg-muted/50">
                    <ProductSpecifications specs={product.specs} />
                    <CareInstructions items={product.care} />
                </div>

                <RelatedProducts products={related} />

                <CustomerReviews product={product} />
            </div>

            <div className="mt-12">
                <ServiceStrip />
            </div>
        </main>
    );
}