import React from 'react';

type Props = {
    label: string;
    variant?: 'primary' | 'secondary';
};

const styles = {
    primary: 'bg-primary text-on-primary',
    secondary: 'bg-secondary text-on-secondary',
};

export default function ProductBadge({ label, variant = 'primary' }: Props) {
    return (
        <span
            className={`${styles[variant]} text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm`}
        >
            {label}
        </span>
    );
}
