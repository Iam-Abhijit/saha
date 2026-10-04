import React from 'react';

type Props = {
    title: string;
    action?: React.ReactNode;
};

export default function SectionTitle({ title, action }: Props) {
    return (
        <div className="flex items-end justify-between gap-4 mb-6">
            <div>
                <h2 className="text-lg md:text-xl font-header font-bold text-foreground">{title}</h2>
                <div className="h-0.5 w-12 bg-primary mt-2 rounded-full" />
            </div>
            {action}
        </div>
    );
}
