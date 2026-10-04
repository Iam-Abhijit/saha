'use client';

import React, { useState } from 'react';

type Tab = {
    id: string;
    label: string;
};

type Props = {
    tabs: Tab[];
};

/** Tab bar that scrolls smoothly to each section on the page. */
export default function ProductTabs({ tabs }: Props) {
    const [active, setActive] = useState(tabs[0]?.id);

    const handleClick = (id: string) => {
        setActive(id);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="border-b border-border overflow-x-auto no-scrollbar">
            <div className="flex gap-6 md:gap-10 min-w-max">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        type="button"
                        onClick={() => handleClick(tab.id)}
                        className={`relative py-3 text-sm font-medium transition-colors cursor-pointer ${
                            active === tab.id ? 'text-primary' : 'text-on-muted hover:text-foreground'
                        }`}
                    >
                        {tab.label}
                        <span
                            className={`absolute left-0 right-0 -bottom-px h-0.5 bg-primary rounded-full transition-transform duration-300 origin-left ${
                                active === tab.id ? 'scale-x-100' : 'scale-x-0'
                            }`}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
