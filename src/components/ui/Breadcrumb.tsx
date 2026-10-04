import React from 'react';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa6';

type Crumb = {
    label: string;
    href?: string;
};

type Props = {
    items: Crumb[];
};

export default function Breadcrumb({ items }: Props) {
    return (
        <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1.5 text-xs text-on-muted">
            {items.map((item, i) => {
                const isLast = i === items.length - 1;
                return (
                    <React.Fragment key={item.label}>
                        {item.href && !isLast ? (
                            <Link href={item.href} className="hover:text-primary transition-colors">
                                {item.label}
                            </Link>
                        ) : (
                            <span className={isLast ? 'text-foreground font-medium line-clamp-1' : ''}>{item.label}</span>
                        )}
                        {!isLast && <FaAngleRight className="w-2.5 h-2.5" />}
                    </React.Fragment>
                );
            })}
        </nav>
    );
}
