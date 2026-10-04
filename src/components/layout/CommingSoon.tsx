'use client'
import React from 'react';
import { FaClock } from 'react-icons/fa6';
import Link from 'next/link';

type Props = {}

export default function CommingSoon({ }: Props) {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center bg-background px-4 py-20 text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <FaClock className="w-8 h-8 text-primary animate-pulse" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-header font-bold text-foreground mb-4">
                Coming Soon
            </h1>
            
            <p className="text-on-muted text-base md:text-lg max-w-md mb-10">
                We're working hard to bring you this feature. Please check back later!
            </p>
            
            <Link 
                href="/" 
                className="bg-primary text-on-primary px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity shadow-sm"
            >
                Return to Home
            </Link>
        </div>
    );
}