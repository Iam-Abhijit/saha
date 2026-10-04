import CategoriesScreen from '@/page/CategoriesScreen';
import ContactScreen from '@/page/ContactScreen';
import ProductDetailScreen from '@/page/ProductDetailScreen';
import { notFound } from 'next/navigation';
import React from 'react'

type Props = {
    params: Promise<{ page: string[] }>
}

export default async function page({ params }: Props) {
    const resolvedParams = await params;
    const path = resolvedParams.page?.join('/') || '';
    const productSlug = resolvedParams.page[1] || '';

    if (path == 'collections') return <CategoriesScreen />
    if (path == `product/${productSlug}`) return <ProductDetailScreen productId={Number(productSlug)} />
    if (path == 'contact') return <ContactScreen />

    return notFound()
}