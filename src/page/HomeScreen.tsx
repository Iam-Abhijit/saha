import React from 'react';
import HeroSection from '@/components/page/home/HeroSection';
import CategoriesSection from '@/components/page/home/CategoriesSection';
import LatestArrivalsSection from '@/components/page/home/LatestArrivalsSection';
import FeaturesSection from '@/components/page/home/FeaturesSection';
import AboutSection from '@/components/page/home/AboutSection';
import BottomBanner from '@/components/page/home/BottomBanner';

export default function HomeScreen() {
    return (
        <main className="w-full flex flex-col min-h-screen bg-background text-foreground">
            <HeroSection />
            <CategoriesSection />
            <LatestArrivalsSection />
            <FeaturesSection />
            <AboutSection />
            <BottomBanner />
        </main>
    );
}