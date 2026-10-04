"use client";

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FaAngleRight, FaChevronDown, FaTruck, FaShieldHalved, FaTag, FaHeadset, FaArrowRightLong, FaFilter } from 'react-icons/fa6';

import { categories, products } from '@/data/mockData';
import ProductCard from '@/components/page/collections/ProductCard';
import CollectionSidebar from '@/components/page/collections/CollectionSidebar';
import CategoryStrip from '@/components/page/collections/CategoryStrip';
import LatestArrivalsSection from '@/components/page/home/LatestArrivalsSection';

function CategoriesContent() {
    const searchParams = useSearchParams();
    const categoryQuery = searchParams.get('category');

    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    // Filter & Sort State
    const [selectedCategories, setSelectedCategories] = useState<string[]>(
        categoryQuery ? [categoryQuery] : []
    );
    const [selectedFabrics, setSelectedFabrics] = useState<string[]>([]);
    const [maxPrice, setMaxPrice] = useState<number>(20000);
    const [sortOption, setSortOption] = useState<string>('Latest');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const availableCategories = ['Sarees', 'Kurtis', 'Dress Materials', "Men's Wear", 'Kids Wear', 'Home Textiles'];
    const availableFabrics = ['Cotton', 'Silk', 'Georgette', 'Chiffon', 'Organza', 'Others'];

    const handleCategoryChange = (cat: string) => {
        setSelectedCategories(prev =>
            prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
        );
        setCurrentPage(1);
    };

    const handleFabricChange = (fab: string) => {
        setSelectedFabrics(prev =>
            prev.includes(fab) ? prev.filter(f => f !== fab) : [...prev, fab]
        );
        setCurrentPage(1);
    };

    const handleMaxPriceChange = (price: number) => {
        setMaxPrice(price);
        setCurrentPage(1);
    };

    const handleClearAll = () => {
        setSelectedCategories([]);
        setSelectedFabrics([]);
        setMaxPrice(20000);
        setCurrentPage(1);
    };

    // Apply filters & sort
    const filteredProducts = useMemo(() => {
        let result = [...products];

        if (selectedCategories.length > 0) {
            result = result.filter(p => selectedCategories.includes(p.category));
        }

        if (selectedFabrics.length > 0) {
            result = result.filter(p => selectedFabrics.includes(p.fabric));
        }

        if (maxPrice < 20000) {
            result = result.filter(p => p.price <= maxPrice);
        }

        if (sortOption === 'Price: Low to High') {
            result.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'Price: High to Low') {
            result.sort((a, b) => b.price - a.price);
        }

        return result;
    }, [selectedCategories, selectedFabrics, maxPrice, sortOption]);

    // Pagination slice
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // Split for promotional banner
    const firstHalf = paginatedProducts.slice(0, 4);
    const secondHalf = paginatedProducts.slice(4);

    return (
        <div className="w-full bg-muted/20 min-h-screen pb-20 md:pb-0">
            {/* Hero Banner */}
            <div className="relative w-full h-[30vh] md:h-[40vh] bg-foreground overflow-hidden">
                <img
                    src="/images/hero_saree2.png"
                    alt="Sarees Banner"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-r from-background/90 via-background/60 to-transparent"></div>
                <div className="relative container mx-auto px-4 lg:px-8 h-full flex flex-col justify-center max-w-7xl">
                    <div className="flex items-center gap-2 text-xs md:text-sm text-foreground/80 mb-4">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <FaAngleRight className="w-3 h-3" />
                        <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
                        <FaAngleRight className="w-3 h-3" />
                        <span className="text-primary font-medium">Sarees</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-header font-bold text-foreground mb-4">Sarees</h1>
                    <p className="text-sm md:text-base text-foreground/80 max-w-md">
                        Explore our beautiful collection of traditional and trendy sarees for every occasion.
                    </p>
                    <div className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 text-right">
                        <span className="font-header italic text-3xl text-foreground/90 opacity-80">Grace<br />in Every<br />Drape</span>
                    </div>
                </div>
            </div>

            {/* Sub Categories Scroll */}
            <CategoryStrip
                categories={categories}
                selectedCategories={selectedCategories}
                onSelect={handleCategoryChange}
            />

            <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-8">
                {/* Mobile Filter Toggle & Sort */}
                <div className="flex md:hidden justify-between items-center mb-6">
                    <button
                        onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                        className="flex items-center gap-2 bg-background border border-border px-4 py-2 rounded-md text-sm font-medium text-foreground cursor-pointer"
                    >
                        <FaFilter /> Filters
                    </button>
                    <div className="flex items-center gap-2 text-sm text-foreground">
                        <span className="text-on-muted">Sort:</span>
                        <select
                            value={sortOption}
                            onChange={(e) => {
                                setSortOption(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="bg-transparent border-none font-medium focus:ring-0 cursor-pointer"
                        >
                            <option>Latest</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar Filters Component */}
                    <CollectionSidebar
                        isOpen={isMobileFilterOpen}
                        categories={availableCategories}
                        selectedCategories={selectedCategories}
                        onCategoryChange={handleCategoryChange}
                        fabrics={availableFabrics}
                        selectedFabrics={selectedFabrics}
                        onFabricChange={handleFabricChange}
                        maxPrice={maxPrice}
                        onMaxPriceChange={handleMaxPriceChange}
                        onClearAll={handleClearAll}
                    />

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Top Bar Desktop */}
                        <div className="hidden md:flex justify-between items-center mb-6">
                            <p className="text-sm text-on-muted font-medium">Showing <span className="text-foreground font-bold">{filteredProducts.length}</span> products</p>
                            <div className="flex items-center gap-2 text-sm text-foreground">
                                <span className="text-on-muted">Sort by:</span>
                                <div className="relative border border-border rounded-md px-3 py-1.5 bg-background flex items-center gap-2 cursor-pointer group">
                                    <select
                                        value={sortOption}
                                        onChange={(e) => {
                                            setSortOption(e.target.value);
                                            setCurrentPage(1);
                                        }}
                                        className="appearance-none bg-transparent font-medium focus:outline-none focus:ring-0 pr-4 cursor-pointer"
                                    >
                                        <option>Latest</option>
                                        <option>Price: Low to High</option>
                                        <option>Price: High to Low</option>
                                    </select>
                                    <FaChevronDown className="absolute right-3 w-3 h-3 text-on-muted pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {/* Product Grid - First Half */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
                            {firstHalf.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        {/* Promotional Banner */}
                        {filteredProducts.length > 4 && currentPage === 1 && (
                            <div className="w-full rounded-2xl overflow-hidden relative mb-10 h-48 md:h-64 shadow-md group cursor-pointer">
                                <img src="https://images.unsplash.com/photo-1585914924626-150c99aae8eb?q=80&w=1200&auto=format&fit=crop" alt="Festive Collection" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-linear-to-r from-primary/95 via-primary/80 to-transparent"></div>
                                <div className="relative h-full flex flex-col justify-center px-6 md:px-12 max-w-xl">
                                    <span className="text-on-primary/80 tracking-[0.2em] text-[10px] md:text-xs font-bold uppercase mb-2">Festive Collection</span>
                                    <h2 className="text-2xl md:text-4xl font-header font-bold text-on-primary mb-2 leading-tight">Beautiful Sarees<br />for Every Occasion</h2>
                                    <p className="text-on-primary/90 text-xs md:text-sm mb-6">Traditional | Trendy | Timeless</p>
                                    <button className="bg-background text-foreground hover:bg-background/90 px-5 py-2 rounded-full text-xs md:text-sm font-bold w-fit flex items-center gap-2 transition-colors cursor-pointer">
                                        Explore Collection <FaArrowRightLong />
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Product Grid - Second Half */}
                        {secondHalf.length > 0 && (
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                                {secondHalf.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        )}

                        {filteredProducts.length === 0 && (
                            <div className="py-20 text-center flex flex-col items-center">
                                <h3 className="text-xl font-bold text-foreground mb-2">No products found</h3>
                                <p className="text-on-muted mb-6">Try adjusting your filters to find what you're looking for.</p>
                                <button onClick={handleClearAll} className="bg-primary text-on-primary px-6 py-2 rounded-md font-medium cursor-pointer">
                                    Clear Filters
                                </button>
                            </div>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center mt-12 gap-2">
                                <button
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className="w-10 h-10 rounded-md border border-border flex items-center justify-center text-on-muted hover:bg-muted transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    &lt;
                                </button>

                                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`w-10 h-10 rounded-md flex items-center justify-center font-medium shadow-sm cursor-pointer ${currentPage === page
                                            ? 'bg-primary text-on-primary'
                                            : 'border border-border text-on-muted hover:bg-muted transition-colors'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}

                                <button
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    className="w-10 h-10 rounded-md border border-border flex items-center justify-center text-on-muted hover:bg-muted transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    &gt;
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* New Arrivals Section */}
            <LatestArrivalsSection />

            {/* Bottom Features Banner */}
            <div className="bg-primary/5 py-12 border-y border-border">
                <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <FaTruck className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-foreground">Quality Products</h4>
                                <p className="text-xs text-on-muted mt-0.5">Carefully selected fabrics</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <FaShieldHalved className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-foreground">Trusted by Locals</h4>
                                <p className="text-xs text-on-muted mt-0.5">Your favourite store in Silchar</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <FaTag className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-foreground">Affordable Prices</h4>
                                <p className="text-xs text-on-muted mt-0.5">Best value for every budget</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <FaHeadset className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-foreground">Customer Support</h4>
                                <p className="text-xs text-on-muted mt-0.5">We're here to help</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Footer Section */}
            <div className="bg-primary text-on-primary py-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-header font-bold mb-2">Need Help or Product Details?</h2>
                        <p className="text-on-primary/90 text-sm md:text-base">Contact us for enquiries, product availability or custom orders.</p>
                    </div>
                    <Link href="/contact" className="bg-background text-foreground hover:bg-background/90 px-6 py-3 rounded-md font-bold flex items-center gap-2 transition-colors shadow-lg whitespace-nowrap">
                        <FaHeadset className="text-primary" /> Contact Us Now <FaArrowRightLong className="text-primary" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function CategoriesScreen() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-muted/20 flex items-center justify-center">Loading...</div>}>
            <CategoriesContent />
        </Suspense>
    );
}