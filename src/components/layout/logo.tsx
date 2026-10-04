import React from 'react';

type Props = {
    className?: string;
    mode?: 'light' | 'dark';
};

export default function Logo({ className = "", mode = 'light' }: Props) {
    return (
        <div className={`flex items-center font-header gap-3 ${className}`}>
            {/* Flower Icon SVG */}
            <div className="text-secondary shrink-0">
                <img src="/images/logo.png" alt="Flower" className="w-10 h-10" />
            </div>
            <div className="flex flex-col mt-1">
                <h1 className="text-[1.75rem] font-bold tracking-tight leading-none uppercase flex gap-2">
                    <span className="text-primary">SAHA</span>
                    <span className={mode === 'dark' ? "text-background" : "text-foreground"}>TEXTILE</span>
                </h1>
                <span className={`text-[0.6rem] tracking-[0.25em] uppercase mt-1 font-medium text-center pr-2 ${mode === 'dark' ? "text-background/70" : "text-gray-500"}`}>
                    Tradition Meets Style
                </span>
            </div>
        </div>
    );
}