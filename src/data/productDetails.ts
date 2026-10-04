import { products } from "./mockData";
import type { Product } from "@/components/page/collections/ProductCard";

export type ProductColor = {
  name: string;
  hex: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type CareItem = {
  title: string;
  text: string;
};

export type Review = {
  id: number;
  name: string;
  date: string;
  rating: number;
  text: string;
  img?: string;
};

export type ProductDetail = Product & {
  tagline: string;
  mrp: number;
  rating: number;
  reviewCount: number;
  soldCount: number;
  stockLeft: number;
  sku: string;
  gallery: string[];
  colors: ProductColor[];
  description: string;
  quote: string;
  highlights: string[];
  specs: ProductSpec[];
  care: CareItem[];
  ratingBreakdown: number[]; // percent for 5,4,3,2,1 stars
  reviews: Review[];
};

const sharedGallery = [
  "/images/hero_saree.jpg",
  "/images/category_saree.jpg",
  "/images/hero_saree2.png",
  "/images/m_hero_saree.png",
];

const defaultColors: ProductColor[] = [
  { name: "Red", hex: "#bb1926" },
  { name: "Green", hex: "#2f5d3a" },
  { name: "Purple", hex: "#7b3f8c" },
  { name: "Navy", hex: "#1f2f5c" },
  { name: "Peach", hex: "#e8a07a" },
];

const defaultCare: CareItem[] = [
  { title: "Dry Clean Only", text: "Keeps the fabric safe and fresh." },
  {
    title: "Store in a Cool & Dry Place",
    text: "Keep away from wet and damp places.",
  },
  {
    title: "Use a Soft Cloth",
    text: "Wrap in a soft cloth when you fold and store.",
  },
  {
    title: "Avoid Perfume & Chemicals",
    text: "Do not spray perfume on the fabric.",
  },
  { title: "Handle with Care", text: "Fine work needs gentle handling." },
];

const defaultReviews: Review[] = [
  {
    id: 1,
    name: "Priya Sharma",
    date: "12 Aug 2026",
    rating: 5,
    text: "Very nice fabric and colour. Looks just like the photos. Happy with my order!",
    img: "/images/hero_saree.jpg",
  },
  {
    id: 2,
    name: "Anjali Das",
    date: "28 Jul 2026",
    rating: 4,
    text: "Good quality and soft to touch. Fast delivery too.",
    img: "/images/category_saree.jpg",
  },
  {
    id: 3,
    name: "Sneha Roy",
    date: "15 Jul 2026",
    rating: 5,
    text: "I wore it at a wedding and got so many compliments. Will buy again.",
    img: "/images/hero_saree2.png",
  },
];

/** Builds full detail data for a product. Replace with an API call later. */
export function getProductDetail(id: number): ProductDetail | null {
  const product = products.find((p) => p.id === id);
  if (!product) return null;

  const mrp = Math.round((product.price * 1.4) / 100) * 100 - 1;

  return {
    ...product,
    tagline: `Pure ${product.fabric} ${product.category.replace(/s$/, "")} with Fine Traditional Work`,
    mrp,
    rating: 4.5,
    reviewCount: 128,
    soldCount: 230,
    stockLeft: 5,
    sku: `ST-${String(product.id).padStart(3, "0")}-${product.fabric.slice(0, 2).toUpperCase()}`,
    gallery: [product.img, ...sharedGallery],
    colors: defaultColors,
    description: `Enjoy the timeless beauty of our ${product.name}, made with great care by skilled weavers. This piece is perfect for weddings, festivals and special events, mixing rich tradition with a modern style.`,
    quote:
      "A perfect mix of tradition, beauty and modern style — this piece adds grace to every occasion.",
    highlights: [
      `Pure ${product.fabric} Fabric`,
      "Fine Zari Weaving",
      "Light & Comfortable",
      "Comes with Blouse Piece",
      "Perfect for Weddings & Festivals",
      "Authentic Handloom",
    ],
    specs: [
      { label: "Fabric", value: `Pure ${product.fabric}` },
      { label: "Category", value: product.category },
      { label: "Work Type", value: "Zari Weaving" },
      { label: "Blouse Piece", value: "Yes (Unstitched)" },
      { label: "Length", value: "5.5 meters" },
      { label: "Blouse Length", value: "0.8 meters" },
      { label: "Occasion", value: "Wedding, Festival, Party" },
      { label: "Care", value: "Dry Clean Only" },
      { label: "Country of Origin", value: "India" },
    ],
    care: defaultCare,
    ratingBreakdown: [78, 15, 4, 2, 1],
    reviews: defaultReviews,
  };
}

/** Products from the same category, excluding the current one. */
export function getRelatedProducts(product: Product, limit = 4): Product[] {
  const sameCategory = products.filter(
    (p) => p.category === product.category && p.id !== product.id,
  );
  const others = products.filter(
    (p) => p.category !== product.category && p.id !== product.id,
  );
  return [...sameCategory, ...others].slice(0, limit);
}
