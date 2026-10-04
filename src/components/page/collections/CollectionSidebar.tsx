import React from 'react';
import { FaFilter } from 'react-icons/fa6';

type Props = {
    isOpen: boolean;
    categories: string[];
    selectedCategories: string[];
    onCategoryChange: (category: string) => void;
    fabrics: string[];
    selectedFabrics: string[];
    onFabricChange: (fabric: string) => void;
    maxPrice: number;
    onMaxPriceChange: (price: number) => void;
    onClearAll: () => void;
};

export default function CollectionSidebar({
    isOpen,
    categories,
    selectedCategories,
    onCategoryChange,
    fabrics,
    selectedFabrics,
    onFabricChange,
    maxPrice,
    onMaxPriceChange,
    onClearAll
}: Props) {
    return (
        <aside className={`w-full md:w-64 shrink-0 bg-background md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none shadow-sm md:shadow-none border border-border md:border-none ${isOpen ? 'block' : 'hidden md:block'}`}>
            <div className="flex justify-between items-center mb-6 border-b border-border pb-4">
                <h3 className="font-header font-bold text-lg text-foreground flex items-center gap-2">
                    <FaFilter className="w-4 h-4 text-on-muted" /> Filters
                </h3>
                <button 
                    onClick={onClearAll}
                    className="text-xs text-primary font-medium hover:underline cursor-pointer"
                >
                    Clear All
                </button>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
                <h4 className="font-bold text-sm text-foreground mb-3">Category</h4>
                <div className="flex flex-col gap-2.5">
                    {categories.map((item, i) => {
                        const isChecked = selectedCategories.includes(item);
                        return (
                            <label key={i} className="flex items-center justify-between group cursor-pointer">
                                <div className="flex items-center gap-2.5">
                                    <input 
                                        type="checkbox" 
                                        checked={isChecked}
                                        onChange={() => onCategoryChange(item)}
                                        className="rounded border-border text-primary focus:ring-primary w-4 h-4 cursor-pointer" 
                                    />
                                    <span className={`text-sm ${isChecked ? 'text-foreground font-medium' : 'text-on-muted group-hover:text-foreground transition-colors'}`}>
                                        {item}
                                    </span>
                                </div>
                            </label>
                        );
                    })}
                </div>
            </div>

            {/* Fabric Filter */}
            <div className="mb-6 border-t border-border pt-6">
                <h4 className="font-bold text-sm text-foreground mb-3">Fabric</h4>
                <div className="flex flex-col gap-2.5">
                    {fabrics.map((item, i) => {
                        const isChecked = selectedFabrics.includes(item);
                        return (
                            <label key={i} className="flex items-center justify-between group cursor-pointer">
                                <div className="flex items-center gap-2.5">
                                    <input 
                                        type="checkbox" 
                                        checked={isChecked}
                                        onChange={() => onFabricChange(item)}
                                        className="rounded border-border text-primary focus:ring-primary w-4 h-4 cursor-pointer" 
                                    />
                                    <span className={`text-sm ${isChecked ? 'text-foreground font-medium' : 'text-on-muted group-hover:text-foreground transition-colors'}`}>
                                        {item}
                                    </span>
                                </div>
                            </label>
                        );
                    })}
                </div>
            </div>

            {/* Price Filter Slider */}
            <div className="mb-6 border-t border-border pt-6">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-sm text-foreground">Max Price</h4>
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md">₹{maxPrice.toLocaleString('en-IN')}</span>
                </div>
                <div className="w-full px-1">
                    <input 
                        type="range" 
                        min="500" 
                        max="20000" 
                        step="500"
                        value={maxPrice}
                        onChange={(e) => onMaxPriceChange(Number(e.target.value))}
                        className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-primary outline-none"
                    />
                    <div className="flex justify-between text-[10px] text-on-muted mt-2 font-medium">
                        <span>₹500</span>
                        <span>₹20,000+</span>
                    </div>
                </div>
            </div>
        </aside>
    );
}
