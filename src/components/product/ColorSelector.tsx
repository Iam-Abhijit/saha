'use client';

import React from 'react';
import type { ProductColor } from '@/data/productDetails';

type Props = {
    colors: ProductColor[];
    selected: string;
    onSelect: (name: string) => void;
    image: string;
};

export default function ColorSelector({ colors, selected, onSelect, image }: Props) {
    return (
        <div>
            <p className="text-sm text-foreground mb-2">
                <span className="font-semibold">Color:</span> <span className="text-primary font-medium">{selected}</span>
            </p>
            <div className="flex flex-wrap gap-2.5">
                {colors.map((color) => {
                    const isActive = color.name === selected;
                    return (
                        <button
                            key={color.name}
                            type="button"
                            onClick={() => onSelect(color.name)}
                            aria-label={color.name}
                            aria-pressed={isActive}
                            className={`relative w-11 h-11 rounded-full p-0.5 border-2 transition-all cursor-pointer ${
                                isActive ? 'border-primary scale-105' : 'border-border hover:border-on-muted'
                            }`}
                        >
                            <span className="block w-full h-full rounded-full overflow-hidden relative">
                                <img src={image} alt="" className="w-full h-full object-cover" />
                                <span className="absolute inset-0 mix-blend-color" style={{ backgroundColor: color.hex }} />
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
