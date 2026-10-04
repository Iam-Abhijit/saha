'use client';

import React, { useEffect, useRef, useState } from 'react';

type Category = {
    name: string;
    img: string;
    active?: boolean;
};

type Props = {
    categories: Category[];
    selectedCategories: string[];
    onSelect: (name: string) => void;
};

/** Category scroll bar that turns into a small pill bar when it sticks to the top. */
export default function CategoryStrip({ categories, selectedCategories, onSelect }: Props) {
    const sentinelRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLDivElement>(null);
    const [isStuck, setIsStuck] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!sentinelRef.current || !barRef.current) return;
            const stickyTop = parseFloat(getComputedStyle(barRef.current).top) || 0;
            setIsStuck(sentinelRef.current.getBoundingClientRect().top < stickyTop);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const isActive = (cat: Category) =>
        selectedCategories.includes(cat.name) || (selectedCategories.length === 0 && !!cat.active);

    return (
        <>
            {/* Marker used to know when the bar becomes sticky */}
            <div ref={sentinelRef} aria-hidden="true" />

            <div
                ref={barRef}
                className={`sticky top-18 md:top-20 z-40 border-b border-border transition-all duration-300 ${isStuck ? 'bg-background/90 backdrop-blur-md shadow-md' : 'bg-background shadow-sm'
                    }`}
            >
                <div
                    className={`container mx-auto px-4 lg:px-8 max-w-7xl overflow-x-auto no-scrollbar transition-all duration-300 ${isStuck ? 'py-2' : 'py-4'
                        }`}
                >
                    <div className={`flex min-w-max transition-all duration-300 ${isStuck ? 'gap-2' : 'gap-4'}`}>
                        {categories.map((cat) => {
                            const active = isActive(cat);
                            return (
                                <button
                                    key={cat.name}
                                    type="button"
                                    onClick={() => onSelect(cat.name)}
                                    aria-pressed={active}
                                    className={`group flex items-center justify-center cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isStuck
                                            ? `flex-row gap-2 pl-1.5 pr-3.5 py-1.5 rounded-full border ${active
                                                ? 'border-primary bg-primary/10'
                                                : 'border-border bg-background hover:border-primary/40'
                                            }`
                                            : `flex-col gap-2 w-20 md:w-24 rounded-2xl border border-transparent ${active ? '' : 'opacity-80 hover:opacity-100'}`
                                        }`}
                                >
                                    <span
                                        className={`block overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isStuck
                                                ? 'w-7 h-7 rounded-full'
                                                : `w-16 h-16 md:w-20 md:h-20 rounded-[14px] border-2 ${active ? 'border-primary shadow-md p-0.5' : 'border-transparent'
                                                }`
                                            }`}
                                    >
                                        <img
                                            src={cat.img}
                                            alt=""
                                            className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 ${isStuck ? 'rounded-full' : 'rounded-xl'
                                                }`}
                                        />
                                    </span>
                                    <span
                                        className={`font-medium text-center whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isStuck ? 'text-[11px] md:text-xs' : 'text-[10px] md:text-xs'
                                            } ${active ? 'text-primary' : 'text-foreground'}`}
                                    >
                                        {cat.name}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
