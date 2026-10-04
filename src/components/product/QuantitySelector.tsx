'use client';

import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';

type Props = {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
};

export default function QuantitySelector({ value, onChange, min = 1, max = 10 }: Props) {
    return (
        <div className="flex items-center border border-border rounded-lg overflow-hidden">
            <button
                type="button"
                onClick={() => onChange(Math.max(min, value - 1))}
                disabled={value <= min}
                aria-label="Decrease quantity"
                className="w-9 h-9 flex items-center justify-center text-foreground hover:bg-muted disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
            >
                <FaMinus className="w-3 h-3" />
            </button>
            <span className="w-10 text-center text-sm font-semibold text-foreground">{value}</span>
            <button
                type="button"
                onClick={() => onChange(Math.min(max, value + 1))}
                disabled={value >= max}
                aria-label="Increase quantity"
                className="w-9 h-9 flex items-center justify-center text-foreground hover:bg-muted disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
            >
                <FaPlus className="w-3 h-3" />
            </button>
        </div>
    );
}
