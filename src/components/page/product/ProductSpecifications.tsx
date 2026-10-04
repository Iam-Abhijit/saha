import React from 'react';
import type { ProductSpec } from '@/data/productDetails';
import SectionTitle from '@/components/ui/SectionTitle';

type Props = {
    specs: ProductSpec[];
};

export default function ProductSpecifications({ specs }: Props) {
    return (
        <section id="specifications" className="scroll-mt-28">
            <SectionTitle title="Product Specifications" />
            <div className="rounded-xl border border-border overflow-hidden">
                <table className="w-full text-sm">
                    <tbody>
                        {specs.map((spec, i) => (
                            <tr key={spec.label} className={i % 2 === 0 ? 'bg-muted/60' : 'bg-background'}>
                                <th scope="row" className="text-left font-medium text-on-muted px-4 py-3 w-2/5">
                                    {spec.label}
                                </th>
                                <td className="px-4 py-3 text-foreground">{spec.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
