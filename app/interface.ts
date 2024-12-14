// A product includes a product sku, product name, images, price (in USD), reviews (maybe), sale percentage, description, category, material & care, measurements, origin.

export interface simplifiedProduct {
  _id: string;
  name: string;
  imageUrl: string;
  slug: string;
  price: number;
  sale: number;
  categoryNames: string[];
}

export interface fullProduct {
  _id: string;
  sku: string;
  name: string;
  images: { url: string; alt?: string }[];
  slug: string;
  price: number;
  sale: number;
  description: string;
  categoryNames: string[];
  material: string;
  measurements: string;
  origin: string;
}
