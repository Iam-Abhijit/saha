import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import LatestArrivalsSection from '@/components/home/LatestArrivalsSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import AboutSection from '@/components/home/AboutSection';
import BottomBanner from '@/components/home/BottomBanner';

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